// pages/nearbyGroup/nearbyGroup.js
let app = getApp();
Page({

  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    color:'#FF7835',
    currentIndex:'0',
    groupType: ['骑行', '轮滑', '球类', '探险', '其他'],
    headerImg:'',    //用户头像
    nickName:'',    //用户名称
    screenHeight:'',   //手机屏幕大小
    groups:[
      [
        {
          headerImg: '../../resource/images/headerImg.jpg',
          nickName: '张利强',
          time: '2018-08-20  08:00',
          address: '山西太原中北大学',
          peopleNum: 5,
          detail: '华北工学院，简称华工（NCIT），创建于1941年，位于山西太原，2004年更名中北大学。中北大学原是国防科工委直属本科院校，现是一所省部共建大学、教学研究型大学、综合...'
        }, {
          headerImg: '../../resource/images/headerImg.jpg',
          nickName: '张利强',
          time: '2018-08-20  08:00',
          address: '山西太原中北大学',
          peopleNum: 5,
          detail: '华北工学院，简称华工（NCIT），创建于1941年，位于山西太原，2004年更名中北大学。中北大学原是国防科工委直属本科院校，现是一所省部共建大学、教学研究型大学、综合...'
        },
        {
          headerImg: '../../resource/images/headerImg.jpg',
          nickName: '张利强',
          time: '2018-08-20  08:00',
          address: '山西太原中北大学',
          peopleNum: 5,
          detail: '华北工学院，简称华工（NCIT），创建于1941年，位于山西太原，2004年更名中北大学。中北大学原是国防科工委直属本科院校，现是一所省部共建大学、教学研究型大学、综合...'
        }
      ],
      [
        {
          headerImg: '../../resource/images/headerImg.jpg',
          nickName: '张三',
          time: '2018-08-20  08:00',
          address: '山西太原理工大学',
          peopleNum: 3,
          detail: '太原理工大学是一所以工科为主，理工结合，多学科协调发展的高等学府，是中国山西省唯一一所国家“211工程”重点建设大学。 学校前身是创立于1902年的国立山西大学堂西学...'
        }
      ],
      [
        {
          headerImg: '../../resource/images/headerImg.jpg',
          nickName: '李四',
          time: '2018-08-20  08:00',
          address: '山西大学',
          peopleNum: 7,
          detail: '山西大学是经国务院批准，直属于山西省人民政府的一所综合性大学，是国家“中西部高校基础能力建设工程”重点建设的100所左右高校之一，“中西部高校综合实力提升工程”...'
        }
      ],
      [
        {
          headerImg: '../../resource/images/headerImg.jpg',
          nickName: '王五',
          time: '2018-08-20  08:00',
          address: '山西博物馆',
          peopleNum: 5,
          detail: '山西博物院的基本陈列以“晋魂”为主题，由文明摇篮、夏商踪迹、晋国霸业、民族熔炉、佛风遗韵、戏曲故乡、明清晋商等7个历史文化专题和土木华章、山川精英、翰墨丹青、...'
        }
      ],
      [
        {
          headerImg: '../../resource/images/headerImg.jpg',
          nickName: '赵六',
          time: '2018-08-20  08:00',
          address: '北京天安门',
          peopleNum: 3,
          detail: '天安门，坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地...'
        }
      ]
    ]
  },

  //选择趣味团项目
  chooseGroup:function(e){
    // console.log(e);
    let currentIndex = e.currentTarget.dataset.index;
    this.setData({
      currentIndex
    });
  },

 //点击加入触发事件
  addGroup:function(e){
    if (e.detail.errMsg == "getUserInfo:ok") {
      wx.navigateTo({
        url: '../addGroup/addGroup',
      })
      wx.setStorage({
        key: 'userInfo',
        data: e.detail.userInfo,
      })
    }
    else {
      wx.showModal({
        title: '友情提示',
        content: '未授权,加入失败！',
      })
    }

  },
  // 页面加载时获取相应的数据
  onLoad: function (options) {
    var that = this;
    let imgUrls = app.globalData.imgUrls;
    that.setData({
      imgUrls
    });
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        that.setData({
          screenHeight: res.screenHeight
        });
      },
    })
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '用行动证明自己就好，加油 ！',
      // path: '/page/index/index',
      imageUrl:'../../resource/images/4.jpg'
    }
  }
  
})