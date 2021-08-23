(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.singleSpa = {}));
}(this, (function (exports) { 'use strict';

    let started = false;

    function start() {
        //挂载应用
        started = true;
        //需要先加载应用，再挂载
        reroute();
    }

    function reroute() {
        const { appsToLoad,appsToMount, appsToUnmount } = getAppChanges();
        console.log(111, appsToLoad,appsToMount, appsToUnmount);

        if(started){
            // app装载
            console.log('调用 start');
            return performAppChanges() // 根据路径来装载应用
        } else {
            // 注册应用时， 需要预先加载
            console.log('调用 register');
            return loadApps() //预加载应用
        }

        async function loadApps() { // 预加载应用

        }

        async function performAppChanges() { // 根据路径装载应用

        }
    }

    // 描述应用的整个状态
    const NOT_LOADED = 'NOT_LOADED'; // 应用初始状态

    const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE'; // 加载资源

    const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED'; // 还没有调用bootstrap方法

    const BOOTSTRAPPING = 'BOOTSTRAPPING'; // 启动中

    const NOT_MOUNTED = 'NOT_MOUNTED'; // 没有调用 Mounted 方法

    const MOUNTED = 'MOUNTED'; // 挂载完毕

    const SKIP_BECAUSE_BROKEN = 'SKIP_BECAUSE_BROKEN'; // 代码出错

    function shouldBeActive(app) {
        return app.activeWhen(window.location)
    }

    const apps = [];

    function registerApplication(appName, loadApp,activeWhen, customProps) {
        apps.push({
            name: appName,
            loadApp,
            activeWhen,
            customProps,
            status: NOT_LOADED
        });
        reroute(); // 加载应用
        console.log(apps);
    }

    function getAppChanges() {
        const appsToUnmount = []; // 要卸载的app
        const appsToLoad = []; // 要加载的app
        const appsToMount = []; // 需要挂载的
        apps.forEach((app) => {
            debugger
            const appShouldBeActive = app.status !== SKIP_BECAUSE_BROKEN && shouldBeActive(app);
        
            switch(app.status) {
                case NOT_LOADED: 
                case LOADING_SOURCE_CODE:
                    if(appShouldBeActive) {
                        appsToLoad.push(app);
                    }
                    break;
                case NOT_BOOTSTRAPPED:
                case BOOTSTRAPPING:
                case NOT_MOUNTED:
                    if(appShouldBeActive){
                        appsToMount.push(app);
                    }
                    break;
                case MOUNTED:
                    if(!appShouldBeActive) {
                        appsToUnmount.push(app);
                    }
                    break;
            }

            
        });

        return {
            appsToLoad,
            appsToMount,
            appsToUnmount
        }
    }

    exports.registerApplication = registerApplication;
    exports.start = start;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=single-spa.js.map
