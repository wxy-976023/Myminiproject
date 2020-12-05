// pages/home/home.js
import request from '../../service/network.js'
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
    // -----------1.原生的方式获取数据---------------
    // this.get_requet_origin();
    // -----------2.用封装工具获取数据 降低耦合度---------------
    //promise方法防止出现回调地狱
    request({
      url:'http://152.136.185.210:8000/api/w6/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  get_requet_origin(){
    // 1.一般的get请求
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/recommend',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    // 2.get请求，带参数
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/home/data',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    // 3.post请求，带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:'wxxxx',
    //     age:18
    //   },
    //   success:function(res){
    //     console.log(res)
    //   },
    //   fail:function(res){
    //     console.log(res)
    //   }
    // })
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

  }
})