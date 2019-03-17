// pages/adIndex/adIndex.js
import util from '../../utils/util';
var app = getApp();
Page({
  data: {
    types: ['今日推荐', '商家广告','测试'],
    todayShow: [],     //今日推荐
    activeCategory: '今日推荐',   //当前类型
    showTop: true,  //回到顶部按钮显示与隐藏
    ads: [],    //所有广告信息
    nowShow:[],    //当前显示信息
  },

  //点击详情按钮
  detailBtn: function(e){
    console.log(e);
    console.log("a");
  },

  //页面滚动时触发
  onPageScroll: function (e) {
    //console.log(e.scrollTop);   //当前页面的高度
    if (e.scrollTop >= 120) {
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
      duration: 0
    })
  },

  //切换分类事件
  categoryChange: function (e) {
    this.goTop();
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
    else if (type == '今日推荐') {   //今日推荐在库中是Boolean类型
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
        //与当前时间戳比较，小于说明需要下架，将其删掉
        if (Date.parse(ads[i].outTime) - time < 0) {    
          util.deleteAd(ads[i].id);
          continue;
        }
        //未下架处理：用来提示用户该广告状态，并将其加入到result中
        if (Date.parse(ads[i].outTime) - time < 86400000) {     
          ads[i].tip = '即将下架';
          result.push(ads[i]);
        }
        else {
          ads[i].tip = '显示正常';
          result.push(ads[i]);
        }

        //更新今日推荐
        if (ads[i].isShow == true && ads[i].isRec == true) {   //未下架并且属于今日推荐
          todayShow.push(ads[i]);
        }
      }
      // console.log(result);
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