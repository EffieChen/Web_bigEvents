$(function() {
    // 点击链接去注册
    $("#link_reg").on('click',function(){
        $(".login-box").toggle()
        $(".reg-box").toggle()

    })
    // 点击链接去注册
    $("#link_log").on('click',function(){
        $(".reg-box").toggle()
        $(".login-box").toggle()
    })
    let form = layui.form
    form.verify({
        pwd: [
          /^[\S]{6,12}$/
          ,'密码必须6到12位，且不能出现空格'
        ],
        // 校验两次密码是否一致
        repwd:function(value){
            let possword = $(".reg-box [name=password]").val()
            if(value != possword) {
                return '两次密码不一致'
            }
        }
      });
    //   注册事件
    $("#reg").on('submit',function(e){
        e.preventDefault()
        // 地址借口有问题，跳过
        $.post('/api/reguser',{username:$(".reg-box [name=username]").val(),password:$(".reg-box [name=password]").val(),function(res){    
            let lay = layui.layer
            lay.msg("注册完成")   
        return console.log("注册完成")
        }
        
    })
    $(".login-box").toggle()
    $(".reg-box").toggle()

    })
    $("#log").on('submit',function(e){
        e.preventDefault()
        // 地址借口有问题，跳过
        $.get('http://ajax.frontend.itheima.net/api/login',{username:$(".log-box [name=username]").val(),password:$(".log-box [name=password]").val(),function(res){    
            let lay = layui.layer

            // if(res.status != 0) {
            //     return lay.msg("登录失败")
            // }
            // 获取token 存储到本地 localStorage.setItem('token',res.token)保存

            lay.msg("登录成功")
            location.href = '/index.html'
        }
        
    })
    $(".login-box").toggle()
    $(".reg-box").toggle()

    })
})