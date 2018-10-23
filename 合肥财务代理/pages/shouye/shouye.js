import service from "../../util/service";
import config from "../../util/config";
Page({
  data: {
    imgUrls: [],
    servicesObjects:[],
    companyInfo:'',
    tableID: 46985
  },
  
  onLoad:function(){
    var tableID = 46889;
    let oTableID = new wx.BaaS.TableObject(tableID);
    let query = new wx.BaaS.Query();
    oTableID.setQuery(query).find().then(res => {
      // success
      // console.log(res.data.objects);
      var imgUrls = res.data.objects;
      this.setData({
        imgUrls
      });
    }, err => {
      // err
      console.log("失败！");
    })

    service.getObjectsInfo(config.serviceTable,(res) => {
      // console.log(res.data);
      this.setData({
        servicesObjects:res.data.objects
      });
    },2)

    service.getObjectsInfo(config.companyTable, (res) => {
      // console.log(res.data);
      this.setData({
        companyInfo:res.data.objects[0]
      });
    }, 2)

  }

})