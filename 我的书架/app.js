//app.js
App({
  onLaunch: function() {
    let that = this

    // 引入 BaaS SDK
    require('./utils/sdk-v1.4.0')


    let clientId = this.globalData.clientId

    wx.BaaS.init(clientId)
  },

  globalData: {   //设置全局变量
    clientId: 'ff94b0c26adcd8e7363f', // 从 BaaS 后台获取 ClientID
    tableId: 47072, // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  }
})
