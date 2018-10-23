// pages/service/serviceDetail.js
import service from "../../utils/service";
import utils from "../../utils/utils";

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(options);
      let id = options.id;
      service.getServiceById(id,res=>{
        // console.log(res);

        res.data.created_at = utils.formatTime(res.data.created_at,"Y年M月D日 h:i:s");
        
        wx.setNavigationBarTitle({
          title: res.data.title
        })

        this.setData({
           service:res.data
        })

      });

  },

  onShareAppMessage: function () {

  }
})