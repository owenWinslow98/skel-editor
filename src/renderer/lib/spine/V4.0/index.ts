import { Texture, TextureAtlas, Disposable, StringMap, TextureWrap, TextureFilter } from "./spine-core";

export * from "./spine-core";
export * from "./spine-canvas";


class AssetManagerBase implements Disposable {
	private pathPrefix: string = "";
	private textureLoader: (image: HTMLImageElement | ImageBitmap) => Texture;
	private downloader: IPCDownloader;
	private assets: StringMap<any> = {};
	private assetsRefCount: StringMap<number> = {};
	private assetsLoaded: StringMap<Promise<any>> = {};
	private errors: StringMap<string> = {};
	private toLoad = 0;
	private loaded = 0;

	constructor(textureLoader: (image: HTMLImageElement | ImageBitmap) => Texture, pathPrefix: string = "", downloader: IPCDownloader = new IPCDownloader()) {
		this.textureLoader = textureLoader;
		this.pathPrefix = pathPrefix;
		this.downloader = downloader;
	}

	private start(path: string): string {
		this.toLoad++;
		return this.pathPrefix + path;
	}

	private success(callback: (path: string, data: any) => void, path: string, asset: any) {
		this.toLoad--;
		this.loaded++;
		this.assets[path] = asset;
		this.assetsRefCount[path] = (this.assetsRefCount[path] || 0) + 1;
		if (callback) callback(path, asset);
	}

	private error(callback: (path: string, message: string) => void, path: string, message: string) {
		this.toLoad--;
		this.loaded++;
		this.errors[path] = message;
		if (callback) callback(path, message);
	}

	loadAll() {
		let promise = new Promise((resolve: (assetManager: AssetManagerBase) => void, reject: (errors: StringMap<string>) => void) => {
			let check = () => {
				if (this.isLoadingComplete()) {
					if (this.hasErrors()) reject(this.errors);
					else resolve(this);
					return;
				}
				requestAnimationFrame(check);
			}
			requestAnimationFrame(check);
		});
		return promise;
	}

	setRawDataURI(path: string, data: string) {
		this.downloader.rawDataUris[this.pathPrefix + path] = data;
	}

	loadBinary(path: string,
		success: (path: string, binary: Uint8Array) => void = () => { },
		error: (path: string, message: string) => void = () => { }) {
		path = this.start(path);

		if (this.reuseAssets(path, success, error)) return;

		this.assetsLoaded[path] = new Promise<any>((resolve, reject) => {
			this.downloader.downloadBinary(path, (data: Uint8Array): void => {
				this.success(success, path, data);
				resolve(data);
			}, (status: number, responseText: string): void => {
				const errorMsg = `Couldn't load binary ${path}: status ${status}, ${responseText}`;
				this.error(error, path, errorMsg);
				reject(errorMsg);
			});
		});
	}

	loadBinaryByAbsoluteUrl(path: string,
		success: (path: string, binary: Uint8Array) => void = () => { },
		error: (path: string, message: string) => void = () => { }) {
		if (this.reuseAssets(path, success, error)) return;

		this.assetsLoaded[path] = new Promise<any>((resolve, reject) => {
			this.downloader.downloadBinary(path, (data: Uint8Array): void => {
				this.success(success, path, data);
				resolve(data);
			}, (status: number, responseText: string): void => {
				const errorMsg = `Couldn't load binary ${path}: status ${status}, ${responseText}`;
				this.error(error, path, errorMsg);
				reject(errorMsg);
			});
		});
	}

	loadText(path: string,
		success: (path: string, text: string) => void = () => { },
		error: (path: string, message: string) => void = () => { }) {
		path = this.start(path);

		this.downloader.downloadText(path, (data: string): void => {
			this.success(success, path, data);
		}, (status: number, responseText: string): void => {
			this.error(error, path, `Couldn't load text ${path}: status ${status}, ${responseText}`);
		});
	}

	loadJson(path: string,
		success: (path: string, object: object) => void = () => { },
		error: (path: string, message: string) => void = () => { }) {
		path = this.start(path);

		if (this.reuseAssets(path, success, error)) return;

		this.assetsLoaded[path] = new Promise<any>((resolve, reject) => {
			this.downloader.downloadJson(path, (data: object): void => {
				this.success(success, path, data);
				resolve(data);
			}, (status: number, responseText: string): void => {
				const errorMsg = `Couldn't load JSON ${path}: status ${status}, ${responseText}`;
				this.error(error, path, errorMsg);
				reject(errorMsg);
			});
		});
	}

