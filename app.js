App({
  globalData:{
    token:''
  },
  onLaunch: function () {
    //取出token
    const token = wx.getStorageSync('token')
    if(token && token.length !== 0){ //验证是否有token
      this.checkout(token) //有token验证是否过期
    }else{
      this.login() //无token 登陆操作 
    }
  },
    checkout(token){
      console.log("执行了验证token操作")
      wx.request({
        url: 'http://123.207.32.32:3000/auth',
        method:'post',
        header:{
          token
        },
        success:(res)=>{
          if(!res.data.errCode){
            console.log("token有效")
            this.globalData.token = token
          }else{
            this.login()
          }
        },
        fail:function(err){
          console.log(err)
        }
      })
    },
    login(){
      console.log("执行了首次登录操作")
      wx.login({
        success:(res)=>{
          //1.获取code code只有5分钟有效期
          const code = res.code
          //2.将code发送到服务器
          wx.request({
            url: 'http://123.207.32.32:3000/login',
            data:{
              code
            },
            method:'post',
            success:(res)=>{
              //3.取出token
              const token = res.data.token
              //4.将token存放到globalData
              this.globalData.token = token
              //5.进行同步存储
              wx.setStorageSync('token', token)
            }
          })
        }
      })
    } 
})
