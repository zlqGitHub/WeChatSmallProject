// pages/adIndex/adIndex.js
import util from '../../utils/util';
var app = getApp();
Page({
  data: {
    types: ['今日推荐', '商家广告','我的关注'],
    todayShow: [],
    activeCategory: '今日推荐',   //当前类型
    showTop: true,  //回到顶部按钮显示与隐藏
    ads: [],    //所有广告信息
    nowShow:[],    //当前显示信息
  },

  //点击广告编号可以复制编号
  copyBtn: function (e) {
    // console.log(e.currentTarget.dataset.adnum);    //广告编号
    wx.setClipboardData({
      data: e.currentTarget.dataset.adnum,
    })
  },

  //点击详情按钮
  detailBtn: function(e){
    console.log(e);
    console.log("a");
  },

  //页面滚动时触发
  onPageScroll: function (e) {
    //console.log(e.scrollTop);   //当前页面的高度
    if (e.scrollTop >= 420) {
      this.setData({
        showTop: false
      });
    }
    else {
      this.setData({
        showTop: true
      });
    }
  },

  //点击回到顶部按钮
  goTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  //切换分类事件
  categoryChange: function (e) {
    // console.log(e.currentTarget.dataset);
    let activeCategory = e.currentTarget.dataset.type;   //当前选中的类型
    // 更新当前激活类型
    this.setData({
      activeCategory
    })
    //通过所选类型进行更新显示内容
    this.getNowShow(activeCategory);

  },

  //切换事件分类对应的内容信息
  getNowShow: function(type){
    if(type == '我的关注'){
      this.setData({
        nowShow: app.globalData.myAttention
      });
    }
    else if (type == '今日推荐'){
      this.setData({
        nowShow:this.data.todayShow
      });
    }
    else{
      let nowShow = [];
      //显示默认的类型
      this.data.ads.forEach((item, index) => {
        if (item.type == type) {
          nowShow.push(item);
        }
      });
      //更新nowShow
      this.setData({
        nowShow
      });
    }
  },
  
  onLoad: function (options) {
    // console.log(this.data.ads);
    var time = Date.parse(new Date());    //获取当前的时间戳，便于广告自动下架删除
    let result = [];     //所有数据
    let todayShow = [];   //当前显示
    util.searchInfo(res => {
      console.log(res.data.objects);
      let ads = res.data.objects;
      for (var i = 0; i < ads.length ; i++){
        // console.log(Date.parse(ads[i].outTime));     //当前广告下架的时间戳
        if (Date.parse(ads[i].outTime) < time) {    //与当前时间戳比较，小于说明需要下架，将其删掉
          util.deleteAd('5c8cf64f77a61e799a80ef34');
          continue;
        }
        if (ads[i].isShow == true) {     //判断是否下架
          result.push(ads[i]);
        }
        //更新今日推荐
        if (ads[i].isShow == true && ads[i].isRec == true) {   //未下架并且属于今日推荐
          todayShow.push(ads[i]);
        }
      }
      //更新ads数组
      this.setData({
        ads: result,
        nowShow: todayShow,
        todayShow
      });
      // console.log(this.data.ads);
    });
    
  },

  onShareAppMessage: function () {

  }
})