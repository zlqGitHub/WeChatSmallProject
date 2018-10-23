// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsInfo: null
  },

  onLoad(options) {

    var newsInfo = [
      {
        "id": 1,
        "cover": "../../resource/images/1.jpg",
        "title": "致纳税人的一封信",
        "description": "开票软件升级"
      },
      {
        "id": 2,
        "cover": "../../resource/images/1.jpg",
        "title": "致纳税人的一封信",
        "description": "开票软件升级"
      },
      {
        "id": 3,
        "cover": "../../resource/images/1.jpg",
        "title": "致纳税人的一封信",
        "description": "开票软件升级"
      }
    ];

    this.setData({
      newsInfo
    })
  },

  onShareAppMessage: function () {

  }
})