// pages/adDetail/adDetail.js
Page({
  data: {
    indicatorDots: true,
    indicatorActiveColor: "#FFF",
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
  },

  onLoad: function (e) {
    console.log(e);
    this.setData({
      imgs:e.imgs.split(","),
      
    });
  },

  onShareAppMessage: function () {

  }
})