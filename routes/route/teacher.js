module.exports = function(router){
    // 视频上传列表
    router.get('/videolist.html',function(req,res){
        res.render('videoList',{
            title:'视频上传列表'
        })
    })
}