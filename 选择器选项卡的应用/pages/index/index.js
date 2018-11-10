// pages/index/index.js
let app = getApp();
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabs: ["教练", "本地向导", "趣味团"],
    activeIndex: 2,
    sliderOffset: 0,
    sliderLeft: 0
  },

  //发起拼团
  startGroup:function(e){
    // console.log(e);
    if (e.detail.errMsg == "getUserInfo:ok"){
      wx.navigateTo({
        url: '../startGroup/startGroup',
      })
      wx.setStorage({
        key: 'userInfo',
        data: e.detail.userInfo,
      })
    }
    else{
      wx.showModal({
        title: '友情提示',
        content: '发起拼团失败！',
      })
    }
    
  },

  //附近的团
  nearbyGroup:function(){
    wx.navigateTo({
      url: '../nearbyGroup/nearbyGroup',
    })
  },

  // 点击导航按钮触发事件
  navigation:function(e){
    // console.log(e);
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      },
      fail:function(res){
        console.log(res);
      }
    })
  },

  onLoad: function (options) {
    
    var that = this;
    let imgUrls = app.globalData.imgUrls;
    that.setData({
      imgUrls
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  
  },
  tabClick: function (e) {
    console.log(e);
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  onReady: function () {
  
  },


  onShow: function () {
  
  },

  
  onPullDownRefresh: function () {
  
  },

 
  onReachBottom: function () {
  
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '用行动证明自己就好，加油 ！',
      path: '/page/index/index',
      imageUrl: '../../resource/images/4.jpg'
    }
  }
})