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

    // 课后练习
    router.get('/praafterclass.html',function(req,res){
        res.render('PraafterClass',{
            title:'课后练习'
        })
    })

    // 课堂学习
    router.get('/classlearning.html',function(req,res){
        res.render('ClassLearning',{
            title:'课堂学习'
        })
    })

    // 课堂学习成绩报告(学生) (差一个echart柱状表)
    router.get('/learningreport.html',function(req,res){
        res.render('learningReport',{
            title:'课堂学习成绩报告'
        })
    })

    // 在线测试成绩报告(学生) ()
    router.get('/testreport.html',function(req,res){
        res.render('testReport',{
            title:'在线测试成绩报告'
        })
    })

    // 在线测试学生练习结果(学生) (差一个echart柱状表)
    router.get('/practicereport.html',function(req,res){
        res.render('PracticReport',{
            title:'在线测试学生练习结果'
        })
    })

     // 作业结果(学生) (差2个echart柱状图)
     router.get('/jobresults.html',function(req,res){
        res.render('jobResults',{
            title:'在线测试成绩报告'
        })
    })

    // 课堂学习测试结果统计报告
    router.get('/classtotalresult.html',function(req,res){
        res.render('classTotalResult',{
            title:'课堂学习测试结果统计报告'
        })
    })

     // 分配小组
     router.get('/assigngroup.html',function(req,res){
        res.render('assignGroup',{
            title:'分配小组'
        })
    })

    // 小组分配情况
    router.get('/assigngroupcase.html',function(req,res){
        res.render('assignGroupCase',{
            title:'小组分配情况'
        })
    })

     // 老师端作业分享模板
     router.get('/teahomeworksharebase.html',function(req,res){
        res.render('teaHomeworkSharebase',{
            title:'老师端作业分享'
        })
    })

    // 老师端作业分享1
    router.get('/teahomeworkshare.html',function(req,res){
        res.render('teaHomeworkShare',{
            title:'老师端作业分享'
        })
    })

     // 老师端作业分享2
     router.get('/teasharedetail.html',function(req,res){
        res.render('teaShareDetail',{
            title:'老师端作业分享'
        })
    })
}