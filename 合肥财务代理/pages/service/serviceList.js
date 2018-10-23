// pages/service/serviceList.js
import service from "../../utils/service";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      serviceInfo: null
  },

  onLoad(options) {

      service.getServices( res =>{
          console.log(res)

          this.setData({
            serviceInfo:res.data.objects
          })
      });

      



  },

  onShareAppMessage: function () {

  }
})