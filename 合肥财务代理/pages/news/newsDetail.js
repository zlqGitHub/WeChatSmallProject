// pages/news/newsDetail.js
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
    var data = {
      "title": "致纳税人的一封信",
      "description": "改革期间，涉及纳税人的事宜将通过全省国税系统办税服务厅、安徽省国家税务局网站、“安徽国税”微信公众号等宣传平台发布，请您密切关注。您也可以向主管税务机关或拨打安徽省国税系统对外公开电话进行咨询，我们将竭诚为您服务。",
      "created": "2018-07-15 14:30:00"
    };
    this.setData({
      title: data.title,
      description: data.description,
      created: data.created
    })    
  },

  onShareAppMessage: function () {

  }
})