// pages/index/index.js
let app = getApp();
Page({

  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000

  },

  onLoad: function (options) {
    let imgUrls = app.globalData.imgUrls;
    this.setData({
      imgUrls
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

  onShareAppMessage: function () {

  }
})