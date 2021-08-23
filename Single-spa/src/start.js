import { reroute } from "./navigations/reroute";

export let started = false

export function start() {
    //挂载应用
    started = true
    //需要先加载应用，再挂载
    reroute()
}