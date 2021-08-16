(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('single-spa')) :
    typeof define === 'function' && define.amd ? define(['single-spa'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.singleSpa));
}(this, (function (singleSpa) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var singleSpa__namespace = /*#__PURE__*/_interopNamespace(singleSpa);

    //main.js

    singleSpa__namespace.registerApplication('app1',
        async () => {
            return {
                bootstrap:async()=>{
                    console.log('应用启动');
                },
                mount:async()=>{
                    console.log('应用挂载');
                },
                unmount:async()=>{
                    console.log('应用卸载');
                }
            }
        },
        location => location.hash.startsWith('#/app1'), 
        { store: { name: 'zf' } }
    );
    singleSpa__namespace.start();

})));
//# sourceMappingURL=single-spa.js.map
