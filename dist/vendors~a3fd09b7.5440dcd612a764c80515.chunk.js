(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/UDK":function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return l});var i=n("8HOe"),r=n("y5zR"),o=n("oRo2"),a=n("70NS"),s=o.a,c={"ux-dialog":function(){return n.e(23).then(n.bind(null,"96hg")).then(function(t){return t.UxDialog})},"ux-dialog-header":function(){return n.e(22).then(n.bind(null,"OXP8")).then(function(t){return t.UxDialogHeader})},"ux-dialog-body":function(){return n.e(20).then(n.bind(null,"29A/")).then(function(t){return t.UxDialogBody})},"ux-dialog-footer":function(){return n.e(21).then(n.bind(null,"qQe1")).then(function(t){return t.UxDialogFooter})},"attach-focus":function(){return n.e(19).then(n.bind(null,"KPvQ")).then(function(t){return t.AttachFocus})}},u="ux-dialog-container,ux-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}ux-dialog-overlay{opacity:0}ux-dialog-overlay.active{opacity:1}ux-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}ux-dialog-container.active{opacity:1}ux-dialog-container>div{padding:30px}ux-dialog-container>div>div{display:block;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto}ux-dialog-container,ux-dialog-container>div,ux-dialog-container>div>div{outline:0}ux-dialog{display:table;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3px;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;background:#fff}ux-dialog>ux-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ux-dialog>ux-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:0 0;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ux-dialog>ux-dialog-body{display:block;padding:16px}ux-dialog>ux-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ux-dialog>ux-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ux-dialog>ux-dialog-footer button:disabled{cursor:default;opacity:.45}ux-dialog>ux-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ux-dialog-open{overflow:hidden}",l=function(){function e(t,e){var n=this;this.renderer=s,this.cssText=u,this.resources=[],this.fwConfig=t,this.settings=this.fwConfig.container.get(r.a),e(function(){return n._apply()})}return e.prototype._apply=function(){var e=this;if(this.fwConfig.transient(i.a,this.renderer),this.cssText&&a.b.injectStyles(this.cssText),this.resources.length)return t.all(this.resources.map(function(t){return c[t]()})).then(function(t){e.fwConfig.globalResources(t)})},e.prototype.useDefaults=function(){return this.useRenderer(s).useCSS(u).useStandardResources()},e.prototype.useStandardResources=function(){return this.useResource("ux-dialog").useResource("ux-dialog-header").useResource("ux-dialog-body").useResource("ux-dialog-footer").useResource("attach-focus")},e.prototype.useResource=function(t){return this.resources.push(t),this},e.prototype.useRenderer=function(t,e){return this.renderer=t,e&&Object.assign(this.settings,e),this},e.prototype.useCSS=function(t){return this.cssText=t,this},e}()}).call(this,n("25Wt"))},"3U8n":function(t,e,n){"use strict";n.d(e,"e",function(){return g}),n.d(e,"b",function(){return p}),n.d(e,"c",function(){return v}),n.d(e,"f",function(){return b}),n.d(e,"a",function(){return _}),n.d(e,"d",function(){return E});var i,r,o,a,s,c,u,l,h=n("qrcG"),d=n("70NS"),g=h.d.create("aurelia:resolver",function(t){return"function"==typeof t.get||"Resolvers must implement: get(container: Container, key: any): any"}),f=g()(i=function(){function t(t,e){this.strategy=t,this.state=e}return t.prototype.get=function(t,e){switch(this.strategy){case 0:return this.state;case 1:var n=t.invoke(this.state);return this.state=n,this.strategy=0,n;case 2:return t.invoke(this.state);case 3:return this.state(t,e,this);case 4:return this.state[0].get(t,e);case 5:return t.get(this.state);default:throw new Error("Invalid strategy: "+this.strategy)}},t}())||i,p=g()(r=function(){function t(t){this._key=t}return t.prototype.get=function(t){var e=this;return function(){return t.get(e._key)}},t.of=function(e){return new t(e)},t}())||r,v=(g()(o=function(){function t(t){this._key=t}return t.prototype.get=function(t){return t.getAll(this._key)},t.of=function(e){return new t(e)},t}()),g()(a=function(){function t(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._key=t,this._checkParent=e}return t.prototype.get=function(t){return t.hasResolver(this._key,this._checkParent)?t.get(this._key):null},t.of=function(e){return new t(e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1])},t}())||a);g()(s=function(){function t(t){this._key=t}return t.prototype.get=function(t){return t.parent?t.parent.get(this._key):null},t.of=function(e){return new t(e)},t}()),g()(c=function(){function t(t){this._key=t}return t.prototype.get=function(t){var e=this._key,n=t.getResolver(e);return n&&3===n.strategy&&(e=n.state),function(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.invoke(e,i)}},t.of=function(e){return new t(e)},t}()),g()(u=function(){function t(t){this.key=t,this.asKey=t;for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];this.dynamicDependencies=n}return t.prototype.get=function(t){var e=this.dynamicDependencies.length>0?this.dynamicDependencies.map(function(e){return e["protocol:aurelia:resolver"]?e.get(t):t.get(e)}):void 0,n=this.key,i=t.getResolver(n);i&&3===i.strategy&&(n=i.state);var r=t.invoke(n,e);return t.registerInstance(this.asKey,r),r},t.prototype.as=function(t){return this.asKey=t,this},t.of=function(e){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return new(Function.prototype.bind.apply(t,[null].concat([e],i)))},t}());var y=function(){function t(){}return t.prototype.invoke=function(t,e,n){for(var i=n.length,r=new Array(i);i--;)r[i]=t.get(n[i]);return e.apply(void 0,r)},t.prototype.invokeWithDynamicDependencies=function(t,e,n,i){for(var r=n.length,o=new Array(r);r--;)o[r]=t.get(n[r]);return void 0!==i&&(o=o.concat(i)),e.apply(void 0,o)},t}();function w(t){return function(e){h.b.define(h.b.registration,t,e)}}function b(t){return w(new k(t))}y.instance=new y;var k=function(){function t(t){this._key=t}return t.prototype.registerResolver=function(t,e,n){var i=t.getResolver(this._key||e);return void 0===i?t.registerTransient(this._key||e,n):i},t}();!function(){function t(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"boolean"==typeof t?this._registerInChild=t:(this._key=t,this._registerInChild=e)}t.prototype.registerResolver=function(t,e,n){var i=this._registerInChild?t:t.root,r=i.getResolver(this._key||e);return void 0===r?i.registerSingleton(this._key||e,n):r}}();function m(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}var x=Object.freeze([]);h.b.registration="aurelia:registration",h.b.invoker="aurelia:invoker";var C=g.decorates,D=function(){function t(t,e,n){this.fn=t,this.invoker=e,this.dependencies=n}return t.prototype.invoke=function(t,e){return void 0!==e?this.invoker.invokeWithDynamicDependencies(t,this.fn,this.dependencies,e):this.invoker.invoke(t,this.fn,this.dependencies)},t}();function O(t,e,n,i){for(var r=n.length,o=new Array(r),a=void 0;r--;){if(null==(a=n[r]))throw new Error("Constructor Parameter with index "+r+" cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");o[r]=t.get(a)}return void 0!==i&&(o=o.concat(i)),Reflect.construct(e,o)}var R=((l={})[0]={invoke:function(t,e){return new e},invokeWithDynamicDependencies:O},l[1]={invoke:function(t,e,n){return new e(t.get(n[0]))},invokeWithDynamicDependencies:O},l[2]={invoke:function(t,e,n){return new e(t.get(n[0]),t.get(n[1]))},invokeWithDynamicDependencies:O},l[3]={invoke:function(t,e,n){return new e(t.get(n[0]),t.get(n[1]),t.get(n[2]))},invokeWithDynamicDependencies:O},l[4]={invoke:function(t,e,n){return new e(t.get(n[0]),t.get(n[1]),t.get(n[2]),t.get(n[3]))},invokeWithDynamicDependencies:O},l[5]={invoke:function(t,e,n){return new e(t.get(n[0]),t.get(n[1]),t.get(n[2]),t.get(n[3]),t.get(n[4]))},invokeWithDynamicDependencies:O},l.fallback={invoke:O,invokeWithDynamicDependencies:O},l);var _=function(){function t(t){void 0===t&&(t={}),this._configuration=t,this._onHandlerCreated=t.onHandlerCreated,this._handlers=t.handlers||(t.handlers=new Map),this._resolvers=new Map,this.root=this,this.parent=null}return t.prototype.makeGlobal=function(){return t.instance=this,this},t.prototype.setHandlerCreatedCallback=function(t){this._onHandlerCreated=t,this._configuration.onHandlerCreated=t},t.prototype.registerInstance=function(t,e){return this.registerResolver(t,new f(0,void 0===e?t:e))},t.prototype.registerSingleton=function(t,e){return this.registerResolver(t,new f(1,void 0===e?t:e))},t.prototype.registerTransient=function(t,e){return this.registerResolver(t,new f(2,void 0===e?t:e))},t.prototype.registerHandler=function(t,e){return this.registerResolver(t,new f(3,e))},t.prototype.registerAlias=function(t,e){return this.registerResolver(e,new f(5,t))},t.prototype.registerResolver=function(t,e){m(t);var n=this._resolvers,i=n.get(t);return void 0===i?n.set(t,e):4===i.strategy?i.state.push(e):n.set(t,new f(4,[i,e])),e},t.prototype.autoRegister=function(t,e){if("function"==typeof(e=void 0===e?t:e)){var n=h.b.get(h.b.registration,e);return void 0===n?this.registerResolver(t,new f(1,e)):n.registerResolver(this,t,e)}return this.registerResolver(t,new f(0,e))},t.prototype.autoRegisterAll=function(t){for(var e=t.length;e--;)this.autoRegister(t[e])},t.prototype.unregister=function(t){this._resolvers.delete(t)},t.prototype.hasResolver=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return m(t),this._resolvers.has(t)||e&&null!==this.parent&&this.parent.hasResolver(t,e)},t.prototype.getResolver=function(t){return this._resolvers.get(t)},t.prototype.get=function(e){if(m(e),e===t)return this;if(C(e))return e.get(this,e);var n=this._resolvers.get(e);if(void 0===n){if(null===this.parent)return this.autoRegister(e).get(this,e);var i=h.b.get(h.b.registration,e);return void 0===i?this.parent._get(e):i.registerResolver(this,e,e).get(this,e)}return n.get(this,e)},t.prototype._get=function(t){var e=this._resolvers.get(t);return void 0===e?null===this.parent?this.autoRegister(t).get(this,t):this.parent._get(t):e.get(this,t)},t.prototype.getAll=function(t){m(t);var e=this._resolvers.get(t);if(void 0===e)return null===this.parent?x:this.parent.getAll(t);if(4===e.strategy){for(var n=e.state,i=n.length,r=new Array(i);i--;)r[i]=n[i].get(this,t);return r}return[e.get(this,t)]},t.prototype.createChild=function(){var e=new t(this._configuration);return e.root=this.root,e.parent=this,e},t.prototype.invoke=function(t,e){try{var n=this._handlers.get(t);return void 0===n&&(n=this._createInvocationHandler(t),this._handlers.set(t,n)),n.invoke(this,e)}catch(e){throw new d.a("Error invoking "+t.name+". Check the inner error for details.",e,!0)}},t.prototype._createInvocationHandler=function(t){var e,n=void 0;if(void 0===t.inject)n=h.b.getOwn(h.b.paramTypes,t)||x;else{n=[];for(var i=t;"function"==typeof i;){var r;(r=n).push.apply(r,(e=i).hasOwnProperty("inject")?"function"==typeof e.inject?e.inject():e.inject:[]),i=Object.getPrototypeOf(i)}}var o=h.b.getOwn(h.b.invoker,t)||R[n.length]||R.fallback,a=new D(t,o,n);return void 0!==this._onHandlerCreated?this._onHandlerCreated(a):a},t}();function j(t){var e=function(t){t.hasOwnProperty("inject")||(t.inject=(h.b.getOwn(h.b.paramTypes,t)||x).slice(),t.inject.length>0&&t.inject[t.inject.length-1]===Object&&t.inject.pop())};return t?e(t):e}function E(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t,n,i){if("number"==typeof i)return j(t),void(1===e.length&&(t.inject[i]=e[0]));i?i.value.inject=e:t.inject=e}}},"5EPc":function(t,e,n){"use strict";function i(t){var e=new Error("Operation cancelled.");return e.wasCancelled=!0,e.output=t,e}n.d(e,"a",function(){return i})},"7+Oy":function(t,e,n){"use strict";function i(t){var e=new Error;return e.wasCancelled=!1,e.output=t,e}n.d(e,"a",function(){return i})},"8HOe":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t.prototype.getDialogContainer=function(){throw new Error("DialogRenderer must implement getDialogContainer().")},t.prototype.showDialog=function(t){throw new Error("DialogRenderer must implement showDialog().")},t.prototype.hideDialog=function(t){throw new Error("DialogRenderer must implement hideDialog().")},t}()},Bj7L:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return l});var i=n("3U8n"),r=n("hij8"),o=n("y5zR"),a=n("5EPc"),s=n("XVe/"),c=n("k4IX");function u(t,e){return this.then(function(t){return t.wasCancelled?t:t.closeResult}).then(t,e)}var l=function(){function e(t,e,n){this.controllers=[],this.hasOpenDialog=!1,this.hasActiveDialog=!1,this.container=t,this.compositionEngine=e,this.defaultSettings=n}return e.prototype.validateSettings=function(t){if(!t.viewModel&&!t.view)throw new Error('Invalid Dialog Settings. You must provide "viewModel", "view" or both.')},e.prototype.createCompositionContext=function(t,e,n){return{container:t.parent,childContainer:t,bindingContext:null,viewResources:null,model:n.model,view:n.view,viewModel:n.viewModel,viewSlot:new r.q(e,!0),host:e}},e.prototype.ensureViewModel=function(e){return"object"==typeof e.viewModel?t.resolve(e):this.compositionEngine.ensureViewModel(e)},e.prototype._cancelOperation=function(t){if(!t)return{wasCancelled:!0};throw Object(a.a)()},e.prototype.composeAndShowDialog=function(e,n){var i=this;return e.viewModel||(e.bindingContext={controller:n}),this.compositionEngine.compose(e).then(function(e){return n.controller=e,n.renderer.showDialog(n).then(function(){i.controllers.push(n),i.hasActiveDialog=i.hasOpenDialog=!!i.controllers.length},function(n){return e.viewModel&&Object(s.a)(e.viewModel,"deactivate"),t.reject(n)})})},e.prototype.createSettings=function(t){return"boolean"==typeof(t=Object.assign({},this.defaultSettings,t)).keyboard||t.keyboard||(t.keyboard=!t.lock),"boolean"!=typeof t.overlayDismiss&&(t.overlayDismiss=!t.lock),Object.defineProperty(t,"rejectOnCancel",{writable:!1,configurable:!0,enumerable:!0}),this.validateSettings(t),t},e.prototype.open=function(e){var n=this;void 0===e&&(e={});var i,r,o=(e=this.createSettings(e)).childContainer||this.container.createChild(),a=new t(function(t,e){i=t,r=e}),l=o.invoke(c.a,[e,i,r]);o.registerInstance(c.a,l),a.then(function(){h(n,l)},function(){h(n,l)});var d,g=this.createCompositionContext(o,l.renderer.getDialogContainer(),l.settings),f=this.ensureViewModel(g).then(function(t){return!t.viewModel||Object(s.a)(t.viewModel,"canActivate",l.settings.model)}).then(function(t){return t?n.composeAndShowDialog(g,l).then(function(){return{controller:l,closeResult:a,wasCancelled:!1}}):n._cancelOperation(l.settings.rejectOnCancel)});return(d=f).whenClosed=u,d},e.prototype.closeAll=function(){return t.all(this.controllers.slice(0).map(function(t){return t.settings.rejectOnCancel?t.cancel().then(function(){return null}).catch(function(e){if(e.wasCancelled)return t;throw e}):t.cancel().then(function(e){return e.wasCancelled?t:null})})).then(function(t){return t.filter(function(t){return!!t})})},e.inject=[i.a,r.e,o.a],e}();function h(t,e){var n=t.controllers.indexOf(e);-1!==n&&(t.controllers.splice(n,1),t.hasActiveDialog=t.hasOpenDialog=!!t.controllers.length)}}).call(this,n("25Wt"))},"XVe/":function(t,e,n){"use strict";(function(t){function i(e,n,i){return"function"==typeof e[n]?new t(function(t){t(e[n](i))}).then(function(t){return null==t||t}):t.resolve(!0)}n.d(e,"a",function(){return i})}).call(this,n("25Wt"))},"aurelia-dialog":function(t,e,n){"use strict";n.r(e),n.d(e,"configure",function(){return u});var i=n("/UDK"),r=n("y5zR");n.d(e,"DefaultDialogSettings",function(){return r.a}),n.d(e,"DialogConfiguration",function(){return i.a});var o=n("8HOe");n.d(e,"Renderer",function(){return o.a});var a=n("5EPc");n.d(e,"createDialogCancelError",function(){return a.a});var s=n("Bj7L");n.d(e,"DialogService",function(){return s.a});var c=n("k4IX");function u(t,e){var n=null,r=new i.a(t,function(t){n=t});return"function"==typeof e?e(r):r.useDefaults(),n()}n.d(e,"DialogController",function(){return c.a})},k4IX:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return s});var i=n("8HOe"),r=n("XVe/"),o=n("7+Oy"),a=n("5EPc"),s=function(){function e(t,e,n,i){this.resolve=n,this.reject=i,this.settings=e,this.renderer=t}return e.prototype.releaseResources=function(t){var e=this;return Object(r.a)(this.controller.viewModel||{},"deactivate",t).then(function(){return e.renderer.hideDialog(e)}).then(function(){e.controller.unbind()})},e.prototype.cancelOperation=function(){if(!this.settings.rejectOnCancel)return{wasCancelled:!0};throw Object(a.a)()},e.prototype.ok=function(t){return this.close(!0,t)},e.prototype.cancel=function(t){return this.close(!1,t)},e.prototype.error=function(t){var e=this,n=Object(o.a)(t);return this.releaseResources(n).then(function(){e.reject(n)})},e.prototype.close=function(e,n){var i=this;if(this.closePromise)return this.closePromise;var o={wasCancelled:!e,output:n};return this.closePromise=Object(r.a)(this.controller.viewModel||{},"canDeactivate",o).catch(function(e){return i.closePromise=void 0,t.reject(e)}).then(function(r){return r?i.releaseResources(o).then(function(){return!i.settings.rejectOnCancel||e?i.resolve(o):i.reject(Object(a.a)(n)),{wasCancelled:!1}}).catch(function(e){return i.closePromise=void 0,t.reject(e)}):(i.closePromise=void 0,i.cancelOperation())})},e.inject=[i.a],e}()}).call(this,n("25Wt"))},oRo2:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return d});var i,r,o,a,s,c=n("70NS"),u=n("3U8n"),l=function(){if(i)return i;var t=c.b.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return i=e[n];return""},h=(a=["webkitTransitionDuration","oTransitionDuration"],function(t){return r||(r=c.b.createElement("fakeelement"),o="transitionDuration"in r.style?"transitionDuration":a.find(function(t){return t in r.style})),!!o&&!!c.b.getComputedStyle(t)[o].split(",").find(function(t){return!!parseFloat(t)})});var d=function(){function e(){}return e.keyboardEventHandler=function(t){var n=function(t){return"Escape"===(t.code||t.key)||27===t.keyCode?"Escape":"Enter"===(t.code||t.key)||13===t.keyCode?"Enter":void 0}(t);if(n){var i=e.dialogControllers[e.dialogControllers.length-1];if(i&&i.settings.keyboard){var r=i.settings.keyboard;"Escape"===n&&(!0===r||r===n||Array.isArray(r)&&r.indexOf(n)>-1)?i.cancel():"Enter"===n&&(r===n||Array.isArray(r)&&r.indexOf(n)>-1)&&i.ok()}}},e.trackController=function(t){e.dialogControllers.length||c.b.addEventListener(t.settings.keyEvent||"keyup",e.keyboardEventHandler,!1),e.dialogControllers.push(t)},e.untrackController=function(t){var n=e.dialogControllers.indexOf(t);-1!==n&&e.dialogControllers.splice(n,1),e.dialogControllers.length||c.b.removeEventListener(t.settings.keyEvent||"keyup",e.keyboardEventHandler,!1)},e.prototype.getOwnElements=function(t,e){for(var n=t.querySelectorAll(e),i=[],r=0;r<n.length;r++)n[r].parentElement===t&&i.push(n[r]);return i},e.prototype.attach=function(t){var e=c.b.createElement("div");e.appendChild(this.anchor),this.dialogContainer=c.b.createElement("ux-dialog-container"),this.dialogContainer.appendChild(e),this.dialogOverlay=c.b.createElement("ux-dialog-overlay");var n="number"==typeof t.settings.startingZIndex?t.settings.startingZIndex+"":null;this.dialogOverlay.style.zIndex=n,this.dialogContainer.style.zIndex=n;var i=this.getOwnElements(this.host,"ux-dialog-container").pop();i&&i.parentElement?(this.host.insertBefore(this.dialogContainer,i.nextSibling),this.host.insertBefore(this.dialogOverlay,i.nextSibling)):(this.host.insertBefore(this.dialogContainer,this.host.firstChild),this.host.insertBefore(this.dialogOverlay,this.host.firstChild)),t.controller.attached(),this.host.classList.add("ux-dialog-open")},e.prototype.detach=function(t){this.host.removeChild(this.dialogOverlay),this.host.removeChild(this.dialogContainer),t.controller.detached(),e.dialogControllers.length||this.host.classList.remove("ux-dialog-open")},e.prototype.setAsActive=function(){this.dialogOverlay.classList.add("active"),this.dialogContainer.classList.add("active")},e.prototype.setAsInactive=function(){this.dialogOverlay.classList.remove("active"),this.dialogContainer.classList.remove("active")},e.prototype.setupClickHandling=function(t){this.stopPropagation=function(t){t._aureliaDialogHostClicked=!0},this.closeDialogClick=function(e){t.settings.overlayDismiss&&!e._aureliaDialogHostClicked&&t.cancel()},this.dialogContainer.addEventListener("click",this.closeDialogClick),this.anchor.addEventListener("click",this.stopPropagation)},e.prototype.clearClickHandling=function(){this.dialogContainer.removeEventListener("click",this.closeDialogClick),this.anchor.removeEventListener("click",this.stopPropagation)},e.prototype.centerDialog=function(){var t=this.dialogContainer.children[0],e=Math.max(c.b.querySelectorAll("html")[0].clientHeight,window.innerHeight||0);t.style.marginTop=Math.max((e-t.offsetHeight)/2,30)+"px",t.style.marginBottom=Math.max((e-t.offsetHeight)/2,30)+"px"},e.prototype.awaitTransition=function(e,n){var i=this;return new t(function(t){var r=i,o=l();n||!h(i.dialogContainer)?t():i.dialogContainer.addEventListener(o,function e(n){n.target===r.dialogContainer&&(r.dialogContainer.removeEventListener(o,e),t())}),e()})},e.prototype.getDialogContainer=function(){return this.anchor||(this.anchor=c.b.createElement("div"))},e.prototype.showDialog=function(t){var n=this;s||(s=c.b.querySelectorAll("body")[0]),t.settings.host?this.host=t.settings.host:this.host=s;var i=t.settings;return this.attach(t),"function"==typeof i.position?i.position(this.dialogContainer,this.dialogOverlay):i.centerHorizontalOnly||this.centerDialog(),e.trackController(t),this.setupClickHandling(t),this.awaitTransition(function(){return n.setAsActive()},t.settings.ignoreTransitions)},e.prototype.hideDialog=function(t){var n=this;return this.clearClickHandling(),e.untrackController(t),this.awaitTransition(function(){return n.setAsInactive()},t.settings.ignoreTransitions).then(function(){n.detach(t)})},e.dialogControllers=[],e}();Object(u.f)()(d)}).call(this,n("25Wt"))},y5zR:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){return function(){this.lock=!0,this.startingZIndex=1e3,this.centerHorizontalOnly=!1,this.rejectOnCancel=!1,this.ignoreTransitions=!1}}()}}]);
//# sourceMappingURL=vendors~a3fd09b7.5440dcd612a764c80515.bundle.map