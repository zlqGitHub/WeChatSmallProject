// pages/startGroup/startGroup.js
Page({

  data: {
    groupType:['骑行','轮滑','球类','探险','其他'],
    activeCategory:'骑行',   //当前激活的分类
    address:'',     //集合地点
    peopleNum: [2, 3, 4, 5, 6, 7],   //拼团人数选择
    peopleIndex: 0,    //拼团人数对应数组的索引
    date:'2018-01-01',    //集合日期
    time:'00:00',       //集合时间
    headerImg:'',       //获取用户头像路径
    nickName:'',     //获取用户昵称
    imgUrls:[
      '../../resource/images/0.jpg',
      '../../resource/images/1.jpg',
      '../../resource/images/2.jpg',
      '../../resource/images/3.jpg',
      '../../resource/images/4.jpg'
    ],
    index:0,    //拼团项目对应图片的索引
  },  

  //点击拼团分类激活事件
  categoryChange:function(res){
    // console.log(res);
    this.setData({
      activeCategory:res.currentTarget.dataset.cate,
      index: res.currentTarget.dataset.index
    });
  },

  //选择拼团人数
  bindPickerChange:function(e){
    console.log(e.detail.value);
    this.setData({
      peopleIndex:e.detail.value
    });
  },

  //日期选择
  bindDateChange:function(e){
    console.log(e);
    this.setData({
      date:e.detail.value
    });
  },

  //时间选择
  bindTimeChange:function(e){
    console.log(e);
    this.setData({
      time: e.detail.value
    });
  },

  //页面加载时获取用户的信息
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        // console.log(res.data);
        that.setData({
          headerImg: res.data.avatarUrl,
          nickName:res.data.nickName
        });
      },
    })
  
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

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '用行动证明自己就好，加油 ！',
      path: '/page/index/index',
      imageUrl: '../../resource/images/4.jpg'
    }
  }
})