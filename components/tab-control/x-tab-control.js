// components/tab-control/x-tab-control.js
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
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      const index = event.currentTarget.dataset.index;
      const item =  event.currentTarget.dataset.item;
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('handleItem',{index,item},{})
    }
  }
})
