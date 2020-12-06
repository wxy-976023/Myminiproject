// pages/home/home.js
Page({
  handleToast(){
    wx.showToast({
      title: '针不搓',
      duration:3000,
      icon:'success',
      mask:true,
      success:function(){
        console.log("展示弹窗成功")
      },
      fail:function(){
        console.log("展示弹窗失败")
      },
      complete:function(){
        console.log("展示弹窗完成")
      }
    })
  },
  handleModal(){
    wx.showModal({
      title:"标题在这里",
      content:"内容在这里",
      cancelText:"返回",
      cancelColor:'#777777',
      showCancel:true,
      success:function(res){
        if(res.cancel){
          console.log("用户点击了取消按钮")
        }
        if(res.confirm){
          console.log("用户点击了确定按钮")
        }
      }
    })
  },
  handleLoading(){
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    //必须手动设置才会让loading消失
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  },
  handleAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'#555555',
      success:function(res){
        console.log(res)
        switch(res.tapIndex){
        }
      }
    })
  },
  onShareAppMessage:function(options){
    return {
      title:"你好呀",
      path:"/pages/about/about",
      imageUrl:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
    }
  }

})