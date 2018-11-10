// pages/addGroup/addGroup.js
Page({

  data: {
    headerImg: '',       //获取用户头像路径
    nickName: '',     //获取用户昵称
    number:188        //成交量
  },

  //点击预约按钮触发事件
  appointment:function(){
    wx.navigateTo({
      url: '../appointment/appointment',
    })
  },

  //客服
  contactTab:function(res){
    // console.log(res);
  },

  //加载时获取用户头像
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          headerImg: res.data.avatarUrl,
          nickName: res.data.nickName
        });
      },
    })
  },


  onPullDownRefresh: function () {

  },



})