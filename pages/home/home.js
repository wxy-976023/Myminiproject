// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:''
  },
  handleNav(){
    wx.navigateTo({
      url: '/pages/detail/detail?name=wxx&age=18',
    })
  }
 
})