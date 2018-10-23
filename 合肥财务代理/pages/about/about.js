// pages/about/about.js
const wxParser = require('../../wxParser/index');
Page({
  data: {
    company:''
  },

  onLoad: function () {
    var tableID = 46923;
    let that = this;
    let recordID = '5b6952a3539c760f41f9f2bf';

    let Company = new wx.BaaS.TableObject(tableID);

    Company.get(recordID).then(res => {
      // success
      // console.log(res);
      let html = res.data.jianjie;
      wxParser.parse({
        bind: 'jianjie',
        html: html,
        target: that,
        enablePreviewImage: false,
        tapLink: (url) => { 
          wx.navigateTo({
            url
          })
        }
      });
      that.setData({
        company: res.data
      });
    },
    err => {
           
      })

    },

  imgTap:function(e){
    console.log(e);
    var urls = e.currentTarget.dataset.urls;
    var current = e.currentTarget.dataset.current;
    wx.previewImage({
      current,
      urls
    })
  }

})