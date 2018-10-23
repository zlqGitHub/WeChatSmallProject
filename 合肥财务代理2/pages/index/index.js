import service from "../../utils/service";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    serviceInfo:null,
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    //所有图片的高度  
    imgheights: [],
    //图片宽度  
    imgwidth: 750,
    current:0
  },

  imageLoad: function (e) {
    //获取图片真实宽度  
    var imgwidth = e.detail.width,

    imgheight = e.detail.height,
    //宽高比  
    ratio = imgwidth / imgheight;
    
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight
    var imgheights = this.data.imgheights
    //把每一张图片的高度记录到数组里  
    imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
    })
  },

  onLoad(options) {

    //查询广告表的数据

    // 1、通过 tableID 实例化一个 adTable 对象，操作该对象即相当于操作对应的数据表
    let tableID = 46842;
    let adTable = new wx.BaaS.TableObject(tableID);

    //2、示例化一个 Query 对象，在该对象上添加查询条件
    let query = new wx.BaaS.Query()

    //3.支持查询条件并执行查找操作
    query.compare('isShow', '=', 1);

    adTable.setQuery(query).orderBy('sort').find().then(res => {
      // success
      console.log(res.data.objects)

      this.setData({
        imgUrls: res.data.objects
      })

      //服务项目
      service.getServices(res => {
        console.log(res)

        this.setData({
          serviceInfo: res.data.objects
        })
      },5);

    }, err => {
      // err

    })

    var serviceInfo = [
      {
          "id":1,
          "cover":"../../resource/images/1.jpg",
          "title":"公司注册",
          "description":"公司注册是开始创业的第一步。一般来说，公司注册的流程包括：企业核名→提交材料→领取执照→刻章，就可以完成公司注册，进行开业了。"
      },
      {
        "id": 2,
        "cover": "../../resource/images/4.jpg",
        "title": "代理记账",
        "description": "代理记账是指将本企业的会计核算、记账、报税等一系列的工作全部委托给专业记账公司完成，本企业只设立出纳人员，负责日常货币收支业务和财产保管等工作。"
      }
    ];

    this.setData({
        serviceInfo
    })
  },

  goToServiceList() {
    wx.switchTab({
      url: '/pages/service/serviceList'
    })
  },

  goToAbout() {
    wx.switchTab({
      url: '/pages/about/about'
    })
  },

  onShareAppMessage	:function(){

  }
})