	reuseAssets(path: string,
		success: (path: string, data: any) => void = () => { },
		error: (path: string, message: string) => void = () => { }) {
		const loadedStatus = this.assetsLoaded[path];
		const alreadyExistsOrLoading = loadedStatus !== undefined;
		if (alreadyExistsOrLoading) {
			loadedStatus
				.then(data => this.success(success, path, data))
				.catch(errorMsg => this.error(error, path, errorMsg));
		}
		return alreadyExistsOrLoading;
	}

	loadTexture(path: string,
		success: (path: string, texture: Texture) => void = () => { },
		error: (path: string, message: string) => void = () => { }) {

		path = this.start(path);
		if (this.reuseAssets(path, success, error)) return;
		this.assetsLoaded[path] = new Promise<any>((resolve, reject) => {
			let isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
			let isWebWorker = !isBrowser; // && typeof importScripts !== 'undefined';
			if (isWebWorker) {
				fetch(path, { mode: <RequestMode>"cors" }).then((response) => {
					if (response.ok) return response.blob();
					const errorMsg = `Couldn't load image: ${path}`;
					this.error(error, path, `Couldn't load image: ${path}`);
					reject(errorMsg);
				}).then((blob) => {
					return blob ? createImageBitmap(blob, { premultiplyAlpha: "none", colorSpaceConversion: "none" }) : null;
				}).then((bitmap) => {
					if (bitmap) {
						const texture = this.textureLoader(bitmap)
						this.success(success, path, texture);
						resolve(texture);
					};
				});
			} else {
				let image = new Image();
				const namePath = path;
				image.crossOrigin = "anonymous";
				image.onload = () => {
					const texture = this.textureLoader(image)
					this.success(success, namePath, texture);
					resolve(texture);
				};
				image.onerror = () => {
					const errorMsg = `Couldn't load image: ${path}`;
					this.error(error, namePath, errorMsg);
					reject(errorMsg);
				};
				
				if (this.downloader.rawDataUris[path]) path = this.downloader.rawDataUris[path];
				image.src = path;
				
			}
		});
	}


	loadTextureAtlas(path: string,
		success: (path: string, atlas: TextureAtlas) => void = () => { },
		error: (path: string, message: string) => void = () => { },
		fileAlias?: { [keyword: string]: string }
	) {
		let index = path.lastIndexOf("/");
		let parent = index >= 0 ? path.substring(0, index + 1) : "";
		path = this.start(path);

		if (this.reuseAssets(path, success, error)) return;
		
		this.assetsLoaded[path] = new Promise<any>((resolve, reject) => {
			this.downloader.downloadText(path, (atlasText: string): void => {
				try {
					let atlas = new TextureAtlas(atlasText);
					let toLoad = atlas.pages.length, abort = false;
					for (let page of atlas.pages) {
						this.loadTexture(!fileAlias ? parent + page.name : fileAlias[page.name!],
							(imagePath: string, texture: Texture) => {
								if (!abort) {
									page.setTexture(texture);
									if (--toLoad == 0) {
										this.success(success, path, atlas);
										resolve(atlas);
									}
								}
							},
							(imagePath: string, message: string) => {
								if (!abort) {
									const errorMsg = `Couldn't load texture atlas ${path} page image: ${imagePath}`;
									this.error(error, path, errorMsg);
									reject(errorMsg);
								}
								abort = true;
							}
						);
					}
				} catch (e) {
					const errorMsg = `Couldn't parse texture atlas ${path}: ${(e as any).message}`;
					this.error(error, path, errorMsg);
					reject(errorMsg);
				}
			}, (status: number, responseText: string): void => {
				const errorMsg = `Couldn't load texture atlas ${path}: status ${status}, ${responseText}`;
				this.error(error, path, errorMsg);
				reject(errorMsg);
			});
		});
	}

