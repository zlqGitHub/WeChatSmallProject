// pages/cBuildDetails/cBuildDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["一层","二层","三层","四层","五层","六层","七层"],
    "index":0,

    "name": "主楼",  //教学楼名称
    "floorNum":6,     //层数
    "space":2000,   //教学楼所能容纳的总人数
    "crowdedDegree":500,     //拥挤程度
    "cBuild":[
      {
        "num":6,    //教学楼教室数量
        "floor": "1",  //楼层
        "no":11208,
        "totalNum":290,   //教室总共空位置
        "nowNum":86,   //当前人数
        "noCourseTime":"8:00-12:00 15:40-17:50",
      },
      {
        "num": 6,    //教学楼教室数量
        "floor": "1",  //楼层
        "no": 11209,
        "totalNum": 290,   //教室总共空位置
        "nowNum": 130,   //当前人数
        "noCourseTime": "15:40-21:35",
      }
    ],

    groups: [
        {
          headerImg: '../../resource/images/headerImg.jpg',
          nickName: '张利强',
          time: '2018-08-20  08:00',
          address: '山西太原中北大学',
          peopleNum: 5,
          detail: '华北工学院，简称华工（NCIT），创建于1941年，位于山西太原，2004年更名中北大学。中北大学原是国防科工委直属本科院校，现是一所省部共建大学、教学研究型大学、综合...'
        }
      ]

  },

//点击下拉框选择楼层
  bindPickerChange(e) {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

//点击查看更多
  navBtn:function(e){
    console.log(e);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.name);   //接收传过来的教学楼名称
    let name = options.name;
    this.setData({    
      name,
    });
    //通过name对当前楼的教室进行查询
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