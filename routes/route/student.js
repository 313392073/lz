module.exports = function(router){
    // 正棱锥侧面积
    router.get('/sideareaformula.html',function(req,res){
        res.render('sideAreaFormula',{
            title:'正棱锥侧面积'
        })
    })

     // 正棱锥表面积
     router.get('/regularareaformula.html',function(req,res){
        res.render('RegularAreaFormula',{
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

    // 线线关系
    router.get('/linerelation.html',function(req,res){
        res.render('lineRelation',{
            title:'线线关系'
        })
    })

    // 课后实验
    router.get('/aftclaexp.html',function(req,res){
        res.render('aftClaExp',{
            title:'课后实验'
        })
    })

     // 视频分享
     router.get('/videoshare.html',function(req,res){
        res.render('videoShare',{
            title:'视频分享'
        })
    })

    // 寻找棱锥
    router.get('/findpyramid.html',function(req,res){
        res.render('findPyramid',{
            title:'寻找棱锥'
        })
    })


    // 制作棱锥
    router.get('/makepyramid.html',function(req,res){
        res.render('makePyramid',{
            title:'制作棱锥'
        })
    })

    // 课后习题
    router.get('/homeworkproblems.html',function(req,res){
        res.render('HomeworkProblems',{
            title:'课后习题'
        })
    })

    // 课件管理
    router.get('/coursemanagement.html',function(req,res){
        res.render('courseManagement',{
            title:'课件管理'
        })
    })
}