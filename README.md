
# koa2-views
A server render front end scaffold(koa)
# Installation
```
npm install koa2-views -g
```
or
```
git clone https://github.com/chenzezhang/koa-views.git

cd koa-views && npm install

```
# describe

Template rendering middleware for koa，Simple, clear and quick


# Example


```
    var viewFile = fs.readFileSync(viewsPath, 'utf8');

    var layoutFile = fs.readFileSync(layoutsPath, 'utf8');

    var layoutTemplate = Handlebars.compile(layoutFile);

    var viewTemplate = Handlebars.compile(viewFile);

    tmpl.layoutTemplate = layoutTemplate;

    tmpl.viewTemplate = viewTemplate;
```


```
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
```






