const Router = require('koa-router');
const compose = require('koa-compose');
const fetch = require('whatwg-fetch');
const path = require('path');
const router = new Router();
// const router = new Router({
//     prefix: '/login'
// });

router
    .get('/', async(ctx, next) => {
        
        ctx.locals = {
            name: 'lalala'
        };
        await next();
    }).get('/aaa', async(ctx, next) => {
        ctx.locals = {
            name: 'lalala'
        };
        await next();
    })

module.exports = () => compose([
    router.routes(),
    router.allowedMethods()
]);
