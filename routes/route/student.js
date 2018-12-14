module.exports = function(router){
    // 正棱锥侧面积
    router.get('/sideareaformula.html',function(req,res){
        res.render('sideAreaFormula',{
            title:'正棱锥侧面积'
        })
    })
}