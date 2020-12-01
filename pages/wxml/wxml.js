// pages/wxml/wxml.js
Page({
  data: {
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:50,
    movies:['mm','ll','dd']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
  },
  handleChange(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleShow(){
    this.setData({
      isShow:!this.data.isShow 
    })
  },
  add10(){
    this.setData({
      score:this.data.score+10
    })
  }

})