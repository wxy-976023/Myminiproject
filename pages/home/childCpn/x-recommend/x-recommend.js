// pages/home/childCpn/x-recommend/x-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgAlload:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageload(){
      if(!this.data.imgAlload){
        this.triggerEvent('imageAload',{},{})
        this.data.imgAlload = true
      }
    }
  }
})
