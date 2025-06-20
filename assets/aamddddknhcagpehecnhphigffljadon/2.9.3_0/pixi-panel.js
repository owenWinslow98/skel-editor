"use strict";
(() => {
  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/version.js
  var PUBLIC_VERSION = "5";

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/disclose-version.js
  if (typeof window !== "undefined") {
    ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(PUBLIC_VERSION);
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/constants.js
  var EACH_ITEM_REACTIVE = 1;
  var EACH_INDEX_REACTIVE = 1 << 1;
  var EACH_IS_CONTROLLED = 1 << 2;
  var EACH_IS_ANIMATED = 1 << 3;
  var EACH_ITEM_IMMUTABLE = 1 << 4;
  var PROPS_IS_IMMUTABLE = 1;
  var PROPS_IS_RUNES = 1 << 1;
  var PROPS_IS_UPDATED = 1 << 2;
  var PROPS_IS_BINDABLE = 1 << 3;
  var PROPS_IS_LAZY_INITIAL = 1 << 4;
  var TRANSITION_IN = 1;
  var TRANSITION_OUT = 1 << 1;
  var TRANSITION_GLOBAL = 1 << 2;
  var TEMPLATE_FRAGMENT = 1;
  var TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  var HYDRATION_START = "[";
  var HYDRATION_START_ELSE = "[!";
  var HYDRATION_END = "]";
  var HYDRATION_ERROR = {};
  var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
  var UNINITIALIZED = Symbol();
  var FILENAME = Symbol("filename");
  var HMR = Symbol("hmr");
  var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";

  // ../../node_modules/.pnpm/esm-env@1.2.2/node_modules/esm-env/true.js
  var true_default = true;

  // ../../node_modules/.pnpm/esm-env@1.2.2/node_modules/esm-env/dev-fallback.js
  var node_env = globalThis.process?.env?.NODE_ENV;
  var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/shared/errors.js
  function lifecycle_outside_component(name) {
    if (dev_fallback_default) {
      const error = new Error(`lifecycle_outside_component
\`${name}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/shared/utils.js
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var array_from = Array.from;
  var object_keys = Object.keys;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  var is_extensible = Object.isExtensible;
  function is_function(thing) {
    return typeof thing === "function";
  }
  var noop = () => {
  };
  function run(fn) {
    return fn();
  }
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/constants.js
  var DERIVED = 1 << 1;
  var EFFECT = 1 << 2;
  var RENDER_EFFECT = 1 << 3;
  var BLOCK_EFFECT = 1 << 4;
  var BRANCH_EFFECT = 1 << 5;
  var ROOT_EFFECT = 1 << 6;
  var BOUNDARY_EFFECT = 1 << 7;
  var UNOWNED = 1 << 8;
  var DISCONNECTED = 1 << 9;
  var CLEAN = 1 << 10;
  var DIRTY = 1 << 11;
  var MAYBE_DIRTY = 1 << 12;
  var INERT = 1 << 13;
  var DESTROYED = 1 << 14;
  var EFFECT_RAN = 1 << 15;
  var EFFECT_TRANSPARENT = 1 << 16;
  var LEGACY_DERIVED_PROP = 1 << 17;
  var INSPECT_EFFECT = 1 << 18;
  var HEAD_EFFECT = 1 << 19;
  var EFFECT_HAS_DERIVED = 1 << 20;
  var EFFECT_IS_UPDATING = 1 << 21;
  var STATE_SYMBOL = Symbol("$state");
  var LEGACY_PROPS = Symbol("legacy props");
  var LOADING_ATTR_SYMBOL = Symbol("");

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/errors.js
  function bind_invalid_checkbox_value() {
    if (dev_fallback_default) {
      const error = new Error(`bind_invalid_checkbox_value
Using \`bind:value\` together with a checkbox input is not allowed. Use \`bind:checked\` instead
https://svelte.dev/e/bind_invalid_checkbox_value`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/bind_invalid_checkbox_value`);
    }
  }
  function derived_references_self() {
    if (dev_fallback_default) {
      const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/derived_references_self`);
    }
  }
  function effect_in_teardown(rune) {
    if (dev_fallback_default) {
      const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }
  function effect_in_unowned_derived() {
    if (dev_fallback_default) {
      const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }
  function effect_orphan(rune) {
    if (dev_fallback_default) {
      const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }
  function effect_update_depth_exceeded() {
    if (dev_fallback_default) {
      const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
https://svelte.dev/e/effect_update_depth_exceeded`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function hydration_failed() {
    if (dev_fallback_default) {
      const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/hydration_failed`);
    }
  }
  function invalid_snippet() {
    if (dev_fallback_default) {
      const error = new Error(`invalid_snippet
Could not \`{@render}\` snippet due to the expression being \`null\` or \`undefined\`. Consider using optional chaining \`{@render snippet?.()}\`
https://svelte.dev/e/invalid_snippet`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/invalid_snippet`);
    }
  }
  function props_invalid_value(key) {
    if (dev_fallback_default) {
      const error = new Error(`props_invalid_value
Cannot do \`bind:${key}={undefined}\` when \`${key}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/props_invalid_value`);
    }
  }
  function rune_outside_svelte(rune) {
    if (dev_fallback_default) {
      const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
    }
  }
  function state_descriptors_fixed() {
    if (dev_fallback_default) {
      const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }
  function state_prototype_fixed() {
    if (dev_fallback_default) {
      const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }
  function state_unsafe_mutation() {
    if (dev_fallback_default) {
      const error = new Error(`state_unsafe_mutation
Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/warnings.js
  var bold = "font-weight: bold";
  var normal = "font-weight: normal";
  function hydration_attribute_changed(attribute, html2, value) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
    }
  }
  function hydration_mismatch(location) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/hydration_mismatch`);
    }
  }
  function lifecycle_double_unmount() {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
    }
  }
  function state_proxy_equality_mismatch(operator) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
    }
  }
  function transition_slide_display(value) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] transition_slide_display
%cThe \`slide\` transition does not work correctly for elements with \`display: ${value}\`
https://svelte.dev/e/transition_slide_display`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/transition_slide_display`);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/hydration.js
  var hydrating = false;
  function set_hydrating(value) {
    hydrating = value;
  }
  var hydrate_node;
  function set_hydrate_node(node) {
    if (node === null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return hydrate_node = node;
  }
  function hydrate_next() {
    return set_hydrate_node(
      /** @type {TemplateNode} */
      get_next_sibling(hydrate_node)
    );
  }
  function reset(node) {
    if (!hydrating) return;
    if (get_next_sibling(hydrate_node) !== null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    hydrate_node = node;
  }
  function next(count = 1) {
    if (hydrating) {
      var i = count;
      var node = hydrate_node;
      while (i--) {
        node = /** @type {TemplateNode} */
        get_next_sibling(node);
      }
      hydrate_node = node;
    }
  }
  function remove_nodes() {
    var depth = 0;
    var node = hydrate_node;
    while (true) {
      if (node.nodeType === 8) {
        var data = (
          /** @type {Comment} */
          node.data
        );
        if (data === HYDRATION_END) {
          if (depth === 0) return node;
          depth -= 1;
        } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE) {
          depth += 1;
        }
      }
      var next2 = (
        /** @type {TemplateNode} */
        get_next_sibling(node)
      );
      node.remove();
      node = next2;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dev/tracing.js
  var tracing_expressions = null;
  function get_stack(label) {
    let error = Error();
    const stack2 = error.stack;
    if (stack2) {
      const lines = stack2.split("\n");
      const new_lines = ["\n"];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line === "Error") {
          continue;
        }
        if (line.includes("validate_each_keys")) {
          return null;
        }
        if (line.includes("svelte/src/internal")) {
          continue;
        }
        new_lines.push(line);
      }
      if (new_lines.length === 1) {
        return null;
      }
      define_property(error, "stack", {
        value: new_lines.join("\n")
      });
      define_property(error, "name", {
        // 'Error' suffix is required for stack traces to be rendered properly
        value: `${label}Error`
      });
    }
    return error;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/flags/index.js
  var legacy_mode_flag = false;
  var tracing_mode_flag = false;
  function enable_legacy_mode_flag() {
    legacy_mode_flag = true;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/proxy.js
  function proxy(value) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version = state(0);
    var stack2 = dev_fallback_default && tracing_mode_flag ? get_stack("CreatedAt") : null;
    var reaction = active_reaction;
    var with_parent = (fn) => {
      var previous_reaction = active_reaction;
      set_active_reaction(reaction);
      var result = fn();
      set_active_reaction(previous_reaction);
      return result;
    };
    if (is_proxied_array) {
      sources.set("length", state(
        /** @type {any[]} */
        value.length,
        stack2
      ));
    }
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            s = with_parent(() => state(descriptor.value, stack2));
            sources.set(prop2, s);
          } else {
            set(
              s,
              with_parent(() => proxy(descriptor.value))
            );
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              sources.set(
                prop2,
                with_parent(() => state(UNINITIALIZED, stack2))
              );
              update_version(version);
            }
          } else {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n < ls.v) {
                set(ls, n);
              }
            }
            set(s, UNINITIALIZED);
            update_version(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
            s = with_parent(() => state(proxy(exists ? target[prop2] : UNINITIALIZED), stack2));
            sources.set(prop2, s);
          }
          if (s !== void 0) {
            var v = get(s);
            return v === UNINITIALIZED ? void 0 : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor && "value" in descriptor) {
            var s = sources.get(prop2);
            if (s) descriptor.value = get(s);
          } else if (descriptor === void 0) {
            var source2 = sources.get(prop2);
            var value2 = source2?.v;
            if (source2 !== void 0 && value2 !== UNINITIALIZED) {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
            if (s === void 0) {
              s = with_parent(() => state(has ? proxy(target[prop2]) : UNINITIALIZED, stack2));
              sources.set(prop2, s);
            }
            var value2 = get(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = with_parent(() => state(UNINITIALIZED, stack2));
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === void 0) {
            if (!has || get_descriptor(target, prop2)?.writable) {
              s = with_parent(() => state(void 0, stack2));
              set(
                s,
                with_parent(() => proxy(value2))
              );
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            set(
              s,
              with_parent(() => proxy(value2))
            );
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor?.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            update_version(version);
          }
          return true;
        },
        ownKeys(target) {
          get(version);
          var own_keys = Reflect.ownKeys(target).filter((key2) => {
            var source3 = sources.get(key2);
            return source3 === void 0 || source3.v !== UNINITIALIZED;
          });
          for (var [key, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key in target)) {
              own_keys.push(key);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  function update_version(signal, d = 1) {
    set(signal, signal.v + d);
  }
  function get_proxied_value(value) {
    try {
      if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
        return value[STATE_SYMBOL];
      }
    } catch {
    }
    return value;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dev/equality.js
  function init_array_prototype_warnings() {
    const array_prototype2 = Array.prototype;
    const cleanup = Array.__svelte_cleanup;
    if (cleanup) {
      cleanup();
    }
    const { indexOf, lastIndexOf, includes } = array_prototype2;
    array_prototype2.indexOf = function(item, from_index) {
      const index2 = indexOf.call(this, item, from_index);
      if (index2 === -1) {
        for (let i = from_index ?? 0; i < this.length; i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.indexOf(...)");
            break;
          }
        }
      }
      return index2;
    };
    array_prototype2.lastIndexOf = function(item, from_index) {
      const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
      if (index2 === -1) {
        for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.lastIndexOf(...)");
            break;
          }
        }
      }
      return index2;
    };
    array_prototype2.includes = function(item, from_index) {
      const has = includes.call(this, item, from_index);
      if (!has) {
        for (let i = 0; i < this.length; i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.includes(...)");
            break;
          }
        }
      }
      return has;
    };
    Array.__svelte_cleanup = () => {
      array_prototype2.indexOf = indexOf;
      array_prototype2.lastIndexOf = lastIndexOf;
      array_prototype2.includes = includes;
    };
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/operations.js
  var $window;
  var $document;
  var is_firefox;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    $document = document;
    is_firefox = /Firefox/.test(navigator.userAgent);
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    var text_prototype = Text.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    if (is_extensible(element_prototype)) {
      element_prototype.__click = void 0;
      element_prototype.__className = void 0;
      element_prototype.__attributes = null;
      element_prototype.__style = void 0;
      element_prototype.__e = void 0;
    }
    if (is_extensible(text_prototype)) {
      text_prototype.__t = void 0;
    }
    if (dev_fallback_default) {
      element_prototype.__svelte_meta = null;
      init_array_prototype_warnings();
    }
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return first_child_getter.call(node);
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return next_sibling_getter.call(node);
  }
  function child(node, is_text) {
    if (!hydrating) {
      return /* @__PURE__ */ get_first_child(node);
    }
    var child2 = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_first_child(hydrate_node)
    );
    if (child2 === null) {
      child2 = hydrate_node.appendChild(create_text());
    } else if (is_text && child2.nodeType !== 3) {
      var text2 = create_text();
      child2?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    set_hydrate_node(child2);
    return child2;
  }
  function first_child(fragment, is_text) {
    if (!hydrating) {
      var first = (
        /** @type {DocumentFragment} */
        /* @__PURE__ */ get_first_child(
          /** @type {Node} */
          fragment
        )
      );
      if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
      return first;
    }
    if (is_text && hydrate_node?.nodeType !== 3) {
      var text2 = create_text();
      hydrate_node?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    return hydrate_node;
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = hydrating ? hydrate_node : node;
    var last_sibling;
    while (count--) {
      last_sibling = next_sibling;
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    if (!hydrating) {
      return next_sibling;
    }
    var type = next_sibling?.nodeType;
    if (is_text && type !== 3) {
      var text2 = create_text();
      if (next_sibling === null) {
        last_sibling?.after(text2);
      } else {
        next_sibling.before(text2);
      }
      set_hydrate_node(text2);
      return text2;
    }
    set_hydrate_node(next_sibling);
    return (
      /** @type {TemplateNode} */
      next_sibling
    );
  }
  function clear_text_content(node) {
    node.textContent = "";
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/reactivity/equality.js
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/reactivity/deriveds.js
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags = DERIVED | DIRTY;
    var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
      /** @type {Derived} */
      active_reaction
    ) : null;
    if (active_effect === null || parent_derived !== null && (parent_derived.f & UNOWNED) !== 0) {
      flags |= UNOWNED;
    } else {
      active_effect.f |= EFFECT_HAS_DERIVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        null
      ),
      wv: 0,
      parent: parent_derived ?? active_effect
    };
    if (dev_fallback_default && tracing_mode_flag) {
      signal.created = get_stack("CreatedAt");
    }
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function user_derived(fn) {
    const d = /* @__PURE__ */ derived(fn);
    push_reaction_value(d);
    return d;
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_effects(derived3) {
    var effects = derived3.effects;
    if (effects !== null) {
      derived3.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
          /** @type {Effect} */
          effects[i]
        );
      }
    }
  }
  var stack = [];
  function get_derived_parent_effect(derived3) {
    var parent = derived3.parent;
    while (parent !== null) {
      if ((parent.f & DERIVED) === 0) {
        return (
          /** @type {Effect} */
          parent
        );
      }
      parent = parent.parent;
    }
    return null;
  }
  function execute_derived(derived3) {
    var value;
    var prev_active_effect = active_effect;
    set_active_effect(get_derived_parent_effect(derived3));
    if (dev_fallback_default) {
      let prev_inspect_effects = inspect_effects;
      set_inspect_effects(/* @__PURE__ */ new Set());
      try {
        if (stack.includes(derived3)) {
          derived_references_self();
        }
        stack.push(derived3);
        destroy_derived_effects(derived3);
        value = update_reaction(derived3);
      } finally {
        set_active_effect(prev_active_effect);
        set_inspect_effects(prev_inspect_effects);
        stack.pop();
      }
    } else {
      try {
        destroy_derived_effects(derived3);
        value = update_reaction(derived3);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived3) {
    var value = execute_derived(derived3);
    var status = (skip_reaction || (derived3.f & UNOWNED) !== 0) && derived3.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived3, status);
    if (!derived3.equals(value)) {
      derived3.v = value;
      derived3.wv = increment_write_version();
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/reactivity/effects.js
  function validate_effect(rune) {
    if (active_effect === null && active_reaction === null) {
      effect_orphan(rune);
    }
    if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0 && active_effect === null) {
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown(rune);
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn, sync, push2 = true) {
    var parent = active_effect;
    if (dev_fallback_default) {
      while (parent !== null && (parent.f & INSPECT_EFFECT) !== 0) {
        parent = parent.parent;
      }
    }
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: type | DIRTY,
      first: null,
      fn,
      last: null,
      next: null,
      parent,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0
    };
    if (dev_fallback_default) {
      effect2.component_function = dev_current_component_function;
    }
    if (sync) {
      try {
        update_effect(effect2);
        effect2.f |= EFFECT_RAN;
      } catch (e) {
        destroy_effect(effect2);
        throw e;
      }
    } else if (fn !== null) {
      schedule_effect(effect2);
    }
    var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
    if (!inert && push2) {
      if (parent !== null) {
        push_effect(effect2, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
        var derived3 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived3.effects ??= []).push(effect2);
      }
    }
    return effect2;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null, false);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect("$effect");
    var defer = active_effect !== null && (active_effect.f & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.m;
    if (dev_fallback_default) {
      define_property(fn, "name", {
        value: "$effect"
      });
    }
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ??= []).push({
        fn,
        effect: active_effect,
        reaction: active_reaction
      });
    } else {
      var signal = effect(fn);
      return signal;
    }
  }
  function user_pre_effect(fn) {
    validate_effect("$effect.pre");
    if (dev_fallback_default) {
      define_property(fn, "name", {
        value: "$effect.pre"
      });
    }
    return render_effect(fn);
  }
  function effect_root(fn) {
    const effect2 = create_effect(ROOT_EFFECT, fn, true);
    return () => {
      destroy_effect(effect2);
    };
  }
  function component_root(fn) {
    const effect2 = create_effect(ROOT_EFFECT, fn, true);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn, false);
  }
  function render_effect(fn) {
    return create_effect(RENDER_EFFECT, fn, true);
  }
  function template_effect(fn, thunks = [], d = derived) {
    const deriveds = thunks.map(d);
    const effect2 = () => fn(...deriveds.map(get));
    if (dev_fallback_default) {
      define_property(effect2, "name", {
        value: "{expression}"
      });
    }
    return block(effect2);
  }
  function block(fn, flags = 0) {
    return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
  }
  function branch(fn, push2 = true) {
    return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      var next2 = effect2.next;
      if ((effect2.f & ROOT_EFFECT) !== 0) {
        effect2.parent = null;
      } else {
        destroy_effect(effect2, remove_dom);
      }
      effect2 = next2;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next2 = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next2;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
      remove_effect_dom(
        effect2.nodes_start,
        /** @type {TemplateNode} */
        effect2.nodes_end
      );
      removed = true;
    }
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    set_signal_status(effect2, DESTROYED);
    var transitions = effect2.transitions;
    if (transitions !== null) {
      for (const transition2 of transitions) {
        transition2.stop();
      }
    }
    execute_effect_teardown(effect2);
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    if (dev_fallback_default) {
      effect2.component_function = null;
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
  }
  function remove_effect_dom(node, end) {
    while (node !== null) {
      var next2 = node === end ? null : (
        /** @type {TemplateNode} */
        get_next_sibling(node)
      );
      node.remove();
      node = next2;
    }
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next2 = effect2.next;
    if (prev !== null) prev.next = next2;
    if (next2 !== null) next2.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next2;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    run_out_transitions(transitions, () => {
      destroy_effect(effect2);
      if (callback) callback();
    });
  }
  function run_out_transitions(transitions, fn) {
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition2 of transitions) {
        transition2.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    if (effect2.transitions !== null) {
      for (const transition2 of effect2.transitions) {
        if (transition2.is_global || local) {
          transitions.push(transition2);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      effect2.f ^= CLEAN;
    }
    if (check_dirtiness(effect2)) {
      set_signal_status(effect2, DIRTY);
      schedule_effect(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    if (effect2.transitions !== null) {
      for (const transition2 of effect2.transitions) {
        if (transition2.is_global || local) {
          transition2.in();
        }
      }
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/task.js
  var request_idle_callback = typeof requestIdleCallback === "undefined" ? (cb) => setTimeout(cb, 1) : requestIdleCallback;
  var micro_tasks = [];
  var idle_tasks = [];
  function run_micro_tasks() {
    var tasks = micro_tasks;
    micro_tasks = [];
    run_all(tasks);
  }
  function run_idle_tasks() {
    var tasks = idle_tasks;
    idle_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (micro_tasks.length === 0) {
      queueMicrotask(run_micro_tasks);
    }
    micro_tasks.push(fn);
  }
  function queue_idle_task(fn) {
    if (idle_tasks.length === 0) {
      request_idle_callback(run_idle_tasks);
    }
    idle_tasks.push(fn);
  }
  function flush_tasks() {
    if (micro_tasks.length > 0) {
      run_micro_tasks();
    }
    if (idle_tasks.length > 0) {
      run_idle_tasks();
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/runtime.js
  var handled_errors = /* @__PURE__ */ new WeakSet();
  var is_throwing_error = false;
  var is_flushing = false;
  var last_scheduled_effect = null;
  var is_updating_effect = false;
  var is_destroying_effect = false;
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  var queued_root_effects = [];
  var dev_effect_stack = [];
  var active_reaction = null;
  var untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  var active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  var reaction_sources = null;
  function push_reaction_value(value) {
    if (active_reaction !== null && active_reaction.f & EFFECT_IS_UPDATING) {
      if (reaction_sources === null) {
        reaction_sources = [value];
      } else {
        reaction_sources.push(value);
      }
    }
  }
  var new_deps = null;
  var skipped_deps = 0;
  var untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  var write_version = 1;
  var read_version = 0;
  var skip_reaction = false;
  var captured_signals = null;
  function increment_write_version() {
    return ++write_version;
  }
  function check_dirtiness(reaction) {
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) {
      return true;
    }
    if ((flags & MAYBE_DIRTY) !== 0) {
      var dependencies = reaction.deps;
      var is_unowned = (flags & UNOWNED) !== 0;
      if (dependencies !== null) {
        var i;
        var dependency;
        var is_disconnected = (flags & DISCONNECTED) !== 0;
        var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
        var length = dependencies.length;
        if (is_disconnected || is_unowned_connected) {
          var derived3 = (
            /** @type {Derived} */
            reaction
          );
          var parent = derived3.parent;
          for (i = 0; i < length; i++) {
            dependency = dependencies[i];
            if (is_disconnected || !dependency?.reactions?.includes(derived3)) {
              (dependency.reactions ??= []).push(derived3);
            }
          }
          if (is_disconnected) {
            derived3.f ^= DISCONNECTED;
          }
          if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
            derived3.f ^= UNOWNED;
          }
        }
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (check_dirtiness(
            /** @type {Derived} */
            dependency
          )) {
            update_derived(
              /** @type {Derived} */
              dependency
            );
          }
          if (dependency.wv > reaction.wv) {
            return true;
          }
        }
      }
      if (!is_unowned || active_effect !== null && !skip_reaction) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function propagate_error(error, effect2) {
    var current = effect2;
    while (current !== null) {
      if ((current.f & BOUNDARY_EFFECT) !== 0) {
        try {
          current.fn(error);
          return;
        } catch {
          current.f ^= BOUNDARY_EFFECT;
        }
      }
      current = current.parent;
    }
    is_throwing_error = false;
    throw error;
  }
  function should_rethrow_error(effect2) {
    return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
  }
  function handle_error(error, effect2, previous_effect, component_context2) {
    if (is_throwing_error) {
      if (previous_effect === null) {
        is_throwing_error = false;
      }
      if (should_rethrow_error(effect2)) {
        throw error;
      }
      return;
    }
    if (previous_effect !== null) {
      is_throwing_error = true;
    }
    if (dev_fallback_default && component_context2 !== null && error instanceof Error && !handled_errors.has(error)) {
      handled_errors.add(error);
      const component_stack = [];
      const effect_name = effect2.fn?.name;
      if (effect_name) {
        component_stack.push(effect_name);
      }
      let current_context = component_context2;
      while (current_context !== null) {
        var filename = current_context.function?.[FILENAME];
        if (filename) {
          const file = filename.split("/").pop();
          component_stack.push(file);
        }
        current_context = current_context.p;
      }
      const indent = is_firefox ? "  " : "	";
      define_property(error, "message", {
        value: error.message + `
${component_stack.map((name) => `
${indent}in ${name}`).join("")}
`
      });
      define_property(error, "component_stack", {
        value: component_stack
      });
      const stack2 = error.stack;
      if (stack2) {
        const lines = stack2.split("\n");
        const new_lines = [];
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.includes("svelte/src/internal")) {
            continue;
          }
          new_lines.push(line);
        }
        define_property(error, "stack", {
          value: new_lines.join("\n")
        });
      }
    }
    propagate_error(error, effect2);
    if (should_rethrow_error(effect2)) {
      throw error;
    }
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, root20 = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if (reaction_sources?.includes(signal)) continue;
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          false
        );
      } else if (effect2 === reaction) {
        if (root20) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_skip_reaction = skip_reaction;
    var previous_reaction_sources = reaction_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var flags = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    skip_reaction = (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
    active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    reaction_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    read_version++;
    reaction.f |= EFFECT_IS_UPDATING;
    try {
      var result = (
        /** @type {Function} */
        (0, reaction.fn)()
      );
      var deps = reaction.deps;
      if (new_deps !== null) {
        var i;
        remove_reactions(reaction, skipped_deps);
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (!skip_reaction) {
          for (i = skipped_deps; i < deps.length; i++) {
            (deps[i].reactions ??= []).push(reaction);
          }
        }
      } else if (deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null && previous_reaction !== reaction) {
        read_version++;
        if (untracked_writes !== null) {
          if (previous_untracked_writes === null) {
            previous_untracked_writes = untracked_writes;
          } else {
            previous_untracked_writes.push(.../** @type {Source[]} */
            untracked_writes);
          }
        }
      }
      return result;
    } finally {
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      skip_reaction = previous_skip_reaction;
      reaction_sources = previous_reaction_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
      reaction.f ^= EFFECT_IS_UPDATING;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = index_of.call(reactions, signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !new_deps.includes(dependency))) {
      set_signal_status(dependency, MAYBE_DIRTY);
      if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
        dependency.f ^= DISCONNECTED;
      }
      destroy_derived_effects(
        /** @type {Derived} **/
        dependency
      );
      remove_reactions(
        /** @type {Derived} **/
        dependency,
        0
      );
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags = effect2.f;
    if ((flags & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var previous_component_context = component_context;
    var was_updating_effect = is_updating_effect;
    active_effect = effect2;
    is_updating_effect = true;
    if (dev_fallback_default) {
      var previous_component_fn = dev_current_component_function;
      set_dev_current_component_function(effect2.component_function);
    }
    try {
      if ((flags & BLOCK_EFFECT) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      var deps = effect2.deps;
      if (dev_fallback_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) {
        for (let i = 0; i < deps.length; i++) {
          var dep = deps[i];
          if (dep.trace_need_increase) {
            dep.wv = increment_write_version();
            dep.trace_need_increase = void 0;
            dep.trace_v = void 0;
          }
        }
      }
      if (dev_fallback_default) {
        dev_effect_stack.push(effect2);
      }
    } catch (error) {
      handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
    } finally {
      is_updating_effect = was_updating_effect;
      active_effect = previous_effect;
      if (dev_fallback_default) {
        set_dev_current_component_function(previous_component_fn);
      }
    }
  }
  function log_effect_stack() {
    console.error(
      "Last ten effects were: ",
      dev_effect_stack.slice(-10).map((d) => d.fn)
    );
    dev_effect_stack = [];
  }
  function infinite_loop_guard() {
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      if (dev_fallback_default) {
        define_property(error, "stack", {
          value: ""
        });
      }
      if (last_scheduled_effect !== null) {
        if (dev_fallback_default) {
          try {
            handle_error(error, last_scheduled_effect, null, null);
          } catch (e) {
            log_effect_stack();
            throw e;
          }
        } else {
          handle_error(error, last_scheduled_effect, null, null);
        }
      } else {
        if (dev_fallback_default) {
          log_effect_stack();
        }
        throw error;
      }
    }
  }
  function flush_queued_root_effects() {
    var was_updating_effect = is_updating_effect;
    try {
      var flush_count = 0;
      is_updating_effect = true;
      while (queued_root_effects.length > 0) {
        if (flush_count++ > 1e3) {
          infinite_loop_guard();
        }
        var root_effects = queued_root_effects;
        var length = root_effects.length;
        queued_root_effects = [];
        for (var i = 0; i < length; i++) {
          var collected_effects = process_effects(root_effects[i]);
          flush_queued_effects(collected_effects);
        }
        old_values.clear();
      }
    } finally {
      is_flushing = false;
      is_updating_effect = was_updating_effect;
      last_scheduled_effect = null;
      if (dev_fallback_default) {
        dev_effect_stack = [];
      }
    }
  }
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    for (var i = 0; i < length; i++) {
      var effect2 = effects[i];
      if ((effect2.f & (DESTROYED | INERT)) === 0) {
        try {
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
            if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
              if (effect2.teardown === null) {
                unlink_effect(effect2);
              } else {
                effect2.fn = null;
              }
            }
          }
        } catch (error) {
          handle_error(error, effect2, null, effect2.ctx);
        }
      }
    }
  }
  function schedule_effect(signal) {
    if (!is_flushing) {
      is_flushing = true;
      queueMicrotask(flush_queued_root_effects);
    }
    var effect2 = last_scheduled_effect = signal;
    while (effect2.parent !== null) {
      effect2 = effect2.parent;
      var flags = effect2.f;
      if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags & CLEAN) === 0) return;
        effect2.f ^= CLEAN;
      }
    }
    queued_root_effects.push(effect2);
  }
  function process_effects(root20) {
    var effects = [];
    var effect2 = root20;
    while (effect2 !== null) {
      var flags = effect2.f;
      var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
      var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
      if (!is_skippable_branch && (flags & INERT) === 0) {
        if ((flags & EFFECT) !== 0) {
          effects.push(effect2);
        } else if (is_branch) {
          effect2.f ^= CLEAN;
        } else {
          try {
            if (check_dirtiness(effect2)) {
              update_effect(effect2);
            }
          } catch (error) {
            handle_error(error, effect2, null, effect2.ctx);
          }
        }
        var child2 = effect2.first;
        if (child2 !== null) {
          effect2 = child2;
          continue;
        }
      }
      var parent = effect2.parent;
      effect2 = effect2.next;
      while (effect2 === null && parent !== null) {
        effect2 = parent.next;
        parent = parent.parent;
      }
    }
    return effects;
  }
  function flushSync(fn) {
    var result;
    if (fn) {
      is_flushing = true;
      flush_queued_root_effects();
      result = fn();
    }
    flush_tasks();
    while (queued_root_effects.length > 0) {
      is_flushing = true;
      flush_queued_root_effects();
      flush_tasks();
    }
    return (
      /** @type {T} */
      result
    );
  }
  async function tick() {
    await Promise.resolve();
    flushSync();
  }
  function get(signal) {
    var flags = signal.f;
    var is_derived = (flags & DERIVED) !== 0;
    if (captured_signals !== null) {
      captured_signals.add(signal);
    }
    if (active_reaction !== null && !untracking) {
      if (!reaction_sources?.includes(signal)) {
        var deps = active_reaction.deps;
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else if (!skip_reaction || !new_deps.includes(signal)) {
            new_deps.push(signal);
          }
        }
      }
    } else if (is_derived && /** @type {Derived} */
    signal.deps === null && /** @type {Derived} */
    signal.effects === null) {
      var derived3 = (
        /** @type {Derived} */
        signal
      );
      var parent = derived3.parent;
      if (parent !== null && (parent.f & UNOWNED) === 0) {
        derived3.f ^= UNOWNED;
      }
    }
    if (is_derived) {
      derived3 = /** @type {Derived} */
      signal;
      if (check_dirtiness(derived3)) {
        update_derived(derived3);
      }
    }
    if (dev_fallback_default && tracing_mode_flag && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
      if (signal.debug) {
        signal.debug();
      } else if (signal.created) {
        var entry = tracing_expressions.entries.get(signal);
        if (entry === void 0) {
          entry = { read: [] };
          tracing_expressions.entries.set(signal, entry);
        }
        entry.read.push(get_stack("TracedAt"));
      }
    }
    if (is_destroying_effect && old_values.has(signal)) {
      return old_values.get(signal);
    }
    return signal.v;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function deep_read_state(value) {
    if (typeof value !== "object" || !value || value instanceof EventTarget) {
      return;
    }
    if (STATE_SYMBOL in value) {
      deep_read(value);
    } else if (!Array.isArray(value)) {
      for (let key in value) {
        const prop2 = value[key];
        if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
          deep_read(prop2);
        }
      }
    }
  }
  function deep_read(value, visited = /* @__PURE__ */ new Set()) {
    if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
    !(value instanceof EventTarget) && !visited.has(value)) {
      visited.add(value);
      if (value instanceof Date) {
        value.getTime();
      }
      for (let key in value) {
        try {
          deep_read(value[key], visited);
        } catch (e) {
        }
      }
      const proto = get_prototype_of(value);
      if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
        const descriptors = get_descriptors(proto);
        for (let key in descriptors) {
          const get3 = descriptors[key].get;
          if (get3) {
            try {
              get3.call(value);
            } catch (e) {
            }
          }
        }
      }
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/reactivity/sources.js
  var inspect_effects = /* @__PURE__ */ new Set();
  var old_values = /* @__PURE__ */ new Map();
  function set_inspect_effects(v) {
    inspect_effects = v;
  }
  function source(v, stack2) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    if (dev_fallback_default && tracing_mode_flag) {
      signal.created = stack2 ?? get_stack("CreatedAt");
      signal.debug = null;
    }
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function state(v, stack2) {
    const s = source(v, stack2);
    push_reaction_value(s);
    return s;
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    if (legacy_mode_flag && component_context !== null && component_context.l !== null) {
      (component_context.l.s ??= []).push(s);
    }
    return s;
  }
  function set(source2, value, should_proxy = false) {
    if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && !reaction_sources?.includes(source2)) {
      state_unsafe_mutation();
    }
    let new_value = should_proxy ? proxy(value) : value;
    return internal_set(source2, new_value);
  }
  function internal_set(source2, value) {
    if (!source2.equals(value)) {
      var old_value = source2.v;
      if (is_destroying_effect) {
        old_values.set(source2, value);
      } else {
        old_values.set(source2, old_value);
      }
      source2.v = value;
      if (dev_fallback_default && tracing_mode_flag) {
        source2.updated = get_stack("UpdatedAt");
        if (active_effect != null) {
          source2.trace_need_increase = true;
          source2.trace_v ??= old_value;
        }
      }
      if ((source2.f & DERIVED) !== 0) {
        if ((source2.f & DIRTY) !== 0) {
          execute_derived(
            /** @type {Derived} */
            source2
          );
        }
        set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
      }
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY);
      if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
      if (dev_fallback_default && inspect_effects.size > 0) {
        const inspects = Array.from(inspect_effects);
        for (const effect2 of inspects) {
          if ((effect2.f & CLEAN) !== 0) {
            set_signal_status(effect2, MAYBE_DIRTY);
          }
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
          }
        }
        inspect_effects.clear();
      }
    }
    return value;
  }
  function mark_reactions(signal, status) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var runes = is_runes();
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags = reaction.f;
      if ((flags & DIRTY) !== 0) continue;
      if (!runes && reaction === active_effect) continue;
      if (dev_fallback_default && (flags & INSPECT_EFFECT) !== 0) {
        inspect_effects.add(reaction);
        continue;
      }
      set_signal_status(reaction, status);
      if ((flags & (CLEAN | UNOWNED)) !== 0) {
        if ((flags & DERIVED) !== 0) {
          mark_reactions(
            /** @type {Derived} */
            reaction,
            MAYBE_DIRTY
          );
        } else {
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/context.js
  var component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  var dev_current_component_function = null;
  function set_dev_current_component_function(fn) {
    dev_current_component_function = fn;
  }
  function getContext(key) {
    const context_map = get_or_init_context_map("getContext");
    const result = (
      /** @type {T} */
      context_map.get(key)
    );
    return result;
  }
  function setContext(key, context) {
    const context_map = get_or_init_context_map("setContext");
    context_map.set(key, context);
    return context;
  }
  function push(props, runes = false, fn) {
    var ctx = component_context = {
      p: component_context,
      c: null,
      d: false,
      e: null,
      m: false,
      s: props,
      x: null,
      l: null
    };
    if (legacy_mode_flag && !runes) {
      component_context.l = {
        s: null,
        u: null,
        r1: [],
        r2: source(false)
      };
    }
    teardown(() => {
      ctx.d = true;
    });
    if (dev_fallback_default) {
      component_context.function = fn;
      dev_current_component_function = fn;
    }
  }
  function pop(component2) {
    const context_stack_item = component_context;
    if (context_stack_item !== null) {
      if (component2 !== void 0) {
        context_stack_item.x = component2;
      }
      const component_effects = context_stack_item.e;
      if (component_effects !== null) {
        var previous_effect = active_effect;
        var previous_reaction = active_reaction;
        context_stack_item.e = null;
        try {
          for (var i = 0; i < component_effects.length; i++) {
            var component_effect = component_effects[i];
            set_active_effect(component_effect.effect);
            set_active_reaction(component_effect.reaction);
            effect(component_effect.fn);
          }
        } finally {
          set_active_effect(previous_effect);
          set_active_reaction(previous_reaction);
        }
      }
      component_context = context_stack_item.p;
      if (dev_fallback_default) {
        dev_current_component_function = context_stack_item.p?.function ?? null;
      }
      context_stack_item.m = true;
    }
    return component2 || /** @type {T} */
    {};
  }
  function is_runes() {
    return !legacy_mode_flag || component_context !== null && component_context.l === null;
  }
  function get_or_init_context_map(name) {
    if (component_context === null) {
      lifecycle_outside_component(name);
    }
    return component_context.c ??= new Map(get_parent_context(component_context) || void 0);
  }
  function get_parent_context(component_context2) {
    let parent = component_context2.p;
    while (parent !== null) {
      const context_map = parent.c;
      if (context_map !== null) {
        return context_map;
      }
      parent = parent.p;
    }
    return null;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/utils.js
  var DOM_BOOLEAN_ATTRIBUTES = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
    "webkitdirectory",
    "defer",
    "disablepictureinpicture",
    "disableremoteplayback"
  ];
  var DOM_PROPERTIES = [
    ...DOM_BOOLEAN_ATTRIBUTES,
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    "readOnly",
    "value",
    "volume",
    "defaultValue",
    "defaultChecked",
    "srcObject",
    "noValidate",
    "allowFullscreen",
    "disablePictureInPicture",
    "disableRemotePlayback"
  ];
  var PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dev/css.js
  var all_styles = /* @__PURE__ */ new Map();
  function register_style(hash2, style) {
    var styles = all_styles.get(hash2);
    if (!styles) {
      styles = /* @__PURE__ */ new Set();
      all_styles.set(hash2, styles);
    }
    styles.add(style);
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/misc.js
  function remove_textarea_child(dom) {
    if (hydrating && get_first_child(dom) !== null) {
      clear_text_content(dom);
    }
  }
  var listening_to_form_reset = false;
  function add_form_reset_listener() {
    if (!listening_to_form_reset) {
      listening_to_form_reset = true;
      document.addEventListener(
        "reset",
        (evt) => {
          Promise.resolve().then(() => {
            if (!evt.defaultPrevented) {
              for (
                const e of
                /**@type {HTMLFormElement} */
                evt.target.elements
              ) {
                e.__on_r?.();
              }
            }
          });
        },
        // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
        { capture: true }
      );
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function listen_to_event_and_reset_event(element2, event2, handler, on_reset = handler) {
    element2.addEventListener(event2, () => without_reactive_context(handler));
    const prev = element2.__on_r;
    if (prev) {
      element2.__on_r = () => {
        prev();
        on_reset(true);
      };
    } else {
      element2.__on_r = () => on_reset(true);
    }
    add_form_reset_listener();
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/events.js
  var all_registered_events = /* @__PURE__ */ new Set();
  var root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler?.call(this, event2);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function event(event_name, dom, handler, capture, passive2) {
    var options = { capture, passive: passive2 };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body || dom === window || dom === document) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  function handle_event_propagation(event2) {
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = event2.composedPath?.() || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event2.target
    );
    var path_idx = 0;
    var handled_at = event2.__root;
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event2.__root = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event2.target;
    if (current_target === handler_element) return;
    define_property(event2, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated = current_target["__" + event_name];
          if (delegated != null && (!/** @type {any} */
          current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          event2.target === current_target)) {
            if (is_array(delegated)) {
              var [fn, ...data] = delegated;
              fn.apply(current_target, [event2, ...data]);
            } else {
              delegated.call(current_target, event2);
            }
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event2.__root = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
  var head_anchor;
  function reset_head_anchor() {
    head_anchor = void 0;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/reconciler.js
  function create_fragment_from_html(html2) {
    var elem = document.createElement("template");
    elem.innerHTML = html2;
    return elem.content;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/template.js
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes_start === null) {
      effect2.nodes_start = start;
      effect2.nodes_end = end;
    }
  }
  // @__NO_SIDE_EFFECTS__
  function template(content, flags) {
    var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (hydrating) {
        assign_nodes(hydrate_node, null);
        return hydrate_node;
      }
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        if (!is_fragment) node = /** @type {Node} */
        get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  function text(value = "") {
    if (!hydrating) {
      var t = create_text(value + "");
      assign_nodes(t, t);
      return t;
    }
    var node = hydrate_node;
    if (node.nodeType !== 3) {
      node.before(node = create_text());
      set_hydrate_node(node);
    }
    assign_nodes(node, node);
    return node;
  }
  function comment() {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    var frag = document.createDocumentFragment();
    var start = document.createComment("");
    var anchor = create_text();
    frag.append(start, anchor);
    assign_nodes(start, anchor);
    return frag;
  }
  function append(anchor, dom) {
    if (hydrating) {
      active_effect.nodes_end = hydrate_node;
      hydrate_next();
      return;
    }
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/render.js
  var should_intro = true;
  function set_text(text2, value) {
    var str = value == null ? "" : typeof value === "object" ? value + "" : value;
    if (str !== (text2.__t ??= text2.nodeValue)) {
      text2.__t = str;
      text2.nodeValue = str + "";
    }
  }
  function mount(component2, options) {
    return _mount(component2, options);
  }
  function hydrate(component2, options) {
    init_operations();
    options.intro = options.intro ?? false;
    const target = options.target;
    const was_hydrating = hydrating;
    const previous_hydrate_node = hydrate_node;
    try {
      var anchor = (
        /** @type {TemplateNode} */
        get_first_child(target)
      );
      while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
      anchor.data !== HYDRATION_START)) {
        anchor = /** @type {TemplateNode} */
        get_next_sibling(anchor);
      }
      if (!anchor) {
        throw HYDRATION_ERROR;
      }
      set_hydrating(true);
      set_hydrate_node(
        /** @type {Comment} */
        anchor
      );
      hydrate_next();
      const instance = _mount(component2, { ...options, anchor });
      if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
      hydrate_node.data !== HYDRATION_END) {
        hydration_mismatch();
        throw HYDRATION_ERROR;
      }
      set_hydrating(false);
      return (
        /**  @type {Exports} */
        instance
      );
    } catch (error) {
      if (error === HYDRATION_ERROR) {
        if (options.recover === false) {
          hydration_failed();
        }
        init_operations();
        clear_text_content(target);
        set_hydrating(false);
        return mount(component2, options);
      }
      throw error;
    } finally {
      set_hydrating(was_hydrating);
      set_hydrate_node(previous_hydrate_node);
      reset_head_anchor();
    }
  }
  var document_listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
    init_operations();
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive2 = is_passive_event(event_name);
        target.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
        var n = document_listeners.get(event_name);
        if (n === void 0) {
          document.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
          document_listeners.set(event_name, 1);
        } else {
          document_listeners.set(event_name, n + 1);
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    var component2 = void 0;
    var unmount2 = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      branch(() => {
        if (context) {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          ctx.c = context;
        }
        if (events) {
          props.$$events = events;
        }
        if (hydrating) {
          assign_nodes(
            /** @type {TemplateNode} */
            anchor_node,
            null
          );
        }
        should_intro = intro;
        component2 = Component(anchor_node, props) || {};
        should_intro = true;
        if (hydrating) {
          active_effect.nodes_end = hydrate_node;
        }
        if (context) {
          pop();
        }
      });
      return () => {
        for (var event_name of registered_events) {
          target.removeEventListener(event_name, handle_event_propagation);
          var n = (
            /** @type {number} */
            document_listeners.get(event_name)
          );
          if (--n === 0) {
            document.removeEventListener(event_name, handle_event_propagation);
            document_listeners.delete(event_name);
          } else {
            document_listeners.set(event_name, n);
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          anchor_node.parentNode?.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component2, unmount2);
    return component2;
  }
  var mounted_components = /* @__PURE__ */ new WeakMap();
  function unmount(component2, options) {
    const fn = mounted_components.get(component2);
    if (fn) {
      mounted_components.delete(component2);
      return fn(options);
    }
    if (dev_fallback_default) {
      lifecycle_double_unmount();
    }
    return Promise.resolve();
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/blocks/if.js
  function if_block(node, fn, [root_index, hydrate_index] = [0, 0]) {
    if (hydrating && root_index === 0) {
      hydrate_next();
    }
    var anchor = node;
    var consequent_effect = null;
    var alternate_effect = null;
    var condition = UNINITIALIZED;
    var flags = root_index > 0 ? EFFECT_TRANSPARENT : 0;
    var has_branch = false;
    const set_branch = (fn2, flag = true) => {
      has_branch = true;
      update_branch(flag, fn2);
    };
    const update_branch = (new_condition, fn2) => {
      if (condition === (condition = new_condition)) return;
      let mismatch = false;
      if (hydrating && hydrate_index !== -1) {
        if (root_index === 0) {
          const data = (
            /** @type {Comment} */
            anchor.data
          );
          if (data === HYDRATION_START) {
            hydrate_index = 0;
          } else if (data === HYDRATION_START_ELSE) {
            hydrate_index = Infinity;
          } else {
            hydrate_index = parseInt(data.substring(1));
            if (hydrate_index !== hydrate_index) {
              hydrate_index = condition ? Infinity : -1;
            }
          }
        }
        const is_else = hydrate_index > root_index;
        if (!!condition === is_else) {
          anchor = remove_nodes();
          set_hydrate_node(anchor);
          set_hydrating(false);
          mismatch = true;
          hydrate_index = -1;
        }
      }
      if (condition) {
        if (consequent_effect) {
          resume_effect(consequent_effect);
        } else if (fn2) {
          consequent_effect = branch(() => fn2(anchor));
        }
        if (alternate_effect) {
          pause_effect(alternate_effect, () => {
            alternate_effect = null;
          });
        }
      } else {
        if (alternate_effect) {
          resume_effect(alternate_effect);
        } else if (fn2) {
          alternate_effect = branch(() => fn2(anchor, [root_index + 1, hydrate_index]));
        }
        if (consequent_effect) {
          pause_effect(consequent_effect, () => {
            consequent_effect = null;
          });
        }
      }
      if (mismatch) {
        set_hydrating(true);
      }
    };
    block(() => {
      has_branch = false;
      fn(set_branch);
      if (!has_branch) {
        update_branch(null, null);
      }
    }, flags);
    if (hydrating) {
      anchor = hydrate_node;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/blocks/each.js
  var current_each_item = null;
  function pause_effects(state2, items, controlled_anchor, items_map) {
    var transitions = [];
    var length = items.length;
    for (var i = 0; i < length; i++) {
      pause_children(items[i].e, transitions, true);
    }
    var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        /** @type {Element} */
        controlled_anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(
        /** @type {Element} */
        controlled_anchor
      );
      items_map.clear();
      link(state2, items[0].prev, items[length - 1].next);
    }
    run_out_transitions(transitions, () => {
      for (var i2 = 0; i2 < length; i2++) {
        var item = items[i2];
        if (!is_controlled) {
          items_map.delete(item.k);
          link(state2, item.prev, item.next);
        }
        destroy_effect(item.e, !is_controlled);
      }
    });
  }
  function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;
    var state2 = { flags, items: /* @__PURE__ */ new Map(), first: null };
    var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = hydrating ? set_hydrate_node(
        /** @type {Comment | Text} */
        get_first_child(parent_node)
      ) : parent_node.appendChild(create_text());
    }
    if (hydrating) {
      hydrate_next();
    }
    var fallback2 = null;
    var was_empty = false;
    var each_array = derived_safe_equal(() => {
      var collection = get_collection();
      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });
    block(() => {
      var array = get(each_array);
      var length = array.length;
      if (was_empty && length === 0) {
        return;
      }
      was_empty = length === 0;
      let mismatch = false;
      if (hydrating) {
        var is_else = (
          /** @type {Comment} */
          anchor.data === HYDRATION_START_ELSE
        );
        if (is_else !== (length === 0)) {
          anchor = remove_nodes();
          set_hydrate_node(anchor);
          set_hydrating(false);
          mismatch = true;
        }
      }
      if (hydrating) {
        var prev = null;
        var item;
        for (var i = 0; i < length; i++) {
          if (hydrate_node.nodeType === 8 && /** @type {Comment} */
          hydrate_node.data === HYDRATION_END) {
            anchor = /** @type {Comment} */
            hydrate_node;
            mismatch = true;
            set_hydrating(false);
            break;
          }
          var value = array[i];
          var key = get_key(value, i);
          item = create_item(
            hydrate_node,
            state2,
            prev,
            null,
            value,
            key,
            i,
            render_fn,
            flags,
            get_collection
          );
          state2.items.set(key, item);
          prev = item;
        }
        if (length > 0) {
          set_hydrate_node(remove_nodes());
        }
      }
      if (!hydrating) {
        reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection);
      }
      if (fallback_fn !== null) {
        if (length === 0) {
          if (fallback2) {
            resume_effect(fallback2);
          } else {
            fallback2 = branch(() => fallback_fn(anchor));
          }
        } else if (fallback2 !== null) {
          pause_effect(fallback2, () => {
            fallback2 = null;
          });
        }
      }
      if (mismatch) {
        set_hydrating(true);
      }
      get(each_array);
    });
    if (hydrating) {
      anchor = hydrate_node;
    }
  }
  function reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection) {
    var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
    var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
    var length = array.length;
    var items = state2.items;
    var first = state2.first;
    var current = first;
    var seen;
    var prev = null;
    var to_animate;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var item;
    var i;
    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key = get_key(value, i);
        item = items.get(key);
        if (item !== void 0) {
          item.a?.measure();
          (to_animate ??= /* @__PURE__ */ new Set()).add(item);
        }
      }
    }
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = items.get(key);
      if (item === void 0) {
        var child_anchor = current ? (
          /** @type {TemplateNode} */
          current.e.nodes_start
        ) : anchor;
        prev = create_item(
          child_anchor,
          state2,
          prev,
          prev === null ? state2.first : prev.next,
          value,
          key,
          i,
          render_fn,
          flags,
          get_collection
        );
        items.set(key, prev);
        matched = [];
        stashed = [];
        current = prev.next;
        continue;
      }
      if (should_update) {
        update_item(item, value, i, flags);
      }
      if ((item.e.f & INERT) !== 0) {
        resume_effect(item.e);
        if (is_animated) {
          item.a?.unfix();
          (to_animate ??= /* @__PURE__ */ new Set()).delete(item);
        }
      }
      if (item !== current) {
        if (seen !== void 0 && seen.has(item)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }
            link(state2, a.prev, b.next);
            link(state2, prev, a);
            link(state2, b, start);
            current = start;
            prev = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen.delete(item);
            move(item, current, anchor);
            link(state2, item.prev, item.next);
            link(state2, item, prev === null ? state2.first : prev.next);
            link(state2, prev, item);
            prev = item;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current.k !== key) {
          if ((current.e.f & INERT) === 0) {
            (seen ??= /* @__PURE__ */ new Set()).add(current);
          }
          stashed.push(current);
          current = current.next;
        }
        if (current === null) {
          continue;
        }
        item = current;
      }
      matched.push(item);
      prev = item;
      current = item.next;
    }
    if (current !== null || seen !== void 0) {
      var to_destroy = seen === void 0 ? [] : array_from(seen);
      while (current !== null) {
        if ((current.e.f & INERT) === 0) {
          to_destroy.push(current);
        }
        current = current.next;
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].a?.measure();
          }
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].a?.fix();
          }
        }
        pause_effects(state2, to_destroy, controlled_anchor, items);
      }
    }
    if (is_animated) {
      queue_micro_task(() => {
        if (to_animate === void 0) return;
        for (item of to_animate) {
          item.a?.apply();
        }
      });
    }
    active_effect.first = state2.first && state2.first.e;
    active_effect.last = prev && prev.e;
  }
  function update_item(item, value, index2, type) {
    if ((type & EACH_ITEM_REACTIVE) !== 0) {
      internal_set(item.v, value);
    }
    if ((type & EACH_INDEX_REACTIVE) !== 0) {
      internal_set(
        /** @type {Value<number>} */
        item.i,
        index2
      );
    } else {
      item.i = index2;
    }
  }
  function create_item(anchor, state2, prev, next2, value, key, index2, render_fn, flags, get_collection) {
    var previous_each_item = current_each_item;
    var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
    var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
    var v = reactive ? mutable ? mutable_source(value) : source(value) : value;
    var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
    if (dev_fallback_default && reactive) {
      v.debug = () => {
        var collection_index = typeof i === "number" ? index2 : i.v;
        get_collection()[collection_index];
      };
    }
    var item = {
      i,
      v,
      k: key,
      a: null,
      // @ts-expect-error
      e: null,
      prev,
      next: next2
    };
    current_each_item = item;
    try {
      item.e = branch(() => render_fn(anchor, v, i, get_collection), hydrating);
      item.e.prev = prev && prev.e;
      item.e.next = next2 && next2.e;
      if (prev === null) {
        state2.first = item;
      } else {
        prev.next = item;
        prev.e.next = item.e;
      }
      if (next2 !== null) {
        next2.prev = item;
        next2.e.prev = item.e;
      }
      return item;
    } finally {
      current_each_item = previous_each_item;
    }
  }
  function move(item, next2, anchor) {
    var end = item.next ? (
      /** @type {TemplateNode} */
      item.next.e.nodes_start
    ) : anchor;
    var dest = next2 ? (
      /** @type {TemplateNode} */
      next2.e.nodes_start
    ) : anchor;
    var node = (
      /** @type {TemplateNode} */
      item.e.nodes_start
    );
    while (node !== end) {
      var next_node = (
        /** @type {TemplateNode} */
        get_next_sibling(node)
      );
      dest.before(node);
      node = next_node;
    }
  }
  function link(state2, prev, next2) {
    if (prev === null) {
      state2.first = next2;
    } else {
      prev.next = next2;
      prev.e.next = next2 && next2.e;
    }
    if (next2 !== null) {
      next2.prev = prev;
      next2.e.prev = prev && prev.e;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/blocks/snippet.js
  function snippet(node, get_snippet, ...args) {
    var anchor = node;
    var snippet2 = noop;
    var snippet_effect;
    block(() => {
      if (snippet2 === (snippet2 = get_snippet())) return;
      if (snippet_effect) {
        destroy_effect(snippet_effect);
        snippet_effect = null;
      }
      if (dev_fallback_default && snippet2 == null) {
        invalid_snippet();
      }
      snippet_effect = branch(() => (
        /** @type {SnippetFn} */
        snippet2(anchor, ...args)
      ));
    }, EFFECT_TRANSPARENT);
    if (hydrating) {
      anchor = hydrate_node;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/css.js
  function append_styles(anchor, css2) {
    queue_micro_task(() => {
      var root20 = anchor.getRootNode();
      var target = (
        /** @type {ShadowRoot} */
        root20.host ? (
          /** @type {ShadowRoot} */
          root20
        ) : (
          /** @type {Document} */
          root20.head ?? /** @type {Document} */
          root20.ownerDocument.head
        )
      );
      if (!target.querySelector("#" + css2.hash)) {
        const style = document.createElement("style");
        style.id = css2.hash;
        style.textContent = css2.code;
        target.appendChild(style);
        if (dev_fallback_default) {
          register_style(css2.hash, style);
        }
      }
    });
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/actions.js
  function action(dom, action2, get_value) {
    effect(() => {
      var payload = untrack(() => action2(dom, get_value?.()) || {});
      if (get_value && payload?.update) {
        var inited = false;
        var prev = (
          /** @type {any} */
          {}
        );
        render_effect(() => {
          var value = get_value();
          deep_read_state(value);
          if (inited && safe_not_equal(prev, value)) {
            prev = value;
            payload.update(value);
          }
        });
        inited = true;
      }
      if (payload?.destroy) {
        return () => (
          /** @type {Function} */
          payload.destroy()
        );
      }
    });
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/shared/attributes.js
  var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
  function to_class(value, hash2, directives) {
    var classname = value == null ? "" : "" + value;
    if (hash2) {
      classname = classname ? classname + " " + hash2 : hash2;
    }
    if (directives) {
      for (var key in directives) {
        if (directives[key]) {
          classname = classname ? classname + " " + key : key;
        } else if (classname.length) {
          var len = key.length;
          var a = 0;
          while ((a = classname.indexOf(key, a)) >= 0) {
            var b = a + len;
            if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
              classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
            } else {
              a = b;
            }
          }
        }
      }
    }
    return classname === "" ? null : classname;
  }
  function append_styles2(styles, important = false) {
    var separator = important ? " !important;" : ";";
    var css2 = "";
    for (var key in styles) {
      var value = styles[key];
      if (value != null && value !== "") {
        css2 += " " + key + ": " + value + separator;
      }
    }
    return css2;
  }
  function to_css_name(name) {
    if (name[0] !== "-" || name[1] !== "-") {
      return name.toLowerCase();
    }
    return name;
  }
  function to_style(value, styles) {
    if (styles) {
      var new_style = "";
      var normal_styles;
      var important_styles;
      if (Array.isArray(styles)) {
        normal_styles = styles[0];
        important_styles = styles[1];
      } else {
        normal_styles = styles;
      }
      if (value) {
        value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
        var in_str = false;
        var in_apo = 0;
        var in_comment = false;
        var reserved_names = [];
        if (normal_styles) {
          reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
        }
        if (important_styles) {
          reserved_names.push(...Object.keys(important_styles).map(to_css_name));
        }
        var start_index = 0;
        var name_index = -1;
        const len = value.length;
        for (var i = 0; i < len; i++) {
          var c = value[i];
          if (in_comment) {
            if (c === "/" && value[i - 1] === "*") {
              in_comment = false;
            }
          } else if (in_str) {
            if (in_str === c) {
              in_str = false;
            }
          } else if (c === "/" && value[i + 1] === "*") {
            in_comment = true;
          } else if (c === '"' || c === "'") {
            in_str = c;
          } else if (c === "(") {
            in_apo++;
          } else if (c === ")") {
            in_apo--;
          }
          if (!in_comment && in_str === false && in_apo === 0) {
            if (c === ":" && name_index === -1) {
              name_index = i;
            } else if (c === ";" || i === len - 1) {
              if (name_index !== -1) {
                var name = to_css_name(value.substring(start_index, name_index).trim());
                if (!reserved_names.includes(name)) {
                  if (c !== ";") {
                    i++;
                  }
                  var property = value.substring(start_index, i).trim();
                  new_style += " " + property + ";";
                }
              }
              start_index = i + 1;
              name_index = -1;
            }
          }
        }
      }
      if (normal_styles) {
        new_style += append_styles2(normal_styles);
      }
      if (important_styles) {
        new_style += append_styles2(important_styles, true);
      }
      new_style = new_style.trim();
      return new_style === "" ? null : new_style;
    }
    return value == null ? null : String(value);
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/class.js
  function set_class(dom, is_html, value, hash2, prev_classes, next_classes) {
    var prev = dom.__className;
    if (hydrating || prev !== value || prev === void 0) {
      var next_class_name = to_class(value, hash2, next_classes);
      if (!hydrating || next_class_name !== dom.getAttribute("class")) {
        if (next_class_name == null) {
          dom.removeAttribute("class");
        } else if (is_html) {
          dom.className = next_class_name;
        } else {
          dom.setAttribute("class", next_class_name);
        }
      }
      dom.__className = value;
    } else if (next_classes && prev_classes !== next_classes) {
      for (var key in next_classes) {
        var is_present = !!next_classes[key];
        if (prev_classes == null || is_present !== !!prev_classes[key]) {
          dom.classList.toggle(key, is_present);
        }
      }
    }
    return next_classes;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/style.js
  function update_styles(dom, prev = {}, next2, priority) {
    for (var key in next2) {
      var value = next2[key];
      if (prev[key] !== value) {
        if (next2[key] == null) {
          dom.style.removeProperty(key);
        } else {
          dom.style.setProperty(key, value, priority);
        }
      }
    }
  }
  function set_style(dom, value, prev_styles, next_styles) {
    var prev = dom.__style;
    if (hydrating || prev !== value) {
      var next_style_attr = to_style(value, next_styles);
      if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
        if (next_style_attr == null) {
          dom.removeAttribute("style");
        } else {
          dom.style.cssText = next_style_attr;
        }
      }
      dom.__style = value;
    } else if (next_styles) {
      if (Array.isArray(next_styles)) {
        update_styles(dom, prev_styles?.[0], next_styles[0]);
        update_styles(dom, prev_styles?.[1], next_styles[1], "important");
      } else {
        update_styles(dom, prev_styles, next_styles);
      }
    }
    return next_styles;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/attributes.js
  var CLASS = Symbol("class");
  var STYLE = Symbol("style");
  var IS_CUSTOM_ELEMENT = Symbol("is custom element");
  var IS_HTML = Symbol("is html");
  function remove_input_defaults(input) {
    if (!hydrating) return;
    var already_removed = false;
    var remove_defaults = () => {
      if (already_removed) return;
      already_removed = true;
      if (input.hasAttribute("value")) {
        var value = input.value;
        set_attribute(input, "value", null);
        input.value = value;
      }
      if (input.hasAttribute("checked")) {
        var checked = input.checked;
        set_attribute(input, "checked", null);
        input.checked = checked;
      }
    };
    input.__on_r = remove_defaults;
    queue_idle_task(remove_defaults);
    add_form_reset_listener();
  }
  function set_attribute(element2, attribute, value, skip_warning) {
    var attributes = get_attributes(element2);
    if (hydrating) {
      attributes[attribute] = element2.getAttribute(attribute);
      if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === "LINK") {
        if (!skip_warning) {
          check_src_in_dev_hydration(element2, attribute, value ?? "");
        }
        return;
      }
    }
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (attribute === "loading") {
      element2[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element2.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
      element2[attribute] = value;
    } else {
      element2.setAttribute(attribute, value);
    }
  }
  function get_attributes(element2) {
    return (
      /** @type {Record<string | symbol, unknown>} **/
      // @ts-expect-error
      element2.__attributes ??= {
        [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
        [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
      }
    );
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element2) {
    var setters = setters_cache.get(element2.nodeName);
    if (setters) return setters;
    setters_cache.set(element2.nodeName, setters = []);
    var descriptors;
    var proto = element2;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key in descriptors) {
        if (descriptors[key].set) {
          setters.push(key);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  function check_src_in_dev_hydration(element2, attribute, value) {
    if (!dev_fallback_default) return;
    if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
    if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
    hydration_attribute_changed(
      attribute,
      element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
      String(value)
    );
  }
  function src_url_equal(element_src, url) {
    if (element_src === url) return true;
    return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
  }
  function split_srcset(srcset) {
    return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
  }
  function srcset_url_equal(element2, srcset) {
    var element_urls = split_srcset(element2.srcset);
    var urls = split_srcset(srcset);
    return urls.length === element_urls.length && urls.every(
      ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
      // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
      // relative URLs inside srcset are not automatically resolved to absolute URLs by
      // browsers (in contrast to img.src). This means both SSR and DOM code could
      // contain relative or absolute URLs.
      (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
    );
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/timing.js
  var now = true_default ? () => performance.now() : () => Date.now();
  var raf = {
    // don't access requestAnimationFrame eagerly outside method
    // this allows basic testing of user code without JSDOM
    // bunder will eval and remove ternary when the user's app is built
    tick: (
      /** @param {any} _ */
      (_) => (true_default ? requestAnimationFrame : noop)(_)
    ),
    now: () => now(),
    tasks: /* @__PURE__ */ new Set()
  };

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/loop.js
  function run_tasks() {
    const now2 = raf.now();
    raf.tasks.forEach((task) => {
      if (!task.c(now2)) {
        raf.tasks.delete(task);
        task.f();
      }
    });
    if (raf.tasks.size !== 0) {
      raf.tick(run_tasks);
    }
  }
  function loop(callback) {
    let task;
    if (raf.tasks.size === 0) {
      raf.tick(run_tasks);
    }
    return {
      promise: new Promise((fulfill) => {
        raf.tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        raf.tasks.delete(task);
      }
    };
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/transitions.js
  function dispatch_event(element2, type) {
    without_reactive_context(() => {
      element2.dispatchEvent(new CustomEvent(type));
    });
  }
  function css_property_to_camelcase(style) {
    if (style === "float") return "cssFloat";
    if (style === "offset") return "cssOffset";
    if (style.startsWith("--")) return style;
    const parts = style.split("-");
    if (parts.length === 1) return parts[0];
    return parts[0] + parts.slice(1).map(
      /** @param {any} word */
      (word) => word[0].toUpperCase() + word.slice(1)
    ).join("");
  }
  function css_to_keyframe(css2) {
    const keyframe = {};
    const parts = css2.split(";");
    for (const part of parts) {
      const [property, value] = part.split(":");
      if (!property || value === void 0) break;
      const formatted_property = css_property_to_camelcase(property.trim());
      keyframe[formatted_property] = value.trim();
    }
    return keyframe;
  }
  var linear = (t) => t;
  function transition(flags, element2, get_fn, get_params) {
    var is_intro = (flags & TRANSITION_IN) !== 0;
    var is_outro = (flags & TRANSITION_OUT) !== 0;
    var is_both = is_intro && is_outro;
    var is_global = (flags & TRANSITION_GLOBAL) !== 0;
    var direction = is_both ? "both" : is_intro ? "in" : "out";
    var current_options;
    var inert = element2.inert;
    var overflow = element2.style.overflow;
    var intro;
    var outro;
    function get_options() {
      var previous_reaction = active_reaction;
      var previous_effect = active_effect;
      set_active_reaction(null);
      set_active_effect(null);
      try {
        return current_options ??= get_fn()(element2, get_params?.() ?? /** @type {P} */
        {}, {
          direction
        });
      } finally {
        set_active_reaction(previous_reaction);
        set_active_effect(previous_effect);
      }
    }
    var transition2 = {
      is_global,
      in() {
        element2.inert = inert;
        if (!is_intro) {
          outro?.abort();
          outro?.reset?.();
          return;
        }
        if (!is_outro) {
          intro?.abort();
        }
        dispatch_event(element2, "introstart");
        intro = animate(element2, get_options(), outro, 1, () => {
          dispatch_event(element2, "introend");
          intro?.abort();
          intro = current_options = void 0;
          element2.style.overflow = overflow;
        });
      },
      out(fn) {
        if (!is_outro) {
          fn?.();
          current_options = void 0;
          return;
        }
        element2.inert = true;
        dispatch_event(element2, "outrostart");
        outro = animate(element2, get_options(), intro, 0, () => {
          dispatch_event(element2, "outroend");
          fn?.();
        });
      },
      stop: () => {
        intro?.abort();
        outro?.abort();
      }
    };
    var e = (
      /** @type {Effect} */
      active_effect
    );
    (e.transitions ??= []).push(transition2);
    if (is_intro && should_intro) {
      var run2 = is_global;
      if (!run2) {
        var block2 = (
          /** @type {Effect | null} */
          e.parent
        );
        while (block2 && (block2.f & EFFECT_TRANSPARENT) !== 0) {
          while (block2 = block2.parent) {
            if ((block2.f & BLOCK_EFFECT) !== 0) break;
          }
        }
        run2 = !block2 || (block2.f & EFFECT_RAN) !== 0;
      }
      if (run2) {
        effect(() => {
          untrack(() => transition2.in());
        });
      }
    }
  }
  function animate(element2, options, counterpart, t2, on_finish) {
    var is_intro = t2 === 1;
    if (is_function(options)) {
      var a;
      var aborted = false;
      queue_micro_task(() => {
        if (aborted) return;
        var o = options({ direction: is_intro ? "in" : "out" });
        a = animate(element2, o, counterpart, t2, on_finish);
      });
      return {
        abort: () => {
          aborted = true;
          a?.abort();
        },
        deactivate: () => a.deactivate(),
        reset: () => a.reset(),
        t: () => a.t()
      };
    }
    counterpart?.deactivate();
    if (!options?.duration) {
      on_finish();
      return {
        abort: noop,
        deactivate: noop,
        reset: noop,
        t: () => t2
      };
    }
    const { delay = 0, css: css2, tick: tick2, easing = linear } = options;
    var keyframes = [];
    if (is_intro && counterpart === void 0) {
      if (tick2) {
        tick2(0, 1);
      }
      if (css2) {
        var styles = css_to_keyframe(css2(0, 1));
        keyframes.push(styles, styles);
      }
    }
    var get_t = () => 1 - t2;
    var animation2 = element2.animate(keyframes, { duration: delay });
    animation2.onfinish = () => {
      var t1 = counterpart?.t() ?? 1 - t2;
      counterpart?.abort();
      var delta = t2 - t1;
      var duration = (
        /** @type {number} */
        options.duration * Math.abs(delta)
      );
      var keyframes2 = [];
      if (duration > 0) {
        var needs_overflow_hidden = false;
        if (css2) {
          var n = Math.ceil(duration / (1e3 / 60));
          for (var i = 0; i <= n; i += 1) {
            var t = t1 + delta * easing(i / n);
            var styles2 = css_to_keyframe(css2(t, 1 - t));
            keyframes2.push(styles2);
            needs_overflow_hidden ||= styles2.overflow === "hidden";
          }
        }
        if (needs_overflow_hidden) {
          element2.style.overflow = "hidden";
        }
        get_t = () => {
          var time = (
            /** @type {number} */
            /** @type {globalThis.Animation} */
            animation2.currentTime
          );
          return t1 + delta * easing(time / duration);
        };
        if (tick2) {
          loop(() => {
            if (animation2.playState !== "running") return false;
            var t3 = get_t();
            tick2(t3, 1 - t3);
            return true;
          });
        }
      }
      animation2 = element2.animate(keyframes2, { duration, fill: "forwards" });
      animation2.onfinish = () => {
        get_t = () => t2;
        tick2?.(t2, 1 - t2);
        on_finish();
      };
    };
    return {
      abort: () => {
        if (animation2) {
          animation2.cancel();
          animation2.effect = null;
          animation2.onfinish = noop;
        }
      },
      deactivate: () => {
        on_finish = noop;
      },
      reset: () => {
        if (t2 === 0) {
          tick2?.(1, 0);
        }
      },
      t: () => get_t()
    };
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
  function bind_value(input, get3, set2 = get3) {
    var runes = is_runes();
    listen_to_event_and_reset_event(input, "input", (is_reset) => {
      if (dev_fallback_default && input.type === "checkbox") {
        bind_invalid_checkbox_value();
      }
      var value = is_reset ? input.defaultValue : input.value;
      value = is_numberlike_input(input) ? to_number(value) : value;
      set2(value);
      if (runes && value !== (value = get3())) {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        input.value = value ?? "";
        if (end !== null) {
          input.selectionStart = start;
          input.selectionEnd = Math.min(end, input.value.length);
        }
      }
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the updated value from the input instead.
      hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
      // TODO Svelte 6: remove input.value check and set to empty string?
      untrack(get3) == null && input.value
    ) {
      set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
    }
    render_effect(() => {
      if (dev_fallback_default && input.type === "checkbox") {
        bind_invalid_checkbox_value();
      }
      var value = get3();
      if (is_numberlike_input(input) && value === to_number(input.value)) {
        return;
      }
      if (input.type === "date" && !value && !input.value) {
        return;
      }
      if (value !== input.value) {
        input.value = value ?? "";
      }
    });
  }
  function bind_checked(input, get3, set2 = get3) {
    listen_to_event_and_reset_event(input, "change", (is_reset) => {
      var value = is_reset ? input.defaultChecked : input.checked;
      set2(value);
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the update value from the input instead.
      hydrating && input.defaultChecked !== input.checked || // If defaultChecked is set, then checked == defaultChecked
      untrack(get3) == null
    ) {
      set2(input.checked);
    }
    render_effect(() => {
      var value = get3();
      input.checked = Boolean(value);
    });
  }
  function is_numberlike_input(input) {
    var type = input.type;
    return type === "number" || type === "range";
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
  }
  function bind_this(element_or_component = {}, update2, get_value, get_parts) {
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = get_parts?.() || [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update2(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update2(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        queue_micro_task(() => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update2(null, ...parts);
          }
        });
      };
    });
    return element_or_component;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
  function init(immutable = false) {
    const context = (
      /** @type {ComponentContextLegacy} */
      component_context
    );
    const callbacks = context.l.u;
    if (!callbacks) return;
    let props = () => deep_read_state(context.s);
    if (immutable) {
      let version = 0;
      let prev = (
        /** @type {Record<string, any>} */
        {}
      );
      const d = derived(() => {
        let changed = false;
        const props2 = context.s;
        for (const key in props2) {
          if (props2[key] !== prev[key]) {
            prev[key] = props2[key];
            changed = true;
          }
        }
        if (changed) version++;
        return version;
      });
      props = () => get(d);
    }
    if (callbacks.b.length) {
      user_pre_effect(() => {
        observe_all(context, props);
        run_all(callbacks.b);
      });
    }
    user_effect(() => {
      const fns = untrack(() => callbacks.m.map(run));
      return () => {
        for (const fn of fns) {
          if (typeof fn === "function") {
            fn();
          }
        }
      };
    });
    if (callbacks.a.length) {
      user_effect(() => {
        observe_all(context, props);
        run_all(callbacks.a);
      });
    }
  }
  function observe_all(context, props) {
    if (context.l.s) {
      for (const signal of context.l.s) get(signal);
    }
    props();
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/index-client.js
  if (dev_fallback_default) {
    let throw_rune_error = function(rune) {
      if (!(rune in globalThis)) {
        let value;
        Object.defineProperty(globalThis, rune, {
          configurable: true,
          // eslint-disable-next-line getter-return
          get: () => {
            if (value !== void 0) {
              return value;
            }
            rune_outside_svelte(rune);
          },
          set: (v) => {
            value = v;
          }
        });
      }
    };
    throw_rune_error("$state");
    throw_rune_error("$effect");
    throw_rune_error("$derived");
    throw_rune_error("$inspect");
    throw_rune_error("$props");
    throw_rune_error("$bindable");
  }
  function onMount(fn) {
    if (component_context === null) {
      lifecycle_outside_component("onMount");
    }
    if (legacy_mode_flag && component_context.l !== null) {
      init_update_callbacks(component_context).m.push(fn);
    } else {
      user_effect(() => {
        const cleanup = untrack(fn);
        if (typeof cleanup === "function") return (
          /** @type {() => void} */
          cleanup
        );
      });
    }
  }
  function init_update_callbacks(context) {
    var l = (
      /** @type {ComponentContextLegacy} */
      context.l
    );
    return l.u ??= { a: [], b: [], m: [] };
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/store/utils.js
  function subscribe_to_store(store, run2, invalidate) {
    if (store == null) {
      run2(void 0);
      if (invalidate) invalidate(void 0);
      return noop;
    }
    const unsub = untrack(
      () => store.subscribe(
        run2,
        // @ts-expect-error
        invalidate
      )
    );
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/store/shared/index.js
  var subscriber_queue = [];
  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe
    };
  }
  function writable(value, start = noop) {
    let stop = null;
    const subscribers = /* @__PURE__ */ new Set();
    function set2(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set2(fn(
        /** @type {T} */
        value
      ));
    }
    function subscribe(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set2, update2) || noop;
      }
      run2(
        /** @type {T} */
        value
      );
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    return { set: set2, update: update2, subscribe };
  }
  function derived2(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single ? [stores] : stores;
    if (!stores_array.every(Boolean)) {
      throw new Error("derived() expects stores as input, got a falsy value");
    }
    const auto = fn.length < 2;
    return readable(initial_value, (set2, update2) => {
      let started = false;
      const values = [];
      let pending = 0;
      let cleanup = noop;
      const sync = () => {
        if (pending) {
          return;
        }
        cleanup();
        const result = fn(single ? values[0] : values, set2, update2);
        if (auto) {
          set2(result);
        } else {
          cleanup = typeof result === "function" ? result : noop;
        }
      };
      const unsubscribers = stores_array.map(
        (store, i) => subscribe_to_store(
          store,
          (value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (started) {
              sync();
            }
          },
          () => {
            pending |= 1 << i;
          }
        )
      );
      started = true;
      sync();
      return function stop() {
        run_all(unsubscribers);
        cleanup();
        started = false;
      };
    });
  }
  function get2(store) {
    let value;
    subscribe_to_store(store, (_) => value = _)();
    return value;
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/reactivity/store.js
  var is_store_binding = false;
  var IS_UNMOUNTED = Symbol();
  function store_get(store, store_name, stores) {
    const entry = stores[store_name] ??= {
      store: null,
      source: mutable_source(void 0),
      unsubscribe: noop
    };
    if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
      entry.unsubscribe();
      entry.store = store ?? null;
      if (store == null) {
        entry.source.v = void 0;
        entry.unsubscribe = noop;
      } else {
        var is_synchronous_callback = true;
        entry.unsubscribe = subscribe_to_store(store, (v) => {
          if (is_synchronous_callback) {
            entry.source.v = v;
          } else {
            set(entry.source, v);
          }
        });
        is_synchronous_callback = false;
      }
    }
    if (store && IS_UNMOUNTED in stores) {
      return get2(store);
    }
    return get(entry.source);
  }
  function setup_stores() {
    const stores = {};
    function cleanup() {
      teardown(() => {
        for (var store_name in stores) {
          const ref = stores[store_name];
          ref.unsubscribe();
        }
        define_property(stores, IS_UNMOUNTED, {
          enumerable: false,
          value: true
        });
      });
    }
    return [stores, cleanup];
  }
  function capture_store_binding(fn) {
    var previous_is_store_binding = is_store_binding;
    try {
      is_store_binding = false;
      return [fn(), is_store_binding];
    } finally {
      is_store_binding = previous_is_store_binding;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/reactivity/props.js
  function has_destroyed_component_ctx(current_value) {
    return current_value.ctx?.d ?? false;
  }
  function prop(props, key, flags, fallback2) {
    var immutable = (flags & PROPS_IS_IMMUTABLE) !== 0;
    var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
    var bindable = (flags & PROPS_IS_BINDABLE) !== 0;
    var lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0;
    var is_store_sub = false;
    var prop_value;
    if (bindable) {
      [prop_value, is_store_sub] = capture_store_binding(() => (
        /** @type {V} */
        props[key]
      ));
    } else {
      prop_value = /** @type {V} */
      props[key];
    }
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    var setter = bindable && (get_descriptor(props, key)?.set ?? (is_entry_props && key in props && ((v) => props[key] = v))) || void 0;
    var fallback_value = (
      /** @type {V} */
      fallback2
    );
    var fallback_dirty = true;
    var fallback_used = false;
    var get_fallback = () => {
      fallback_used = true;
      if (fallback_dirty) {
        fallback_dirty = false;
        if (lazy) {
          fallback_value = untrack(
            /** @type {() => V} */
            fallback2
          );
        } else {
          fallback_value = /** @type {V} */
          fallback2;
        }
      }
      return fallback_value;
    };
    if (prop_value === void 0 && fallback2 !== void 0) {
      if (setter && runes) {
        props_invalid_value(key);
      }
      prop_value = get_fallback();
      if (setter) setter(prop_value);
    }
    var getter;
    if (runes) {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key]
        );
        if (value === void 0) return get_fallback();
        fallback_dirty = true;
        fallback_used = false;
        return value;
      };
    } else {
      var derived_getter = (immutable ? derived : derived_safe_equal)(
        () => (
          /** @type {V} */
          props[key]
        )
      );
      derived_getter.f |= LEGACY_DERIVED_PROP;
      getter = () => {
        var value = get(derived_getter);
        if (value !== void 0) fallback_value = /** @type {V} */
        void 0;
        return value === void 0 ? fallback_value : value;
      };
    }
    if ((flags & PROPS_IS_UPDATED) === 0) {
      return getter;
    }
    if (setter) {
      var legacy_parent = props.$$legacy;
      return function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        } else {
          return getter();
        }
      };
    }
    var from_child = false;
    var was_from_child = false;
    var inner_current_value = mutable_source(prop_value);
    var current_value = derived(() => {
      var parent_value = getter();
      var child_value = get(inner_current_value);
      if (from_child) {
        from_child = false;
        was_from_child = true;
        return child_value;
      }
      was_from_child = false;
      return inner_current_value.v = parent_value;
    });
    if (bindable) {
      get(current_value);
    }
    if (!immutable) current_value.equals = safe_equals;
    return function(value, mutation) {
      if (captured_signals !== null) {
        from_child = was_from_child;
        getter();
        get(inner_current_value);
      }
      if (arguments.length > 0) {
        const new_value = mutation ? get(current_value) : runes && bindable ? proxy(value) : value;
        if (!current_value.equals(new_value)) {
          from_child = true;
          set(inner_current_value, new_value);
          if (fallback_used && fallback_value !== void 0) {
            fallback_value = new_value;
          }
          if (has_destroyed_component_ctx(current_value)) {
            return value;
          }
          untrack(() => get(current_value));
        }
        return value;
      }
      if (has_destroyed_component_ctx(current_value)) {
        return current_value.v;
      }
      return get(current_value);
    };
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/legacy/legacy-client.js
  function createClassComponent(options) {
    return new Svelte4Component(options);
  }
  var Svelte4Component = class {
    /** @type {any} */
    #events;
    /** @type {Record<string, any>} */
    #instance;
    /**
     * @param {ComponentConstructorOptions & {
     *  component: any;
     * }} options
     */
    constructor(options) {
      var sources = /* @__PURE__ */ new Map();
      var add_source = (key, value) => {
        var s = mutable_source(value);
        sources.set(key, s);
        return s;
      };
      const props = new Proxy(
        { ...options.props || {}, $$events: {} },
        {
          get(target, prop2) {
            return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          },
          has(target, prop2) {
            if (prop2 === LEGACY_PROPS) return true;
            get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
            return Reflect.has(target, prop2);
          },
          set(target, prop2, value) {
            set(sources.get(prop2) ?? add_source(prop2, value), value);
            return Reflect.set(target, prop2, value);
          }
        }
      );
      this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
        target: options.target,
        anchor: options.anchor,
        props,
        context: options.context,
        intro: options.intro ?? false,
        recover: options.recover
      });
      if (!options?.props?.$$host || options.sync === false) {
        flushSync();
      }
      this.#events = props.$$events;
      for (const key of Object.keys(this.#instance)) {
        if (key === "$set" || key === "$destroy" || key === "$on") continue;
        define_property(this, key, {
          get() {
            return this.#instance[key];
          },
          /** @param {any} value */
          set(value) {
            this.#instance[key] = value;
          },
          enumerable: true
        });
      }
      this.#instance.$set = /** @param {Record<string, any>} next */
      (next2) => {
        Object.assign(props, next2);
      };
      this.#instance.$destroy = () => {
        unmount(this.#instance);
      };
    }
    /** @param {Record<string, any>} props */
    $set(props) {
      this.#instance.$set(props);
    }
    /**
     * @param {string} event
     * @param {(...args: any[]) => any} callback
     * @returns {any}
     */
    $on(event2, callback) {
      this.#events[event2] = this.#events[event2] || [];
      const cb = (...args) => callback.call(this, ...args);
      this.#events[event2].push(cb);
      return () => {
        this.#events[event2] = this.#events[event2].filter(
          /** @param {any} fn */
          (fn) => fn !== cb
        );
      };
    }
    $destroy() {
      this.#instance.$destroy();
    }
  };

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/client/dom/elements/custom-element.js
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      /** The Svelte component constructor */
      $$ctor;
      /** Slots */
      $$s;
      /** @type {any} The Svelte component instance */
      $$c;
      /** Whether or not the custom element is connected */
      $$cn = false;
      /** @type {Record<string, any>} Component props data */
      $$d = {};
      /** `true` if currently in the process of reflecting component props back to attributes */
      $$r = false;
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      $$p_d = {};
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      $$l = {};
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      $$l_u = /* @__PURE__ */ new Map();
      /** @type {any} The managed render effect for reflecting attributes */
      $$me;
      /**
       * @param {*} $$componentCtor
       * @param {*} $$slots
       * @param {*} use_shadow_dom
       */
      constructor($$componentCtor, $$slots, use_shadow_dom) {
        super();
        this.$$ctor = $$componentCtor;
        this.$$s = $$slots;
        if (use_shadow_dom) {
          this.attachShadow({ mode: "open" });
        }
      }
      /**
       * @param {string} type
       * @param {EventListenerOrEventListenerObject} listener
       * @param {boolean | AddEventListenerOptions} [options]
       */
      addEventListener(type, listener, options) {
        this.$$l[type] = this.$$l[type] || [];
        this.$$l[type].push(listener);
        if (this.$$c) {
          const unsub = this.$$c.$on(type, listener);
          this.$$l_u.set(listener, unsub);
        }
        super.addEventListener(type, listener, options);
      }
      /**
       * @param {string} type
       * @param {EventListenerOrEventListenerObject} listener
       * @param {boolean | AddEventListenerOptions} [options]
       */
      removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
        if (this.$$c) {
          const unsub = this.$$l_u.get(listener);
          if (unsub) {
            unsub();
            this.$$l_u.delete(listener);
          }
        }
      }
      async connectedCallback() {
        this.$$cn = true;
        if (!this.$$c) {
          let create_slot = function(name) {
            return (anchor) => {
              const slot2 = document.createElement("slot");
              if (name !== "default") slot2.name = name;
              append(anchor, slot2);
            };
          };
          await Promise.resolve();
          if (!this.$$cn || this.$$c) {
            return;
          }
          const $$slots = {};
          const existing_slots = get_custom_elements_slots(this);
          for (const name of this.$$s) {
            if (name in existing_slots) {
              if (name === "default" && !this.$$d.children) {
                this.$$d.children = create_slot(name);
                $$slots.default = true;
              } else {
                $$slots[name] = create_slot(name);
              }
            }
          }
          for (const attribute of this.attributes) {
            const name = this.$$g_p(attribute.name);
            if (!(name in this.$$d)) {
              this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
            }
          }
          for (const key in this.$$p_d) {
            if (!(key in this.$$d) && this[key] !== void 0) {
              this.$$d[key] = this[key];
              delete this[key];
            }
          }
          this.$$c = createClassComponent({
            component: this.$$ctor,
            target: this.shadowRoot || this,
            props: {
              ...this.$$d,
              $$slots,
              $$host: this
            }
          });
          this.$$me = effect_root(() => {
            render_effect(() => {
              this.$$r = true;
              for (const key of object_keys(this.$$c)) {
                if (!this.$$p_d[key]?.reflect) continue;
                this.$$d[key] = this.$$c[key];
                const attribute_value = get_custom_element_value(
                  key,
                  this.$$d[key],
                  this.$$p_d,
                  "toAttribute"
                );
                if (attribute_value == null) {
                  this.removeAttribute(this.$$p_d[key].attribute || key);
                } else {
                  this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
                }
              }
              this.$$r = false;
            });
          });
          for (const type in this.$$l) {
            for (const listener of this.$$l[type]) {
              const unsub = this.$$c.$on(type, listener);
              this.$$l_u.set(listener, unsub);
            }
          }
          this.$$l = {};
        }
      }
      // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
      // and setting attributes through setAttribute etc, this is helpful
      /**
       * @param {string} attr
       * @param {string} _oldValue
       * @param {string} newValue
       */
      attributeChangedCallback(attr2, _oldValue, newValue) {
        if (this.$$r) return;
        attr2 = this.$$g_p(attr2);
        this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
        this.$$c?.$set({ [attr2]: this.$$d[attr2] });
      }
      disconnectedCallback() {
        this.$$cn = false;
        Promise.resolve().then(() => {
          if (!this.$$cn && this.$$c) {
            this.$$c.$destroy();
            this.$$me();
            this.$$c = void 0;
          }
        });
      }
      /**
       * @param {string} attribute_name
       */
      $$g_p(attribute_name) {
        return object_keys(this.$$p_d).find(
          (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
        ) || attribute_name;
      }
    };
  }
  function get_custom_element_value(prop2, value, props_definition, transform) {
    const type = props_definition[prop2]?.type;
    value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
    if (!transform || !props_definition[prop2]) {
      return value;
    } else if (transform === "toAttribute") {
      switch (type) {
        case "Object":
        case "Array":
          return value == null ? null : JSON.stringify(value);
        case "Boolean":
          return value ? "" : null;
        case "Number":
          return value == null ? null : value;
        default:
          return value;
      }
    } else {
      switch (type) {
        case "Object":
        case "Array":
          return value && JSON.parse(value);
        case "Boolean":
          return value;
        // conversion already handled above
        case "Number":
          return value != null ? +value : value;
        default:
          return value;
      }
    }
  }
  function get_custom_elements_slots(element2) {
    const result = {};
    element2.childNodes.forEach((node) => {
      result[
        /** @type {Element} node */
        node.slot || "default"
      ] = true;
    });
    return result;
  }

  // ../../packages/blender-elements/src/icons.ts
  var svg = {
    collapsed: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4707 4.75001C5.20607 4.76561 4.99957 4.98493 5 5.25001V9.50001C5.00017 9.85719 5.36395 10.099 5.69336 9.96095L10.4434 7.96095C10.8411 7.79354 10.8542 7.2348 10.4649 7.04884L5.71486 4.79884C5.63886 4.76224 5.5549 4.74541 5.4707 4.75001V4.75001Z" fill="white"/>
</svg>`,
    expanded: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25002 5C4.88275 5.00029 4.64109 5.38318 4.79885 5.71484L7.04885 10.4648C7.2301 10.8441 7.76994 10.8441 7.95119 10.4648L10.2012 5.71484C10.3589 5.38318 10.1173 5.00029 9.75002 5H5.25002Z" fill="white"/>
</svg>`,
    "eye-opened": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49964 3C4.2218 2.99906 2.46364 5.7211 1.13636 7.16211C0.959918 7.35357 0.959918 7.64838 1.13636 7.83984C2.46386 9.28108 4.22229 11.9998 7.49964 12.002C10.7776 12.004 12.5357 9.28077 13.8629 7.83984C14.0394 7.64838 14.0394 7.35357 13.8629 7.16211C12.5355 5.72096 10.7772 3.00094 7.49964 3ZM7.49964 4C7.95927 4 8.41439 4.09053 8.83903 4.26642C9.26367 4.44231 9.64952 4.70011 9.97452 5.02512C10.2995 5.35012 10.5573 5.73597 10.7332 6.16061C10.9091 6.58525 10.9996 7.04037 10.9996 7.5C10.9996 7.95963 10.9091 8.41475 10.7332 8.83939C10.5573 9.26403 10.2995 9.64988 9.97452 9.97488C9.64952 10.2999 9.26367 10.5577 8.83903 10.7336C8.41439 10.9095 7.95927 11 7.49964 11C7.04001 11 6.58489 10.9095 6.16025 10.7336C5.73561 10.5577 5.34976 10.2999 5.02476 9.97488C4.69975 9.64988 4.44195 9.26403 4.26606 8.83939C4.09017 8.41475 3.99964 7.95963 3.99964 7.5C3.99964 7.04037 4.09017 6.58525 4.26606 6.16061C4.44195 5.73597 4.69975 5.35012 5.02476 5.02512C5.34976 4.70011 5.73561 4.44231 6.16025 4.26642C6.58489 4.09053 7.04001 4 7.49964 4ZM7.49964 6C7.30266 6 7.10762 6.03878 6.92563 6.11417C6.74365 6.18955 6.57826 6.30004 6.43897 6.43933C6.29968 6.57862 6.18922 6.74398 6.11384 6.92596C6.03845 7.10795 5.99964 7.30302 5.99964 7.5C5.99964 7.69698 6.03845 7.89205 6.11384 8.07404C6.18922 8.25602 6.29968 8.42138 6.43897 8.56067C6.57826 8.69996 6.74365 8.81045 6.92563 8.88583C7.10762 8.96122 7.30266 9 7.49964 9C7.69662 9 7.89169 8.96122 8.07368 8.88583C8.25566 8.81045 8.42102 8.69996 8.56031 8.56067C8.6996 8.42138 8.81009 8.25602 8.88547 8.07404C8.96086 7.89205 8.99964 7.69698 8.99964 7.5C8.99964 7.30302 8.96086 7.10795 8.88547 6.92596C8.81009 6.74398 8.6996 6.57862 8.56031 6.43933C8.42102 6.30004 8.25566 6.18955 8.07368 6.11417C7.89169 6.03878 7.69662 6 7.49964 6V6Z" fill="white"/>
</svg>`,
    "eye-closed": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M1.50172 7.00001C1.40664 7.00579 1.3152 7.0386 1.23814 7.09459C1.16107 7.15057 1.1016 7.22739 1.06672 7.31602C1.03184 7.40466 1.02299 7.50143 1.04124 7.59492C1.05948 7.68841 1.10404 7.77474 1.16969 7.84376C2.49359 9.28193 4.25209 12.002 7.51539 12.002C10.7787 12.002 12.5391 9.28193 13.863 7.84376C13.9075 7.79542 13.9421 7.73877 13.9647 7.67708C13.9873 7.61538 13.9975 7.54983 13.9948 7.48418C13.9921 7.41852 13.9765 7.35406 13.9488 7.29445C13.9212 7.23483 13.8821 7.18123 13.8337 7.13673C13.7854 7.09223 13.7288 7.05769 13.6671 7.03508C13.6054 7.01247 13.5398 7.00224 13.4742 7.00496C13.4085 7.00768 13.344 7.02331 13.2844 7.05095C13.2248 7.07859 13.1712 7.11768 13.1267 7.16603C11.6912 8.72549 10.2206 11.002 7.51539 11.002C4.81014 11.002 3.33962 8.72549 1.90406 7.16603C1.85384 7.10982 1.79158 7.06569 1.7219 7.03694C1.65223 7.00819 1.57696 6.99557 1.50172 7.00001Z" fill="white"/>
</svg>`,
    "chevron-right": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.49412 3.99414C6.39453 3.99416 6.29722 4.02391 6.21465 4.07959C6.13208 4.13527 6.06801 4.21432 6.03066 4.30664C5.99332 4.39896 5.98439 4.50035 6.00502 4.59778C6.02565 4.69521 6.0749 4.78426 6.14647 4.85352L9.79295 8.5L6.14647 12.1465C6.09851 12.1926 6.06022 12.2477 6.03385 12.3088C6.00748 12.3698 5.99355 12.4356 5.99288 12.5021C5.99222 12.5686 6.00483 12.6345 6.02997 12.6961C6.05511 12.7577 6.09229 12.8136 6.13932 12.8607C6.18635 12.9077 6.24229 12.9449 6.30386 12.97C6.36543 12.9952 6.4314 13.0077 6.49791 13.0071C6.56441 13.0064 6.63012 12.9925 6.69118 12.9661C6.75224 12.9398 6.80742 12.9015 6.8535 12.8535L10.8535 8.85352C10.9472 8.75974 10.9999 8.63259 10.9999 8.5C10.9999 8.36741 10.9472 8.24026 10.8535 8.14648L6.8535 4.14648C6.80687 4.09829 6.75103 4.05998 6.68929 4.03381C6.62755 4.00764 6.56118 3.99414 6.49412 3.99414V3.99414Z" fill="#f9f9f9"/>
</svg>`,
    "chevron-left": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.49861 3.99414C9.5982 3.99416 9.69552 4.02391 9.77809 4.07959C9.86066 4.13527 9.92472 4.21432 9.96207 4.30664C9.99942 4.39896 10.0083 4.50035 9.98772 4.59778C9.96709 4.69521 9.91783 4.78426 9.84627 4.85352L6.19978 8.5L9.84627 12.1465C9.89423 12.1926 9.93252 12.2477 9.95889 12.3088C9.98526 12.3698 9.99919 12.4356 9.99985 12.5021C10.0005 12.5686 9.98791 12.6345 9.96277 12.6961C9.93762 12.7577 9.90045 12.8136 9.85342 12.8607C9.80639 12.9077 9.75045 12.9449 9.68888 12.97C9.62731 12.9952 9.56133 13.0077 9.49483 13.0071C9.42832 13.0064 9.36262 12.9925 9.30156 12.9661C9.2405 12.9398 9.18532 12.9015 9.13924 12.8535L5.13924 8.85352C5.0455 8.75974 4.99285 8.63259 4.99285 8.5C4.99285 8.36741 5.0455 8.24026 5.13924 8.14648L9.13924 4.14648C9.18587 4.09829 9.24171 4.05998 9.30345 4.03381C9.36518 4.00764 9.43156 3.99414 9.49861 3.99414V3.99414Z" fill="white"/>
</svg>`,
    "chevron-down": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49021 5.99416C3.39045 5.99379 3.29287 6.02329 3.20999 6.07882C3.12712 6.13435 3.06274 6.21335 3.02515 6.30575C2.98756 6.39815 2.97846 6.4997 2.99903 6.59731C3.0196 6.69493 3.06891 6.78417 3.1406 6.85354L7.1406 10.8535C7.23437 10.9473 7.36153 11 7.49411 11C7.6267 11 7.75386 10.9473 7.84763 10.8535L11.8476 6.85354C11.8956 6.80746 11.9338 6.7523 11.9602 6.69125C11.9865 6.6302 12.0004 6.5645 12.0011 6.49801C12.0018 6.43152 11.9892 6.36554 11.964 6.30398C11.9389 6.24242 11.9017 6.18651 11.8547 6.13949C11.8077 6.09247 11.7517 6.05526 11.6902 6.03011C11.6286 6.00497 11.5627 5.99235 11.4962 5.99301C11.4297 5.99366 11.364 6.00761 11.3029 6.03396C11.2419 6.06031 11.1867 6.09857 11.1406 6.14651L7.49411 9.79299L3.84763 6.14651C3.80123 6.09855 3.74572 6.06037 3.68433 6.0342C3.62294 6.00804 3.55694 5.99442 3.49021 5.99416V5.99416Z" fill="white"/>
</svg>`,
    search: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0071 1C7.25939 1 5.00712 3.25226 5.00712 6C5.00712 7.1945 5.44861 8.28163 6.15556 9.14453L1.1536 14.1465C1.10564 14.1926 1.06736 14.2477 1.04099 14.3088C1.01462 14.3698 1.00069 14.4356 1.00003 14.5021C0.999359 14.5686 1.01197 14.6345 1.03711 14.6961C1.06226 14.7577 1.09943 14.8136 1.14646 14.8607C1.19348 14.9077 1.24943 14.9449 1.311 14.97C1.37257 14.9952 1.43854 15.0077 1.50505 15.0071C1.57155 15.0064 1.63726 14.9925 1.69831 14.9661C1.75937 14.9398 1.81456 14.9015 1.86064 14.8535L6.86259 9.85156C7.72549 10.5585 8.81262 11 10.0071 11C12.7549 11 15.0071 8.74773 15.0071 6C15.0071 3.25226 12.7549 1 10.0071 1ZM10.0071 2C12.2094 2 14.0071 3.79773 14.0071 6C14.0071 8.20226 12.2094 10 10.0071 10C7.80485 10 6.00712 8.20226 6.00712 6C6.00712 3.79773 7.80485 2 10.0071 2Z" fill="white"/>
</svg>`,
    cross: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8635 4.14683C11.9557 4.24194 12.0064 4.36975 12.0044 4.50219C12.0025 4.63463 11.9481 4.76088 11.8531 4.85325L8.70638 8.00001L11.8531 11.1468C11.9031 11.1923 11.9433 11.2475 11.9714 11.3091C11.9994 11.3706 12.0146 11.4372 12.0162 11.5048C12.0178 11.5724 12.0056 11.6396 11.9805 11.7023C11.9553 11.7651 11.9177 11.8221 11.8699 11.8699C11.8221 11.9177 11.7651 11.9554 11.7023 11.9805C11.6395 12.0057 11.5723 12.0178 11.5047 12.0162C11.4371 12.0147 11.3706 11.9994 11.309 11.9714C11.2475 11.9434 11.1923 11.9032 11.1467 11.8532L7.99997 8.70643L4.8532 11.8532C4.80765 11.9032 4.75244 11.9434 4.69091 11.9714C4.62937 11.9994 4.56282 12.0147 4.49522 12.0163C4.42762 12.0178 4.3604 12.0057 4.29764 11.9805C4.23488 11.9554 4.17786 11.9177 4.13005 11.8699C4.08224 11.8221 4.04461 11.7651 4.01946 11.7023C3.99431 11.6396 3.98216 11.5724 3.98373 11.5048C3.98529 11.4372 4.00055 11.3706 4.02858 11.3091C4.0566 11.2475 4.09682 11.1923 4.14679 11.1468L7.29355 8.00001L4.14679 4.85325C4.09682 4.8077 4.05659 4.75249 4.02857 4.69096C4.00054 4.62943 3.9853 4.56286 3.98374 4.49526C3.98217 4.42766 3.99432 4.36044 4.01947 4.29768C4.04462 4.23492 4.08224 4.17791 4.13005 4.1301C4.17786 4.08229 4.23487 4.04467 4.29763 4.01952C4.3604 3.99437 4.42762 3.98222 4.49521 3.98378C4.56281 3.98535 4.62938 4.00059 4.69091 4.02861C4.75245 4.05664 4.80765 4.09686 4.8532 4.14683L7.99997 7.2936L11.1467 4.14683C11.1933 4.09895 11.249 4.06088 11.3106 4.03489C11.3722 4.0089 11.4383 3.99551 11.5051 3.99551C11.5719 3.99551 11.6381 4.0089 11.6996 4.03489C11.7612 4.06089 11.8169 4.09894 11.8635 4.14683Z" fill="white"/>
</svg>`,
    copy: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M9.51559 1C9.23947 1.00003 9.01563 1.22387 9.01559 1.5V2H7.51559C7.18694 2.005 6.99997 2.25232 6.99997 2.5V3H9.51559H10.5156H13V2.5C13 2.24733 12.8509 2.00474 12.5156 2H11.0156V1.5C11.0156 1.22387 10.7917 1.00003 10.5156 1H9.51559ZM13 3L13.0156 3.5V4H7.01556V3.5L6.99997 3H5.51559C5.23947 3.00003 5.01563 3.22387 5.01559 3.5V7H7.32419C7.37794 6.9925 7.43205 6.98793 7.4863 6.9863C7.70347 6.98018 7.91938 7.02131 8.11909 7.10684C8.31881 7.19237 8.49757 7.32027 8.64301 7.48167C8.78844 7.64308 8.89708 7.83414 8.96141 8.04166C9.02574 8.24917 9.04423 8.4682 9.01559 8.68356V13H14.5156C14.7917 13 15.0156 12.7761 15.0156 12.5V3.5C15.0156 3.22387 14.7917 3.00003 14.5156 3H13Z" fill="white"/>
<path d="M7.50582 7.99609C7.48883 7.99656 7.47188 7.99789 7.45503 8.00009H3.51556C3.4493 7.99915 3.38353 8.01139 3.32205 8.0361C3.26056 8.06081 3.2046 8.09749 3.15742 8.14401C3.11023 8.19053 3.07276 8.24597 3.04719 8.3071C3.02162 8.36822 3.00845 8.43383 3.00845 8.50009C3.00845 8.56635 3.02162 8.63195 3.04719 8.69308C3.07276 8.75421 3.11023 8.80965 3.15742 8.85617C3.2046 8.90269 3.26056 8.93937 3.32205 8.96408C3.38353 8.98878 3.4493 9.00103 3.51556 9.00009H6.30853L1.16206 14.1466C1.11409 14.1926 1.07579 14.2478 1.04942 14.3089C1.02304 14.3699 1.00912 14.4357 1.00845 14.5022C1.00778 14.5687 1.02038 14.6346 1.04553 14.6962C1.07067 14.7578 1.10786 14.8137 1.15489 14.8608C1.20192 14.9078 1.25785 14.945 1.31942 14.9701C1.381 14.9953 1.44697 15.0079 1.51348 15.0072C1.57999 15.0065 1.64571 14.9926 1.70677 14.9662C1.76783 14.9399 1.82301 14.9016 1.86909 14.8536L7.01556 9.70712V12.5C7.01462 12.5663 7.02686 12.632 7.05157 12.6935C7.07628 12.755 7.11296 12.811 7.15948 12.8582C7.206 12.9053 7.26144 12.9428 7.32257 12.9684C7.38369 12.994 7.4493 13.0071 7.51556 13.0071C7.58182 13.0071 7.64742 12.994 7.70855 12.9684C7.76968 12.9428 7.82512 12.9053 7.87164 12.8582C7.91816 12.811 7.95484 12.755 7.97955 12.6935C8.00425 12.632 8.0165 12.5663 8.01556 12.5V8.55664C8.02429 8.48525 8.01752 8.41281 7.99571 8.34428C7.97389 8.27575 7.93754 8.21274 7.88915 8.15953C7.84077 8.10632 7.78148 8.06417 7.71533 8.03596C7.64917 8.00776 7.5777 7.99416 7.50581 7.99609H7.50582Z" fill="white"/>
</svg>`,
    warning: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.01168 0.99997C7.32174 0.99597 6.68595 1.3851 6.37691 2.00192L1.18941 12.373C0.595165 13.5605 1.48251 14.9992 2.81051 15H13.1894C14.5167 14.9992 15.4028 13.5621 14.8105 12.375L9.62301 2.00192C9.31771 1.39255 8.69329 1.00457 8.01168 0.99997ZM6.99996 3.99997H8.99996V9.99997H6.99996V3.99997ZM6.99996 11H8.99996V13H6.99996V11Z" fill="white"/>
</svg>`,
    error: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C4.13992 1 1 4.13991 1 8C1 11.8601 4.13992 15 8 15C11.8601 15 15 11.8601 15 8C15 4.13991 11.8601 1 8 1ZM10.9902 3.98633C11.1917 3.98158 11.3898 4.0378 11.5588 4.14758C11.7277 4.25736 11.8595 4.41558 11.937 4.60156C12.0145 4.78755 12.034 4.99263 11.993 5.18988C11.9519 5.38713 11.8523 5.56738 11.707 5.70703L9.41406 8L11.707 10.293C11.803 10.3851 11.8796 10.4955 11.9324 10.6176C11.9852 10.7397 12.0131 10.8712 12.0145 11.0042C12.0158 11.1373 11.9906 11.2693 11.9403 11.3925C11.89 11.5156 11.8157 11.6275 11.7216 11.7216C11.6275 11.8157 11.5156 11.89 11.3924 11.9403C11.2692 11.9906 11.1373 12.0158 11.0042 12.0145C10.8712 12.0131 10.7397 11.9852 10.6176 11.9324C10.4955 11.8796 10.3851 11.803 10.293 11.707L8 9.41406L5.70703 11.707C5.61489 11.803 5.50452 11.8796 5.38239 11.9324C5.26026 11.9852 5.12882 12.0131 4.99577 12.0145C4.86273 12.0158 4.73076 11.9906 4.60757 11.9403C4.48439 11.89 4.37249 11.8157 4.2784 11.7216C4.18432 11.6275 4.10996 11.5156 4.05967 11.3925C4.00938 11.2693 3.98418 11.1373 3.98553 11.0042C3.98689 10.8712 4.01478 10.7397 4.06757 10.6176C4.12036 10.4955 4.19699 10.3851 4.29297 10.293L6.58594 8L4.29297 5.70703C4.15041 5.56828 4.05246 5.3902 4.01166 5.1955C3.97085 5.00079 3.98904 4.79833 4.0639 4.61401C4.13875 4.4297 4.26688 4.27188 4.43189 4.16077C4.5969 4.04965 4.7913 3.99029 4.99023 3.99023C5.12388 3.99024 5.25617 4.01703 5.37928 4.06903C5.5024 4.12103 5.61384 4.19717 5.70703 4.29297L8 6.58594L10.293 4.29297C10.4758 4.10278 10.7265 3.99256 10.9902 3.98633V3.98633Z" fill="white"/>
</svg>`,
    checkbox: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6811 3.58826L5.32765 9.78696L1.89453 6.66595L3.10534 5.33405L5.17222 7.21304L9.3188 2.41174L10.6811 3.58826Z" fill="white"/>
</svg>`,
    selectable: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49123 3C3.14153 3.006 2.90637 3.36077 3.03618 3.68555L7.03618 13.6875C7.21408 14.1378 7.86424 14.0977 7.9854 13.6289L9.16118 9.16016L13.6279 7.98438C14.0929 7.86117 14.1328 7.21669 13.6866 7.03711L3.68657 3.03516C3.62447 3.01046 3.55803 2.99857 3.49123 3.00007V3Z" fill="white"/>
</svg>`,
    unselectable: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M3.49078 3C3.40987 3.00149 3.33053 3.0226 3.25957 3.06152C3.18862 3.10043 3.12818 3.15599 3.08343 3.22341C3.03867 3.29084 3.01096 3.36811 3.00265 3.4486C2.99434 3.5291 3.00566 3.6104 3.0357 3.68554L7.0357 13.6875C7.06006 13.7485 7.09621 13.8042 7.14208 13.8513C7.18795 13.8983 7.24267 13.9359 7.30306 13.9618C7.36346 13.9878 7.42835 14.0016 7.49407 14.0024C7.55979 14.0033 7.62504 13.9912 7.68609 13.9668C7.74713 13.9424 7.80277 13.9063 7.84985 13.8604C7.89692 13.8145 7.93451 13.7599 7.96044 13.6995C7.98638 13.6391 8.00015 13.5741 8.001 13.5084C8.00185 13.4427 7.98975 13.3774 7.96538 13.3164L4.39898 4.39843L13.315 7.96484C13.3765 7.99253 13.443 8.00749 13.5104 8.00881C13.5779 8.01014 13.6449 7.99781 13.7074 7.97256C13.77 7.94731 13.8268 7.90964 13.8744 7.86187C13.922 7.8141 13.9595 7.7572 13.9845 7.69458C14.0096 7.63195 14.0217 7.5649 14.0202 7.49746C14.0186 7.43003 14.0035 7.36357 13.9756 7.30215C13.9477 7.24073 13.9077 7.18559 13.8579 7.14004C13.8082 7.09449 13.7497 7.05948 13.6861 7.0371L3.68609 3.03515C3.62398 3.0105 3.55758 2.99855 3.49078 3V3Z" fill="white"/>
</svg>`,
    scene: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.48242 1C5.29282 1.007 5.12337 1.12023 5.04492 1.29297L1.27148 9.54297C1.27014 9.54597 1.26884 9.54998 1.26757 9.55298C1.15875 9.80634 1 10.1012 1 10.5C1 11.3381 1.52617 12.0347 2.29688 12.4219C3.06758 12.809 4.087 12.9777 5.32031 12.9941C5.61568 12.9971 5.84959 12.7455 5.82422 12.4512C5.82517 12.462 5.81313 12.0726 5.80859 11.7422C5.80409 11.4117 5.80079 11.0724 5.80079 11C5.80079 9.13232 6.81641 7.48086 8.32032 6.5625C8.54869 6.42322 8.627 6.12889 8.49806 5.89453L5.9375 1.25781C5.84642 1.09307 5.67055 0.993431 5.48242 1ZM13 1C11.9014 1 11 1.90136 11 3C11 4.09864 11.9014 5 13 5C14.0986 5 15 4.09864 15 3C15 1.90136 14.0986 1 13 1ZM11 7C8.79678 7 7 8.79678 7 11C7 13.2032 8.79678 15 11 15C13.2032 15 15 13.2032 15 11C15 8.79678 13.2032 7 11 7ZM11 8C12.6628 8 14 9.33722 14 11C14 12.6628 12.6628 14 11 14C9.33722 14 8 12.6628 8 11C8 9.33722 9.33722 8 11 8ZM10.459 9.0332C9.65874 9.0332 9 9.69389 9 10.4941C8.99906 10.5604 9.0113 10.6262 9.03601 10.6877C9.06072 10.7491 9.0974 10.8051 9.14392 10.8523C9.19044 10.8995 9.24588 10.937 9.30701 10.9625C9.36814 10.9881 9.43374 11.0013 9.5 11.0013C9.56626 11.0013 9.63186 10.9881 9.69299 10.9625C9.75412 10.937 9.80956 10.8995 9.85608 10.8523C9.9026 10.8051 9.93928 10.7491 9.96399 10.6877C9.9887 10.6262 10.0009 10.5604 10 10.4941C10 10.2343 10.1992 10.0332 10.459 10.0332C10.5252 10.0341 10.591 10.0219 10.6525 9.99719C10.714 9.97249 10.77 9.93581 10.8171 9.88928C10.8643 9.84276 10.9018 9.78733 10.9274 9.7262C10.9529 9.66507 10.9661 9.59947 10.9661 9.5332C10.9661 9.46694 10.9529 9.40134 10.9274 9.34021C10.9018 9.27908 10.8643 9.22365 10.8171 9.17712C10.77 9.1306 10.714 9.09392 10.6525 9.06921C10.591 9.04451 10.5252 9.03227 10.459 9.0332Z" fill="white"/>
</svg>`,
    object: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M1.49994 1C1.36733 1.00001 1.24017 1.05269 1.1464 1.14645C1.05264 1.24022 0.999952 1.3674 0.999939 1.5V5H1.99994V2H4.99994V1H1.49994ZM10.9999 1V2H13.9999V5H14.9999V1.5C14.9999 1.3674 14.9472 1.24022 14.8535 1.14645C14.7597 1.05269 14.6325 1.00001 14.4999 1H10.9999ZM0.999939 11V14.5C0.999952 14.6326 1.05264 14.7598 1.1464 14.8535C1.24017 14.9473 1.36733 15 1.49994 15H4.99994V14H1.99994V11H0.999939ZM13.9999 11V14H10.9999V15H14.4999C14.6325 15 14.7597 14.9473 14.8535 14.8535C14.9472 14.7598 14.9999 14.6326 14.9999 14.5V11H13.9999Z" fill="#e09558"/>
<path d="M4.49994 4C4.22381 4.00003 3.99997 4.22387 3.99994 4.5V11.5C3.99997 11.7761 4.22381 12 4.49994 12H11.4999C11.7761 12 11.9999 11.7761 11.9999 11.5V4.5C11.9999 4.22387 11.7761 4.00003 11.4999 4H4.49994Z" fill="#e09558"/>
</svg>`,
    text: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1C5.41288 1 4.02184 2.04607 3.10938 3.1875C3.02649 3.2911 2.98817 3.42338 3.00282 3.55524C3.01747 3.6871 3.0839 3.80774 3.1875 3.89062C3.2911 3.97351 3.42339 4.01184 3.55525 3.99719C3.68711 3.98254 3.80774 3.9161 3.89062 3.8125C4.69049 2.81193 5.73439 2 7.5 2C9.59839 2 10.6341 2.87695 11.252 3.94531C11.8698 5.01367 12 6.31651 12 7H6.75C5.47656 7 4.30676 7.36418 3.43555 8.05469C2.56434 8.7452 2.00781 9.7826 2.00781 11C2.00781 12.2174 2.56434 13.2548 3.43555 13.9453C4.30676 14.6358 5.47656 15 6.75 15H7.5C9.25558 15 10.8877 14.0332 12.0371 12.9668C12.1152 13.4998 12.3266 13.9711 12.6777 14.3223C13.1286 14.7731 13.775 15 14.5 15C14.5663 15.0009 14.632 14.9887 14.6935 14.964C14.755 14.9393 14.811 14.9026 14.8582 14.8561C14.9053 14.8096 14.9428 14.7541 14.9684 14.693C14.994 14.6319 15.0071 14.5663 15.0071 14.5C15.0071 14.4337 14.994 14.3681 14.9684 14.307C14.9428 14.2459 14.9053 14.1904 14.8582 14.1439C14.811 14.0974 14.755 14.0607 14.6935 14.036C14.632 14.0113 14.5663 13.9991 14.5 14C13.975 14 13.6214 13.8519 13.3848 13.6152C13.1481 13.3786 13 13.025 13 12.5V7C13 6.20279 12.8776 4.75678 12.1191 3.44531C11.3607 2.13385 9.89646 1 7.5 1ZM6.75 8H12V11.5605C11.0458 12.6847 9.18875 14 7.5 14H6.75C5.66899 14 4.71813 13.6844 4.05664 13.1602C3.39515 12.6359 3.00781 11.9234 3.00781 11C3.00781 10.0766 3.39515 9.36413 4.05664 8.83984C4.71813 8.31555 5.66899 8 6.75 8Z" fill="#00D093"/>
</svg>`,
    bold: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00002 1C3.73481 1.00003 3.48047 1.10538 3.29294 1.29291C3.10541 1.48044 3.00005 1.73479 3.00002 2V7.83203C2.98217 7.94002 2.98217 8.05021 3.00002 8.1582V14C3.00005 14.2652 3.10541 14.5196 3.29294 14.7071C3.48047 14.8946 3.73481 15 4.00002 15H10C12.1973 15 14 13.1973 14 11C14 9.23253 12.8148 7.77201 11.2149 7.24805C11.6724 6.59788 12 5.84948 12 5C12 2.80271 10.1973 1 8.00002 1H4.00002ZM5.00002 3H8.00002C9.11643 3 10 3.88359 10 5C10 6.11641 9.11643 7 8.00002 7H5.00002V3ZM5.00002 9H8.00002H10C11.1164 9 12 9.88359 12 11C12 12.1164 11.1164 13 10 13H5.00002V9Z" fill="white"/>
</svg>`,
    italic: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49217 0.999989C7.42592 0.999052 7.36014 1.01129 7.29866 1.036C7.23718 1.06071 7.1812 1.09739 7.13402 1.14391C7.08683 1.19043 7.04938 1.24587 7.0238 1.307C6.99823 1.36812 6.98505 1.43373 6.98505 1.49999C6.98505 1.56625 6.99823 1.63185 7.0238 1.69298C7.04938 1.75411 7.08683 1.80955 7.13402 1.85607C7.1812 1.90259 7.23718 1.93927 7.29866 1.96398C7.36014 1.98869 7.42592 2.00093 7.49217 1.99999H9.99608L9.99408 2.14257L5.0351 13.5508C5.00602 13.6179 4.99203 13.6906 4.99409 13.7637L4.99998 14H2.49217C2.42592 13.9991 2.36014 14.0113 2.29866 14.036C2.23718 14.0607 2.1812 14.0974 2.13402 14.1439C2.08683 14.1904 2.04938 14.2459 2.0238 14.307C1.99823 14.3681 1.98505 14.4337 1.98505 14.5C1.98505 14.5663 1.99823 14.6319 2.0238 14.693C2.04938 14.7541 2.08683 14.8095 2.13402 14.8561C2.1812 14.9026 2.23718 14.9393 2.29866 14.964C2.36014 14.9887 2.42592 15.0009 2.49217 15H8.49217C8.55843 15.0009 8.62422 14.9887 8.6857 14.964C8.74718 14.9393 8.80314 14.9026 8.85033 14.8561C8.89751 14.8095 8.93498 14.7541 8.96056 14.693C8.98613 14.6319 8.9993 14.5663 8.9993 14.5C8.9993 14.4337 8.98613 14.3681 8.96056 14.307C8.93498 14.2459 8.89751 14.1904 8.85033 14.1439C8.80314 14.0974 8.74718 14.0607 8.6857 14.036C8.62422 14.0113 8.55843 13.9991 8.49217 14H5.99998C6.00005 13.9954 6.00005 13.9909 5.99998 13.9863L5.99599 13.8476L10.9511 2.44918C10.9772 2.3887 10.9911 2.32365 10.9921 2.25777L10.9961 1.99999H13.4922C13.5584 2.00093 13.6242 1.98869 13.6857 1.96398C13.7472 1.93927 13.8031 1.90259 13.8503 1.85607C13.8975 1.80955 13.935 1.75411 13.9606 1.69298C13.9861 1.63185 13.9993 1.56625 13.9993 1.49999C13.9993 1.43373 13.9861 1.36812 13.9606 1.307C13.935 1.24587 13.8975 1.19043 13.8503 1.14391C13.8031 1.09739 13.7472 1.06071 13.6857 1.036C13.6242 1.01129 13.5584 0.999052 13.4922 0.999989H7.49217Z" fill="white"/>
</svg>`,
    "small-caps": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49218 1C1.35957 1.00001 1.23241 1.05269 1.13865 1.14645C1.04488 1.24022 0.99219 1.3674 0.992176 1.5V3.5C0.991239 3.56626 1.00348 3.63203 1.02819 3.69351C1.05289 3.755 1.08958 3.81097 1.1361 3.85815C1.18262 3.90534 1.23805 3.94281 1.29918 3.96838C1.36031 3.99396 1.42591 4.00711 1.49218 4.00711C1.55844 4.00711 1.62404 3.99396 1.68517 3.96838C1.7463 3.94281 1.80173 3.90534 1.84826 3.85815C1.89478 3.81097 1.93146 3.755 1.95617 3.69351C1.98087 3.63203 1.99311 3.56626 1.99218 3.5V2H4.99218V14H3.49218C3.42592 13.9991 3.36015 14.0113 3.29866 14.036C3.23718 14.0607 3.18121 14.0974 3.13402 14.1439C3.08684 14.1904 3.04938 14.2459 3.02381 14.307C2.99823 14.3681 2.98505 14.4337 2.98505 14.5C2.98505 14.5663 2.99823 14.6319 3.02381 14.693C3.04938 14.7541 3.08684 14.8096 3.13402 14.8561C3.18121 14.9026 3.23718 14.9393 3.29866 14.964C3.36015 14.9887 3.42592 15.0009 3.49218 15H7.49218C7.55843 15.0009 7.62422 14.9887 7.6857 14.964C7.74719 14.9393 7.80315 14.9026 7.85033 14.8561C7.89752 14.8096 7.93499 14.7541 7.96056 14.693C7.98613 14.6319 7.9993 14.5663 7.9993 14.5C7.9993 14.4337 7.98613 14.3681 7.96056 14.307C7.93499 14.2459 7.89752 14.1904 7.85033 14.1439C7.80315 14.0974 7.74719 14.0607 7.6857 14.036C7.62422 14.0113 7.55843 13.9991 7.49218 14H5.99218V2H8.99218V3.5C8.99124 3.56626 9.00348 3.63203 9.02819 3.69351C9.05289 3.755 9.08957 3.81097 9.1361 3.85815C9.18262 3.90534 9.23805 3.94281 9.29918 3.96838C9.36031 3.99396 9.42591 4.00711 9.49218 4.00711C9.55844 4.00711 9.62404 3.99396 9.68517 3.96838C9.7463 3.94281 9.80173 3.90534 9.84826 3.85815C9.89478 3.81097 9.93146 3.755 9.95617 3.69351C9.98087 3.63203 9.99311 3.56626 9.99218 3.5V1.5C9.99216 1.3674 9.93949 1.24022 9.84572 1.14645C9.75196 1.05269 9.62478 1.00001 9.49218 1H1.49218ZM8.49218 7C8.35957 7.00001 8.23241 7.05269 8.13865 7.14645C8.04488 7.24022 7.99219 7.3674 7.99218 7.5V8.5C7.99124 8.56626 8.00348 8.63203 8.02819 8.69351C8.05289 8.755 8.08958 8.81097 8.1361 8.85815C8.18262 8.90534 8.23805 8.94281 8.29918 8.96838C8.36031 8.99396 8.42591 9.00711 8.49218 9.00711C8.55844 9.00711 8.62404 8.99396 8.68517 8.96838C8.7463 8.94281 8.80173 8.90534 8.84826 8.85815C8.89478 8.81097 8.93146 8.755 8.95617 8.69351C8.98087 8.63203 8.99311 8.56626 8.99218 8.5V8H10.9922V14H10.4922C10.4259 13.9991 10.3601 14.0113 10.2987 14.036C10.2372 14.0607 10.1812 14.0974 10.134 14.1439C10.0868 14.1904 10.0494 14.2459 10.0238 14.307C9.99823 14.3681 9.98505 14.4337 9.98505 14.5C9.98505 14.5663 9.99823 14.6319 10.0238 14.693C10.0494 14.7541 10.0868 14.8096 10.134 14.8561C10.1812 14.9026 10.2372 14.9393 10.2987 14.964C10.3601 14.9887 10.4259 15.0009 10.4922 15H12.4922C12.5584 15.0009 12.6242 14.9887 12.6857 14.964C12.7472 14.9393 12.8031 14.9026 12.8503 14.8561C12.8975 14.8096 12.935 14.7541 12.9606 14.693C12.9861 14.6319 12.9993 14.5663 12.9993 14.5C12.9993 14.4337 12.9861 14.3681 12.9606 14.307C12.935 14.2459 12.8975 14.1904 12.8503 14.1439C12.8031 14.0974 12.7472 14.0607 12.6857 14.036C12.6242 14.0113 12.5584 13.9991 12.4922 14H11.9922V8H13.9922V8.5C13.9912 8.56626 14.0035 8.63203 14.0282 8.69351C14.0529 8.755 14.0896 8.81097 14.1361 8.85815C14.1826 8.90534 14.2381 8.94281 14.2992 8.96838C14.3603 8.99396 14.4259 9.00711 14.4922 9.00711C14.5584 9.00711 14.624 8.99396 14.6852 8.96838C14.7463 8.94281 14.8017 8.90534 14.8483 8.85815C14.8948 8.81097 14.9315 8.755 14.9562 8.69351C14.9809 8.63203 14.9931 8.56626 14.9922 8.5V7.5C14.9922 7.3674 14.9395 7.24022 14.8457 7.14645C14.752 7.05269 14.6248 7.00001 14.4922 7H8.49218Z" fill="white"/>
</svg>`,
    "text-left": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50001 1.99999C1.43375 1.99905 1.36797 2.01129 1.30649 2.036C1.245 2.06071 1.18904 2.09739 1.14186 2.14391C1.09467 2.19043 1.05721 2.24587 1.03163 2.307C1.00606 2.36812 0.992889 2.43373 0.992889 2.49999C0.992889 2.56625 1.00606 2.63185 1.03163 2.69298C1.05721 2.75411 1.09467 2.80955 1.14186 2.85607C1.18904 2.90259 1.245 2.93927 1.30649 2.96398C1.36797 2.98869 1.43375 3.00093 1.50001 2.99999H14.4922C14.5585 3.00093 14.6242 2.98869 14.6857 2.96398C14.7472 2.93927 14.8032 2.90259 14.8504 2.85607C14.8975 2.80955 14.935 2.75411 14.9606 2.69298C14.9861 2.63185 14.9993 2.56625 14.9993 2.49999C14.9993 2.43373 14.9861 2.36812 14.9606 2.307C14.935 2.24587 14.8975 2.19043 14.8504 2.14391C14.8032 2.09739 14.7472 2.06071 14.6857 2.036C14.6242 2.01129 14.5585 1.99905 14.4922 1.99999H1.50001ZM1.50001 4.99999C1.43375 4.99905 1.36797 5.01129 1.30649 5.036C1.245 5.06071 1.18904 5.09739 1.14186 5.14391C1.09467 5.19043 1.05721 5.24587 1.03163 5.307C1.00606 5.36812 0.992889 5.43373 0.992889 5.49999C0.992889 5.56625 1.00606 5.63185 1.03163 5.69298C1.05721 5.75411 1.09467 5.80955 1.14186 5.85607C1.18904 5.90259 1.245 5.93927 1.30649 5.96398C1.36797 5.98869 1.43375 6.00093 1.50001 5.99999H7.4922C7.55845 6.00093 7.62424 5.98869 7.68572 5.96398C7.7472 5.93927 7.80316 5.90259 7.85035 5.85607C7.89753 5.80955 7.935 5.75411 7.96058 5.69298C7.98615 5.63185 7.99932 5.56625 7.99932 5.49999C7.99932 5.43373 7.98615 5.36812 7.96058 5.307C7.935 5.24587 7.89753 5.19043 7.85035 5.14391C7.80316 5.09739 7.7472 5.06071 7.68572 5.036C7.62424 5.01129 7.55845 4.99905 7.4922 4.99999H1.50001ZM1.50001 7.99999C1.43375 7.99905 1.36797 8.01129 1.30649 8.036C1.245 8.06071 1.18904 8.09739 1.14186 8.14391C1.09467 8.19043 1.05721 8.24587 1.03163 8.307C1.00606 8.36812 0.992889 8.43373 0.992889 8.49999C0.992889 8.56625 1.00606 8.63185 1.03163 8.69298C1.05721 8.75411 1.09467 8.80955 1.14186 8.85607C1.18904 8.90259 1.245 8.93927 1.30649 8.96398C1.36797 8.98869 1.43375 9.00093 1.50001 8.99999H14.4922C14.5585 9.00093 14.6242 8.98869 14.6857 8.96398C14.7472 8.93927 14.8032 8.90259 14.8504 8.85607C14.8975 8.80955 14.935 8.75411 14.9606 8.69298C14.9861 8.63185 14.9993 8.56625 14.9993 8.49999C14.9993 8.43373 14.9861 8.36812 14.9606 8.307C14.935 8.24587 14.8975 8.19043 14.8504 8.14391C14.8032 8.09739 14.7472 8.06071 14.6857 8.036C14.6242 8.01129 14.5585 7.99905 14.4922 7.99999H1.50001ZM1.50001 11C1.43375 10.9991 1.36797 11.0113 1.30649 11.036C1.245 11.0607 1.18904 11.0974 1.14186 11.1439C1.09467 11.1904 1.05721 11.2459 1.03163 11.307C1.00606 11.3681 0.992889 11.4337 0.992889 11.5C0.992889 11.5663 1.00606 11.6319 1.03163 11.693C1.05721 11.7541 1.09467 11.8095 1.14186 11.8561C1.18904 11.9026 1.245 11.9393 1.30649 11.964C1.36797 11.9887 1.43375 12.0009 1.50001 12H7.4922C7.55845 12.0009 7.62424 11.9887 7.68572 11.964C7.7472 11.9393 7.80316 11.9026 7.85035 11.8561C7.89753 11.8095 7.935 11.7541 7.96058 11.693C7.98615 11.6319 7.99932 11.5663 7.99932 11.5C7.99932 11.4337 7.98615 11.3681 7.96058 11.307C7.935 11.2459 7.89753 11.1904 7.85035 11.1439C7.80316 11.0974 7.7472 11.0607 7.68572 11.036C7.62424 11.0113 7.55845 10.9991 7.4922 11H1.50001ZM1.50001 14C1.43375 13.9991 1.36797 14.0113 1.30649 14.036C1.245 14.0607 1.18904 14.0974 1.14186 14.1439C1.09467 14.1904 1.05721 14.2459 1.03163 14.307C1.00606 14.3681 0.992889 14.4337 0.992889 14.5C0.992889 14.5663 1.00606 14.6319 1.03163 14.693C1.05721 14.7541 1.09467 14.8095 1.14186 14.8561C1.18904 14.9026 1.245 14.9393 1.30649 14.964C1.36797 14.9887 1.43375 15.0009 1.50001 15H14.4922C14.5585 15.0009 14.6242 14.9887 14.6857 14.964C14.7472 14.9393 14.8032 14.9026 14.8504 14.8561C14.8975 14.8095 14.935 14.7541 14.9606 14.693C14.9861 14.6319 14.9993 14.5663 14.9993 14.5C14.9993 14.4337 14.9861 14.3681 14.9606 14.307C14.935 14.2459 14.8975 14.1904 14.8504 14.1439C14.8032 14.0974 14.7472 14.0607 14.6857 14.036C14.6242 14.0113 14.5585 13.9991 14.4922 14H1.50001Z" fill="white"/>
</svg>`,
    "text-center": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4922 1.99999C1.42594 1.99905 1.36016 2.01129 1.29868 2.036C1.23719 2.06071 1.18123 2.09739 1.13405 2.14391C1.08686 2.19043 1.04939 2.24587 1.02382 2.307C0.998245 2.36812 0.985077 2.43373 0.985077 2.49999C0.985077 2.56625 0.998245 2.63185 1.02382 2.69298C1.04939 2.75411 1.08686 2.80955 1.13405 2.85607C1.18123 2.90259 1.23719 2.93927 1.29868 2.96398C1.36016 2.98869 1.42594 3.00093 1.4922 2.99999H14.4863C14.5526 3.00093 14.6184 2.98869 14.6799 2.96398C14.7413 2.93927 14.7973 2.90259 14.8445 2.85607C14.8917 2.80955 14.9291 2.75411 14.9547 2.69298C14.9803 2.63185 14.9935 2.56625 14.9935 2.49999C14.9935 2.43373 14.9803 2.36812 14.9547 2.307C14.9291 2.24587 14.8917 2.19043 14.8445 2.14391C14.7973 2.09739 14.7413 2.06071 14.6799 2.036C14.6184 2.01129 14.5526 1.99905 14.4863 1.99999H1.4922ZM5.4922 4.99999C5.42594 4.99905 5.36016 5.01129 5.29868 5.036C5.23719 5.06071 5.18123 5.09739 5.13405 5.14391C5.08686 5.19043 5.04939 5.24587 5.02382 5.307C4.99825 5.36812 4.98508 5.43373 4.98508 5.49999C4.98508 5.56625 4.99825 5.63185 5.02382 5.69298C5.04939 5.75411 5.08686 5.80955 5.13405 5.85607C5.18123 5.90259 5.23719 5.93927 5.29868 5.96398C5.36016 5.98869 5.42594 6.00093 5.4922 5.99999H10.4863C10.5526 6.00093 10.6184 5.98869 10.6799 5.96398C10.7413 5.93927 10.7973 5.90259 10.8445 5.85607C10.8917 5.80955 10.9291 5.75411 10.9547 5.69298C10.9803 5.63185 10.9935 5.56625 10.9935 5.49999C10.9935 5.43373 10.9803 5.36812 10.9547 5.307C10.9291 5.24587 10.8917 5.19043 10.8445 5.14391C10.7973 5.09739 10.7413 5.06071 10.6799 5.036C10.6184 5.01129 10.5526 4.99905 10.4863 4.99999H5.4922ZM1.4922 7.99999C1.42594 7.99905 1.36016 8.01129 1.29868 8.036C1.23719 8.06071 1.18123 8.09739 1.13405 8.14391C1.08686 8.19043 1.04939 8.24587 1.02382 8.307C0.998245 8.36812 0.985077 8.43373 0.985077 8.49999C0.985077 8.56625 0.998245 8.63185 1.02382 8.69298C1.04939 8.75411 1.08686 8.80955 1.13405 8.85607C1.18123 8.90259 1.23719 8.93927 1.29868 8.96398C1.36016 8.98869 1.42594 9.00093 1.4922 8.99999H14.4863C14.5526 9.00093 14.6184 8.98869 14.6799 8.96398C14.7413 8.93927 14.7973 8.90259 14.8445 8.85607C14.8917 8.80955 14.9291 8.75411 14.9547 8.69298C14.9803 8.63185 14.9935 8.56625 14.9935 8.49999C14.9935 8.43373 14.9803 8.36812 14.9547 8.307C14.9291 8.24587 14.8917 8.19043 14.8445 8.14391C14.7973 8.09739 14.7413 8.06071 14.6799 8.036C14.6184 8.01129 14.5526 7.99905 14.4863 7.99999H1.4922ZM5.4922 11C5.42594 10.9991 5.36016 11.0113 5.29868 11.036C5.23719 11.0607 5.18123 11.0974 5.13405 11.1439C5.08686 11.1904 5.04939 11.2459 5.02382 11.307C4.99825 11.3681 4.98508 11.4337 4.98508 11.5C4.98508 11.5663 4.99825 11.6319 5.02382 11.693C5.04939 11.7541 5.08686 11.8095 5.13405 11.8561C5.18123 11.9026 5.23719 11.9393 5.29868 11.964C5.36016 11.9887 5.42594 12.0009 5.4922 12H10.4863C10.5526 12.0009 10.6184 11.9887 10.6799 11.964C10.7413 11.9393 10.7973 11.9026 10.8445 11.8561C10.8917 11.8095 10.9291 11.7541 10.9547 11.693C10.9803 11.6319 10.9935 11.5663 10.9935 11.5C10.9935 11.4337 10.9803 11.3681 10.9547 11.307C10.9291 11.2459 10.8917 11.1904 10.8445 11.1439C10.7973 11.0974 10.7413 11.0607 10.6799 11.036C10.6184 11.0113 10.5526 10.9991 10.4863 11H5.4922ZM1.4922 14C1.42594 13.9991 1.36016 14.0113 1.29868 14.036C1.23719 14.0607 1.18123 14.0974 1.13405 14.1439C1.08686 14.1904 1.04939 14.2459 1.02382 14.307C0.998245 14.3681 0.985077 14.4337 0.985077 14.5C0.985077 14.5663 0.998245 14.6319 1.02382 14.693C1.04939 14.7541 1.08686 14.8095 1.13405 14.8561C1.18123 14.9026 1.23719 14.9393 1.29868 14.964C1.36016 14.9887 1.42594 15.0009 1.4922 15H14.4863C14.5526 15.0009 14.6184 14.9887 14.6799 14.964C14.7413 14.9393 14.7973 14.9026 14.8445 14.8561C14.8917 14.8095 14.9291 14.7541 14.9547 14.693C14.9803 14.6319 14.9935 14.5663 14.9935 14.5C14.9935 14.4337 14.9803 14.3681 14.9547 14.307C14.9291 14.2459 14.8917 14.1904 14.8445 14.1439C14.7973 14.0974 14.7413 14.0607 14.6799 14.036C14.6184 14.0113 14.5526 13.9991 14.4863 14H1.4922Z" fill="white"/>
</svg>`,
    "text-right": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4922 1.99999C1.42594 1.99905 1.36016 2.01129 1.29868 2.036C1.2372 2.06071 1.18123 2.09739 1.13405 2.14391C1.08686 2.19043 1.0494 2.24587 1.02382 2.307C0.998249 2.36812 0.985077 2.43373 0.985077 2.49999C0.985077 2.56625 0.998249 2.63185 1.02382 2.69298C1.0494 2.75411 1.08686 2.80955 1.13405 2.85607C1.18123 2.90259 1.2372 2.93927 1.29868 2.96398C1.36016 2.98869 1.42594 3.00093 1.4922 2.99999H14.4863C14.5526 3.00093 14.6184 2.98869 14.6799 2.96398C14.7413 2.93927 14.7973 2.90259 14.8445 2.85607C14.8917 2.80955 14.9291 2.75411 14.9547 2.69298C14.9803 2.63185 14.9935 2.56625 14.9935 2.49999C14.9935 2.43373 14.9803 2.36812 14.9547 2.307C14.9291 2.24587 14.8917 2.19043 14.8445 2.14391C14.7973 2.09739 14.7413 2.06071 14.6799 2.036C14.6184 2.01129 14.5526 1.99905 14.4863 1.99999H1.4922ZM8.4922 4.99999C8.42594 4.99905 8.36016 5.01129 8.29868 5.036C8.2372 5.06071 8.18123 5.09739 8.13405 5.14391C8.08686 5.19043 8.0494 5.24587 8.02382 5.307C7.99825 5.36812 7.98508 5.43373 7.98508 5.49999C7.98508 5.56625 7.99825 5.63185 8.02382 5.69298C8.0494 5.75411 8.08686 5.80955 8.13405 5.85607C8.18123 5.90259 8.2372 5.93927 8.29868 5.96398C8.36016 5.98869 8.42594 6.00093 8.4922 5.99999H14.4863C14.5526 6.00093 14.6184 5.98869 14.6799 5.96398C14.7413 5.93927 14.7973 5.90259 14.8445 5.85607C14.8917 5.80955 14.9291 5.75411 14.9547 5.69298C14.9803 5.63185 14.9935 5.56625 14.9935 5.49999C14.9935 5.43373 14.9803 5.36812 14.9547 5.307C14.9291 5.24587 14.8917 5.19043 14.8445 5.14391C14.7973 5.09739 14.7413 5.06071 14.6799 5.036C14.6184 5.01129 14.5526 4.99905 14.4863 4.99999H8.4922ZM1.4922 7.99999C1.42594 7.99905 1.36016 8.01129 1.29868 8.036C1.2372 8.06071 1.18123 8.09739 1.13405 8.14391C1.08686 8.19043 1.0494 8.24587 1.02382 8.307C0.998249 8.36812 0.985077 8.43373 0.985077 8.49999C0.985077 8.56625 0.998249 8.63185 1.02382 8.69298C1.0494 8.75411 1.08686 8.80955 1.13405 8.85607C1.18123 8.90259 1.2372 8.93927 1.29868 8.96398C1.36016 8.98869 1.42594 9.00093 1.4922 8.99999H14.4863C14.5526 9.00093 14.6184 8.98869 14.6799 8.96398C14.7413 8.93927 14.7973 8.90259 14.8445 8.85607C14.8917 8.80955 14.9291 8.75411 14.9547 8.69298C14.9803 8.63185 14.9935 8.56625 14.9935 8.49999C14.9935 8.43373 14.9803 8.36812 14.9547 8.307C14.9291 8.24587 14.8917 8.19043 14.8445 8.14391C14.7973 8.09739 14.7413 8.06071 14.6799 8.036C14.6184 8.01129 14.5526 7.99905 14.4863 7.99999H1.4922ZM8.4922 11C8.42594 10.9991 8.36016 11.0113 8.29868 11.036C8.2372 11.0607 8.18123 11.0974 8.13405 11.1439C8.08686 11.1904 8.0494 11.2459 8.02382 11.307C7.99825 11.3681 7.98508 11.4337 7.98508 11.5C7.98508 11.5663 7.99825 11.6319 8.02382 11.693C8.0494 11.7541 8.08686 11.8095 8.13405 11.8561C8.18123 11.9026 8.2372 11.9393 8.29868 11.964C8.36016 11.9887 8.42594 12.0009 8.4922 12H14.4863C14.5526 12.0009 14.6184 11.9887 14.6799 11.964C14.7413 11.9393 14.7973 11.9026 14.8445 11.8561C14.8917 11.8095 14.9291 11.7541 14.9547 11.693C14.9803 11.6319 14.9935 11.5663 14.9935 11.5C14.9935 11.4337 14.9803 11.3681 14.9547 11.307C14.9291 11.2459 14.8917 11.1904 14.8445 11.1439C14.7973 11.0974 14.7413 11.0607 14.6799 11.036C14.6184 11.0113 14.5526 10.9991 14.4863 11H8.4922ZM1.4922 14C1.42594 13.9991 1.36016 14.0113 1.29868 14.036C1.2372 14.0607 1.18123 14.0974 1.13405 14.1439C1.08686 14.1904 1.0494 14.2459 1.02382 14.307C0.998249 14.3681 0.985077 14.4337 0.985077 14.5C0.985077 14.5663 0.998249 14.6319 1.02382 14.693C1.0494 14.7541 1.08686 14.8095 1.13405 14.8561C1.18123 14.9026 1.2372 14.9393 1.29868 14.964C1.36016 14.9887 1.42594 15.0009 1.4922 15H14.4863C14.5526 15.0009 14.6184 14.9887 14.6799 14.964C14.7413 14.9393 14.7973 14.9026 14.8445 14.8561C14.8917 14.8095 14.9291 14.7541 14.9547 14.693C14.9803 14.6319 14.9935 14.5663 14.9935 14.5C14.9935 14.4337 14.9803 14.3681 14.9547 14.307C14.9291 14.2459 14.8917 14.1904 14.8445 14.1439C14.7973 14.0974 14.7413 14.0607 14.6799 14.036C14.6184 14.0113 14.5526 13.9991 14.4863 14H1.4922Z" fill="white"/>
</svg>`,
    "text-justify": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4922 1.99999C1.42594 1.99905 1.36016 2.01129 1.29868 2.036C1.23719 2.06071 1.18123 2.09739 1.13404 2.14391C1.08686 2.19043 1.04939 2.24587 1.02382 2.307C0.998245 2.36812 0.985077 2.43373 0.985077 2.49999C0.985077 2.56625 0.998245 2.63185 1.02382 2.69298C1.04939 2.75411 1.08686 2.80955 1.13404 2.85607C1.18123 2.90259 1.23719 2.93927 1.29868 2.96398C1.36016 2.98869 1.42594 3.00093 1.4922 2.99999H14.4863C14.5526 3.00093 14.6184 2.98869 14.6799 2.96398C14.7413 2.93927 14.7973 2.90259 14.8445 2.85607C14.8917 2.80955 14.9291 2.75411 14.9547 2.69298C14.9803 2.63185 14.9935 2.56625 14.9935 2.49999C14.9935 2.43373 14.9803 2.36812 14.9547 2.307C14.9291 2.24587 14.8917 2.19043 14.8445 2.14391C14.7973 2.09739 14.7413 2.06071 14.6799 2.036C14.6184 2.01129 14.5526 1.99905 14.4863 1.99999H1.4922ZM1.4922 4.99999C1.42594 4.99905 1.36016 5.01129 1.29868 5.036C1.23719 5.06071 1.18123 5.09739 1.13404 5.14391C1.08686 5.19043 1.04939 5.24587 1.02382 5.307C0.998245 5.36812 0.985077 5.43373 0.985077 5.49999C0.985077 5.56625 0.998245 5.63185 1.02382 5.69298C1.04939 5.75411 1.08686 5.80955 1.13404 5.85607C1.18123 5.90259 1.23719 5.93927 1.29868 5.96398C1.36016 5.98869 1.42594 6.00093 1.4922 5.99999H14.4863C14.5526 6.00093 14.6184 5.98869 14.6799 5.96398C14.7413 5.93927 14.7973 5.90259 14.8445 5.85607C14.8917 5.80955 14.9291 5.75411 14.9547 5.69298C14.9803 5.63185 14.9935 5.56625 14.9935 5.49999C14.9935 5.43373 14.9803 5.36812 14.9547 5.307C14.9291 5.24587 14.8917 5.19043 14.8445 5.14391C14.7973 5.09739 14.7413 5.06071 14.6799 5.036C14.6184 5.01129 14.5526 4.99905 14.4863 4.99999H1.4922ZM1.4922 7.99999C1.42594 7.99905 1.36016 8.01129 1.29868 8.036C1.23719 8.06071 1.18123 8.09739 1.13404 8.14391C1.08686 8.19043 1.04939 8.24587 1.02382 8.307C0.998245 8.36812 0.985077 8.43373 0.985077 8.49999C0.985077 8.56625 0.998245 8.63185 1.02382 8.69298C1.04939 8.75411 1.08686 8.80955 1.13404 8.85607C1.18123 8.90259 1.23719 8.93927 1.29868 8.96398C1.36016 8.98869 1.42594 9.00093 1.4922 8.99999H14.4863C14.5526 9.00093 14.6184 8.98869 14.6799 8.96398C14.7413 8.93927 14.7973 8.90259 14.8445 8.85607C14.8917 8.80955 14.9291 8.75411 14.9547 8.69298C14.9803 8.63185 14.9935 8.56625 14.9935 8.49999C14.9935 8.43373 14.9803 8.36812 14.9547 8.307C14.9291 8.24587 14.8917 8.19043 14.8445 8.14391C14.7973 8.09739 14.7413 8.06071 14.6799 8.036C14.6184 8.01129 14.5526 7.99905 14.4863 7.99999H1.4922ZM1.4922 11C1.42594 10.9991 1.36016 11.0113 1.29868 11.036C1.23719 11.0607 1.18123 11.0974 1.13404 11.1439C1.08686 11.1904 1.04939 11.2459 1.02382 11.307C0.998245 11.3681 0.985077 11.4337 0.985077 11.5C0.985077 11.5663 0.998245 11.6319 1.02382 11.693C1.04939 11.7541 1.08686 11.8095 1.13404 11.8561C1.18123 11.9026 1.23719 11.9393 1.29868 11.964C1.36016 11.9887 1.42594 12.0009 1.4922 12H14.4863C14.5526 12.0009 14.6184 11.9887 14.6799 11.964C14.7413 11.9393 14.7973 11.9026 14.8445 11.8561C14.8917 11.8095 14.9291 11.7541 14.9547 11.693C14.9803 11.6319 14.9935 11.5663 14.9935 11.5C14.9935 11.4337 14.9803 11.3681 14.9547 11.307C14.9291 11.2459 14.8917 11.1904 14.8445 11.1439C14.7973 11.0974 14.7413 11.0607 14.6799 11.036C14.6184 11.0113 14.5526 10.9991 14.4863 11H1.4922ZM1.4922 14C1.42594 13.9991 1.36016 14.0113 1.29868 14.036C1.23719 14.0607 1.18123 14.0974 1.13404 14.1439C1.08686 14.1904 1.04939 14.2459 1.02382 14.307C0.998245 14.3681 0.985077 14.4337 0.985077 14.5C0.985077 14.5663 0.998245 14.6319 1.02382 14.693C1.04939 14.7541 1.08686 14.8095 1.13404 14.8561C1.18123 14.9026 1.23719 14.9393 1.29868 14.964C1.36016 14.9887 1.42594 15.0009 1.4922 15H14.4863C14.5526 15.0009 14.6184 14.9887 14.6799 14.964C14.7413 14.9393 14.7973 14.9026 14.8445 14.8561C14.8917 14.8095 14.9291 14.7541 14.9547 14.693C14.9803 14.6319 14.9935 14.5663 14.9935 14.5C14.9935 14.4337 14.9803 14.3681 14.9547 14.307C14.9291 14.2459 14.8917 14.1904 14.8445 14.1439C14.7973 14.0974 14.7413 14.0607 14.6799 14.036C14.6184 14.0113 14.5526 13.9991 14.4863 14H1.4922Z" fill="white"/>
</svg>`
  };
  var icons = Object.keys(svg);
  var cache;
  function css() {
    if (typeof URL.createObjectURL !== "function") {
      return "";
    }
    if (cache) {
      return cache;
    }
    const cssVars = [];
    for (const [name, data] of Object.entries(svg)) {
      const url = URL.createObjectURL(
        new Blob([data], { type: "image/svg+xml" })
      );
      cssVars.push(`--icon-${name}: url(${url})`);
    }
    cache = cssVars.join(";\n");
    return cache;
  }

  // ../../packages/blender-elements/src/Base.svelte
  var root = template(`<div class="base svelte-x0hg13"><!></div>`);
  var $$css = {
    hash: "svelte-x0hg13",
    code: ".base.svelte-x0hg13 {font:13px/1.3 system-ui,\n      sans-serif;height:100vh;-webkit-font-smoothing:antialiased;text-shadow:0 1px 1px #00000066;}"
  };
  function Base($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css);
    var div = root();
    var node = child(div);
    snippet(node, () => $$props.children ?? noop);
    reset(div);
    template_effect(($0) => set_style(div, $0), [css]);
    append($$anchor, div);
    pop();
  }

  // ../../packages/blender-elements/src/Button.svelte
  var on_click = (e, toggle, $$props) => {
    e.stopPropagation();
    toggle();
    $$props.onclick?.();
  };
  var on_dblclick = (e) => e.stopPropagation();
  var root2 = template(`<button><!></button>`);
  var $$css2 = {
    hash: "svelte-wrs1z",
    code: '.button.svelte-wrs1z {appearance:none;background:#545454 no-repeat center center;color:#e6e6e6;border:1px solid #3d3d3d;padding-inline:8px;height:18px;flex-shrink:0;box-shadow:0 1px 1px #00000099;cursor:pointer;&[data-location="ALONE"] {border-radius:2px / 3px;}&[data-location="LEFT"] {border-top-left-radius:2px 3px;border-bottom-left-radius:2px 3px;margin-right:1px;}&[data-location="CENTER"] {margin-right:1px;}&[data-location="RIGHT"] {border-top-right-radius:2px 3px;border-bottom-right-radius:2px 3px;}&:hover {background:#656565;color:#ffffff;}&.pressed,\n    &:active {background-color:#4772b3;color:#ffffff;}}'
  };
  function Button($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css2);
    let value = prop($$props, "value", 15, void 0), location = prop($$props, "location", 3, "ALONE");
    function toggle() {
      if (typeof value() === "boolean") {
        value(!value());
      }
    }
    var button = root2();
    let classes;
    button.__click = [on_click, toggle, $$props];
    button.__dblclick = [on_dblclick];
    var node = child(button);
    snippet(node, () => $$props.children ?? noop);
    reset(button);
    template_effect(
      ($0) => {
        classes = set_class(button, 1, "button svelte-wrs1z", null, classes, $0);
        set_attribute(button, "data-location", location());
      },
      [() => ({ pressed: value() })]
    );
    append($$anchor, button);
    pop();
  }
  delegate(["click", "dblclick"]);

  // ../../packages/pixi-panel/src/bridge-fns.ts
  function setBridgeContext(bridge2) {
    setContext("bridge", bridge2);
  }
  function getBridgeContext() {
    const ctx = getContext("bridge");
    if (!ctx) {
      throw new Error("Bridge context not found");
    }
    return ctx;
  }
  function poll(bridge2, code, interval) {
    const state2 = { data: void 0, error: void 0 };
    let updater;
    const polling = writable(false);
    async function sync() {
      polling.set(true);
      try {
        state2.data = await bridge2(code);
        state2.error = void 0;
      } catch (err) {
        state2.error = err;
        state2.data = void 0;
      }
      polling.set(false);
      updater(state2);
    }
    const store = readable(state2, (set2) => {
      updater = set2;
      sync();
      const timer = window.setInterval(sync, interval);
      return () => clearInterval(timer);
    });
    return {
      subscribe: store.subscribe,
      polling: { subscribe: polling.subscribe },
      sync
    };
  }

  // ../../packages/pixi-panel/src/pixi-devtools/pixiDevtools.ts
  function pixiDevtools() {
    const eventTarget = new EventTarget();
    const win = window;
    let detectedVersion = null;
    let mode;
    function getGlobal(varname) {
      if (win[varname]) {
        return win[varname];
      }
      if (win.frames) {
        for (let i = 0; i < win.frames.length; i += 1) {
          try {
            if (win.frames[i][varname]) {
              return win.frames[i][varname];
            }
          } catch {
          }
        }
      }
      return void 0;
    }
    return {
      app() {
        return getGlobal("__PIXI_APP__");
      },
      root() {
        const stage = getGlobal("__PIXI_STAGE__");
        if (stage) {
          return stage;
        }
        const app = getGlobal("__PIXI_APP__");
        if (app) {
          return app.stage;
        }
        const game = getGlobal("__PHASER_GAME__");
        if (game) {
          if (game.scene.scenes.length === 1) {
            return game.scene.scenes[0];
          }
          return game.scene;
        }
        const renderer = getGlobal("__PIXI_RENDERER__");
        if (renderer) {
          return renderer.lastObjectRendered ?? renderer._lastObjectRendered;
        }
        const patched = getGlobal("__PATCHED_RENDERER__");
        if (patched) {
          return patched.lastObjectRendered ?? patched._lastObjectRendered;
        }
        return void 0;
      },
      renderer() {
        const renderer = getGlobal("__PIXI_RENDERER__");
        if (renderer) {
          return renderer;
        }
        const app = getGlobal("__PIXI_APP__");
        if (app) {
          mode = "PIXI";
          return app.renderer;
        }
        const game = getGlobal("__PHASER_GAME__");
        if (game) {
          mode = "PHASER";
          return game;
        }
        const patched = getGlobal("__PATCHED_RENDERER__");
        if (patched) {
          return patched;
        }
        return void 0;
      },
      canvas() {
        const renderer = this.renderer();
        if (renderer) {
          if ("canvas" in renderer) {
            return renderer.canvas;
          }
          if ("view" in renderer) {
            return renderer.view;
          }
        }
        return void 0;
      },
      childrenOf(node) {
        if ("children" in node) {
          const { children } = node;
          if (Array.isArray(children)) {
            return children;
          }
          return node.children.list;
        }
        if ("list" in node) {
          return node.list;
        }
        if ("scenes" in node) {
          return node.scenes;
        }
        if ("emitters" in node) {
          return node.emitters.list;
        }
        if ("alive" in node) {
          return node.alive;
        }
        return void 0;
      },
      parentOf(node) {
        if ("parent" in node) {
          return node.parent;
        }
        if ("parentContainer" in node) {
          const container = node.parentContainer;
          if (container === null) {
            return node.scene;
          }
          return container;
        }
        return void 0;
      },
      isPixi(node) {
        if (mode === "PIXI") {
          return true;
        }
        if ("parent" in node) {
          return true;
        }
        return false;
      },
      version() {
        if (detectedVersion !== null) {
          return detectedVersion;
        }
        const root20 = this.root();
        if (root20) {
          detectedVersion = void 0;
          if ("getLocalBounds" in root20) {
            const bounds = root20.getLocalBounds();
            if ("containsPoint" in bounds) {
              detectedVersion = 8;
            }
          }
        }
        return detectedVersion ?? void 0;
      },
      /**
       * inVersionRange(8, 9) // true if the Pixi.js version is 8 or higher but lower than 9
       */
      inVersionRange(start, stop) {
        const version = this.version();
        if (version === void 0 || version === -1) {
          return false;
        }
        if (version < start) {
          return false;
        }
        if (stop === void 0 || version < stop) {
          return true;
        }
        return false;
      },
      on(event2, callback) {
        const listener = (e) => {
          callback(e.detail);
        };
        eventTarget.addEventListener(`pixi:${event2}`, listener);
        return () => eventTarget.removeEventListener(`pixi:${event2}`, listener);
      },
      once(event2, callback) {
        const off = this.on(event2, (e) => {
          off();
          callback(e);
        });
        return off;
      },
      dispatchEvent(event2, detail) {
        eventTarget.dispatchEvent(new CustomEvent(`pixi:${event2}`, { detail }));
      }
    };
  }

  // ../../packages/pixi-panel/src/pixi-devtools/pixiDevtoolsClickToSelect.ts
  function pixiDevtoolsClickToSelect(devtools) {
    let moved = true;
    function onSelectAt(point) {
      const $pixi = devtools.selection.active();
      const nodes = devtools.viewport.ray(point, (node) => {
        if ("visible" in node && node.visible === false) {
          return false;
        }
        return devtools.selection.selectable(node);
      });
      const root20 = devtools.root();
      if (nodes.length > 1 && nodes[nodes.length - 1] === root20) {
        nodes.length -= 1;
      }
      if (moved || nodes.length === 1) {
        moved = false;
        devtools.selection.activate(nodes[0]);
      } else {
        let index2 = $pixi ? nodes.indexOf($pixi) : -1;
        if (index2 === -1 || index2 === nodes.length - 1) {
          index2 = 0;
        } else if (nodes.length > 1) {
          index2 += 1;
        }
        devtools.selection.activate(nodes[index2]);
      }
    }
    function onContextMenu(e) {
      if (e.defaultPrevented) {
        return;
      }
      e.preventDefault();
      const point = devtools.viewport.fromClient(e.clientX, e.clientY);
      onSelectAt(point);
    }
    function onPointerDown(e) {
      if (e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
        const point = devtools.viewport.fromClient(e.clientX, e.clientY);
        onSelectAt(point);
      }
    }
    function onPointerMove() {
      moved = true;
    }
    let previous;
    function bindEvents() {
      const canvas = devtools.canvas();
      if (canvas !== previous) {
        if (previous) {
          previous.removeEventListener("contextmenu", onContextMenu);
          previous.removeEventListener("pointerdown", onPointerDown);
          previous.removeEventListener("pointermove", onPointerMove);
        }
        if (canvas) {
          canvas.addEventListener("contextmenu", onContextMenu);
          canvas.addEventListener("pointerdown", onPointerDown);
          canvas.addEventListener("pointermove", onPointerMove);
        }
        previous = canvas;
      }
    }
    bindEvents();
    setInterval(bindEvents, 2500);
    return {};
  }

  // ../../packages/pixi-panel/src/pixi-devtools/pixiDevtoolsOutline.ts
  function pixiDevtoolsOutline(devtools) {
    const metaProperty = Symbol("pixi-devtools-outline");
    devtools.on("activate", (node) => {
      if (node) {
        expandParentsFor(node);
      }
    });
    function autoId() {
      autoId.current += 1;
      if (autoId.current > Number.MAX_SAFE_INTEGER) {
        autoId.current = 0;
      }
      return `${autoId.current}_${Math.floor(Math.random() * 4096).toString(16)}`;
    }
    autoId.current = 0;
    function augment(node) {
      let meta = node[metaProperty];
      if (meta) {
        return meta;
      }
      meta = {
        id: autoId(),
        expanded: false
      };
      node[metaProperty] = meta;
      return meta;
    }
    function findIn(path, container) {
      if (path.length === 0) {
        return container;
      }
      const id = path[0];
      const children = devtools.childrenOf(container);
      if (!children) {
        return void 0;
      }
      const node = children.find(
        (child2) => child2[metaProperty]?.id === id
      );
      if (node) {
        return findIn(path.slice(1), node);
      }
      return void 0;
    }
    function find(path) {
      const root20 = devtools.root();
      if (!root20) {
        return void 0;
      }
      return findIn(path, { children: [root20] });
    }
    function buildName(node) {
      let name = "";
      if (devtools.inVersionRange(8)) {
        if ("label" in node && node.label !== null && node.label !== "") {
          if (node.label === "Sprite") {
            return node.label;
          }
          if (node.constructor.name) {
            name += `${node.constructor.name} `;
          }
          name += `"${node.label}"`;
        }
      } else if ("name" in node && node.name !== null && node.name !== "") {
        if (node.constructor.name) {
          name += `${node.constructor.name} `;
        }
        name += `"${node.name}"`;
      }
      if (!name) {
        name = node.constructor.name ?? "anonymous";
      }
      return name;
    }
    function buildTree(node) {
      const meta = augment(node);
      const tree = {
        id: meta.id,
        name: buildName(node),
        leaf: true,
        active: node === devtools.selection.active(),
        selectable: devtools.selection.selectable(node),
        visible: "visible" in node ? node.visible : void 0
      };
      const children = devtools.childrenOf(node) ?? [];
      if (children.length > 0) {
        tree.leaf = false;
        if (meta.expanded) {
          tree.children = children.map(buildTree);
        }
      }
      return tree;
    }
    function searchResults(query, node) {
      const meta = augment(node);
      const name = buildName(node);
      const match = name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      const children = devtools.childrenOf(node);
      if (!children || children.length === 0) {
        return {
          id: meta.id,
          active: node === devtools.selection.active(),
          selectable: devtools.selection.selectable(node),
          leaf: true,
          name,
          visible: "visible" in node ? node.visible : void 0,
          match
        };
      }
      const results = children.map((child2) => searchResults(query, child2)).filter((result) => result.match !== false);
      return {
        id: meta.id,
        active: node === devtools.selection.active(),
        selectable: devtools.selection.selectable(node),
        leaf: false,
        name,
        match: !match && results.length !== 0 ? void 0 : match,
        visible: "visible" in node ? node.visible : void 0,
        children: results
      };
    }
    function expandParentsFor(node) {
      const parent = devtools.parentOf(node);
      if (parent) {
        const meta = augment(parent);
        meta.expanded = true;
        expandParentsFor(parent);
      }
    }
    return {
      query: "",
      tree() {
        const root20 = devtools.root();
        if (!root20) {
          return {
            id: "disconnected",
            active: false,
            selectable: false,
            leaf: true,
            name: "(disconnected))",
            visible: false
          };
        }
        if (!root20[metaProperty]) {
          const meta = augment(root20);
          meta.expanded = true;
        }
        if (this.query) {
          return searchResults(this.query, root20);
        }
        return buildTree(root20);
      },
      expand(path) {
        const node = find(path);
        if (node) {
          augment(node).expanded = true;
        }
      },
      collapse(path) {
        const node = find(path);
        if (node) {
          augment(node).expanded = false;
        }
      },
      selectable(path) {
        const node = find(path);
        if (node) {
          devtools.selection.enable(node);
        }
      },
      unselectable(path) {
        const node = find(path);
        if (node) {
          devtools.selection.disable(node);
        }
      },
      hide(path) {
        const node = find(path);
        if (node && "visible" in node) {
          node.visible = false;
        }
      },
      show(path) {
        const node = find(path);
        if (node && "visible" in node) {
          node.visible = true;
        }
      },
      activate(path) {
        devtools.selection.activate(find(path));
      },
      highlight(path) {
        devtools.selection.highlight(find(path));
      },
      log(path) {
        const node = find(path);
        if (node) {
          console.info(node);
        }
      }
    };
  }

  // ../../packages/pixi-panel/src/pixi-devtools/pixiDevtoolsOverlay.ts
  function pixiDevtoolsOverlay(devtools) {
    function position(x, y, width, height) {
      return {
        position: "absolute",
        left: x,
        top: y,
        width,
        height
      };
    }
    function buildBorders(color) {
      const container = document.createElement("div");
      container.dataset.pixiDevtools = "border";
      Object.assign(container.style, {
        ...position("0", "0", "0", "0"),
        transformOrigin: "top left",
        transform: "scale(0)"
      });
      const top = document.createElement("div");
      const right = document.createElement("div");
      const bottom = document.createElement("div");
      const left = document.createElement("div");
      top.dataset.pixiDevtools = "borderTop";
      Object.assign(top.style, {
        ...position("0", "-3px", "100%", "3px"),
        transformOrigin: "center bottom",
        background: color
      });
      right.dataset.pixiDevtools = "borderRight";
      Object.assign(right.style, {
        ...position("100%", "0", "3px", "100%"),
        transformOrigin: "center left",
        background: color
      });
      bottom.dataset.pixiDevtools = "borderBottom";
      Object.assign(bottom.style, {
        ...position("0", "100%", "100%", "3px"),
        transformOrigin: "center top",
        background: color
      });
      left.dataset.pixiDevtools = "borderLeft";
      Object.assign(left.style, {
        ...position("-3px", "0", "3px", "100%"),
        transformOrigin: "center right",
        background: color
      });
      container.appendChild(top);
      container.appendChild(right);
      container.appendChild(bottom);
      container.appendChild(left);
      return {
        container,
        top,
        right,
        bottom,
        left
      };
    }
    function resolveScale(node) {
      const unscale = { x: 1, y: 1 };
      let parentNode = node;
      do {
        if ("scaleX" in parentNode && typeof parentNode.scaleX === "number" && "scaleY" in parentNode && typeof parentNode.scaleY === "number") {
          unscale.x /= parentNode.scaleX;
          unscale.y /= parentNode.scaleY;
        } else if ("scale" in parentNode && typeof parentNode.scale === "object" && "x" in parentNode.scale) {
          unscale.x /= parentNode.scale.x;
          unscale.y /= parentNode.scale.y;
        }
        parentNode = devtools.parentOf(parentNode);
      } while (parentNode);
      return unscale;
    }
    function connect2(el) {
      if (!el) {
        return () => {
        };
      }
      const canvas = el;
      const clipEl = document.createElement("div");
      clipEl.dataset.pixiDevtools = "clip";
      Object.assign(clipEl.style, {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "clip"
      });
      const overlayEl = document.createElement("div");
      overlayEl.dataset.pixiDevtools = "overlay";
      Object.assign(overlayEl.style, {
        ...position("0", "0", "0", "0"),
        pointerEvents: "none",
        transformOrigin: "top left"
      });
      clipEl.appendChild(overlayEl);
      const highlight = document.createElement("div");
      highlight.dataset.pixiDevtools = "highlight";
      Object.assign(highlight.style, {
        ...position("0", "0", "0", "0"),
        transformOrigin: "top left",
        transform: "scale(0)",
        background: "rgba(102, 163, 218, 0.7)"
      });
      overlayEl.appendChild(highlight);
      const borders = buildBorders("#ff9f2c");
      overlayEl.appendChild(borders.container);
      const anchor = document.createElement("div");
      anchor.dataset.pixiDevtools = "anchor";
      Object.assign(anchor.style, {
        ...position("0", "0", "0", "0"),
        transformOrigin: "top left",
        transform: "scale(0)"
      });
      const dotEl = document.createElement("div");
      dotEl.dataset.pixiDevtools = "dot";
      Object.assign(dotEl.style, {
        ...position("-4px", "-4px", "6px", "6px"),
        transformOrigin: "top left",
        background: "#ff9f2c",
        border: "1px solid #2a2b2b",
        borderRadius: "50%"
      });
      anchor.appendChild(dotEl);
      overlayEl.appendChild(anchor);
      function calibrateOverlay() {
        if (!canvas || !("getBoundingClientRect" in canvas)) {
          return;
        }
        const size = devtools.viewport.size();
        const scale = devtools.viewport.renderScale();
        if (!size || !scale) {
          return;
        }
        overlayEl.style.width = `${size.width / scale.x}px`;
        overlayEl.style.height = `${size.height / scale.y}px`;
        const canvasBounds = canvas.getBoundingClientRect();
        overlayEl.style.transform = "";
        const overlayBounds = overlayEl.getBoundingClientRect();
        overlayEl.style.transform = `translate(${canvasBounds.x - overlayBounds.x}px, ${canvasBounds.y - overlayBounds.y}px) scale(${canvasBounds.width / overlayBounds.width}, ${canvasBounds.height / overlayBounds.height})`;
      }
      let throttle = 0;
      let raf2;
      function calculateCss(node) {
        if (!node) {
          return void 0;
        }
        const parent2 = devtools.parentOf(node);
        if (!parent2) {
          return void 0;
        }
        let size;
        let m;
        if ("getLocalBounds" in node) {
          size = node.getLocalBounds();
          m = node.worldTransform;
        } else if ("getLocalTransformMatrix" in node && "width" in node) {
          const image = node;
          size = {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height
          };
          if ("originX" in image) {
            size.x -= image.width * image.originX;
            size.y -= image.height * image.originY;
          }
          m = image.getLocalTransformMatrix();
        } else {
          return void 0;
        }
        const offset = `translate(${size.x}px, ${size.y}px)`;
        const unscale = resolveScale(node);
        let anchorTransform = "scale(0)";
        if ("anchor" in node || "originX" in node || "pivot" in node) {
          let pivot = "";
          if ("pivot" in node) {
            pivot = `translate(${node.pivot.x}px, ${node.pivot.y}px)`;
          }
          anchorTransform = `matrix(${m.a}, ${m.b}, ${m.c}, ${m.d}, ${m.tx}, ${m.ty}) ${pivot} scale(${unscale.x}, ${unscale.y})`;
        }
        return {
          box: {
            width: `${size.width}px`,
            height: `${size.height}px`,
            transform: `matrix(${m.a}, ${m.b}, ${m.c}, ${m.d}, ${m.tx}, ${m.ty}) ${offset}`
          },
          borderTop: `scale(1, ${Math.abs(unscale.y)})`,
          borderRight: `scale(${Math.abs(unscale.x)}, 1)`,
          borderBottom: `scale(1, ${Math.abs(unscale.y)})`,
          borderLeft: `scale(${Math.abs(unscale.x)}, 1)`,
          anchor: anchorTransform
        };
      }
      function updateOverlay() {
        raf2 = requestAnimationFrame(updateOverlay);
        const activeNode = devtools.selection.active();
        const highlightNode = devtools.selection.highlighted();
        if (throttle <= 0) {
          if (activeNode || highlightNode) {
            calibrateOverlay();
            throttle = 15;
          }
        } else {
          throttle -= 1;
        }
        const activeCss = calculateCss(activeNode);
        if (activeCss) {
          borders.container.style.transform = activeCss.box.transform;
          borders.container.style.width = activeCss.box.width;
          borders.container.style.height = activeCss.box.height;
          borders.top.style.transform = activeCss.borderTop;
          borders.right.style.transform = activeCss.borderRight;
          borders.bottom.style.transform = activeCss.borderBottom;
          borders.left.style.transform = activeCss.borderLeft;
          anchor.style.transform = activeCss.anchor;
        } else {
          borders.container.style.transform = "scale(0)";
          anchor.style.transform = "scale(0)";
        }
        const highlightCss = activeNode === highlightNode ? activeCss : calculateCss(highlightNode);
        if (highlightCss) {
          highlight.style.transform = highlightCss.box.transform;
          highlight.style.width = highlightCss.box.width;
          highlight.style.height = highlightCss.box.height;
        } else {
          highlight.style.transform = "scale(0)";
        }
      }
      let parent = canvas;
      while (parent) {
        parent = parent.parentElement;
        if (parent?.tagName === "BODY") {
          parent.appendChild(clipEl);
          updateOverlay();
          break;
        }
      }
      return () => {
        clipEl.remove();
        if (raf2) {
          cancelAnimationFrame(raf2);
        }
      };
    }
    let previous = devtools.canvas();
    let cancel = connect2(previous);
    setInterval(() => {
      const canvas = devtools.canvas();
      if (canvas !== previous) {
        previous = canvas;
        cancel();
        cancel = connect2(canvas);
      }
    }, 2500);
  }

  // ../../packages/pixi-panel/src/pixi-devtools/pixiDevtoolsProperties.ts
  function pixiDevtoolsProperties(devtools) {
    const metaProperty = Symbol("pixi-devtools-properties");
    function directProp(object, property, type) {
      if (property in object && typeof object[property] === type) {
        return [
          {
            key: property,
            get: () => object[property],
            set: (value) => {
              object[property] = value;
            }
          }
        ];
      }
      return [];
    }
    function nestedProp(object, nested, property, type) {
      if (nested in object && typeof object[nested] === "object" && property in object[nested] && typeof object[nested][property] === type) {
        return [
          {
            key: property,
            get: () => object[nested][property],
            set: (value) => {
              object[nested][property] = value;
            }
          }
        ];
      }
      return [];
    }
    function pointProperty(node, property, keyX, keyY) {
      if (property in node && typeof node[property] === "object" && "x" in node[property] && typeof node[property].x === "number" && "y" in node[property] && typeof node[property].y === "number") {
        return [
          {
            key: keyX,
            get: () => node[property].x,
            set: (value) => {
              node[property].x = value;
            }
          },
          {
            key: keyY,
            get: () => node[property].y,
            set: (value) => {
              node[property].y = value;
            }
          }
        ];
      }
      return [];
    }
    function getPropDefinition(node) {
      if (!node[metaProperty]) {
        const objectDefs = [];
        objectDefs.push(...directProp(node, "x", "number"));
        objectDefs.push(...directProp(node, "y", "number"));
        objectDefs.push(...directProp(node, "angle", "number"));
        objectDefs.push(...pointProperty(node, "scale", "scaleX", "scaleY"));
        objectDefs.push(...directProp(node, "scaleX", "number"));
        objectDefs.push(...directProp(node, "scaleY", "number"));
        objectDefs.push(...directProp(node, "width", "number"));
        objectDefs.push(...directProp(node, "height", "number"));
        objectDefs.push(...pointProperty(node, "anchor", "anchorX", "anchorY"));
        objectDefs.push(...pointProperty(node, "pivot", "pivotX", "pivotY"));
        objectDefs.push(...pointProperty(node, "skew", "skewX", "skewY"));
        objectDefs.push(...directProp(node, "alpha", "number"));
        objectDefs.push(...directProp(node, "visible", "boolean"));
        objectDefs.push(...directProp(node, "cullable", "boolean"));
        objectDefs.push(...directProp(node, "sortableChildren", "boolean"));
        objectDefs.push(...directProp(node, "zIndex", "number"));
        objectDefs.push(...directProp(node, "interactiveChildren", "boolean"));
        if ("originX" in node && typeof node.originX === "number" && "setOrigin" in node && typeof node.setOrigin === "function") {
          objectDefs.push({
            key: "originX",
            get: () => node.originX,
            set: (value) => node.setOrigin(
              value,
              node.originY
            )
          });
          objectDefs.push({
            key: "originY",
            get: () => node.originY,
            set: (value) => node.setOrigin(
              node.originX,
              value
            )
          });
        }
        if (devtools.isPixi(node)) {
          const container = node;
          if (typeof container.eventMode === "string") {
            objectDefs.push(...directProp(node, "eventMode", "string"));
            objectDefs.push({
              key: "cursor",
              get: () => container.cursor,
              set: (value) => {
                container.cursor = value;
              }
            });
          } else {
            objectDefs.push(...directProp(node, "interactive", "boolean"));
            objectDefs.push(...directProp(node, "buttonMode", "boolean"));
          }
        }
        const textDefs = [];
        textDefs.push(...directProp(node, "text", "string"));
        if (devtools.isPixi(node)) {
          textDefs.push(...nestedProp(node, "style", "align", "string"));
          textDefs.push(...nestedProp(node, "style", "breakWords", "boolean"));
          textDefs.push(...nestedProp(node, "style", "dropShadow", "boolean"));
          textDefs.push(
            ...nestedProp(node, "style", "dropShadowAlpha", "number")
          );
          textDefs.push(
            ...nestedProp(node, "style", "dropShadowAngle", "number")
          );
          textDefs.push(...nestedProp(node, "style", "dropShadowBlur", "number"));
          textDefs.push(
            ...nestedProp(node, "style", "dropShadowColor", "string")
          );
          textDefs.push(
            ...nestedProp(node, "style", "dropShadowDistance", "number")
          );
          textDefs.push(...nestedProp(node, "style", "fontFamily", "string"));
          textDefs.push(...nestedProp(node, "style", "fontSize", "number"));
          textDefs.push(...nestedProp(node, "style", "fontStyle", "string"));
          textDefs.push(...nestedProp(node, "style", "fontVariant", "string"));
          textDefs.push(...nestedProp(node, "style", "fontWeight", "string"));
          textDefs.push(...nestedProp(node, "style", "leading", "number"));
          textDefs.push(...nestedProp(node, "style", "letterSpacing", "number"));
          textDefs.push(...nestedProp(node, "style", "lineHeight", "number"));
          textDefs.push(...nestedProp(node, "style", "lineJoin", "string"));
          textDefs.push(...nestedProp(node, "style", "miterLimit", "number"));
          textDefs.push(...nestedProp(node, "style", "padding", "number"));
          textDefs.push(...nestedProp(node, "style", "stroke", "string"));
          textDefs.push(
            ...nestedProp(node, "style", "strokeThickness", "number")
          );
          textDefs.push(...nestedProp(node, "style", "textBaseline", "string"));
          textDefs.push(...nestedProp(node, "style", "trim", "boolean"));
          textDefs.push(...nestedProp(node, "style", "whiteSpace", "string"));
          textDefs.push(...nestedProp(node, "style", "wordWrap", "boolean"));
          textDefs.push(...nestedProp(node, "style", "wordWrapWidth", "number"));
          textDefs.push(...nestedProp(node, "style", "fontSize", "number"));
          textDefs.push(...nestedProp(node, "style", "leading", "number"));
          textDefs.push(...nestedProp(node, "style", "padding", "number"));
        }
        const sceneDefs = [];
        sceneDefs.push(...nestedProp(node, "ticker", "speed", "number"));
        if ("ticker" in node && "started" in node.ticker && typeof node.ticker.started === "boolean" && "start" in node && typeof node.start === "function") {
          sceneDefs.push({
            key: "started",
            get: () => node.ticker.started,
            set: (value) => {
              if (value) {
                node.ticker.start();
              } else {
                node.ticker.stop();
              }
            }
          });
        }
        node[metaProperty] = {
          object: objectDefs,
          text: textDefs,
          scene: sceneDefs
        };
      }
      return node[metaProperty];
    }
    let preferred;
    function getActiveDefinition() {
      const definitions = {
        object: [],
        text: [],
        scene: []
      };
      const app = devtools.app();
      if (app) {
        const appDefinitions = getPropDefinition(app);
        definitions.scene.push(...appDefinitions.scene);
      }
      const node = devtools.selection.active();
      if (node) {
        const nodeDefinitions = getPropDefinition(node);
        definitions.object.push(...nodeDefinitions.object);
        definitions.text.push(...nodeDefinitions.text);
      }
      let active = preferred;
      if (!preferred || definitions[preferred].length === 0) {
        if (definitions.text.length !== 0) {
          active = "text";
        } else if (definitions.object.length !== 0) {
          active = "object";
        } else {
          active = "scene";
        }
      }
      return { definitions, active };
    }
    return {
      activate(group) {
        preferred = group;
      },
      values() {
        const { definitions, active } = getActiveDefinition();
        const available = [];
        for (const tab of Object.keys(definitions)) {
          if (definitions[tab].length !== 0) {
            available.push(tab);
          }
        }
        const properties = {};
        for (let i = 0; i < definitions[active].length; i += 1) {
          const { key, get: get3 } = definitions[active][i];
          properties[key] = get3();
        }
        return { tabs: available, active, properties };
      },
      set(property, value) {
        const { definitions, active } = getActiveDefinition();
        const definition = definitions[active].find(
          (entry) => entry.key === property
        );
        if (definition) {
          definition.set(value);
        }
      }
    };
  }

  // ../../packages/pixi-panel/src/pixi-devtools/pixiDevtoolsSelection.ts
  function pixiDevtoolsSelection(devtools) {
    const win = window;
    const metaProperty = Symbol("pixi-devtools-selectable");
    let highlight;
    return {
      active() {
        return win.$pixi;
      },
      activate(node) {
        win.$pixi = node;
        devtools.dispatchEvent("activate", node);
      },
      selectable(node) {
        return node[metaProperty] !== false;
      },
      disable(node) {
        node[metaProperty] = false;
      },
      enable(node) {
        node[metaProperty] = true;
      },
      highlighted() {
        return highlight;
      },
      highlight(node) {
        highlight = node;
      }
    };
  }

  // ../../packages/pixi-panel/src/pixi-devtools/pixiDevtoolsViewport.ts
  function pixiDevtoolsViewport(devtools) {
    function findNodesAt(point, node, filter) {
      if (!filter(node)) {
        return [];
      }
      const children = devtools.childrenOf(node);
      const nodes = [];
      if (children) {
        for (let i = children.length - 1; i >= 0; i -= 1) {
          const child2 = children[i];
          nodes.push(...findNodesAt(point, child2, filter));
        }
      }
      if ("containsPoint" in node && typeof node.containsPoint === "function" && node.containsPoint(point)) {
        nodes.push(node);
      } else if ("getBounds" in node) {
        const bounds = node.getBounds();
        if ("containsPoint" in bounds && typeof bounds.containsPoint === "function") {
          if (bounds.containsPoint(point.x, point.y)) {
            nodes.push(node);
          }
        } else if ("contains" in bounds && typeof bounds.contains === "function" && bounds.contains(point.x, point.y)) {
          nodes.push(node);
        }
      }
      return nodes;
    }
    return {
      size() {
        const renderer = devtools.renderer();
        if (renderer) {
          if ("width" in renderer) {
            return {
              width: renderer.width,
              height: renderer.height
            };
          }
          return {
            width: renderer.scale.displaySize.width,
            height: renderer.scale.displaySize.height
          };
        }
        return void 0;
      },
      renderScale() {
        if (devtools.inVersionRange(8)) {
          return { x: 1, y: 1 };
        }
        return this.inputScale();
      },
      inputScale() {
        const renderer = devtools.renderer();
        if (renderer) {
          if ("resolution" in renderer) {
            return {
              x: renderer.resolution,
              y: renderer.resolution
            };
          }
          return renderer.scale.displayScale;
        }
        return void 0;
      },
      fromClient(clientX, clientY) {
        const el = devtools.canvas();
        const scale = this.inputScale();
        if (el && scale && "getBoundingClientRect" in el) {
          const bounds = el.getBoundingClientRect();
          return {
            x: (clientX - bounds.x) * (el.width / scale.x / bounds.width),
            y: (clientY - bounds.y) * (el.height / scale.y / bounds.height)
          };
        }
        throw new Error("offscreen canvas?");
      },
      ray(point, filter = () => true) {
        const root20 = devtools.root();
        if (!root20) {
          return [];
        }
        const nodes = findNodesAt(point, root20, filter);
        return nodes;
      }
    };
  }

  // ../../packages/pixi-panel/src/connect.ts
  function detect() {
    const win = window;
    function hasGlobal(varname) {
      if (win[varname]) {
        return true;
      }
      if (win.frames) {
        for (let i = 0; i < win.frames.length; i += 1) {
          try {
            if (win.frames[i][varname]) {
              return true;
            }
          } catch {
          }
        }
      }
      return false;
    }
    const detected = hasGlobal("__PIXI_APP__") || hasGlobal("__PHASER_GAME__") || hasGlobal("__PIXI_STAGE__") || hasGlobal("__PIXI_RENDERER__") || hasGlobal("__PATCHED_RENDERER__");
    if (win.__PIXI_INSPECTOR__ !== void 0) {
      if (detected) {
        return "CONNECTED";
      }
      if (hasGlobal("PIXI")) {
        return "PATCHABLE";
      }
      return "DISCONNECTED";
    }
    if (detected) {
      return "INJECT";
    }
    if (hasGlobal("PIXI")) {
      return "PATCHABLE";
    }
    return "NOT_FOUND";
  }
  function connect(bridge2) {
    const detected = poll(
      bridge2,
      `(${detect.toString()}())`,
      2500
    );
    const errorStore = writable();
    const readable2 = derived2(detected, ({ data, error }) => {
      if (error || typeof data === "undefined") {
        const message = error?.message;
        if (typeof message === "string" && message.endsWith(": %s")) {
          errorStore.set(new Error(message.substring(0, message.length - 4)));
        } else if (typeof error !== "undefined") {
          console.warn(error);
          errorStore.set(error);
        }
        return "ERROR";
      }
      if (data === "INJECT") {
        bridge2(`(() => {
        window.__PIXI_INSPECTOR__ = (${pixiDevtools.toString()}());
        window.__PIXI_INSPECTOR__.selection = (${pixiDevtoolsSelection.toString()}(window.__PIXI_INSPECTOR__));
        window.__PIXI_INSPECTOR__.viewport = (${pixiDevtoolsViewport.toString()}(window.__PIXI_INSPECTOR__));
        window.__PIXI_INSPECTOR__.outline = (${pixiDevtoolsOutline.toString()}(window.__PIXI_INSPECTOR__));
        window.__PIXI_INSPECTOR__.overlay = (${pixiDevtoolsOverlay.toString()}(window.__PIXI_INSPECTOR__));
        window.__PIXI_INSPECTOR__.properties = (${pixiDevtoolsProperties.toString()}(window.__PIXI_INSPECTOR__));
        window.__PIXI_INSPECTOR__.clickToSelect = (${pixiDevtoolsClickToSelect.toString()}(window.__PIXI_INSPECTOR__));
      })();`).then(() => detected.sync());
      }
      return data;
    });
    return {
      subscribe: readable2.subscribe,
      error: { subscribe: errorStore.subscribe },
      retry() {
        detected.sync();
      }
    };
  }

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/internal/flags/legacy.js
  enable_legacy_mode_flag();

  // ../../packages/blender-elements/src/Toggle/Toggle.svelte
  var on_click2 = (e, toggle, $$props) => {
    e.stopPropagation();
    toggle();
    $$props.onclick?.();
  };
  var on_dblclick2 = (e) => e.stopPropagation();
  var root_1 = template(`<span class="icon svelte-1c45y0o"></span>`);
  var root_2 = template(`<span class="label svelte-1c45y0o"> </span>`);
  var root3 = template(`<button><!> <!></button>`);
  var $$css3 = {
    hash: "svelte-1c45y0o",
    code: '.toggle.svelte-1c45y0o {appearance:none;background:transparent no-repeat center center;border:none;box-sizing:border-box;display:inline-flex;align-items:center;gap:2px;box-sizing:border-box;min-height:18px;min-width:18px;flex-shrink:0;opacity:0.8;color:white;padding:1px;cursor:pointer;&.with-label {padding-inline:4px;}&[data-location="ALONE"] {border-radius:2px / 3px;}&[data-location="LEFT"] {border-top-left-radius:2px 3px;border-bottom-left-radius:2px 3px;margin-right:1px;}&[data-location="CENTER"] {margin-right:1px;}&[data-location="RIGHT"] {border-top-right-radius:2px 3px;border-bottom-right-radius:2px 3px;}&:not(.transparent) {background-color:#656565;box-shadow:0 1px 1px #00000099;}&:hover {opacity:1;}&.pressed,\n    &:active {background-color:#4772b3;opacity:1;}}.icon.svelte-1c45y0o {display:inline-block;width:16px;height:16px;background:transparent no-repeat center center;background-size:contain;flex-shrink:0;}.label.svelte-1c45y0o {flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-shadow:0 1px 1px #00000066;}'
  };
  function Toggle($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css3);
    let icon = prop($$props, "icon", 3, void 0), label = prop($$props, "label", 3, ""), value = prop($$props, "value", 15, void 0), transparent = prop($$props, "transparent", 3, false), hint = prop($$props, "hint", 3, void 0), location = prop($$props, "location", 3, "ALONE");
    function toggle() {
      if (typeof value() === "boolean") {
        value(!value());
        $$props.onchange?.(value());
      }
    }
    var button = root3();
    let classes;
    button.__click = [on_click2, toggle, $$props];
    button.__dblclick = [on_dblclick2];
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var span = root_1();
        template_effect(() => set_style(span, `background-image: var(--icon-${icon() ?? ""})`));
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (icon()) $$render(consequent);
      });
    }
    var node_1 = sibling(node, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var span_1 = root_2();
        var text2 = child(span_1, true);
        reset(span_1);
        template_effect(() => set_text(text2, label()));
        append($$anchor2, span_1);
      };
      if_block(node_1, ($$render) => {
        if (label()) $$render(consequent_1);
      });
    }
    reset(button);
    template_effect(
      ($0) => {
        classes = set_class(button, 1, "toggle svelte-1c45y0o", null, classes, $0);
        set_attribute(button, "data-location", location());
        set_attribute(button, "title", hint());
      },
      [
        () => ({
          pressed: value(),
          transparent: transparent(),
          "with-label": label()
        })
      ]
    );
    append($$anchor, button);
    pop();
  }
  delegate(["click", "dblclick"]);

  // ../../packages/pixi-panel/src/Instructions.svelte
  var root4 = template(`<div class="instructions svelte-1phgi85"><div class="engines svelte-1phgi85"><div>Using <strong class="pixi svelte-1phgi85">PixiJS</strong>?<br> After creating the <i>PIXI.Application</i> <code class="svelte-1phgi85">const app = new PIXI.Application(...)</code> add the line: <code class="with-copy svelte-1phgi85"><div class="copy svelte-1phgi85"><!></div> globalThis.__PIXI_APP__ = app;</code> or when you're not using a PIXI.Application: <code class="svelte-1phgi85">globalThis.__PIXI_STAGE__ = stage;<br> globalThis.__PIXI_RENDERER__ = renderer;</code></div> <div>or when using <strong class="phaser svelte-1phgi85">Phaser</strong><br> After creating the <i>Phaser.Game</i> <code class="svelte-1phgi85">const game = new Phaser.Game(...)</code> add the line: <code class="with-copy svelte-1phgi85"><div class="copy svelte-1phgi85"><!></div> globalThis.__PHASER_GAME__ = game;</code></div></div></div>`);
  var $$css4 = {
    hash: "svelte-1phgi85",
    code: ".instructions.svelte-1phgi85 {padding:12px;}code.svelte-1phgi85 {background-color:#202020;color:rgb(145, 168, 203);margin-block:8px;}.with-copy.svelte-1phgi85 {position:relative;padding-right:30px;}.copy.svelte-1phgi85 {position:absolute;top:6px;right:6px;}.pixi.svelte-1phgi85 {color:#df5584;}.phaser.svelte-1phgi85 {color:#bb73d6;}.engines.svelte-1phgi85 {display:flex;flex-direction:column;gap:8px;\n    @media (min-width: 700px) {flex-direction:row;gap:64px;\n    }}"
  };
  function Instructions($$anchor, $$props) {
    push($$props, false);
    append_styles($$anchor, $$css4);
    const bridge2 = getBridgeContext();
    async function onCopy(text2) {
      await bridge2(`window.copy(${JSON.stringify(text2)})`);
    }
    init();
    var div = root4();
    var div_1 = child(div);
    var div_2 = child(div_1);
    var code = sibling(child(div_2), 9);
    var div_3 = child(code);
    var node = child(div_3);
    Toggle(node, {
      icon: "copy",
      hint: "Copy to clipboard",
      transparent: true,
      onclick: () => onCopy("globalThis.__PIXI_APP__ = app;")
    });
    reset(div_3);
    next();
    reset(code);
    next(2);
    reset(div_2);
    var div_4 = sibling(div_2, 2);
    var code_1 = sibling(child(div_4), 8);
    var div_5 = child(code_1);
    var node_1 = child(div_5);
    Toggle(node_1, {
      icon: "copy",
      hint: "Copy to clipboard",
      transparent: true,
      onclick: () => onCopy("globalThis.__PHASER_GAME__ = game;")
    });
    reset(div_5);
    next();
    reset(code_1);
    reset(div_4);
    reset(div_1);
    reset(div);
    append($$anchor, div);
    pop();
  }

  // ../../packages/pixi-panel/src/patchPixi.ts
  async function patchPixi(bride) {
    await bride(`(${patch.toString()}())`);
    await new Promise((resolve) => {
      setTimeout(resolve, 50);
    });
  }
  function patch() {
    let win = window;
    function detectInFrames() {
      if (win.PIXI) {
        return;
      }
      if (win.frames) {
        for (let i = 0; i < win.frames.length; i += 1) {
          try {
            if (win.frames[i].PIXI) {
              win = win.frames[i];
              return;
            }
          } catch {
          }
        }
      }
    }
    detectInFrames();
    const { PIXI } = win;
    if (!PIXI) {
      console.error("Patching PIXI failed");
      return;
    }
    for (const prop2 of ["Renderer", "WebGLRenderer"]) {
      const Renderer = PIXI[prop2];
      if (Renderer) {
        const { render } = Renderer.prototype;
        Renderer.prototype.render = function pixiDevtoolsRender(...args) {
          win.__PATCHED_RENDERER__ = this;
          Renderer.prototype.render = render;
          return render.call(this, ...args);
        };
        break;
      }
    }
  }

  // ../../packages/blender-elements/src/Tabs/Tabs.svelte
  var on_click3 = (_, $$props, tab) => $$props.onactivate?.(tab);
  var root_12 = template(`<button><div class="icon svelte-1xy2kci"></div></button>`);
  var root5 = template(`<div class="tab-layout svelte-1xy2kci"><div class="tabs svelte-1xy2kci"></div> <div class="content svelte-1xy2kci"><!></div></div>`);
  var $$css5 = {
    hash: "svelte-1xy2kci",
    code: ".tab-layout.svelte-1xy2kci {display:flex;height:100%;}.tabs.svelte-1xy2kci {display:flex;flex-shrink:0;flex-direction:column;padding-top:8px;padding-left:2px;gap:2px;background:#1b1b1b;overflow-y:auto;}.tab.svelte-1xy2kci {appearance:none;position:relative;border:0;width:26px;height:26px;background:transparent;box-sizing:border-box;border:1px solid transparent;border-top-left-radius:4px;border-bottom-left-radius:4px;outline:none;cursor:pointer;&:hover {background-color:#202020;}&.active {background-color:#2a2a2a;}&:focus-visible {border-color:#4772b3;border-right-color:transparent;}}.icon.svelte-1xy2kci {position:absolute;top:4px;left:4px;width:16px;height:16px;background:center center no-repeat;opacity:0.8;}.tab.svelte-1xy2kci:hover .icon:where(.svelte-1xy2kci),\n  .active.svelte-1xy2kci .icon:where(.svelte-1xy2kci) {opacity:1;}.content.svelte-1xy2kci {background:#2a2a2a;flex-grow:1;overflow-y:auto;}"
  };
  function Tabs($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css5);
    var div = root5();
    var div_1 = child(div);
    each(div_1, 20, () => $$props.tabs, (tab) => tab, ($$anchor2, tab) => {
      var button = root_12();
      let classes;
      button.__click = [on_click3, $$props, tab];
      var div_2 = child(button);
      let styles;
      reset(button);
      template_effect(
        ($0) => {
          classes = set_class(button, 1, "tab svelte-1xy2kci", null, classes, $0);
          set_attribute(button, "title", tab.label);
          set_attribute(button, "aria-label", tab.label);
          styles = set_style(div_2, "", styles, {
            "background-image": `var(--icon-${tab.icon ?? ""})`
          });
        },
        [() => ({ active: tab === $$props.active })]
      );
      append($$anchor2, button);
    });
    reset(div_1);
    var div_3 = sibling(div_1, 2);
    var node = child(div_3);
    snippet(node, () => $$props.children ?? noop);
    reset(div_3);
    reset(div);
    append($$anchor, div);
    pop();
  }
  delegate(["click"]);

  // ../../packages/blender-elements/src/Checkbox/Checkbox.svelte
  function onChange(e, $$props) {
    const el = e.target;
    $$props.onchange?.(el.checked);
  }
  var on_click4 = (e) => e.stopPropagation();
  var root_13 = template(`<span><!></span>`);
  var root6 = template(`<label class="checkbox svelte-o4hg3q"><input class="input svelte-o4hg3q" type="checkbox"> <!></label>`);
  var $$css6 = {
    hash: "svelte-o4hg3q",
    code: ".checkbox.svelte-o4hg3q {display:flex;gap:2px;color:white;align-items:center;user-select:none;font:12px system-ui,\n      sans-serif;cursor:pointer;}.input.svelte-o4hg3q {outline:none;appearance:none;background:#545454;border:1px solid #3d3d3d;border-radius:3px;box-shadow:0 1px 1px #00000033;width:14px;height:14px;margin:0;&:hover {background:#656565;border-color:#464646;}&:checked {background:#4772b3 var(--icon-checkbox) no-repeat center center;}&:focus-visible {border-color:#4772b3;&:checked {border-color:white;}}}"
  };
  function Checkbox($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css6);
    let value = prop($$props, "value", 15, void 0), hint = prop($$props, "hint", 3, "");
    var label = root6();
    var input = child(label);
    remove_input_defaults(input);
    input.__change = [onChange, $$props];
    input.__click = [on_click4];
    var node = sibling(input, 2);
    {
      var consequent = ($$anchor2) => {
        var span = root_13();
        var node_1 = child(span);
        snippet(node_1, () => $$props.children ?? noop);
        reset(span);
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if ($$props.children) $$render(consequent);
      });
    }
    reset(label);
    template_effect(() => set_attribute(label, "title", hint()));
    bind_checked(input, value);
    append($$anchor, label);
    pop();
  }
  delegate(["change", "click"]);

  // ../../packages/blender-elements/src/actions/blurOnEnter.ts
  function blurOnEnter(el) {
    function onKeydown2(e) {
      if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        el.blur();
      }
    }
    el.addEventListener("keydown", onKeydown2);
    return {
      destroy() {
        el.removeEventListener("keydown", onKeydown2);
      }
    };
  }

  // ../../packages/blender-elements/src/actions/numberDrag.ts
  var pointerLockSupported = true;
  function numberDrag(el, config) {
    let started;
    async function onMousedown(e) {
      if (!config.step) {
        return;
      }
      config.onDown?.(e);
      if (typeof config.value === "number") {
        started = {
          moved: 0,
          value: config.value,
          ts: Date.now()
        };
        document.addEventListener("mousemove", onMousemove);
        if (e.target === el) {
          await requestPointerLock(el);
        }
      }
    }
    function onMouseup(e) {
      config.onUp?.(e);
      if (!started) {
        return;
      }
      document.removeEventListener("mousemove", onMousemove);
      if (pointerLockSupported) {
        document.exitPointerLock();
      }
      if (started.moved === 0) {
        config.onClick?.(e);
      }
      started = void 0;
    }
    function onMousemove(e) {
      if (!started || !config.step) {
        return;
      }
      if (started.moved === 0) {
        started.moved = Math.min(1, Math.max(e.movementX, -1));
      } else {
        started.moved += e.movementX;
      }
      const mouseStep = e.shiftKey ? config.step / 20 : config.step / 2;
      const offset = started.moved * mouseStep;
      let value = started.value + offset;
      if (e.ctrlKey) {
        const rest = value % (config.step * (e.shiftKey ? 1 : 10));
        value -= rest;
      }
      if (typeof config.min === "number" && value < config.min) {
        value = config.min;
      }
      if (typeof config.max === "number" && value > config.max) {
        value = config.max;
      }
      config.onChange(value);
    }
    el.addEventListener("mousedown", onMousedown);
    document.addEventListener("mouseup", onMouseup);
    return {
      update(next2) {
        config = next2;
      },
      destroy() {
        el.removeEventListener("mousedown", onMousedown);
        document.removeEventListener("mouseup", onMouseup);
        document.removeEventListener("mousemove", onMousemove);
      }
    };
  }
  async function requestPointerLock(el) {
    if (!pointerLockSupported) {
      return;
    }
    try {
      await el.requestPointerLock();
    } catch (err) {
      console.warn(err);
      pointerLockSupported = false;
    }
  }

  // ../../packages/blender-elements/src/actions/revertOnEscape.ts
  function revertOnEscape(el, previous) {
    function onKeydown2(e) {
      if (e.key === "Escape") {
        el.value = previous;
        el.dispatchEvent(new InputEvent("input"));
        e.preventDefault();
        setTimeout(() => {
          el.blur();
        }, 0);
      }
    }
    el.addEventListener("keydown", onKeydown2);
    return {
      update(value) {
        previous = value;
      },
      destroy() {
        el.removeEventListener("keydown", onKeydown2);
      }
    };
  }

  // ../../packages/blender-elements/src/NumberField/NumberField.svelte
  function onStepDown(_, $$props, value) {
    if ($$props.step && typeof value() === "number") {
      value(value() - $$props.step);
      $$props.onchange?.(value());
    }
  }
  function onStepUp(__1, $$props, value) {
    if ($$props.step && typeof value() === "number") {
      value(value() + $$props.step);
      $$props.onchange?.(value());
    }
  }
  var root_14 = template(`<div class="drag svelte-cbbrpr"><button class="arrow left svelte-cbbrpr" aria-label="down"></button> <button class="arrow right svelte-cbbrpr" aria-label="up"></button></div>`);
  var root7 = template(`<div><input class="input svelte-cbbrpr"> <!></div>`);
  var $$css7 = {
    hash: "svelte-cbbrpr",
    code: '.number-field.svelte-cbbrpr {position:relative;background:#545454;overflow:hidden;&:not(.focused, .active):hover {background-color:#656565;}&.active,\n    &.focused {background-color:#222222;}&[data-location="ALONE"] {border-radius:2px / 3px;}&[data-location="TOP"] {border-top-left-radius:2px 3px;border-top-right-radius:2px 3px;margin-bottom:1px;}&[data-location="MIDDLE"] {margin-bottom:1px;}&[data-location="BOTTOM"] {border-bottom-left-radius:2px 3px;border-bottom-right-radius:2px 3px;}}.input.svelte-cbbrpr {background-color:transparent;color:#e5e5e5;border:0;text-align:center;outline:none;display:block;width:100%;box-sizing:border-box;font:12px system-ui,\n      sans-serif;padding-top:2px;padding-bottom:2px;text-shadow:0 1px 2px #000000cc;&:focus {color:#e5e5e5;}&::selection {background-color:#4570b5;}}.svelte-cbbrpr:not(.focused, .active) .input:where(.svelte-cbbrpr):hover {background-color:#797979;color:#fcfcfc;}.drag.svelte-cbbrpr {position:absolute;top:0;bottom:0;left:0;right:0;cursor:col-resize;}.arrow.svelte-cbbrpr {position:absolute;background:none;border:none;color:white;top:0;bottom:0;width:13px;background:#656565 no-repeat center center;display:none;cursor:pointer;&.left {left:0;background-image:var(--icon-chevron-left);}&.right {right:0;background-image:var(--icon-chevron-right);}}.number-field.svelte-cbbrpr:hover .arrow:where(.svelte-cbbrpr) {display:block;}.active.svelte-cbbrpr .arrow:where(.svelte-cbbrpr) {background-color:#222222;}.svelte-cbbrpr:not(.focused, .active) .arrow:where(.svelte-cbbrpr):hover {background-color:#797979;}'
  };
  function NumberField($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css7);
    let value = prop($$props, "value", 15), suffix = prop($$props, "suffix", 3, ""), location = prop($$props, "location", 3, "ALONE");
    let el;
    let wanted = state(proxy(value()));
    let text2 = state(proxy(format(value())));
    let focused = state(false);
    let active = state(false);
    let previous = state(proxy(value()));
    user_effect(() => {
      if (get(wanted) !== value() && document.activeElement !== el) {
        set(text2, format(value()), true);
        set(wanted, value(), true);
      }
    });
    function format(val) {
      if (val === void 0 || Number.isNaN(val)) {
        return "";
      }
      if (val > 1e6) {
        return Math.round(val).toString() + suffix();
      }
      return val.toFixed(6).toString().substring(0, 7).replace(/\.?0+$/, "") + suffix();
    }
    function onInput3() {
      if (Number.isNaN(Number(el.value))) {
        return;
      }
      set(wanted, Number(el.value), true);
      if (value() !== get(wanted)) {
        value(get(wanted));
      }
    }
    function onFocus() {
      set(previous, value(), true);
      set(focused, true);
      if (suffix() && get(text2).endsWith(suffix())) {
        set(text2, get(text2).substring(0, get(text2).length - suffix().length), true);
        el.value = get(text2);
      }
      el.select();
    }
    function onBlur() {
      set(focused, false);
      set(text2, format(value()), true);
      if (get(wanted) !== get(previous)) {
        value(get(wanted));
        set(text2, format(value()), true);
        if (typeof value() === "number") {
          $$props.onchange?.(value());
        }
      }
    }
    function onChange2(next2) {
      value(next2);
      $$props.onchange?.(value());
    }
    function onClick(e) {
      const type = e.target.nodeName;
      if (type !== "BUTTON") {
        el.focus();
      }
    }
    function onDown() {
      set(active, true);
    }
    function onUp() {
      set(active, false);
    }
    var div = root7();
    let classes;
    var input = child(div);
    remove_input_defaults(input);
    input.__input = onInput3;
    action(input, ($$node) => blurOnEnter?.($$node));
    action(input, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get(previous)?.toString() ?? "");
    bind_this(input, ($$value) => el = $$value, () => el);
    effect(() => bind_value(input, () => get(text2), ($$value) => set(text2, $$value)));
    var node = sibling(input, 2);
    {
      var consequent = ($$anchor2) => {
        var div_1 = root_14();
        var button = child(div_1);
        button.__click = [onStepDown, $$props, value];
        var button_1 = sibling(button, 2);
        button_1.__click = [onStepUp, $$props, value];
        reset(div_1);
        action(div_1, ($$node, $$action_arg) => numberDrag?.($$node, $$action_arg), () => ({
          value: value(),
          step: $$props.step,
          min: $$props.min,
          max: $$props.max,
          onChange: onChange2,
          onClick,
          onDown,
          onUp
        }));
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if (!get(focused) && $$props.step) $$render(consequent);
      });
    }
    reset(div);
    template_effect(
      ($0) => {
        classes = set_class(div, 1, "number-field svelte-cbbrpr", null, classes, $0);
        set_attribute(div, "data-location", location());
        set_attribute(input, "id", $$props.id);
      },
      [
        () => ({
          active: get(active),
          focused: get(focused)
        })
      ]
    );
    event("focus", input, onFocus);
    event("blur", input, onBlur);
    append($$anchor, div);
    pop();
  }
  delegate(["input", "click"]);

  // ../../node_modules/.pnpm/svelte@5.28.2/node_modules/svelte/src/transition/index.js
  function cubic_out(t) {
    const f = t - 1;
    return f * f * f + 1;
  }
  var slide_warning = false;
  function slide(node, { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
    const style = getComputedStyle(node);
    if (dev_fallback_default && !slide_warning && /(contents|inline|table)/.test(style.display)) {
      slide_warning = true;
      Promise.resolve().then(() => slide_warning = false);
      transition_slide_display(style.display);
    }
    const opacity = +style.opacity;
    const primary_property = axis === "y" ? "height" : "width";
    const primary_property_value = parseFloat(style[primary_property]);
    const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
    const capitalized_secondary_properties = secondary_properties.map(
      (e) => (
        /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
        `${e[0].toUpperCase()}${e.slice(1)}`
      )
    );
    const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
    const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
    const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
    const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
    const border_width_start_value = parseFloat(
      style[`border${capitalized_secondary_properties[0]}Width`]
    );
    const border_width_end_value = parseFloat(
      style[`border${capitalized_secondary_properties[1]}Width`]
    );
    return {
      delay,
      duration,
      easing,
      css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`
    };
  }

  // ../../packages/blender-elements/src/Panel/Panel.svelte
  function onToggleExpanded(_, expanded) {
    expanded(!expanded());
  }
  var root_22 = template(`<div><!></div>`);
  var root8 = template(`<section class="panel svelte-1pgbset"><button><!> <span> </span></button> <!></section>`);
  var $$css8 = {
    hash: "svelte-1pgbset",
    code: '.panel.svelte-1pgbset {background:#353535;border-radius:4px;}.title.svelte-1pgbset {display:flex;gap:4px;appearance:none;position:relative;background:transparent;border:0;color:inherit;box-sizing:border-box;padding:4px 16px 4px 20px;min-height:24px;width:100%;user-select:none;text-align:left;&:before {content:"";position:absolute;top:3px;left:3px;width:16px;height:16px;background:var(--icon-chevron-right) center center no-repeat;opacity:0.5;}&.expanded::before {background-image:var(--icon-chevron-down);}}.content.svelte-1pgbset {padding:8px;&.disabled {opacity:0.5;}}'
  };
  function Panel($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css8);
    let expanded = prop($$props, "expanded", 15, true), value = prop($$props, "value", 15, void 0);
    var section = root8();
    var button = child(section);
    let classes;
    button.__click = [onToggleExpanded, expanded];
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        Checkbox($$anchor2, {
          get onchange() {
            return $$props.onchange;
          },
          get value() {
            return value();
          },
          set value($$value) {
            value($$value);
          }
        });
      };
      if_block(node, ($$render) => {
        if (typeof value() === "boolean") $$render(consequent);
      });
    }
    var span = sibling(node, 2);
    var text2 = child(span, true);
    reset(span);
    reset(button);
    var node_1 = sibling(button, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var div = root_22();
        let classes_1;
        var node_2 = child(div);
        snippet(node_2, () => $$props.children ?? noop);
        reset(div);
        template_effect(($0) => classes_1 = set_class(div, 1, "content svelte-1pgbset", null, classes_1, $0), [() => ({ disabled: value() === false })]);
        transition(3, div, () => slide, () => ({ duration: 150 }));
        append($$anchor2, div);
      };
      if_block(node_1, ($$render) => {
        if (expanded()) $$render(consequent_1);
      });
    }
    reset(section);
    template_effect(
      ($0) => {
        classes = set_class(button, 1, "title svelte-1pgbset", null, classes, $0);
        set_text(text2, $$props.title);
      },
      [() => ({ expanded: expanded() })]
    );
    append($$anchor, section);
    pop();
  }
  delegate(["click"]);

  // ../../packages/blender-elements/src/Property/Property.svelte
  var root9 = template(`<div><div class="label svelte-1hiqa00"> </div> <div class="value svelte-1hiqa00"><!></div></div>`);
  var $$css9 = {
    hash: "svelte-1hiqa00",
    code: ".property.svelte-1hiqa00 {display:flex;gap:8px;&:not(.group) {margin-bottom:4px;}}.label.svelte-1hiqa00 {text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;user-select:none;flex:1;overflow:hidden;text-overflow:ellipsis;}.value.svelte-1hiqa00 {flex:2;}"
  };
  function Property($$anchor, $$props) {
    append_styles($$anchor, $$css9);
    let label = prop($$props, "label", 3, ""), hint = prop($$props, "hint", 3, ""), group = prop($$props, "group", 3, false);
    var div = root9();
    let classes;
    var div_1 = child(div);
    var text2 = child(div_1, true);
    reset(div_1);
    var div_2 = sibling(div_1, 2);
    var node = child(div_2);
    snippet(node, () => $$props.children ?? noop);
    reset(div_2);
    reset(div);
    template_effect(
      ($0) => {
        classes = set_class(div, 1, "property svelte-1hiqa00", null, classes, $0);
        set_attribute(div_1, "title", hint());
        set_text(text2, label());
      },
      [() => ({ group: group() })]
    );
    append($$anchor, div);
  }

  // ../../packages/blender-elements/src/SelectMenu/Option.svelte
  var root_15 = template(`<span class="icon svelte-1mtg7kw"></span>`);
  var root10 = template(`<button class="option svelte-1mtg7kw"><!> <span> </span></button>`);
  var $$css10 = {
    hash: "svelte-1mtg7kw",
    code: ".option.svelte-1mtg7kw {font:12px system-ui,\n      sans-serif;color:#dddddd;padding:0 6px 0 6px;user-select:none;background:transparent;border:0;border-radius:3px;text-align:left;display:flex;align-items:center;gap:4px;min-height:18px;cursor:pointer;&:hover {background:#4772b3;color:#ffffff;}}.icon.svelte-1mtg7kw {display:inline-block;width:16px;height:16px;background:no-repeat center center;background-size:contain;}"
  };
  function Option($$anchor, $$props) {
    append_styles($$anchor, $$css10);
    let icon = prop($$props, "icon", 3, void 0), label = prop($$props, "label", 3, void 0);
    var button = root10();
    button.__click = function(...$$args) {
      $$props.onclick?.apply(this, $$args);
    };
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var span = root_15();
        template_effect(() => set_style(span, `background-image: var(--icon-${icon() ?? ""})`));
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (icon()) $$render(consequent);
      });
    }
    var span_1 = sibling(node, 2);
    var text2 = child(span_1, true);
    reset(span_1);
    reset(button);
    template_effect(() => set_text(text2, label() ?? $$props.value));
    append($$anchor, button);
  }
  delegate(["click"]);

  // ../../packages/blender-elements/src/SelectMenu/SelectMenu.svelte
  async function expand(_, expanded, el) {
    set(expanded, { x: "LEFT", y: "DOWN" }, true);
    await tick();
    if (!get(expanded)) {
      return;
    }
    if (!get(el)) {
      return;
    }
    const bounds = get(el).getBoundingClientRect();
    const { x, y, height } = bounds;
    const { innerHeight } = window;
    if (x < 0) {
      get(expanded).x = "RIGHT";
    }
    if (y + height > innerHeight) {
      get(expanded).y = "UP";
    }
  }
  var root_16 = template(`<span> </span>`);
  var root_4 = template(`<span class="icon svelte-1iis30"></span>`);
  var root_3 = template(`<!> <span> </span>`, 1);
  var root_9 = template(`<div class="legend svelte-1iis30"> </div>`);
  var root_5 = template(`<div class="popout svelte-1iis30"><button class="detector svelte-1iis30" aria-label="close"></button> <div class="options svelte-1iis30"></div> <!></div>`);
  var root11 = template(`<div><button class="value svelte-1iis30"><!></button> <!></div>`);
  var $$css11 = {
    hash: "svelte-1iis30",
    code: '.search-field.svelte-1iis30 {position:relative;}.value.svelte-1iis30 {font:12px system-ui,\n      sans-serif;appearance:none;background-color:transparent;border:none;box-sizing:border-box;width:100%;color:#fdfdfd;outline:none;display:flex;align-items:center;gap:4px;padding:2px 20px 1px 4px;background:#282828;border:1px solid #3d3d3d;box-shadow:0 1px 3px #0000004d;border-radius:4px;text-align:left;min-height:18px;cursor:pointer;&:hover {background:#232323;border-color:#414141;}&:after {content:"";position:absolute;top:1px;right:3px;width:16px;height:16px;background:var(--icon-chevron-down) center center no-repeat;opacity:0.5;}}.expanded.svelte-1iis30 .value:where(.svelte-1iis30) {background:#446290;color:#ffffff;}.expanded.up.svelte-1iis30 .value:where(.svelte-1iis30) {border-top-left-radius:0;border-top-right-radius:0;border-top-color:#446290;}.expanded.down.svelte-1iis30 .value:where(.svelte-1iis30) {border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:#446290;}.icon.svelte-1iis30 {display:inline-block;width:16px;height:16px;background:no-repeat center center;background-size:contain;}.popout.svelte-1iis30 {position:absolute;z-index:1;box-sizing:border-box;min-width:100%;background:#181818;border:1px solid #242424;border-radius:4px;}.up.svelte-1iis30 .popout:where(.svelte-1iis30) {border-top-left-radius:0;border-top-right-radius:0;bottom:100%;}.right.svelte-1iis30 .popout:where(.svelte-1iis30) {left:0;}.down.svelte-1iis30 .popout:where(.svelte-1iis30) {top:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px;}.left.svelte-1iis30 .popout:where(.svelte-1iis30) {right:0;}.detector.svelte-1iis30 {position:absolute;top:-32px;right:-32px;bottom:-32px;left:-32px;background-color:transparent;border:none;}.options.svelte-1iis30 {position:relative;display:flex;flex-direction:column;gap:4px;padding:2px;}.legend.svelte-1iis30 {position:relative;color:#989898;padding:5px 8px 4px 8px;}.down.svelte-1iis30 .legend:where(.svelte-1iis30) {border-top:1px solid #2f2f2f;}'
  };
  function SelectMenu($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css11);
    let value = prop($$props, "value", 15), legend = prop($$props, "legend", 3, "");
    let current = user_derived(() => $$props.options.find((option) => {
      if (typeof option === "string") {
        return option === value();
      }
      return option.value === value();
    }));
    let el = state(void 0);
    let expanded = state(void 0);
    let timer;
    function select(next2) {
      value(typeof next2 === "string" ? next2 : next2.value);
      $$props.onchange?.(value());
      collapse();
    }
    function collapse() {
      set(expanded, void 0);
    }
    function onLeave() {
      timer = window.setTimeout(collapse, 0);
    }
    function onEnter() {
      clearTimeout(timer);
      timer = void 0;
    }
    var div = root11();
    let classes;
    var button = child(div);
    button.__click = [expand, expanded, el];
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var span = root_16();
        var text2 = child(span, true);
        reset(span);
        template_effect(() => set_text(text2, get(current)));
        append($$anchor2, span);
      };
      var alternate = ($$anchor2, $$elseif) => {
        {
          var consequent_2 = ($$anchor3) => {
            var fragment = root_3();
            var node_1 = first_child(fragment);
            {
              var consequent_1 = ($$anchor4) => {
                var span_1 = root_4();
                template_effect(() => set_style(span_1, `background-image: var(--icon-${get(current).icon ?? ""})`));
                append($$anchor4, span_1);
              };
              if_block(node_1, ($$render) => {
                if (get(current).icon) $$render(consequent_1);
              });
            }
            var span_2 = sibling(node_1, 2);
            var text_1 = child(span_2, true);
            reset(span_2);
            template_effect(() => set_text(text_1, get(current).label ?? get(current).value));
            append($$anchor3, fragment);
          };
          if_block(
            $$anchor2,
            ($$render) => {
              if (get(current)) $$render(consequent_2);
            },
            $$elseif
          );
        }
      };
      if_block(node, ($$render) => {
        if (typeof get(current) === "string") $$render(consequent);
        else $$render(alternate, false);
      });
    }
    reset(button);
    var node_2 = sibling(button, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var div_1 = root_5();
        var button_1 = child(div_1);
        button_1.__click = collapse;
        var div_2 = sibling(button_1, 2);
        each(div_2, 20, () => $$props.options, (option) => option, ($$anchor3, option) => {
          var fragment_1 = comment();
          var node_3 = first_child(fragment_1);
          {
            var consequent_3 = ($$anchor4) => {
              Option($$anchor4, {
                get value() {
                  return option;
                },
                onclick: () => select(option)
              });
            };
            var alternate_1 = ($$anchor4) => {
              Option($$anchor4, {
                get value() {
                  return option.value;
                },
                get icon() {
                  return option.icon;
                },
                get label() {
                  return option.label;
                },
                onclick: () => select(option)
              });
            };
            if_block(node_3, ($$render) => {
              if (typeof option === "string") $$render(consequent_3);
              else $$render(alternate_1, false);
            });
          }
          append($$anchor3, fragment_1);
        });
        reset(div_2);
        var node_4 = sibling(div_2, 2);
        {
          var consequent_4 = ($$anchor3) => {
            var div_3 = root_9();
            var text_2 = child(div_3, true);
            reset(div_3);
            template_effect(() => set_text(text_2, legend()));
            event("mouseenter", div_3, onEnter);
            append($$anchor3, div_3);
          };
          if_block(node_4, ($$render) => {
            if (legend()) $$render(consequent_4);
          });
        }
        reset(div_1);
        bind_this(div_1, ($$value) => set(el, $$value), () => get(el));
        event("mouseleave", button_1, onLeave);
        event("mouseenter", div_2, onEnter);
        append($$anchor2, div_1);
      };
      if_block(node_2, ($$render) => {
        if (get(expanded)) $$render(consequent_5);
      });
    }
    reset(div);
    template_effect(($0) => classes = set_class(div, 1, "search-field svelte-1iis30", null, classes, $0), [
      () => ({
        expanded: get(expanded),
        up: get(expanded)?.y === "UP",
        right: get(expanded)?.x === "RIGHT",
        down: get(expanded)?.y === "DOWN",
        left: get(expanded)?.x === "LEFT"
      })
    ]);
    append($$anchor, div);
    pop();
  }
  delegate(["click"]);

  // ../../packages/pixi-panel/src/ObjectProperties.svelte
  var root_7 = template(`<!> <!>`, 1);
  var root_23 = template(`<!> <!> <!> <!>`, 1);
  var root_122 = template(`<!> <!>`, 1);
  var root_152 = template(`<!> <!>`, 1);
  var root_18 = template(`<!> <!>`, 1);
  var root_11 = template(`<!> <!> <!>`, 1);
  var root_222 = template(`<!> <!>`, 1);
  var root_29 = template(`<!> <!> <!>`, 1);
  var root_40 = template(`<!> <!>`, 1);
  var root_43 = template(`<!> <!>`, 1);
  var root_39 = template(`<!> <!>`, 1);
  var root_48 = template(`<!> <!>`, 1);
  var root_47 = template(`<!> <!> <!> <!>`, 1);
  var root12 = template(`<!> <!> <!> <!> <!> <!>`, 1);
  function ObjectProperties($$anchor, $$props) {
    push($$props, true);
    let expanded = prop($$props, "expanded", 15);
    let transformPanel = user_derived(() => typeof $$props.props.x === "number" || typeof $$props.props.angle === "number" || typeof $$props.props.scaleX === "number");
    let transformOriginPanel = user_derived(() => typeof $$props.props.originX === "number" || typeof $$props.props.anchorX === "number" || typeof $$props.props.pivotX === "number");
    let visibilityPanel = user_derived(() => typeof $$props.props.alpha === "number" || typeof $$props.props.visible === "boolean");
    let renderPanel = user_derived(() => typeof $$props.props.sortableChildren === "boolean" || typeof $$props.props.zIndex === "number" || typeof $$props.props.cullable === "boolean");
    let interactivePanel = user_derived(() => typeof $$props.props.interactive === "boolean" || typeof $$props.props.interactiveChildren === "boolean");
    let skewDimensionsPanel = state("");
    user_pre_effect(() => {
      if (typeof $$props.props.width === "number" && typeof $$props.props.skewX === "number") {
        set(skewDimensionsPanel, "Skew & Dimensions");
      } else if (typeof $$props.props.width === "number") {
        set(skewDimensionsPanel, "Dimensions");
      } else if (typeof $$props.props.skewX === "number") {
        set(skewDimensionsPanel, "Skew");
      } else {
        set(skewDimensionsPanel, "");
      }
    });
    var fragment = root12();
    var node = first_child(fragment);
    {
      var consequent_2 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Transform",
          get expanded() {
            return expanded().transform;
          },
          set expanded($$value) {
            expanded(expanded().transform = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_2 = root_23();
            var node_1 = first_child(fragment_2);
            Property(node_1, {
              label: "Location X",
              group: true,
              children: ($$anchor4, $$slotProps2) => {
                NumberField($$anchor4, {
                  get value() {
                    return $$props.props.x;
                  },
                  step: 1,
                  location: "TOP",
                  onchange: (value) => $$props.onchange({ property: "x", value })
                });
              },
              $$slots: { default: true }
            });
            var node_2 = sibling(node_1, 2);
            Property(node_2, {
              label: "Y",
              children: ($$anchor4, $$slotProps2) => {
                NumberField($$anchor4, {
                  get value() {
                    return $$props.props.y;
                  },
                  step: 1,
                  location: "BOTTOM",
                  onchange: (value) => $$props.onchange({ property: "y", value })
                });
              },
              $$slots: { default: true }
            });
            var node_3 = sibling(node_2, 2);
            {
              var consequent = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Angle",
                  hint: "The angle of the object in degrees",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.angle;
                      },
                      step: 1,
                      suffix: "\xB0",
                      onchange: (value) => $$props.onchange({ property: "angle", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_3, ($$render) => {
                if (typeof $$props.props.angle === "number") $$render(consequent);
              });
            }
            var node_4 = sibling(node_3, 2);
            {
              var consequent_1 = ($$anchor4) => {
                var fragment_7 = root_7();
                var node_5 = first_child(fragment_7);
                Property(node_5, {
                  label: "Scale X",
                  group: true,
                  hint: "The scale factors of this object along the local coordinate axes",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.scaleX;
                      },
                      step: 0.05,
                      location: "TOP",
                      onchange: (value) => $$props.onchange({ property: "scaleX", value })
                    });
                  },
                  $$slots: { default: true }
                });
                var node_6 = sibling(node_5, 2);
                Property(node_6, {
                  label: "Y",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.scaleY;
                      },
                      step: 0.1,
                      location: "BOTTOM",
                      onchange: (value) => $$props.onchange({ property: "scaleY", value })
                    });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_7);
              };
              if_block(node_4, ($$render) => {
                if (typeof $$props.props.scaleX === "number") $$render(consequent_1);
              });
            }
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      };
      if_block(node, ($$render) => {
        if (get(transformPanel)) $$render(consequent_2);
      });
    }
    var node_7 = sibling(node, 2);
    {
      var consequent_6 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Transform Origin",
          get expanded() {
            return expanded().transformOrigin;
          },
          set expanded($$value) {
            expanded(expanded().transformOrigin = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_11 = root_11();
            var node_8 = first_child(fragment_11);
            {
              var consequent_3 = ($$anchor4) => {
                var fragment_12 = root_122();
                var node_9 = first_child(fragment_12);
                Property(node_9, {
                  label: "Anchor X",
                  group: true,
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.anchorX;
                      },
                      step: 0.01,
                      min: 0,
                      max: 1,
                      location: "TOP",
                      onchange: (value) => $$props.onchange({ property: "anchorX", value })
                    });
                  },
                  $$slots: { default: true }
                });
                var node_10 = sibling(node_9, 2);
                Property(node_10, {
                  label: "Y",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.anchorY;
                      },
                      step: 0.01,
                      min: 0,
                      max: 1,
                      location: "BOTTOM",
                      onchange: (value) => $$props.onchange({ property: "anchorY", value })
                    });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_12);
              };
              if_block(node_8, ($$render) => {
                if (typeof $$props.props.anchorX === "number") $$render(consequent_3);
              });
            }
            var node_11 = sibling(node_8, 2);
            {
              var consequent_4 = ($$anchor4) => {
                var fragment_15 = root_152();
                var node_12 = first_child(fragment_15);
                Property(node_12, {
                  label: "Origin X",
                  group: true,
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.originX;
                      },
                      step: 0.01,
                      min: 0,
                      max: 1,
                      location: "TOP",
                      onchange: (value) => $$props.onchange({ property: "originX", value })
                    });
                  },
                  $$slots: { default: true }
                });
                var node_13 = sibling(node_12, 2);
                Property(node_13, {
                  label: "Y",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.originY;
                      },
                      step: 0.01,
                      min: 0,
                      max: 1,
                      location: "BOTTOM",
                      onchange: (value) => $$props.onchange({ property: "originY", value })
                    });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_15);
              };
              if_block(node_11, ($$render) => {
                if (typeof $$props.props.originX === "number") $$render(consequent_4);
              });
            }
            var node_14 = sibling(node_11, 2);
            {
              var consequent_5 = ($$anchor4) => {
                var fragment_18 = root_18();
                var node_15 = first_child(fragment_18);
                Property(node_15, {
                  label: "Pivot X",
                  group: true,
                  hint: "The center of rotation, scaling, and skewing for this display object in its local space",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.pivotX;
                      },
                      step: 0.1,
                      location: "TOP",
                      onchange: (value) => $$props.onchange({ property: "pivotX", value })
                    });
                  },
                  $$slots: { default: true }
                });
                var node_16 = sibling(node_15, 2);
                Property(node_16, {
                  label: "Y",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.pivotY;
                      },
                      step: 0.1,
                      location: "BOTTOM",
                      onchange: (value) => $$props.onchange({ property: "pivotY", value })
                    });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_18);
              };
              if_block(node_14, ($$render) => {
                if (typeof $$props.props.pivotX === "number") $$render(consequent_5);
              });
            }
            append($$anchor3, fragment_11);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_7, ($$render) => {
        if (get(transformOriginPanel)) $$render(consequent_6);
      });
    }
    var node_17 = sibling(node_7, 2);
    {
      var consequent_9 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Visibility",
          get expanded() {
            return expanded().visibility;
          },
          set expanded($$value) {
            expanded(expanded().visibility = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_22 = root_222();
            var node_18 = first_child(fragment_22);
            {
              var consequent_7 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Alpha",
                  hint: "The opacity of the object",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.alpha;
                      },
                      step: 0.01,
                      min: 0,
                      max: 1,
                      onchange: (value) => $$props.onchange({ property: "alpha", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_18, ($$render) => {
                if (typeof $$props.props.alpha === "number") $$render(consequent_7);
              });
            }
            var node_19 = sibling(node_18, 2);
            {
              var consequent_8 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.visible;
                      },
                      hint: "The visibility of the object",
                      onchange: (value) => $$props.onchange({ property: "visible", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text2 = text("Visible");
                        append($$anchor6, text2);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_19, ($$render) => {
                if (typeof $$props.props.visible === "boolean") $$render(consequent_8);
              });
            }
            append($$anchor3, fragment_22);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_17, ($$render) => {
        if (get(visibilityPanel)) $$render(consequent_9);
      });
    }
    var node_20 = sibling(node_17, 2);
    {
      var consequent_13 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Rendering",
          get expanded() {
            return expanded().rendering;
          },
          set expanded($$value) {
            expanded(expanded().rendering = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_28 = root_29();
            var node_21 = first_child(fragment_28);
            {
              var consequent_10 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.sortableChildren;
                      },
                      hint: "If set to true, the container will sort its children by zIndex value",
                      onchange: (value) => $$props.onchange({ property: "sortableChildren", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text_1 = text("Sortable children");
                        append($$anchor6, text_1);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_21, ($$render) => {
                if (typeof $$props.props.sortableChildren === "boolean") $$render(consequent_10);
              });
            }
            var node_22 = sibling(node_21, 2);
            {
              var consequent_11 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Z Index",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.zIndex;
                      },
                      onchange: (value) => $$props.onchange({ property: "zIndex", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_22, ($$render) => {
                if (typeof $$props.props.zIndex === "number") $$render(consequent_11);
              });
            }
            var node_23 = sibling(node_22, 2);
            {
              var consequent_12 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.cullable;
                      },
                      hint: "Should this object be rendered if the bounds of this object are out of frame?",
                      onchange: (value) => $$props.onchange({ property: "cullable", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text_2 = text("Cullable");
                        append($$anchor6, text_2);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_23, ($$render) => {
                if (typeof $$props.props.cullable === "boolean") $$render(consequent_12);
              });
            }
            append($$anchor3, fragment_28);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_20, ($$render) => {
        if (get(renderPanel)) $$render(consequent_13);
      });
    }
    var node_24 = sibling(node_20, 2);
    {
      var consequent_16 = ($$anchor2) => {
        Panel($$anchor2, {
          get title() {
            return get(skewDimensionsPanel);
          },
          get expanded() {
            return expanded().skewDimensions;
          },
          set expanded($$value) {
            expanded(expanded().skewDimensions = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_36 = root_39();
            var node_25 = first_child(fragment_36);
            {
              var consequent_14 = ($$anchor4) => {
                var fragment_37 = root_40();
                var node_26 = first_child(fragment_37);
                Property(node_26, {
                  label: "Skew X",
                  group: true,
                  hint: "The skew factor for the object in radians",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.skewX;
                      },
                      step: 0.01,
                      suffix: "r",
                      location: "TOP",
                      onchange: (value) => $$props.onchange({ property: "skewX", value })
                    });
                  },
                  $$slots: { default: true }
                });
                var node_27 = sibling(node_26, 2);
                Property(node_27, {
                  label: "Y",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.skewY;
                      },
                      step: 0.01,
                      suffix: "r",
                      location: "BOTTOM",
                      onchange: (value) => $$props.onchange({ property: "skewY", value })
                    });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_37);
              };
              if_block(node_25, ($$render) => {
                if (typeof $$props.props.skewX === "number") $$render(consequent_14);
              });
            }
            var node_28 = sibling(node_25, 2);
            {
              var consequent_15 = ($$anchor4) => {
                var fragment_40 = root_43();
                var node_29 = first_child(fragment_40);
                Property(node_29, {
                  label: "Width",
                  group: true,
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.width;
                      },
                      step: 1,
                      location: "TOP",
                      onchange: (value) => $$props.onchange({ property: "width", value })
                    });
                  },
                  $$slots: { default: true }
                });
                var node_30 = sibling(node_29, 2);
                Property(node_30, {
                  label: "Height",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.height;
                      },
                      step: 1,
                      location: "BOTTOM",
                      onchange: (value) => $$props.onchange({ property: "height", value })
                    });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_40);
              };
              if_block(node_28, ($$render) => {
                if (typeof $$props.props.width === "number") $$render(consequent_15);
              });
            }
            append($$anchor3, fragment_36);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_24, ($$render) => {
        if (get(skewDimensionsPanel)) $$render(consequent_16);
      });
    }
    var node_31 = sibling(node_24, 2);
    {
      var consequent_21 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Interactivity",
          get expanded() {
            return expanded().interactive;
          },
          set expanded($$value) {
            expanded(expanded().interactive = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_44 = root_47();
            var node_32 = first_child(fragment_44);
            {
              var consequent_17 = ($$anchor4) => {
                var fragment_45 = root_48();
                var node_33 = first_child(fragment_45);
                Property(node_33, {
                  label: "Event mode",
                  hint: "Enable interaction events for the Container. Touch, pointer and mouse. This now replaces the interactive property.",
                  children: ($$anchor5, $$slotProps2) => {
                    SelectMenu($$anchor5, {
                      legend: "Event Mode",
                      get value() {
                        return $$props.props.eventMode;
                      },
                      options: [
                        { value: "none", label: "None" },
                        { value: "passive", label: "Passive" },
                        { value: "auto", label: "Auto" },
                        { value: "static", label: "Static" },
                        { value: "dynamic", label: "Dynamic" }
                      ],
                      onchange: (value) => $$props.onchange({ property: "eventMode", value })
                    });
                  },
                  $$slots: { default: true }
                });
                var node_34 = sibling(node_33, 2);
                Property(node_34, {
                  label: "Cursor",
                  children: ($$anchor5, $$slotProps2) => {
                    const expression = user_derived(() => $$props.props.cursor ?? "");
                    const expression_1 = user_derived(() => [
                      ...$$props.props.cursor ? [] : [{ value: "", label: "" }],
                      { value: "auto", label: "Auto" },
                      { value: "default", label: "Default" },
                      { value: "none", label: "None" },
                      { value: "context-menu", label: "Context menu" },
                      { value: "help", label: "Help" },
                      { value: "pointer", label: "Pointer" },
                      { value: "progress", label: "Progress" },
                      { value: "wait", label: "Wait" },
                      { value: "cell", label: "Cell" },
                      { value: "crosshair", label: "Crosshair" },
                      { value: "text", label: "Text" },
                      {
                        value: "vertical-text",
                        label: "Vertical text"
                      },
                      { value: "alias", label: "Alias" },
                      { value: "copy", label: "Copy" },
                      { value: "move", label: "Move" },
                      { value: "no-drop", label: "No drop" },
                      { value: "not-allowed", label: "Not allowed" },
                      { value: "all-scroll", label: "All scroll" },
                      { value: "zoom-in", label: "Zoom in" },
                      { value: "zoom-out", label: "Zoom out" },
                      { value: "grab", label: "Grab" },
                      { value: "grabbing", label: "Grabbing" }
                      // { value: "e-resize", label: "Resize (East)" },
                    ]);
                    SelectMenu($$anchor5, {
                      legend: "Cursor",
                      get value() {
                        return get(expression);
                      },
                      get options() {
                        return get(expression_1);
                      },
                      onchange: (value) => $$props.onchange({
                        property: "cursor",
                        value: value === "" ? void 0 : value
                      })
                    });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_45);
              };
              if_block(node_32, ($$render) => {
                if (typeof $$props.props.eventMode === "string") $$render(consequent_17);
              });
            }
            var node_35 = sibling(node_32, 2);
            {
              var consequent_18 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.interactive;
                      },
                      hint: "Enable interaction events for the Container. Touch, pointer and mouse",
                      onchange: (value) => $$props.onchange({ property: "interactive", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text_3 = text("Interactive");
                        append($$anchor6, text_3);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_35, ($$render) => {
                if (typeof $$props.props.interactive === "boolean") $$render(consequent_18);
              });
            }
            var node_36 = sibling(node_35, 2);
            {
              var consequent_19 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.buttonMode;
                      },
                      hint: "If enabled, the mouse cursor use the pointer behavior when hovered over the Container if it is interactive Setting this changes the 'cursor' property to 'pointer'.",
                      onchange: (value) => $$props.onchange({ property: "buttonMode", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text_4 = text("Button mode");
                        append($$anchor6, text_4);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_36, ($$render) => {
                if (typeof $$props.props.buttonMode === "boolean") $$render(consequent_19);
              });
            }
            var node_37 = sibling(node_36, 2);
            {
              var consequent_20 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.interactiveChildren;
                      },
                      hint: "Determines if the children to the Container can be clicked/touched Setting this to false allows PixiJS to bypass a recursive hitTest function",
                      onchange: (value) => $$props.onchange({ property: "interactiveChildren", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text_5 = text("Interactive children");
                        append($$anchor6, text_5);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_37, ($$render) => {
                if (typeof $$props.props.interactiveChildren === "boolean") $$render(consequent_20);
              });
            }
            append($$anchor3, fragment_44);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_31, ($$render) => {
        if (get(interactivePanel)) $$render(consequent_21);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/pixi-panel/src/SceneProperties.svelte
  var root_24 = template(`<!> <!>`, 1);
  function SceneProperties($$anchor, $$props) {
    push($$props, true);
    let expanded = prop($$props, "expanded", 15);
    let tickerPanel = user_derived(() => typeof $$props.props.speed === "number");
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent_2 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Ticker",
          get expanded() {
            return expanded().ticker;
          },
          set expanded($$value) {
            expanded(expanded().ticker = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_2 = root_24();
            var node_1 = first_child(fragment_2);
            {
              var consequent = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Speed",
                  hint: "Factor of current deltaTime",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.speed;
                      },
                      step: 0.01,
                      onchange: (value) => $$props.onchange({ property: "speed", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_1, ($$render) => {
                if (typeof $$props.props.speed === "number") $$render(consequent);
              });
            }
            var node_2 = sibling(node_1, 2);
            {
              var consequent_1 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.started;
                      },
                      hint: "Whether or not this ticker has been started",
                      onchange: (value) => $$props.onchange({ property: "started", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text2 = text("Started");
                        append($$anchor6, text2);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_2, ($$render) => {
                if (typeof $$props.props.started === "boolean") $$render(consequent_1);
              });
            }
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      };
      if_block(node, ($$render) => {
        if (get(tickerPanel)) $$render(consequent_2);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/blender-elements/src/actions/selectOnFocus.ts
  function selectOnFocus(el) {
    function onFocus() {
      el.select();
    }
    el.addEventListener("focus", onFocus);
    return {
      destroy() {
        el.removeEventListener("focus", onFocus);
      }
    };
  }

  // ../../packages/blender-elements/src/TextField/TextField.svelte
  function onInput(_, text2, value, $$props) {
    if (get(text2) !== value()) {
      value(get(text2));
      $$props.oninput?.(value());
    }
  }
  async function onKeydown(e, el, multiline) {
    if (!get(el)) {
      return;
    }
    if (e.key === "Enter" && e.shiftKey) {
      const { selectionStart } = get(el);
      set(multiline, true);
      await tick();
      get(el).focus();
      get(el).selectionStart = selectionStart;
      get(el).selectionEnd = selectionStart;
    }
  }
  var root_17 = template(`<div class="text-field svelte-cwvffy"><div class="spacer svelte-cwvffy"> </div> <textarea class="textarea svelte-cwvffy"></textarea></div>`);
  var root_25 = template(`<input type="text" class="input svelte-cwvffy" spellcheck="false">`);
  var $$css12 = {
    hash: "svelte-cwvffy",
    code: ".text-field.svelte-cwvffy {position:relative;width:100%;}.input.svelte-cwvffy,\n  .textarea.svelte-cwvffy,\n  .spacer.svelte-cwvffy {appearance:none;display:block;font:12px system-ui,\n      sans-serif;background-color:transparent;border:none;width:100%;box-sizing:border-box;color:#fdfdfd;outline:none;caret-color:#71a8ff;padding:2px 6px;margin:0;background:#1d1d1d;border:1px solid #3d3d3d;box-shadow:0 1px 3px #0000004d;border-radius:4px;&::selection {background-color:#4570b5;}&:hover:not(:focus) {background:#232323;border-color:#414141;}&:focus {cursor:text;}}.spacer.svelte-cwvffy {position:relative;white-space:pre-wrap;width:100%;visibility:hidden;}.textarea.svelte-cwvffy {position:absolute;top:0;left:0;width:100%;height:100%;resize:none;overflow-y:hidden;}"
  };
  function TextField($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css12);
    let value = prop($$props, "value", 15), id = prop($$props, "id", 3, void 0);
    let el = state(void 0);
    let text2 = state(proxy(value()));
    let previous = state(proxy(value()));
    let multiline = state(false);
    user_effect(() => {
      if (get(text2) !== value() && document.activeElement !== get(el)) {
        set(text2, value(), true);
        set(multiline, get(text2).includes("\n"), true);
      }
      if (get(text2).includes("\n")) {
        set(multiline, true);
      }
    });
    function onFocus() {
      set(previous, get(text2), true);
    }
    function onBlur() {
      if (!get(el)) {
        return;
      }
      if (get(previous) !== get(text2)) {
        value(get(text2));
        $$props.onchange?.(get(text2));
      }
      if (get(el).tagName === "TEXTAREA" && !get(text2).includes("\n")) {
        set(multiline, false);
      }
    }
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var div = root_17();
        var div_1 = child(div);
        var text_1 = child(div_1);
        reset(div_1);
        var textarea = sibling(div_1, 2);
        remove_textarea_child(textarea);
        textarea.__input = [onInput, text2, value, $$props];
        bind_this(textarea, ($$value) => set(el, $$value), () => get(el));
        effect(() => bind_value(textarea, () => get(text2), ($$value) => set(text2, $$value)));
        action(textarea, ($$node) => blurOnEnter?.($$node));
        action(textarea, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get(previous));
        reset(div);
        template_effect(() => {
          set_text(text_1, `\xA0${get(text2) ?? ""}\xA0`);
          set_attribute(textarea, "id", id());
        });
        event("blur", textarea, onBlur);
        append($$anchor2, div);
      };
      var alternate = ($$anchor2) => {
        var input = root_25();
        remove_input_defaults(input);
        input.__keydown = [onKeydown, el, multiline];
        input.__input = [onInput, text2, value, $$props];
        bind_this(input, ($$value) => set(el, $$value), () => get(el));
        effect(() => bind_value(input, () => get(text2), ($$value) => set(text2, $$value)));
        action(input, ($$node) => blurOnEnter?.($$node));
        action(input, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get(previous));
        action(input, ($$node) => selectOnFocus?.($$node));
        template_effect(() => set_attribute(input, "id", id()));
        event("focus", input, onFocus);
        event("blur", input, onBlur);
        append($$anchor2, input);
      };
      if_block(node, ($$render) => {
        if (get(multiline)) $$render(consequent);
        else $$render(alternate, false);
      });
    }
    append($$anchor, fragment);
    pop();
  }
  delegate(["input", "keydown"]);

  // ../../packages/pixi-panel/src/TextProperties.svelte
  var root_19 = template(`<div class="text svelte-1n4say7"><label class="label svelte-1n4say7" for="text" title="Use shift-enter to create a multiline string">Text</label> <!></div>`);
  var root_92 = template(`<div class="three-columns svelte-1n4say7"><!> <!> <!></div>`);
  var root_112 = template(`<div class="two-columns svelte-1n4say7"><!> <!></div>`);
  var root_32 = template(`<!> <!> <!> <!> <!>`, 1);
  var root_153 = template(`<!> <!>`, 1);
  var root_31 = template(`<div class="three-columns svelte-1n4say7"><!> <!> <!></div>`);
  var root_21 = template(`<!> <!> <!> <!> <!> <!>`, 1);
  var root_36 = template(`<!> <!>`, 1);
  var root_432 = template(`<!> <!> <!> <!> <!>`, 1);
  var root_55 = template(`<!> <!>`, 1);
  var root13 = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
  var $$css13 = {
    hash: "svelte-1n4say7",
    code: ".text.svelte-1n4say7 {padding-top:8px;padding-bottom:8px;display:flex;align-items:center;& .label:where(.svelte-1n4say7) {flex-shrink:0;margin-right:8px;}}.two-columns.svelte-1n4say7 {display:grid;grid-template-columns:1fr 1fr;}.three-columns.svelte-1n4say7 {display:grid;grid-template-columns:1fr 1fr 1fr;}"
  };
  function TextProperties($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css13);
    let expanded = prop($$props, "expanded", 15);
    let fontPanel = user_derived(() => typeof $$props.props.fontFamily === "string" || typeof $$props.props.fontSize === "number" || typeof $$props.props.fontStyle === "string" || typeof $$props.props.fontVariant === "string");
    let alignmentPanel = user_derived(() => typeof $$props.props.align === "string" || typeof $$props.props.textBaseline === "string");
    let spacingPanel = user_derived(() => typeof $$props.props.letterSpacing === "number");
    let dropShadowPanel = user_derived(() => typeof $$props.props.dropShadow === "boolean");
    let strokePanel = user_derived(() => typeof $$props.props.stroke === "string");
    const alignOptions = [
      {
        value: "left",
        label: "Left",
        icon: "text-left"
      },
      {
        value: "center",
        label: "Center",
        icon: "text-center"
      },
      {
        value: "right",
        label: "Right",
        icon: "text-right"
      },
      {
        value: "justify",
        label: "Justify",
        icon: "text-justify"
      }
    ];
    var fragment = root13();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var div = root_19();
        var node_1 = sibling(child(div), 2);
        TextField(node_1, {
          id: "text",
          get value() {
            return $$props.props.text;
          },
          oninput: (value) => $$props.onchange({ property: "text", value })
        });
        reset(div);
        append($$anchor2, div);
      };
      if_block(node, ($$render) => {
        if (typeof $$props.props.text === "string") $$render(consequent);
      });
    }
    var node_2 = sibling(node, 2);
    {
      var consequent_6 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Font",
          get expanded() {
            return expanded().font;
          },
          set expanded($$value) {
            expanded(expanded().font = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_2 = root_32();
            var node_3 = first_child(fragment_2);
            {
              var consequent_1 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Family",
                  hint: "The font family, can be a single font name, or a list of names where the first is the preferred font.",
                  children: ($$anchor5, $$slotProps2) => {
                    TextField($$anchor5, {
                      get value() {
                        return $$props.props.fontFamily;
                      },
                      onchange: (value) => $$props.onchange({ property: "fontFamily", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_3, ($$render) => {
                if (typeof $$props.props.fontFamily === "string") $$render(consequent_1);
              });
            }
            var node_4 = sibling(node_3, 2);
            {
              var consequent_2 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Size",
                  hint: "The font size",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.fontSize;
                      },
                      min: 0,
                      step: 1,
                      onchange: (value) => $$props.onchange({ property: "fontSize", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_4, ($$render) => {
                if (typeof $$props.props.fontSize === "number") $$render(consequent_2);
              });
            }
            var node_5 = sibling(node_4, 2);
            {
              var consequent_3 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Style",
                  hint: "The font style",
                  children: ($$anchor5, $$slotProps2) => {
                    var div_1 = root_92();
                    var node_6 = child(div_1);
                    const expression = user_derived(() => $$props.props.fontStyle === "normal");
                    Toggle(node_6, {
                      label: "Normal",
                      get value() {
                        return get(expression);
                      },
                      location: "LEFT",
                      onchange: () => $$props.onchange({ property: "fontStyle", value: "normal" })
                    });
                    var node_7 = sibling(node_6, 2);
                    const expression_1 = user_derived(() => $$props.props.fontStyle === "italic");
                    Toggle(node_7, {
                      icon: "italic",
                      label: "Italic",
                      get value() {
                        return get(expression_1);
                      },
                      location: "CENTER",
                      onchange: () => $$props.onchange({ property: "fontStyle", value: "italic" })
                    });
                    var node_8 = sibling(node_7, 2);
                    const expression_2 = user_derived(() => $$props.props.fontStyle === "oblique");
                    Toggle(node_8, {
                      label: "Oblique",
                      get value() {
                        return get(expression_2);
                      },
                      location: "RIGHT",
                      onchange: () => $$props.onchange({ property: "fontStyle", value: "oblique" })
                    });
                    reset(div_1);
                    append($$anchor5, div_1);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_5, ($$render) => {
                if (typeof $$props.props.fontStyle === "string") $$render(consequent_3);
              });
            }
            var node_9 = sibling(node_5, 2);
            {
              var consequent_4 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Variant",
                  hint: "The font variant",
                  children: ($$anchor5, $$slotProps2) => {
                    var div_2 = root_112();
                    var node_10 = child(div_2);
                    const expression_3 = user_derived(() => $$props.props.fontVariant === "normal");
                    Toggle(node_10, {
                      label: "Normal",
                      get value() {
                        return get(expression_3);
                      },
                      location: "LEFT",
                      onchange: () => $$props.onchange({ property: "fontVariant", value: "normal" })
                    });
                    var node_11 = sibling(node_10, 2);
                    const expression_4 = user_derived(() => $$props.props.fontVariant === "small-caps");
                    Toggle(node_11, {
                      icon: "small-caps",
                      label: "Small Caps",
                      get value() {
                        return get(expression_4);
                      },
                      location: "RIGHT",
                      onchange: () => $$props.onchange({ property: "fontVariant", value: "small-caps" })
                    });
                    reset(div_2);
                    append($$anchor5, div_2);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_9, ($$render) => {
                if (typeof $$props.props.fontVariant === "string") $$render(consequent_4);
              });
            }
            var node_12 = sibling(node_9, 2);
            {
              var consequent_5 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Weight",
                  hint: "The font weight",
                  children: ($$anchor5, $$slotProps2) => {
                    SelectMenu($$anchor5, {
                      get value() {
                        return $$props.props.fontWeight;
                      },
                      options: [
                        "normal",
                        "bold",
                        "bolder",
                        "lighter",
                        "100",
                        "200",
                        "300",
                        "400",
                        "500",
                        "600",
                        "700",
                        "800",
                        "900"
                      ],
                      onchange: (value) => $$props.onchange({ property: "fontWeight", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_12, ($$render) => {
                if (typeof $$props.props.fontWeight === "string") $$render(consequent_5);
              });
            }
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_2, ($$render) => {
        if (get(fontPanel)) $$render(consequent_6);
      });
    }
    var node_13 = sibling(node_2, 2);
    {
      var consequent_9 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Alignment",
          get expanded() {
            return expanded().alignment;
          },
          set expanded($$value) {
            expanded(expanded().alignment = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_12 = root_153();
            var node_14 = first_child(fragment_12);
            {
              var consequent_7 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Align",
                  hint: "Alignment for multiline text, does not affect single line text",
                  children: ($$anchor5, $$slotProps2) => {
                    SelectMenu($$anchor5, {
                      get value() {
                        return $$props.props.align;
                      },
                      options: alignOptions,
                      onchange: (value) => $$props.onchange({ property: "align", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_14, ($$render) => {
                if (typeof $$props.props.align === "string") $$render(consequent_7);
              });
            }
            var node_15 = sibling(node_14, 2);
            {
              var consequent_8 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Baseline",
                  hint: "The baseline of the text that is rendered.",
                  children: ($$anchor5, $$slotProps2) => {
                    SelectMenu($$anchor5, {
                      get value() {
                        return $$props.props.textBaseline;
                      },
                      options: [
                        "alphabetic",
                        "top",
                        "hanging",
                        "middle",
                        "ideographic",
                        "bottom"
                      ],
                      onchange: (value) => $$props.onchange({ property: "textBaseline", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_15, ($$render) => {
                if (typeof $$props.props.textBaseline === "string") $$render(consequent_8);
              });
            }
            append($$anchor3, fragment_12);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_13, ($$render) => {
        if (get(alignmentPanel)) $$render(consequent_9);
      });
    }
    var node_16 = sibling(node_13, 2);
    {
      var consequent_16 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Spacing",
          get expanded() {
            return expanded().spacing;
          },
          set expanded($$value) {
            expanded(expanded().spacing = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_18 = root_21();
            var node_17 = first_child(fragment_18);
            {
              var consequent_10 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Leading",
                  hint: "The space between lines",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.leading;
                      },
                      min: 0,
                      step: 0.1,
                      onchange: (value) => $$props.onchange({ property: "leading", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_17, ($$render) => {
                if (typeof $$props.props.leading === "number") $$render(consequent_10);
              });
            }
            var node_18 = sibling(node_17, 2);
            {
              var consequent_11 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Letter spacing",
                  hint: "The amount of spacing between letters",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.letterSpacing;
                      },
                      step: 0.1,
                      onchange: (value) => $$props.onchange({ property: "letterSpacing", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_18, ($$render) => {
                if (typeof $$props.props.letterSpacing === "number") $$render(consequent_11);
              });
            }
            var node_19 = sibling(node_18, 2);
            {
              var consequent_12 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Line height",
                  hint: "The line height, a number that represents the vertical space that a letter uses",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.lineHeight;
                      },
                      step: 1,
                      onchange: (value) => $$props.onchange({ property: "lineHeight", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_19, ($$render) => {
                if (typeof $$props.props.lineHeight === "number") $$render(consequent_12);
              });
            }
            var node_20 = sibling(node_19, 2);
            {
              var consequent_13 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Padding",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.padding;
                      },
                      min: 0,
                      step: 1,
                      onchange: (value) => $$props.onchange({ property: "padding", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_20, ($$render) => {
                if (typeof $$props.props.padding === "number") $$render(consequent_13);
              });
            }
            var node_21 = sibling(node_20, 2);
            {
              var consequent_14 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "White Space",
                  hint: "Determines whether newlines & spaces are collapsed or preserved",
                  children: ($$anchor5, $$slotProps2) => {
                    var div_3 = root_31();
                    var node_22 = child(div_3);
                    const expression_5 = user_derived(() => $$props.props.whiteSpace === "normal");
                    Toggle(node_22, {
                      label: "Normal",
                      get value() {
                        return get(expression_5);
                      },
                      location: "LEFT",
                      onchange: () => $$props.onchange({ property: "whiteSpace", value: "normal" })
                    });
                    var node_23 = sibling(node_22, 2);
                    const expression_6 = user_derived(() => $$props.props.whiteSpace === "pre");
                    Toggle(node_23, {
                      label: "Pre",
                      get value() {
                        return get(expression_6);
                      },
                      location: "CENTER",
                      onchange: () => $$props.onchange({ property: "whiteSpace", value: "pre" })
                    });
                    var node_24 = sibling(node_23, 2);
                    const expression_7 = user_derived(() => $$props.props.whiteSpace === "pre-line");
                    Toggle(node_24, {
                      label: "Pre Line",
                      get value() {
                        return get(expression_7);
                      },
                      location: "RIGHT",
                      onchange: () => $$props.onchange({ property: "whiteSpace", value: "pre-line" })
                    });
                    reset(div_3);
                    append($$anchor5, div_3);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_21, ($$render) => {
                if (typeof $$props.props.whiteSpace === "string") $$render(consequent_14);
              });
            }
            var node_25 = sibling(node_21, 2);
            {
              var consequent_15 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.trim;
                      },
                      hint: "Trim transparent borders",
                      onchange: (value) => $$props.onchange({ property: "trim", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text2 = text("Trim");
                        append($$anchor6, text2);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_25, ($$render) => {
                if (typeof $$props.props.trim === "boolean") $$render(consequent_15);
              });
            }
            append($$anchor3, fragment_18);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_16, ($$render) => {
        if (get(spacingPanel)) $$render(consequent_16);
      });
    }
    var node_26 = sibling(node_16, 2);
    {
      var consequent_19 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Word wrap",
          get value() {
            return $$props.props.wordWrap;
          },
          onchange: (value) => $$props.onchange({ property: "wordWrap", value }),
          get expanded() {
            return expanded().wordWrap;
          },
          set expanded($$value) {
            expanded(expanded().wordWrap = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_31 = root_36();
            var node_27 = first_child(fragment_31);
            {
              var consequent_17 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Width",
                  hint: "The width at which text will wrap, it needs wordWrap to be set to true",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.wordWrapWidth;
                      },
                      min: 0,
                      step: 1,
                      onchange: (value) => $$props.onchange({ property: "wordWrapWidth", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_27, ($$render) => {
                if (typeof $$props.props.wordWrapWidth === "number") $$render(consequent_17);
              });
            }
            var node_28 = sibling(node_27, 2);
            {
              var consequent_18 = ($$anchor4) => {
                Property($$anchor4, {
                  children: ($$anchor5, $$slotProps2) => {
                    Checkbox($$anchor5, {
                      get value() {
                        return $$props.props.breakWords;
                      },
                      hint: "Indicates if lines can be wrapped within words, it needs wordWrap to be set to true.",
                      onchange: (value) => $$props.onchange({ property: "breakWords", value }),
                      children: ($$anchor6, $$slotProps3) => {
                        next();
                        var text_1 = text("Break words");
                        append($$anchor6, text_1);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_28, ($$render) => {
                if (typeof $$props.props.breakWords === "boolean") $$render(consequent_18);
              });
            }
            append($$anchor3, fragment_31);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_26, ($$render) => {
        if (typeof $$props.props.wordWrap === "boolean") $$render(consequent_19);
      });
    }
    var node_29 = sibling(node_26, 2);
    {
      var consequent_25 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Drop shadow",
          get value() {
            return $$props.props.dropShadow;
          },
          onchange: (value) => $$props.onchange({ property: "dropShadow", value }),
          get expanded() {
            return expanded().dropShadow;
          },
          set expanded($$value) {
            expanded(expanded().dropShadow = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_37 = root_432();
            var node_30 = first_child(fragment_37);
            {
              var consequent_20 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Alpha",
                  hint: "Set alpha for the drop shadow",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.dropShadowAlpha;
                      },
                      step: 0.01,
                      min: 0,
                      max: 1,
                      onchange: (value) => $$props.onchange({ property: "dropShadowAlpha", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_30, ($$render) => {
                if (typeof $$props.props.dropShadowAlpha === "number") $$render(consequent_20);
              });
            }
            var node_31 = sibling(node_30, 2);
            {
              var consequent_21 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Color",
                  hint: "A fill style to be used on the dropshadow",
                  children: ($$anchor5, $$slotProps2) => {
                    TextField($$anchor5, {
                      get value() {
                        return $$props.props.dropShadowColor;
                      },
                      onchange: (value) => $$props.onchange({ property: "dropShadowColor", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_31, ($$render) => {
                if (typeof $$props.props.dropShadowColor === "string") $$render(consequent_21);
              });
            }
            var node_32 = sibling(node_31, 2);
            {
              var consequent_22 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Angle",
                  hint: "Set a angle of the drop shadow",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.dropShadowAngle;
                      },
                      step: 0.01,
                      suffix: "r",
                      onchange: (value) => $$props.onchange({ property: "dropShadowAngle", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_32, ($$render) => {
                if (typeof $$props.props.dropShadowAngle === "number") $$render(consequent_22);
              });
            }
            var node_33 = sibling(node_32, 2);
            {
              var consequent_23 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Blur",
                  hint: "Set a shadow blur radius",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.dropShadowBlur;
                      },
                      min: 0,
                      step: 0.1,
                      onchange: (value) => $$props.onchange({ property: "dropShadowBlur", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_33, ($$render) => {
                if (typeof $$props.props.dropShadowBlur === "number") $$render(consequent_23);
              });
            }
            var node_34 = sibling(node_33, 2);
            {
              var consequent_24 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Distance",
                  hint: "Set a distance of the drop shadow",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.dropShadowDistance;
                      },
                      step: 0.1,
                      min: 0,
                      onchange: (value) => $$props.onchange({ property: "dropShadowDistance", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_34, ($$render) => {
                if (typeof $$props.props.dropShadowDistance === "number") $$render(consequent_24);
              });
            }
            append($$anchor3, fragment_37);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_29, ($$render) => {
        if (get(dropShadowPanel)) $$render(consequent_25);
      });
    }
    var node_35 = sibling(node_29, 2);
    {
      var consequent_28 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Stroke",
          get expanded() {
            return expanded().stroke;
          },
          set expanded($$value) {
            expanded(expanded().stroke = $$value, true);
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_49 = root_55();
            var node_36 = first_child(fragment_49);
            {
              var consequent_26 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Stroke",
                  hint: "A canvas fillstyle that will be used on the text stroke",
                  children: ($$anchor5, $$slotProps2) => {
                    TextField($$anchor5, {
                      get value() {
                        return $$props.props.stroke;
                      },
                      onchange: (value) => $$props.onchange({ property: "stroke", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_36, ($$render) => {
                if (typeof $$props.props.stroke === "string") $$render(consequent_26);
              });
            }
            var node_37 = sibling(node_36, 2);
            {
              var consequent_27 = ($$anchor4) => {
                Property($$anchor4, {
                  label: "Thickness",
                  hint: "A number that represents the thickness of the stroke",
                  children: ($$anchor5, $$slotProps2) => {
                    NumberField($$anchor5, {
                      get value() {
                        return $$props.props.strokeThickness;
                      },
                      min: 0,
                      step: 0.1,
                      onchange: (value) => $$props.onchange({ property: "strokeThickness", value })
                    });
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_37, ($$render) => {
                if (typeof $$props.props.strokeThickness === "number") $$render(consequent_27);
              });
            }
            append($$anchor3, fragment_49);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_35, ($$render) => {
        if (get(strokePanel)) $$render(consequent_28);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/pixi-panel/src/PropertiesArea.svelte
  var root_26 = template(`<div class="panels svelte-yivtv"><!></div>`);
  var $$css14 = {
    hash: "svelte-yivtv",
    code: ".panels.svelte-yivtv {display:flex;flex-direction:column;gap:2px;padding:8px;}"
  };
  function PropertiesArea($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css14);
    const [$$stores, $$cleanup] = setup_stores();
    const $tabState = () => store_get(tabState, "$tabState", $$stores);
    const bridge2 = getBridgeContext();
    const tabState = poll(bridge2, "__PIXI_INSPECTOR__.properties.values()", 300);
    let refresh = prop($$props, "refresh", 15);
    refresh(tabState.sync);
    const availableTabs = [
      {
        group: "scene",
        icon: "scene",
        label: "Scene Properties"
      },
      {
        group: "object",
        icon: "object",
        label: "Object Properties"
      },
      {
        group: "text",
        icon: "text",
        label: "Text Properties"
      }
    ];
    let values = user_derived(() => $tabState().data?.properties ?? {});
    let tabs = user_derived(() => availableTabs.filter((tab) => $tabState().data?.tabs.includes(tab.group)));
    let active = user_derived(() => availableTabs.find((tab) => tab.group === $tabState().data?.active));
    let expanded = state(proxy({
      ticker: true,
      transform: true,
      transformOrigin: true,
      skewDimensions: true,
      visibility: true,
      rendering: true,
      interactive: true,
      font: true,
      alignment: true,
      spacing: true,
      wordWrap: true,
      dropShadow: true,
      stroke: true
    }));
    async function onChange2(prop2, value) {
      await bridge2(`__PIXI_INSPECTOR__.properties.set(${JSON.stringify(prop2)}, ${JSON.stringify(value)})`);
      tabState.sync();
    }
    async function activateTab(group) {
      await bridge2(`__PIXI_INSPECTOR__.properties.activate(${JSON.stringify(group)})`);
      tabState.sync();
    }
    function onActivate(tab) {
      activateTab(tab.group);
    }
    Tabs($$anchor, {
      get tabs() {
        return get(tabs);
      },
      get active() {
        return get(active);
      },
      onactivate: (tab) => onActivate(tab),
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node = first_child(fragment_1);
        {
          var consequent_3 = ($$anchor3) => {
            var div = root_26();
            var node_1 = child(div);
            {
              var consequent = ($$anchor4) => {
                SceneProperties($$anchor4, {
                  get props() {
                    return get(values);
                  },
                  onchange: (e) => onChange2(e.property, e.value),
                  get expanded() {
                    return get(expanded);
                  },
                  set expanded($$value) {
                    set(expanded, $$value, true);
                  }
                });
              };
              var alternate = ($$anchor4, $$elseif) => {
                {
                  var consequent_1 = ($$anchor5) => {
                    ObjectProperties($$anchor5, {
                      get props() {
                        return get(values);
                      },
                      onchange: (e) => onChange2(e.property, e.value),
                      get expanded() {
                        return get(expanded);
                      },
                      set expanded($$value) {
                        set(expanded, $$value, true);
                      }
                    });
                  };
                  var alternate_1 = ($$anchor5, $$elseif2) => {
                    {
                      var consequent_2 = ($$anchor6) => {
                        TextProperties($$anchor6, {
                          get props() {
                            return get(values);
                          },
                          onchange: (e) => onChange2(e.property, e.value),
                          get expanded() {
                            return get(expanded);
                          },
                          set expanded($$value) {
                            set(expanded, $$value, true);
                          }
                        });
                      };
                      if_block(
                        $$anchor5,
                        ($$render) => {
                          if (get(active)?.group === "text") $$render(consequent_2);
                        },
                        $$elseif2
                      );
                    }
                  };
                  if_block(
                    $$anchor4,
                    ($$render) => {
                      if (get(active)?.group === "object") $$render(consequent_1);
                      else $$render(alternate_1, false);
                    },
                    $$elseif
                  );
                }
              };
              if_block(node_1, ($$render) => {
                if (get(active)?.group === "scene") $$render(consequent);
                else $$render(alternate, false);
              });
            }
            reset(div);
            append($$anchor3, div);
          };
          if_block(node, ($$render) => {
            if (get(values)) $$render(consequent_3);
          });
        }
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
    pop();
    $$cleanup();
  }

  // ../../packages/blender-elements/src/SearchField/SearchField.svelte
  function onInput2(_, text2, value, $$props) {
    if (get(text2) !== value()) {
      value(get(text2));
      $$props.onchange?.(value());
    }
  }
  function clear(__1, text2, value, $$props) {
    set(text2, "");
    value("");
    $$props.onchange?.(get(text2));
  }
  var root_110 = template(`<button class="clear svelte-weexzc" aria-label="clear"></button>`);
  var root14 = template(`<div class="search-field svelte-weexzc"><input type="text" class="input svelte-weexzc" spellcheck="false"> <div class="search-icon svelte-weexzc"></div> <!></div>`);
  var $$css15 = {
    hash: "svelte-weexzc",
    code: ".search-field.svelte-weexzc {position:relative;}.input.svelte-weexzc {font:12px system-ui,\n      sans-serif;background-color:transparent;border:none;width:100%;box-sizing:border-box;color:#fdfdfd;outline:none;caret-color:#71a8ff;padding:2px 20px 2px 25px;background:#1d1d1d;border:1px solid #3d3d3d;box-shadow:0 1px 3px #0000004d;border-radius:4px;cursor:default;&::selection {background-color:#4570b5;}&:focus {cursor:text;}}.search-field.svelte-weexzc:hover .input:where(.svelte-weexzc):not(:focus) {background:#232323;border-color:#414141;}.search-icon.svelte-weexzc {position:absolute;top:calc(50% - 8px);left:4px;background:var(--icon-search) center center no-repeat;width:16px;height:16px;}.clear.svelte-weexzc {position:absolute;top:0;right:0;width:20px;height:100%;background:var(--icon-cross) center center no-repeat;border:none;opacity:0.8;cursor:pointer;&:hover {opacity:1;}}"
  };
  function SearchField($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css15);
    let value = prop($$props, "value", 15), id = prop($$props, "id", 3, void 0);
    let text2 = state(proxy(value()));
    let previous = state(proxy(value()));
    function onFocus() {
      set(previous, get(text2), true);
    }
    var div = root14();
    var input = child(div);
    remove_input_defaults(input);
    input.__input = [onInput2, text2, value, $$props];
    effect(() => bind_value(input, () => get(text2), ($$value) => set(text2, $$value)));
    action(input, ($$node) => blurOnEnter?.($$node));
    action(input, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get(previous));
    action(input, ($$node) => selectOnFocus?.($$node));
    var node = sibling(input, 4);
    {
      var consequent = ($$anchor2) => {
        var button = root_110();
        button.__click = [clear, text2, value, $$props];
        append($$anchor2, button);
      };
      if_block(node, ($$render) => {
        if (value() !== "") $$render(consequent);
      });
    }
    reset(div);
    template_effect(() => set_attribute(input, "id", id()));
    event("focus", input, onFocus);
    append($$anchor, div);
    pop();
  }
  delegate(["input", "click"]);

  // ../../packages/blender-elements/src/IconButton.svelte
  var on_click5 = (e, $$props) => {
    e.stopPropagation();
    $$props.onclick?.();
  };
  var on_dblclick3 = (e) => e.stopPropagation();
  var root15 = template(`<button aria-label="toggle"></button>`);
  var $$css16 = {
    hash: "svelte-v3zace",
    code: ".toggle.svelte-v3zace {appearance:none;background:transparent no-repeat center center;border:none;width:20px;height:20px;opacity:0.6;flex-shrink:0;cursor:pointer;&:active,\n    &:hover {opacity:0.8;}&.muted {opacity:0.3;}}"
  };
  function IconButton($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css16);
    let muted = prop($$props, "muted", 3, false), hint = prop($$props, "hint", 3, void 0);
    var button = root15();
    let classes;
    button.__click = [on_click5, $$props];
    button.__dblclick = [on_dblclick3];
    template_effect(
      ($0) => {
        classes = set_class(button, 1, "toggle svelte-v3zace", null, classes, $0);
        set_style(button, `background-image: var(--icon-${$$props.icon ?? ""})`);
        set_attribute(button, "title", hint());
      },
      [() => ({ muted: muted() })]
    );
    append($$anchor, button);
    pop();
  }
  delegate(["click", "dblclick"]);

  // ../../packages/blender-elements/src/OutlinerRow.svelte
  function onKeyDown(e, el, expanded, $$props, visible) {
    if (e.key === "ArrowUp") {
      const controller = get(el)?.previousElementSibling?.outlineRow;
      if (controller) {
        controller.activate();
        e.preventDefault();
      }
    }
    if (e.key === "ArrowDown") {
      const controller = get(el)?.nextElementSibling?.outlineRow;
      if (controller) {
        controller.activate();
        e.preventDefault();
      }
    }
    if (e.key === "ArrowLeft") {
      if (expanded() === true) {
        $$props.oncollapse();
        e.preventDefault();
      } else {
        let cursor = get(el);
        while (true) {
          cursor = cursor?.previousElementSibling;
          const controller = cursor?.outlineRow;
          if (!controller) {
            break;
          }
          if (controller.indent === $$props.indent - 1) {
            controller.activate();
            e.preventDefault();
            break;
          }
        }
      }
    }
    if (e.key === "ArrowRight") {
      if (expanded() === false) {
        $$props.onexpand();
        e.preventDefault();
      } else if (expanded() === true) {
        const controller = get(el)?.nextElementSibling?.outlineRow;
        if (controller.indent === $$props.indent + 1) {
          controller.activate();
          e.preventDefault();
        }
      }
    }
    if (e.key === "h" && visible() !== void 0) {
      if (visible()) {
        $$props.onhide();
      } else {
        $$props.onshow();
      }
    }
  }
  var on_click6 = (_, $$props) => $$props.onactivate();
  var on_dblclick4 = (__1, $$props) => $$props.onlog();
  var root_42 = template(`<span class="toggle-spacer svelte-1ro523n"></span>`);
  var root16 = template(`<div tabindex="0"><!> <span class="title svelte-1ro523n"> </span> <!> <!></div>`);
  var $$css17 = {
    hash: "svelte-1ro523n",
    code: ".outliner-row.svelte-1ro523n {display:flex;align-items:center;background:#282828;color:#c2c2c2;height:20px;padding-left:calc(var(--indent) * 20px);outline:none;padding-right:4px;&:nth-child(even) {background-color:#2b2b2b;}&:hover {background-color:#444444;}&:focus {background-color:#334d80;&:hover {background-color:#4772b3;}}&.match {background-color:#2f552f;&:focus {background-color:#336659;}}&.active {color:#ffaf29;}}.toggle-spacer.svelte-1ro523n {width:20px;}.title.svelte-1ro523n {flex:1;overflow:hidden;text-overflow:ellipsis;user-select:none;position:default;}.muted.svelte-1ro523n .title:where(.svelte-1ro523n) {opacity:0.5;}"
  };
  function OutlinerRow($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css17);
    let expanded = prop($$props, "expanded", 3, void 0), active = prop($$props, "active", 3, false), parentUnselectable = prop($$props, "parentUnselectable", 3, void 0), visible = prop($$props, "visible", 3, void 0), match = prop($$props, "match", 3, void 0), muted = prop($$props, "muted", 3, false);
    let el = state(void 0);
    const ctx = getContext("scene-graph");
    user_pre_effect(() => {
      if (get(el) && active()) {
        if (ctx.focused) {
          get(el).focus();
        } else {
          get(el).scrollIntoView();
        }
      }
    });
    const external = proxy({
      indent: $$props.indent,
      activate() {
        $$props.onactivate();
      }
    });
    user_pre_effect(() => {
      external.indent = $$props.indent;
    });
    onMount(() => {
      get(el).outlineRow = external;
    });
    var div = root16();
    let classes;
    div.__click = [on_click6, $$props];
    div.__dblclick = [on_dblclick4, $$props];
    div.__keydown = [onKeyDown, el, expanded, $$props, visible];
    let styles;
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "expanded",
          onclick: () => $$props.oncollapse()
        });
      };
      var alternate = ($$anchor2, $$elseif) => {
        {
          var consequent_1 = ($$anchor3) => {
            IconButton($$anchor3, {
              icon: "collapsed",
              onclick: () => $$props.onexpand()
            });
          };
          var alternate_1 = ($$anchor3) => {
            var span = root_42();
            append($$anchor3, span);
          };
          if_block(
            $$anchor2,
            ($$render) => {
              if (expanded() === false) $$render(consequent_1);
              else $$render(alternate_1, false);
            },
            $$elseif
          );
        }
      };
      if_block(node, ($$render) => {
        if (expanded() === true) $$render(consequent);
        else $$render(alternate, false);
      });
    }
    var span_1 = sibling(node, 2);
    var text2 = child(span_1, true);
    reset(span_1);
    var node_1 = sibling(span_1, 2);
    {
      var consequent_2 = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "selectable",
          hint: "Disable right-click selection",
          get muted() {
            return parentUnselectable();
          },
          onclick: () => $$props.onunselectable()
        });
      };
      var alternate_2 = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "unselectable",
          hint: "Enable right-click selection",
          get muted() {
            return parentUnselectable();
          },
          onclick: () => $$props.onselectable()
        });
      };
      if_block(node_1, ($$render) => {
        if ($$props.selectable) $$render(consequent_2);
        else $$render(alternate_2, false);
      });
    }
    var node_2 = sibling(node_1, 2);
    {
      var consequent_3 = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "eye-opened",
          hint: "Hide (h)",
          onclick: () => $$props.onhide()
        });
      };
      var alternate_3 = ($$anchor2, $$elseif) => {
        {
          var consequent_4 = ($$anchor3) => {
            IconButton($$anchor3, {
              icon: "eye-closed",
              hint: "Show (h)",
              onclick: () => $$props.onshow()
            });
          };
          if_block(
            $$anchor2,
            ($$render) => {
              if (visible() === false) $$render(consequent_4);
            },
            $$elseif
          );
        }
      };
      if_block(node_2, ($$render) => {
        if (visible() === true) $$render(consequent_3);
        else $$render(alternate_3, false);
      });
    }
    reset(div);
    bind_this(div, ($$value) => set(el, $$value), () => get(el));
    template_effect(
      ($0) => {
        classes = set_class(div, 1, "outliner-row svelte-1ro523n", null, classes, $0);
        styles = set_style(div, "", styles, { "--indent": $$props.indent });
        set_text(text2, $$props.title);
      },
      [
        () => ({
          active: active(),
          muted: muted(),
          match: match()
        })
      ]
    );
    event("mouseenter", div, function(...$$args) {
      $$props.onmouseenter?.apply(this, $$args);
    });
    event("mouseleave", div, function(...$$args) {
      $$props.onmouseleave?.apply(this, $$args);
    });
    append($$anchor, div);
    pop();
  }
  delegate(["click", "dblclick", "keydown"]);

  // ../../packages/pixi-panel/src/Tree.svelte
  var root17 = template(`<!> <!>`, 1);
  function Tree_1($$anchor, $$props) {
    push($$props, true);
    let muted = prop($$props, "muted", 3, false), parentUnselectable = prop($$props, "parentUnselectable", 3, void 0), children = prop($$props, "children", 3, void 0), depth = prop($$props, "depth", 3, 0);
    var fragment = root17();
    var node = first_child(fragment);
    const expression = user_derived(() => $$props.visible === false || muted());
    const expression_1 = user_derived(() => parentUnselectable() || !$$props.selectable);
    const expression_2 = user_derived(() => $$props.leaf ? void 0 : !!children());
    OutlinerRow(node, {
      get indent() {
        return depth();
      },
      get title() {
        return $$props.name;
      },
      get active() {
        return $$props.active;
      },
      get selectable() {
        return $$props.selectable;
      },
      get visible() {
        return $$props.visible;
      },
      get match() {
        return $$props.match;
      },
      get muted() {
        return get(expression);
      },
      get parentUnselectable() {
        return get(expression_1);
      },
      get expanded() {
        return get(expression_2);
      },
      onexpand: () => $$props.onexpand?.([$$props.id]),
      oncollapse: () => $$props.oncollapse?.([$$props.id]),
      onactivate: () => $$props.onactivate?.([$$props.id]),
      onselectable: () => $$props.onselectable?.([$$props.id]),
      onunselectable: () => $$props.onunselectable?.([$$props.id]),
      onshow: () => $$props.onshow?.([$$props.id]),
      onhide: () => $$props.onhide?.([$$props.id]),
      onlog: () => $$props.onlog?.([$$props.id]),
      onmouseenter: () => $$props.onmouseenter?.([$$props.id]),
      onmouseleave: () => $$props.onmouseleave?.([$$props.id])
    });
    var node_1 = sibling(node, 2);
    {
      var consequent = ($$anchor2) => {
        var fragment_1 = comment();
        var node_2 = first_child(fragment_1);
        each(node_2, 17, children, (child2) => child2.id, ($$anchor3, child2) => {
          const expression_3 = user_derived(() => parentUnselectable() || !$$props.selectable);
          const expression_4 = user_derived(() => $$props.visible === false || muted());
          const expression_5 = user_derived(() => depth() + 1);
          Tree_1($$anchor3, {
            get id() {
              return get(child2).id;
            },
            get name() {
              return get(child2).name;
            },
            get leaf() {
              return get(child2).leaf;
            },
            get active() {
              return get(child2).active;
            },
            get selectable() {
              return get(child2).selectable;
            },
            get parentUnselectable() {
              return get(expression_3);
            },
            get visible() {
              return get(child2).visible;
            },
            get match() {
              return get(child2).match;
            },
            get muted() {
              return get(expression_4);
            },
            get children() {
              return get(child2).children;
            },
            get depth() {
              return get(expression_5);
            },
            onexpand: (path) => $$props.onexpand([$$props.id, ...path]),
            oncollapse: (path) => $$props.oncollapse([$$props.id, ...path]),
            onactivate: (path) => $$props.onactivate([$$props.id, ...path]),
            onselectable: (path) => $$props.onselectable([$$props.id, ...path]),
            onunselectable: (path) => $$props.onunselectable([$$props.id, ...path]),
            onshow: (path) => $$props.onshow([$$props.id, ...path]),
            onhide: (path) => $$props.onhide([$$props.id, ...path]),
            onlog: (path) => $$props.onlog([$$props.id, ...path]),
            onmouseenter: (path) => $$props.onmouseenter([$$props.id, ...path]),
            onmouseleave: (path) => $$props.onmouseleave([$$props.id, ...path])
          });
        });
        append($$anchor2, fragment_1);
      };
      if_block(node_1, ($$render) => {
        if (children()) $$render(consequent);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/pixi-panel/src/Warning.svelte
  var root18 = template(`<div class="warning svelte-qfz5s0"> <!></div>`);
  var $$css18 = {
    hash: "svelte-qfz5s0",
    code: '.warning.svelte-qfz5s0 {background:#472722;color:#e1e1e1;padding:2px 4px 4px 30px;position:relative;border:1px solid #3d3d3d;border-radius:3px;overflow:hidden;min-height:16px;&::before {content:"";position:absolute;top:0;left:0;width:24px;height:100%;background:#c1432a center center no-repeat;}&[data-icon="warning"]::before {background-image:var(--icon-warning);}&[data-icon="error"]::before {background-image:var(--icon-error);}}'
  };
  function Warning($$anchor, $$props) {
    append_styles($$anchor, $$css18);
    let icon = prop($$props, "icon", 3, "warning"), message = prop($$props, "message", 3, "");
    var div = root18();
    var text2 = child(div, true);
    var node = sibling(text2);
    snippet(node, () => $$props.children ?? noop);
    reset(div);
    template_effect(() => {
      set_attribute(div, "data-icon", icon());
      set_text(text2, message());
    });
    append($$anchor, div);
  }

  // ../../packages/pixi-panel/src/SceneGraphArea.svelte
  var root19 = template(`<div class="scene-graph svelte-1vjyr8f"><div class="header svelte-1vjyr8f"><!></div> <div class="body svelte-1vjyr8f"><!> <!></div></div>`);
  var $$css19 = {
    hash: "svelte-1vjyr8f",
    code: ".scene-graph.svelte-1vjyr8f {display:flex;flex-direction:column;height:100%;}.header.svelte-1vjyr8f {position:sticky;padding:3px 8px 5px 8px;background:#2d2d2d;}.body.svelte-1vjyr8f {flex:1;overflow-y:auto;}"
  };
  function SceneGraphArea($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css19);
    const [$$stores, $$cleanup] = setup_stores();
    const $tree = () => store_get(tree, "$tree", $$stores);
    const bridge2 = getBridgeContext();
    const ctx = setContext("scene-graph", { focused: false });
    const tree = poll(bridge2, "__PIXI_INSPECTOR__.outline.tree()", 2e3);
    let stage = user_derived(() => $tree().data);
    let error = user_derived(() => $tree().error);
    let query = state("");
    let el = state(void 0);
    user_pre_effect(() => {
      bridge2(`__PIXI_INSPECTOR__.outline.query = ${JSON.stringify(get(query))}`).then(() => tree.sync());
    });
    async function expand2(path) {
      if (get(query)) {
        return;
      }
      await bridge2(`__PIXI_INSPECTOR__.outline.expand(${JSON.stringify(path)})`);
      tree.sync();
    }
    async function collapse(path) {
      if (get(query)) {
        return;
      }
      await bridge2(`__PIXI_INSPECTOR__.outline.collapse(${JSON.stringify(path)})`);
      tree.sync();
    }
    async function activate(path) {
      await bridge2(`__PIXI_INSPECTOR__.outline.activate(${JSON.stringify(path)})`);
      tree.sync();
      $$props.onactivate();
    }
    async function selectable(path) {
      await bridge2(`__PIXI_INSPECTOR__.outline.selectable(${JSON.stringify(path)})`);
      tree.sync();
    }
    async function unselectable(path) {
      await bridge2(`__PIXI_INSPECTOR__.outline.unselectable(${JSON.stringify(path)})`);
      tree.sync();
    }
    async function show(path) {
      await bridge2(`__PIXI_INSPECTOR__.outline.show(${JSON.stringify(path)})`);
      tree.sync();
    }
    async function hide(path) {
      await bridge2(`__PIXI_INSPECTOR__.outline.hide(${JSON.stringify(path)})`);
      tree.sync();
    }
    async function log(path) {
      await bridge2(`__PIXI_INSPECTOR__.outline.log(${JSON.stringify(path)})`);
    }
    async function highlight(path) {
      await bridge2(`__PIXI_INSPECTOR__.outline.highlight(${JSON.stringify(path)})`);
    }
    function onFocusIn() {
      ctx.focused = true;
    }
    function onFocusOut() {
      ctx.focused = false;
    }
    var div = root19();
    var div_1 = child(div);
    var node = child(div_1);
    SearchField(node, {
      get value() {
        return get(query);
      },
      set value($$value) {
        set(query, $$value, true);
      }
    });
    reset(div_1);
    var div_2 = sibling(div_1, 2);
    div_2.__focusin = onFocusIn;
    div_2.__focusout = onFocusOut;
    var node_1 = child(div_2);
    {
      var consequent = ($$anchor2) => {
        Warning($$anchor2, {
          children: ($$anchor3, $$slotProps) => {
            next();
            var text2 = text();
            template_effect(() => set_text(text2, get(error).message));
            append($$anchor3, text2);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_1, ($$render) => {
        if (get(error)) $$render(consequent);
      });
    }
    var node_2 = sibling(node_1, 2);
    {
      var consequent_1 = ($$anchor2) => {
        Tree_1($$anchor2, {
          get id() {
            return get(stage).id;
          },
          get name() {
            return get(stage).name;
          },
          get leaf() {
            return get(stage).leaf;
          },
          get active() {
            return get(stage).active;
          },
          get visible() {
            return get(stage).visible;
          },
          get selectable() {
            return get(stage).selectable;
          },
          get match() {
            return get(stage).match;
          },
          get children() {
            return get(stage).children;
          },
          onexpand: expand2,
          oncollapse: collapse,
          onactivate: activate,
          onselectable: selectable,
          onunselectable: unselectable,
          onshow: show,
          onhide: hide,
          onlog: log,
          onmouseenter: highlight,
          onmouseleave: () => highlight([])
        });
      };
      if_block(node_2, ($$render) => {
        if (get(stage)) $$render(consequent_1);
      });
    }
    reset(div_2);
    bind_this(div_2, ($$value) => set(el, $$value), () => get(el));
    reset(div);
    append($$anchor, div);
    pop();
    $$cleanup();
  }
  delegate(["focusin", "focusout"]);

  // ../../packages/pixi-panel/src/PixiPanel.svelte
  var root_27 = template(`<div class="pixi-panel svelte-koqr3d"><div class="outliner svelte-koqr3d"><!></div> <div class="properties svelte-koqr3d"><!></div></div>`);
  var root_113 = template(`<div class="patch svelte-koqr3d"><!></div> <!>`, 1);
  var root_44 = template(`<div class="not-connected svelte-koqr3d"><div class="instructions svelte-koqr3d"><!></div> <div class="status svelte-koqr3d"><!></div></div>`);
  var $$css20 = {
    hash: "svelte-koqr3d",
    code: "body {margin:0;background:#161616;color:#e5e5e5;}code {display:block;padding:8px;}.pixi-panel.svelte-koqr3d {display:grid;grid-template-rows:minmax(50px, 1fr) minmax(210px, 55%);grid-template-columns:1fr;height:100%;gap:3px;\n    @media (min-width: 600px) {grid-template-rows:1fr;grid-template-columns:1fr minmax(300px, 40%);\n    }}.outliner.svelte-koqr3d {overflow:auto;background:#303030;}.properties.svelte-koqr3d {overflow:auto;}.patch.svelte-koqr3d {margin:4px 12px;}.not-connected.svelte-koqr3d {display:flex;flex-direction:column;height:100%;}.instructions.svelte-koqr3d {flex:1;overflow:auto;}.status.svelte-koqr3d {margin:0 2px 2px 2px;}"
  };
  function PixiPanel($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css20);
    const [$$stores, $$cleanup] = setup_stores();
    const $connection = () => store_get(connection, "$connection", $$stores);
    const $error = () => store_get(error, "$error", $$stores);
    let refresh = state(void 0);
    const connection = connect($$props.bridge);
    const { error } = connection;
    setBridgeContext((code) => $$props.bridge(code).catch((err) => {
      connection.retry();
      throw err;
    }));
    async function applyPatch() {
      await patchPixi($$props.bridge);
      connection.retry();
    }
    Base($$anchor, {
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = comment();
        var node = first_child(fragment_1);
        {
          var consequent = ($$anchor3) => {
            var div = root_27();
            var div_1 = child(div);
            var node_1 = child(div_1);
            SceneGraphArea(node_1, {
              get onactivate() {
                return get(refresh);
              }
            });
            reset(div_1);
            var div_2 = sibling(div_1, 2);
            var node_2 = child(div_2);
            PropertiesArea(node_2, {
              get refresh() {
                return get(refresh);
              },
              set refresh($$value) {
                set(refresh, $$value, true);
              }
            });
            reset(div_2);
            reset(div);
            append($$anchor3, div);
          };
          var alternate = ($$anchor3, $$elseif) => {
            {
              var consequent_5 = ($$anchor4) => {
                var div_3 = root_44();
                var div_4 = child(div_3);
                var node_3 = child(div_4);
                Instructions(node_3, {});
                reset(div_4);
                var div_5 = sibling(div_4, 2);
                var node_4 = child(div_5);
                {
                  var consequent_1 = ($$anchor5) => {
                    Warning($$anchor5, {
                      children: ($$anchor6, $$slotProps2) => {
                        next();
                        var text2 = text("No Application or Game configured for debugging");
                        append($$anchor6, text2);
                      },
                      $$slots: { default: true }
                    });
                  };
                  var alternate_1 = ($$anchor5, $$elseif2) => {
                    {
                      var consequent_2 = ($$anchor6) => {
                        Warning($$anchor6, {
                          children: ($$anchor7, $$slotProps2) => {
                            next();
                            var text_1 = text("Connection lost");
                            append($$anchor7, text_1);
                          },
                          $$slots: { default: true }
                        });
                      };
                      var alternate_2 = ($$anchor6, $$elseif3) => {
                        {
                          var consequent_3 = ($$anchor7) => {
                            var fragment_4 = root_113();
                            var div_6 = first_child(fragment_4);
                            var node_5 = child(div_6);
                            Button(node_5, {
                              onclick: applyPatch,
                              children: ($$anchor8, $$slotProps2) => {
                                next();
                                var text_2 = text("Patch render engine");
                                append($$anchor8, text_2);
                              },
                              $$slots: { default: true }
                            });
                            reset(div_6);
                            var node_6 = sibling(div_6, 2);
                            Warning(node_6, {
                              children: ($$anchor8, $$slotProps2) => {
                                next();
                                var text_3 = text('"Patch render engine" is available. This type of Devtools\n            connection is less reliable');
                                append($$anchor8, text_3);
                              },
                              $$slots: { default: true }
                            });
                            append($$anchor7, fragment_4);
                          };
                          var alternate_3 = ($$anchor7, $$elseif4) => {
                            {
                              var consequent_4 = ($$anchor8) => {
                                Warning($$anchor8, {
                                  icon: "error",
                                  children: ($$anchor9, $$slotProps2) => {
                                    next();
                                    var text_4 = text();
                                    template_effect(() => set_text(text_4, $error()));
                                    append($$anchor9, text_4);
                                  },
                                  $$slots: { default: true }
                                });
                              };
                              var alternate_4 = ($$anchor8) => {
                                Warning($$anchor8, {
                                  icon: "error",
                                  children: ($$anchor9, $$slotProps2) => {
                                    next();
                                    var text_5 = text();
                                    template_effect(() => set_text(text_5, $connection()));
                                    append($$anchor9, text_5);
                                  },
                                  $$slots: { default: true }
                                });
                              };
                              if_block(
                                $$anchor7,
                                ($$render) => {
                                  if ($connection() === "ERROR") $$render(consequent_4);
                                  else $$render(alternate_4, false);
                                },
                                $$elseif4
                              );
                            }
                          };
                          if_block(
                            $$anchor6,
                            ($$render) => {
                              if ($connection() === "PATCHABLE") $$render(consequent_3);
                              else $$render(alternate_3, false);
                            },
                            $$elseif3
                          );
                        }
                      };
                      if_block(
                        $$anchor5,
                        ($$render) => {
                          if ($connection() === "DISCONNECTED") $$render(consequent_2);
                          else $$render(alternate_2, false);
                        },
                        $$elseif2
                      );
                    }
                  };
                  if_block(node_4, ($$render) => {
                    if ($connection() === "NOT_FOUND") $$render(consequent_1);
                    else $$render(alternate_1, false);
                  });
                }
                reset(div_5);
                reset(div_3);
                append($$anchor4, div_3);
              };
              if_block(
                $$anchor3,
                ($$render) => {
                  if ($connection() !== "INJECT") $$render(consequent_5);
                },
                $$elseif
              );
            }
          };
          if_block(node, ($$render) => {
            if ($connection() === "CONNECTED") $$render(consequent);
            else $$render(alternate, false);
          });
        }
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
    pop();
    $$cleanup();
  }

  // src/pixi-panel.ts
  var bridge = (code) => new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(code, (result, err) => {
      if (err) {
        if (err instanceof Error) {
          reject(err);
        }
        reject(new Error(err.value || err.description || err.code));
      }
      resolve(result);
    });
  });
  mount(PixiPanel, {
    target: document.body,
    props: { bridge }
  });
  if (false) {
    new EventSource("http://localhost:10808/esbuild").addEventListener(
      "change",
      () => {
        bridge("window.location.reload()");
        window.location.reload();
      }
    );
  }
})();
