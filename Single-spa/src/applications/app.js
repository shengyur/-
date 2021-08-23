import { reroute } from "../navigations/reroute"
import { BOOTSTRAPPING, LOADING_SOURCE_CODE, LOAD_ERR, MOUNTED, NOT_BOOTSTRAP, NOT_BOOTSTRAPPED, NOT_LOADED, NOT_MOUNTED, shouldBeActive, SKIP_BECAUSE_BROKEN } from "./app.helper"

const apps = []

export function registerApplication(appName, loadApp,activeWhen, customProps) {
    apps.push({
        name: appName,
        loadApp,
        activeWhen,
        customProps,
        status: NOT_LOADED
    })
    reroute() // 加载应用
    console.log(apps)
}

export function getAppChanges() {
    const appsToUnmount = [] // 要卸载的app
    const appsToLoad = [] // 要加载的app
    const appsToMount = [] // 需要挂载的
    apps.forEach((app) => {
        debugger
        const appShouldBeActive = app.status !== SKIP_BECAUSE_BROKEN && shouldBeActive(app)
    
        switch(app.status) {
            case NOT_LOADED: 
            case LOADING_SOURCE_CODE:
                if(appShouldBeActive) {
                    appsToLoad.push(app)
                }
                break;
            case NOT_BOOTSTRAPPED:
            case BOOTSTRAPPING:
            case NOT_MOUNTED:
                if(appShouldBeActive){
                    appsToMount.push(app)
                }
                break;
            case MOUNTED:
                if(!appShouldBeActive) {
                    appsToUnmount.push(app)
                }
                break;
            default: 
                break;
        }

        
    })

    return {
        appsToLoad,
        appsToMount,
        appsToUnmount
    }
}