	loadTextureAtlasButNoTextures(path: string,
		success: (path: string, atlas: TextureAtlas) => void = () => { },
		error: (path: string, message: string) => void = () => { },
		fileAlias?: { [keyword: string]: string }
	) {
		path = this.start(path);

		if (this.reuseAssets(path, success, error)) return;

		this.assetsLoaded[path] = new Promise<any>((resolve, reject) => {
			this.downloader.downloadText(path, (atlasText: string): void => {
				try {
					const atlas = new TextureAtlas(atlasText);
					this.success(success, path, atlas);
					resolve(atlas);
				} catch (e) {
					const errorMsg = `Couldn't parse texture atlas ${path}: ${(e as any).message}`;
					this.error(error, path, errorMsg);
					reject(errorMsg);
				}
			}, (status: number, responseText: string): void => {
				const errorMsg = `Couldn't load texture atlas ${path}: status ${status}, ${responseText}`;
				this.error(error, path, errorMsg);
				reject(errorMsg);
			});
		});
	}

	// Promisified versions of load function
	async loadBinaryAsync(path: string) {
		return new Promise((resolve, reject) => {
			this.loadBinary(path,
				(_, binary) => resolve(binary),
				(_, message) => reject(message),
			);
		});
	}

	async loadJsonAsync(path: string) {
		return new Promise((resolve, reject) => {
			this.loadJson(path,
				(_, object) => resolve(object),
				(_, message) => reject(message),
			);
		});
	}

	async loadTextureAsync(path: string) {
		return new Promise<Texture>((resolve, reject) => {
			this.loadTexture(path,
				(_, texture) => resolve(texture),
				(_, message) => reject(message),
			);
		});
	}

	async loadTextureAtlasAsync(path: string) {
		return new Promise((resolve, reject) => {
			this.loadTextureAtlas(path,
				(_, atlas) => resolve(atlas),
				(_, message) => reject(message),
			);
		});
	}

	async loadTextureAtlasButNoTexturesAsync(path: string) {
		return new Promise<TextureAtlas>((resolve, reject) => {
			this.loadTextureAtlasButNoTextures(path,
				(_, atlas) => resolve(atlas),
				(_, message) => reject(message),
			);
		});
	}

	get(path: string) {
		return this.assets[this.pathPrefix + path];
	}

	require(path: string) {
		path = this.pathPrefix + path;
		let asset = this.assets[path];
		if (asset) return asset;
		let error = this.errors[path];
		throw Error("Asset not found: " + path + (error ? "\n" + error : ""));
	}

	remove(path: string) {
		path = this.pathPrefix + path;
		let asset = this.assets[path];
		if (asset.dispose) asset.dispose();
		delete this.assets[path];
		delete this.assetsRefCount[path];
		delete this.assetsLoaded[path];
		return asset;
	}

	removeAll() {
		for (let path in this.assets) {
			let asset = this.assets[path];
			if (asset.dispose) asset.dispose();
		}
		this.assets = {};
		this.assetsLoaded = {};
		this.assetsRefCount = {};
	}

	isLoadingComplete(): boolean {
		return this.toLoad == 0;
	}

	getToLoad(): number {
		return this.toLoad;
	}

	getLoaded(): number {
		return this.loaded;
	}

	dispose() {
		this.removeAll();
	}

	// dispose asset only if it's not used by others
	disposeAsset(path: string) {
		if (--this.assetsRefCount[path] === 0) {
			this.remove(path)
		}
	}

	hasErrors() {
		return Object.keys(this.errors).length > 0;
	}

	getErrors() {
		return this.errors;
	}
}
class CanvasTexture extends Texture {
	constructor(image: HTMLImageElement | ImageBitmap) {
		super(image);
	}

	setFilters(minFilter: TextureFilter, magFilter: TextureFilter) { }
	setWraps(uWrap: TextureWrap, vWrap: TextureWrap) { }
	dispose() { }
}
export class IPCDownloader {
	private callbacks: StringMap<Array<Function>> = {};
	rawDataUris: StringMap<string> = {};

