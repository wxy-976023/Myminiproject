// pages/home/home.js
Page({
  data: {
    cloth:['衣服','裤子','鞋子']
  },
  handleStart(){
    console.log("handleStart")
  },
  handleMove(){
    console.log("handleMove")
  },
  handleEnd(){
    console.log("handleEnd")
  },
  handlePress(){
    console.log("handlePress")
  },
  handleTap(){
    console.log("handleTap")
  },
  handleEvent(event){
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const item = dataset.item;
    console.log(index,item);
  },
  handleCapture1(){
    console.log("handleCapture1")
  },
  handleTap1(){
    console.log("handleTap1")
  },
  handleCapture2(){
    console.log("handleCapture2")
  },
  handleTap2(){
    console.log("handleTap2")
  },
  handleCapture3(){
    console.log("handleCapture3")
  },
  handleTap3(){
    console.log("handleTap3")
  },
})