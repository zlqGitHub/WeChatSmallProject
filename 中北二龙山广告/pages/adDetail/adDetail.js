// pages/adDetail/adDetail.js
import util from '../../utils/util';
const wxParser = require('../../wxParser/index');
Page({
  data: {
    indicatorDots: true,
    indicatorActiveColor: "#FFF",
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    showTop: true,  //回到顶部按钮显示与隐藏
  },

  //点击广告编号可以复制编号
  copyBtn: function (e) {
    // console.log(e.currentTarget.dataset.adnum);    //广告编号
    wx.setClipboardData({
      data: e.currentTarget.dataset.adnum,
    })
  },

  //页面滚动时触发
  onPageScroll: function (e) {
    // console.log(e.scrollTop);   //当前页面的高度
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
      duration: 0
    })
  },
  onLoad: function (e) {
    // console.log(e);
    this.setData({
      id:e.id,
      title:e.title,
      des:e.des,
      imgs:e.imgs.split(","),
      contentID:e.contentID,
      tip:e.tip
    });
    let html;
    let that = this;
    util.searchContent(this.data.contentID,res => {
      // console.log(res.data.content);
      html = res.data.content;
      wxParser.parse({
        bind: 'richText',
        html: html,
        target: that,
        enablePreviewImage: false, // 禁用图片预览功能
      })
      this.setData({
        content: html    //设置简介内容
      });
    });
  },

  onShareAppMessage: function () {

  }
})