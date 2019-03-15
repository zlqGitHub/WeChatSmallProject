// pages/adIndex/adIndex.js
var app = getApp();
Page({
  data: {
    types: ['今日推荐', '商家广告', '校园代理', '社团活动', '周边活动','我的关注'],
    activeCategory: '今日推荐',   //当前类型
    showTop: true,  //回到顶部按钮显示与隐藏
    ads: [
      {
        id:0,
        type:'今日推荐',
        title: "广告推广",
        imgs: [
          'https://c.vpimg1.com/upcb/2019/03/04/74/ias_155167624553256_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/03/08/153/ias_155203728499115_570x273_90.jpg',
          'https://c.vpimg1.com/upcb/2019/02/21/0/ias_155071561368648_570x273_90.jpg ',
        ],
        content: '即日起中北二龙山广告推广正式上线'
      },
      {
        id: 1,
        type: '今日推荐',
        title: "广告推广",
        imgs: [
          'https://d.vpimg1.com/upcb/2019/02/26/149/ias_155116188123371_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/03/11/27/ias_155229129655628_570x273_90.jpg',
          'https://c.vpimg1.com/upcb/2019/02/21/0/ias_155071561368648_570x273_90.jpg ',
        ],
        content: '即日起中北二龙山广告推广正式上线'
      },
      {
        id: 2,
        type: "今日推荐",
        title: "二龙山生态广告推广",
        imgs: [
          'https://c.vpimg1.com/upcb/2019/03/04/74/ias_155167624553256_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/03/08/153/ias_155203728499115_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/01/22/150/ias_154814691837658_570x273_90.jpg',
        ],
        content: '即日起中北二龙山广告推广正式上线'
      },
      {
        id: 3,
        type:'商家广告',
        title: "生命不息学习不止",
        imgs: [
          'https://c.vpimg1.com/upcb/2019/03/04/12/ias_155168153716034_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/03/06/91/ias_155183554230971_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/01/22/150/ias_154814691837658_570x273_90.jpg',
        ],
        content: '即日起中北二龙山广告推广正式上线'
      },
      {
        id: 4,
        type: "校园代理",
        title: "二龙山生态广告推广",
        imgs: [
          'https://c.vpimg1.com/upcb/2019/03/04/74/ias_155167624553256_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/03/08/153/ias_155203728499115_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/01/22/150/ias_154814691837658_570x273_90.jpg',
        ],
        content: '即日起中北二龙山广告推广正式上线'
      },
      {
        type: '生活',
        title: "生命不息学习不止",
        imgs: [
          'https://c.vpimg1.com/upcb/2019/03/04/12/ias_155168153716034_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/03/06/91/ias_155183554230971_570x273_90.jpg',
          'https://d.vpimg1.com/upcb/2019/01/22/150/ias_154814691837658_570x273_90.jpg',
        ],
        content: '即日起中北二龙山广告推广正式上线'
      }

    ],
    nowShow:[],    //当前显示信息
  },

  //页面滚动时触发
  onPageScroll: function (e) {
    //console.log(e.scrollTop);   //当前页面的高度
    if (e.scrollTop >= 420) {
      this.setData({
        showTop: false
      });
    }
    else {
      this.setData({
        showTop: true
      });
    }
  },

  //点击回到顶部按钮
  goTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  //切换分类事件
  categoryChange: function (e) {
    // console.log(e.currentTarget.dataset);
    let activeCategory = e.currentTarget.dataset.type;   //当前选中的类型
    // 更新当前激活类型
    this.setData({
      activeCategory
    })
    //通过所选类型进行更新显示内容
    this.getNowShow(activeCategory);

  },

  //切换事件分类对应的内容信息
  getNowShow: function(type){
    if(type == '我的关注'){
      this.setData({
        nowShow: app.globalData.myAttention
      });
    }
    else{
      let nowShow = [];
      //显示默认的类型
      this.data.ads.forEach((item, index) => {
        if (item.type == type) {
          nowShow.push(item);
        }
      });
      //更新nowShow
      this.setData({
        nowShow
      });
    }
  },
  
  onLoad: function (options) {
    // console.log(this.data.ads);
    let activeCategory = this.data.activeCategory;
    this.getNowShow(activeCategory);
  },

  onShareAppMessage: function () {

  }
})