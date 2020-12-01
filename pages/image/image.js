// pages/image/image.js
Page({
  data: {
    ImagePath:""
  },
  handleChooseAlbum(){
    //系统API：让用户再相册中选择图片（或者拍照，真机调试才能看到）
    wx.chooseImage({
      success:res=>{
        console.log(res)
        const path = res.tempFilePaths[0]
        this.setData({
          ImagePath:path
        })
      }
    })
  },
  IamgeAllLoad(){
    console.log("全部加载完成")
  }
})