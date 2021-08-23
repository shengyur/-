import { getAppChanges } from "../applications/app";
import { started } from "../start";

export function reroute() {
    const { appsToLoad,appsToMount, appsToUnmount } = getAppChanges()
    console.log(111, appsToLoad,appsToMount, appsToUnmount)

    if(started){
        // app装载
        console.log('调用 start')
        return performAppChanges() // 根据路径来装载应用
    } else {
        // 注册应用时， 需要预先加载
        console.log('调用 register')
        return loadApps() //预加载应用
    }

    async function loadApps() { // 预加载应用

    }

    async function performAppChanges() { // 根据路径装载应用

    }
}