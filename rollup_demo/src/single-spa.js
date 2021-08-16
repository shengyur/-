//main.js
import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app1',
    async () => {
        return {
            bootstrap:async()=>{
                console.log('应用启动');
            },
            mount:async()=>{
                console.log('应用挂载');
            },
            unmount:async()=>{
                console.log('应用卸载')
            }
        }
    },
    location => location.hash.startsWith('#/app1'), 
    { store: { name: 'zf' } }
);
singleSpa.start();