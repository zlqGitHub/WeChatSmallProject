// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:38.011350,
    longitude:112.442990,
    scale:15,
    markers:[
      {
        id:0,
        latitude: 38.011350,
        longitude: 112.442990,
        title:'中北大学',
        iconPath: '../../resources/images/school.png',
        label: 
          {
            content: '中北大学',
            color: '#D81E06',
            bgColor:'#00B26A',
            padding:5,
          }
      },
      {
        id: 1,
        latitude: 38.015500,
        longitude: 112.447560,
        title: '中北大学-图书馆',
        iconPath: '../../resources/images/library(1).png',
        label:
          {
            content: '中北大学-图书馆',
            color:'#D81E06',
            bgColor: '#00B26A',
            padding:5
          }
        

      }
     
    ]

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})