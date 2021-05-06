const Koa = require('koa');
const Router = require('koa-router');
const glob = require("glob");
const logger = require('koa-logger')
const { resolve } = require('path');
const fs = require('fs');
// const Mock = require("mockjs")
// const store = require("../src/store")
 
const app = new Koa();
const router = new Router({prefix: '/api'});
const routerMap = {};  // 存放路由映射

app.use(logger());

// 注册路由
glob.sync(resolve('./api', "**/*.json")).forEach((item, i) => {
    let apiJsonPath = item && item.split('/api')[1];
    let apiPath = apiJsonPath.replace('.json', '');
    
    router.get(apiPath, (ctx, next) => {
        try {
            let jsonStr = fs.readFileSync(item).toString();
            ctx.body = {
                data: JSON.parse(jsonStr),
                state: 200,
                type: 'success' // 自定义响应体
            }
        console.log("apiPath=",apiPath);
        if(apiPath==="/api/data")
            console.log("apiPath===/api/data");
        }catch(err) {
            ctx.throw('服务器错误', 500);
        }
      });
    router.post(apiPath,(ctx,next)=>{
        try {
            
            // let jsonStr = store.getState().data;
            let jsonStr="test!!";
            console.log(jsonStr);
            ctx.body = {
                // data: JSON.parse(jsonStr), //自定义的字符串不符合json语法，导致无法通过json来进行parse
                state: 200,
                type: 'success' // 自定义响应体
            }
            fs.writeFileSync("./test.json",JSON.stringify(jsonStr));
        }catch(err) {
            ctx.throw('服务器错误', 500);
        }
    });
    // 记录路由
    routerMap[apiJsonPath] = apiPath;
});
// Mock.mock("/api/v1/user","post",function(option){

//     fs.writeFileSync("./test.json",JSON.stringify(option));
// 	return Mock.mock({
// 		status:200,
// 		message:'@cword(4,9)'
// 	})
// })
fs.writeFile('./routerMap.json', JSON.stringify(routerMap, null , 4), err => {
    if(!err) {
        console.log('路由地图生成成功！')
    }
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
