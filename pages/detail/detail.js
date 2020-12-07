// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //1.获取首页页面对象
    const pages = getCurrentPages()
    const home = pages[pages.length-2]
    //2.调用页面对象setdata
    home.setData({
      title:'呵呵呵'
    })
  },
  handleBackH(){
    wx.navigateBack({
      delta: 0
    })
  }
})