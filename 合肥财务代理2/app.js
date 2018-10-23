//app.js
App({
  onLaunch() {
    // require SDK
    require('./utils/sdk-v1.5.0')
    
    //初始化SDK
    wx.BaaS.init('5cde7708ba40ba7e149c')
  }
})