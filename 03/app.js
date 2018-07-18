var express = require('express')
var router = express.Router()
var subRouter = express.Router()

var app = express()
// 自定义中间件
function myMiddleware(req, res, next) {
    req.log = function(info) {
        console.log(info)
    }
    next()
}
app.use(myMiddleware)

// 默认路由
app.get('/', function(req, res) {
    req.log('调用了' + req.originalUrl)
    res.send('hello world')
})

router.use(myMiddleware)
// 一级路由
router.get('/', function(req, res) {
    req.log('调用了' + req.originalUrl)
    res.send('route1 root')
})
router.get('/children', function(req, res) {
    req.log('调用了' + req.originalUrl)
    res.send('route1 children')
})

// 二级路由
subRouter.get('/', function(req, res) {
    res.send('sub Router')
})
router.use('/sub', subRouter)


// 内置的中间件
app.use('/route1', router)


app.listen(3000, function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('listening 3000!')
})