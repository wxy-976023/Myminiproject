// pages/home/home.js
import {getMultiData,getGoodsData} from '../../service/home.js'
const MAXSCROLL = 1000
const types = ['pop','new','sell']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    controls:['流行','新款','精选'],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    showBack:false,
    istabFixed:false,
    tabScrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultiData(),
    this._getGoodsData('pop'),
    this._getGoodsData('new'),
    this._getGoodsData('sell')
  },
  _getMultiData(){
    getMultiData().then(res=>{
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type){
    const page=this.data.goods[type].page+1;
    getGoodsData(type,page).then(res=>{
      const list = res.data.data.list;
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey] : oldList,
        [pageKey]: page
      })
    })
  },
  handleItem(event){
    // console.log("点击了",event.detail.index,event.detail.item)
    const index = event.detail.index;
    this.setData({
      currentType:types[index]
    })
  },
  onReachBottom(){
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(options){
    const pagescroll = options.scrollTop;
    const flag = pagescroll >= MAXSCROLL;
    if(flag != this.data.showBack){
      this.setData({
        showBack: flag
      })
    }
    const flag2 = pagescroll > this.data.tabScrollTop;
    if(flag2 != this.data.istabFixed){
      this.setData({
        istabFixed:flag2
      })
    }
  },
  imageAload(){
    wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect=>{
      this.data.tabScrollTop = rect.top
    }).exec()
  }
})