//触发上传
$(".upload-pic").on("click",function(){
    $(".upload-file").trigger('click')
})


//图片上传的跟新头像
function uploadImg(This){ 
    var fileMaxSize = 1024;//1M
    var file = This.files[0];
    if(file.size/fileMaxSize > fileMaxSize){
        $(".tips-msg").html("图片过大 不能上传");
        $(".tips").show();
        return false;
    }
    if (!/image\/\w+/.test(file.type)) {
        $(".tips-msg").html("请注意上传图片的格式！");
        $(".tips").show();
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        $(".upload-pic").attr('src',reader.result)
    }
}

//验证表单提交
function checkForm(){
    var file = $(".upload-file").val();
    var username = $.trim($('#username').val());
    var pwd = $.trim($('#pwd').val());
    var repwd = $.trim($('#repwd').val());
    if(file == '' || username == '' || pwd == '' || repwd == '') {
        $(".tips-msg").html("请将信息输入完整后才能提交");
        $(".tips").show();
        return false;
    }
    if (!checkStrong(pwd) || !checkStrong(repwd)) {
        $(".tips-msg").html("6-20位数字、大小写字母");
        $(".tips").show();
        return false;
    }
    if(pwd != '' && pwd != repwd) {
        $(".tips-msg").html("输入的密码不一致");
        $(".tips").show();
        return false;
    }
    if(username.length<2 || username.length > 20){
        $(".tips-msg").html("请注意输入合法长度的用户名");
        $(".tips").show();
    }
    return true;
}
