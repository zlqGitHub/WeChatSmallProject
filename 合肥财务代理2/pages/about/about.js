// pages/about/about.js
const wxParser = require('../../utils/wxParser/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tableID = 46849;
    let recordID = '5b69105ae5f7355a93fac8e3' //记录Id

    let Company = new wx.BaaS.TableObject(tableID)

    Company.get(recordID).then(res => {
       // success
       console.log(res.data);
       let html = res.data.intro;
       wxParser.parse({
            bind:"intro",
            html: html,
            target: this,
            enablePreviewImage: false,
            tapLink:function(url){
              wx.switchTab({
                url
              });
            }
      });

       this.setData({
         company: res.data
       })

    }, err => {
      // err
    })
  },

  //预览公司资质
  previewImage:function(e){
      console.log(e);
      let urls = e.currentTarget.dataset.urls;
      let current = e.currentTarget.dataset.current;
      wx.previewImage({
        current,
        urls     // 需要预览的图片https链接列表
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  onShareAppMessage: function () {

  }
  
})