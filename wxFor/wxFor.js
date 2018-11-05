// pages/wxFor/wxFor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    world:["亚洲","欧洲","非洲","南美洲","大洋洲"],
    oneList:[
      {
        id:1,
        name:"军哥",
        age:18
      },
      {
        id: 2,
        name: "张三",
        age:28
      },
      {
        id: 3,
        name: "李四",
        age:38
      }
    ],

    twoList: [
      {
        id: 1,
        name: "军哥",
        age: 18,
        like:["吃饭","睡觉","打豆豆"]
      },
      {
        id: 2,
        name: "张三",
        age: 28,
        like: ["泡妞"]
      },
      {
        id: 3,
        name: "李四",
        age: 38,
        like:["敲代码"]
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