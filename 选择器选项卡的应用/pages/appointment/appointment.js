// pages/appointment/appointment.js
Page({

  data: {
    headerImg: '',       //获取用户头像路径
    nickName: '',     //获取用户昵称
  },

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

 
})