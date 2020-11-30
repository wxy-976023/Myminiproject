App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("小程序初始化")
    // wx.request({
    //   url: '',
    // })
    //第一种获取用户信息的方式，success是异步调用的
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    //抛出异常
    // setTimeout(function(){
    //   const err = new Error()
    //   throw err
    // },1000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("小程序显示出来")
    //判断小程序的进入场景
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("小程序关闭隐藏")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序发生错误时执行")
  },
  // app是单例对象，共享数据可以存放在这里
  globalData:{
    name:'wxx',
    age:18
  }
})
