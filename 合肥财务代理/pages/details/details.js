// pages/details/details.js
import service from "../../util/service";
import config from "../../util/config";
Page({


  data: {
    objectInfo:''
  },

  onLoad:function(options){
    // console.log(options);
    // console.log(options.id);
    service.getServiceById(options.tableID,options.id,(res)=>{
      // console.log(res);
      this.setData({
        objectInfo:res.data
      });
    });

  }

})