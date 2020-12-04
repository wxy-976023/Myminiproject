// components/my-mslots/my-mslots.js
Component({
  //-------定义传入的属性-------
  properties:{
    title:{
      type:String,
      value:""
    }
  },
  //--------定义内部属性--------
  data: {
    counter:0
  },
  //------------定义方法----------
  methods: {
    foo(){

    }
  },
  //---------额外配置选项---------
  //multipleSlots:true定义多插槽
  // styleIsolation定义样式隔离
  options:{
    multipleSlots:true,
  },
  //--------引入外部样式-------
  externalClasses: [],
  //---------监听prop/data属性改变--------
  observers: {
    counter:function(newVal){
      console.log(newVal)
    }
  },
  //---------监听组件所在页面生命周期--------
  pageLifetimes: {
    show(){
      console.log("监听组件所在页面显示时")
    },
    hide(){
      console.log("监听组件所在页面隐藏时")
    },
    resize(){
      console.log("监听组件所在页面尺寸改变时")
    }
  },
  //---------监听组件生命周期--------
  lifetimes: {
    created(){
      console.log("组件被创建")
    },
    attached(){
      console.log("组件被添加到页面")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移动到另一个节点")
    },
    detached(){
      console.log("组件被移除")
    }
  }
})
