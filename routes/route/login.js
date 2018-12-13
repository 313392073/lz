module.exports = function(router){
    // 登陆
    router.get('/reg.html',function(req,res){
        res.render('reg')
    })
    // 登陆
    router.get('/login.html',function(req,res){
        res.render('login',{
            tab:'login'
        })
    })
    // 找回密码
    router.get('/findpwd.html',function(req,res){
        res.render('login',{
            tab:'findpwd'
        })
    })
}