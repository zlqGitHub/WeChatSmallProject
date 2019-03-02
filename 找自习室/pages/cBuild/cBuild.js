// pages/cBuild/cBuild.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "latitude":0,
    "longitude":0,
    "cBuilds": [
      {
        "img": "../../resources/school/11.png",
        "name": "慧学楼",
        "no": "1号楼-",
        "num": '11',
        "longitude": "112.442990",     //经度
        "latitude": "38.011350"      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "工字楼",
        "no": "2号楼-",
        "num": '2',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "诚学楼",
        "no": "3号楼-",
        "num": '3',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "酬学楼",
        "no": "4号楼-",
        "num": '4',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "明学楼",
        "no": "5号楼-",
        "num": '5',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "智学楼",
        "no": "6号楼-",
        "num": '6',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img":"../../resources/school/11.png",
        "name":"德怀楼",
        "no": "7号楼-",
        "num": '7',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img":"../../resources/school/11.png",
        "name":"勤学楼",
        "no": "8号楼-",
        "num": '8',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "实验大楼",
        "no": "9号楼-",
        "num": '9',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "敏学楼",
        "no": "10号楼-",
        "num": '10',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "主楼",
        "no": "11号楼-",
        "num": '29',
        "": "",      //经度
        "": ""       //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "鸿学楼",
        "no": "12号楼-",
        "num": '12',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "教学楼",
        "no": "13号楼-",
        "num": '13',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "教学楼",
        "no": "14号楼-",
        "num": '14',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "逸夫楼",
        "no": "15号楼-",
        "num": '15',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "教学楼",
        "no": "16号楼-",
        "num": '16',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "瑞学楼",
        "no": "",
        "num": '17',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "思学楼",
        "no": "",
        "num": '18',
        "": "",     //经度
        "": ""      //纬度
      },
      {
        "img": "../../resources/school/11.png",
        "name": "笃学楼",
        "no": "",
        "num": '19',
        "": "",     //经度
        "": ""      //纬度
      }
    ]
  },
  //点击导航按钮进行导航
  navBtn: function (e) {
    // console.log(e.currentTarget.dataset.latitude);   //纬度
    // console.log(e.currentTarget.dataset.longitude);   //经度
    // console.log(e.currentTarget.dataset.name);   //教学楼名称
    let longitude = e.currentTarget.dataset.longitude;
    let latitude = e.currentTarget.dataset.latitude;
    let name = e.currentTarget.dataset.name;
    //通过经纬度打开手机地图进行导航
    wx.openLocation({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      name: name,
      scale: 18
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})