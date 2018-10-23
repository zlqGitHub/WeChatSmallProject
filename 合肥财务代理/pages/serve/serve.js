// pages/serve/serve.js
import service from "../../util/service";
import config from "../../util/config";
Page({


  data: {
    servicesObjects: []
  },


  onLoad: function (options) {

    service.getObjectsInfo(config.serviceTable, (res) => {
      // console.log(res.data);
      this.setData({
        servicesObjects: res.data.objects
      });
    }, 10000)
  },
})