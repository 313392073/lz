module.exports = function(router){
    // 注册
    router.get('/reg.html',function(req,res){
        res.render('reg',{
            title:'注册'
        })
    })
    // 登陆
    router.get('/login.html',function(req,res){
        res.render('login',{
            title:'登录',
            tab:'login'
        })
    })
    // 找回密码
    router.get('/findpwd.html',function(req,res){
        res.render('login',{
            title:'找回密码',
            tab:'findpwd'
        })
    })
}