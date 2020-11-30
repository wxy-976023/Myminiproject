// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */

  // page页面作用：2-初始化页面的数据
  data: {
    list:[]
  },
// page页面作用：1-监听页面的生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送网络请求
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/recommend',
      success:(res)=>{
        // console.log(res)
        const data = res.data.data.list
        //箭头函数里面的this指向data
        this.setData({
          list:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // page页面作用：2-监听wxml页面的事件
  handleViewClick(){
    console.log('哈哈哈被点击了')
  },

  // page页面作用：3-监听其他的事件
  // 页面滚动情况
  // onPageScroll(obj){
  //   console.log(obj)
  // },
  // 下拉到底事件
  onReachBottom(){
    console.log("下拉到底了")
  },
  //上拉刷新事件
  onPullDownRefresh(){
    console.log("上拉刷新")
  }
})