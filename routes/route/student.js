module.exports = function(router){
    // 正棱锥侧面积
    router.get('/sideareaformula.html',function(req,res){
        res.render('sideAreaFormula',{
            title:'正棱锥侧面积'
        })
    })
     // 视频详情
     router.get('/videdetail.html',function(req,res){
        res.render('videDetail',{
            title:'视频详情'
        })
    })

     // 任务详情
     router.get('/taskdetail.html',function(req,res){
        res.render('taskDetail',{
            title:'任务详情'
        })
    })
}