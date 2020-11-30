// pages/about/about.js
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
console.log(name+age)
Page({
  data:{
    name:"wxx",
    age:18,
    students:[
      {id: 110,name: 'wxx',age: 22},
      {id: 111,name: 'yqc',age: 21}
    ],
    counter:0
  },
  btnAdd(){
    // this.data.counter+=1,wrong小程序不会自动刷新
    this.setData({
      counter:this.data.counter +1
    })
  },
  btnSub(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})