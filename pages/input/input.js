// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event){
    console.log("input",event)
  },
  handleFocus(event){
    console.log("focus",event)
  },
  handleBlur(event){
    console.log("blur",event)
  }
})