	dataUriToString(dataUri: string) {
		if (!dataUri.startsWith("data:")) {
			throw new Error("Not a data URI.");
		}

		let base64Idx = dataUri.indexOf("base64,");
		if (base64Idx != -1) {
			base64Idx += "base64,".length;
			return atob(dataUri.substr(base64Idx));
		} else {
			return dataUri.substr(dataUri.indexOf(",") + 1);
		}
	}
	async blobUrlToString(blobUrl: string): Promise<string> {
		try {
		  // 获取 Blob 对象
		  const response = await fetch(blobUrl);
		  
		  // 检查响应是否成功
		  if (!response.ok) {
			throw new Error(`Failed to fetch blob: ${response.status} ${response.statusText}`);
		  }
		  
		  // 将 Blob 转换为文本
		  const text = await response.text();
		  return text;
		} catch (error) {
		  console.error("Error converting blob URL to string:", error);
		  throw error;
		}
	  }
	base64ToUint8Array(base64: string) {
		var binary_string = window.atob(base64);
		var len = binary_string.length;
		var bytes = new Uint8Array(len);
		for (var i = 0; i < len; i++) {
			bytes[i] = binary_string.charCodeAt(i);
		}
		return bytes;
	}
	async blobUrlToUint8Array(blobUrl: string) {
		try {
			// 获取 Blob
			const response = await fetch(blobUrl);
			const blob = await response.blob();
			
			// 将 Blob 转换为 ArrayBuffer
			const arrayBuffer = await blob.arrayBuffer();
			
			// 将 ArrayBuffer 转换为 Uint8Array
			return new Uint8Array(arrayBuffer);
		  } catch (error) {
			console.error("Error converting Blob URL to Uint8Array:", error);
			throw error;
		  }
	}
	dataUriToUint8Array(dataUri: string) {
		if (!dataUri.startsWith("data:")) {
			throw new Error("Not a data URI.");
		}

		let base64Idx = dataUri.indexOf("base64,");
		if (base64Idx == -1) throw new Error("Not a binary data URI.");
		base64Idx += "base64,".length;
		return this.base64ToUint8Array(dataUri.substr(base64Idx));
	}

	async downloadText(url: string, success: (data: string) => void, error: (status: number, responseText: string) => void) {
		if (this.start(url, success, error)) return;

		const rawDataUri = this.rawDataUris[url];
		// we assume if a "." is included in a raw data uri, it is used to rewrite an asset URL
		if (rawDataUri && !rawDataUri.includes(".")) {
			try {
				this.finish(url, 200, await this.blobUrlToString(rawDataUri));
			} catch (e) {
				this.finish(url, 400, JSON.stringify(e));
			}
			return;
		}

		let request = new XMLHttpRequest();
		request.overrideMimeType("text/html");
		request.open("GET", rawDataUri ? rawDataUri : url, true);
		let done = () => {
			this.finish(url, request.status, request.responseText);
		};
		request.onload = done;
		request.onerror = done;
		request.send();
	}

	downloadJson(url: string, success: (data: object) => void, error: (status: number, responseText: string) => void) {
		this.downloadText(url, (data: string): void => {
			success(JSON.parse(data));
		}, error);
	}

	async downloadBinary(url: string, success: (data: Uint8Array) => void, error: (status: number, responseText: string) => void) {
		if (this.start(url, success, error)) return;

		const rawDataUri = this.rawDataUris[url];
		// we assume if a "." is included in a raw data uri, it is used to rewrite an asset URL
		if (rawDataUri && !rawDataUri.includes(".")) {
			try {
				const data = await this.blobUrlToUint8Array(rawDataUri);
				this.finish(url, 200, data);
			} catch (e) {
				this.finish(url, 400, JSON.stringify(e));
			}
			return;
		}
		let request = new XMLHttpRequest();
		request.open("GET", rawDataUri ? rawDataUri : url, true);
		request.responseType = "arraybuffer";
		let onerror = () => {
			this.finish(url, request.status, request.response);
		};
		request.onload = () => {
			if (request.status == 200 || request.status == 0)
				this.finish(url, 200, new Uint8Array(request.response as ArrayBuffer));
			else
				onerror();
		};
		request.onerror = onerror;
		request.send();
	}

	private start(url: string, success: any, error: any) {
		let callbacks = this.callbacks[url];
		try {
			if (callbacks) return true;
			this.callbacks[url] = callbacks = [];
		} finally {
			callbacks.push(success, error);
		}
	}

	private finish(url: string, status: number, data: any) {
		let callbacks = this.callbacks[url];
		delete this.callbacks[url];
		let args = status == 200 || status == 0 ? [data] : [status, data];
		for (let i = args.length - 1, n = callbacks.length; i < n; i += 2)
			callbacks[i].apply(null, args);
	}
}
export class AssetManager extends AssetManagerBase {
	constructor(pathPrefix: string = "", downloader: IPCDownloader = new IPCDownloader()) {
		super((image: HTMLImageElement | ImageBitmap) => { return new CanvasTexture(image); }, pathPrefix, downloader);
	}
}
