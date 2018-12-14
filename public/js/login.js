/**
 * 登录的交互
 */
 function checkLogin(){
    var identity = $.trim($('input:radio[name="identity"]:checked').val());
    var username = $.trim($("#username").val());
    var pwd = $.trim($("#pwd").val());
    if(identity == '' || username == '' || pwd == '') {
        $(".tips-msg").html("请将信息输入完整后才能提交");
        $(".tips").show();
        return false;
    }
    if (!checkStrong(pwd) || !checkStrong(repwd)) {
        $(".tips-msg").html("请注意密码格式:6-20位数字、大小写字母");
        $(".tips").show();
        return false;
    }
    if(username.length<2 || username.length > 20){
        $(".tips-msg").html("请注意输入合法长度的用户名");
        $(".tips").show();
    }
    return true;
 }


 /**
 * 找回密码的交互
 */

 $(".sbtn").on("click",function(){
    var identity = $.trim($('input:radio[name="identity"]:checked').val());
    var username = $.trim($("#username").val());

    if(identity == '' || username == '') {
        $(".tips-msg").html("请将信息输入完整后才能提交");
        $(".tips").show();
        return false;
    }
    if(username.length<2 || username.length > 20){
        $(".tips-msg").html("请注意输入合法长度的用户名");
        $(".tips").show();
    }

    $.ajax({
        url:'',
        method:'POST',
        dataType:'json',
        data:{'identity':identity,username:username},
        success:function(res){
            $(".tips-msg").html(res);
            $(".tips").show();
        },
        error:function(error){
            $(".tips-msg").html('网络错误，请稍后再试');
            $(".tips").show();
        }
    })
 })