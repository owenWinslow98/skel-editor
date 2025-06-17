import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import { app } from 'electron';

class HttpServer {
  private server: http.Server | null = null;
  private port: number = 6387;
  private assetsPath: string;

  constructor() {
    // 获取 assets 目录的绝对路径
    this.assetsPath = path.join(app.getAppPath(), 'assets');
    console.log(`Assets path: ${this.assetsPath}`);
    
    // 检查目录是否存在
    if (!fs.existsSync(this.assetsPath)) {
      console.warn(`Assets directory does not exist: ${this.assetsPath}`);
      // 尝试创建目录
      try {
        fs.mkdirSync(this.assetsPath, { recursive: true });
        console.log(`Created assets directory: ${this.assetsPath}`);
      } catch (err) {
        console.error(`Failed to create assets directory: ${err}`);
      }
    }
  }

  /**
   * 启动 HTTP 服务器
   * @returns 返回服务器的基础 URL
   */
  async start(): Promise<string> {
    // 如果服务器已经启动，直接返回 URL
    if (this.server) {
      return `http://127.0.0.1:${this.port}`;
    }

    // 尝试启动服务器，如果端口被占用则尝试下一个端口
    return new Promise((resolve, reject) => {
      const tryStartServer = (port: number) => {
        const server = http.createServer((req, res) => this.handleRequest(req, res));
        
        server.on('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} is in use, trying ${port + 1}`);
            server.close();
            tryStartServer(port + 1);
          } else {
            reject(err);
          }
        });

        server.listen(port, '127.0.0.1', () => {
          this.server = server;
          this.port = port;
          console.log(`HTTP server started on http://127.0.0.1:${port}`);
          resolve(`http://127.0.0.1:${port}`);
        });
      };

      tryStartServer(this.port);
    });
  }

  /**
   * 停止 HTTP 服务器
   */
  stop(): Promise<void> {
    return new Promise((resolve) => {
      if (this.server) {
        this.server.close(() => {
          this.server = null;
          console.log('HTTP server stopped');
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  /**
   * 处理 HTTP 请求
   */
  private handleRequest(req: http.IncomingMessage, res: http.ServerResponse): void {
    // 始终设置 CORS 头，无论请求是否成功
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Range');
    
    // 处理 OPTIONS 请求（预检请求）
    if (req.method === 'OPTIONS') {
      res.statusCode = 204; // No content
      res.end();
      return;
    }
    
    // 解析请求 URL
    const parsedUrl = url.parse(req.url || '');
    let pathname = parsedUrl.pathname || '';
    
    // 处理根路径请求
    if (pathname === '/' || pathname === '') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end('<html><body><h1>Skel Editor HTTP Server</h1><p>Server is running.</p></body></html>');
      return;
    }
    
    // 移除前导斜杠，获取相对路径
    if (pathname.startsWith('/')) {
      pathname = pathname.slice(1);
    }
  
    // 构建文件的绝对路径
    const filePath = path.join(this.assetsPath, pathname);
  
    // 打印调试信息
    console.log(`Request for: ${pathname}`);
    console.log(`Looking for file: ${filePath}`);
  
    // 检查文件是否存在
    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        console.log(`File not found: ${filePath}`);
        res.statusCode = 404;
        res.end('File not found');
        return;
      }
  
      console.log(`Serving file: ${filePath}`);
      
      // 设置内容类型
      const ext = path.extname(filePath).toLowerCase();
      const contentType = this.getContentType(ext);
      res.setHeader('Content-Type', contentType);
  
      // 读取并发送文件
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    });
  }

  /**
   * 根据文件扩展名获取内容类型
   */
  private getContentType(ext: string): string {
    const contentTypes: Record<string, string> = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.txt': 'text/plain',
      '.atlas': 'text/plain',
      '.skel': 'application/octet-stream'
    };

    return contentTypes[ext] || 'application/octet-stream';
  }

  /**
   * 获取资源的 URL
   * @param relativePath 相对于 assets 目录的路径
   * @returns 完整的 HTTP URL
   */
  getAssetUrl(relativePath: string): string {
    return `http://127.0.0.1:${this.port}/${relativePath.replace(/\\/g, '/')}`;
  }

  /**
   * 获取当前服务器的基础 URL
   */
  getBaseUrl(): string {
    return `http://127.0.0.1:${this.port}`;
  }
}

// 创建单例
const httpServer = new HttpServer();

export default httpServer;