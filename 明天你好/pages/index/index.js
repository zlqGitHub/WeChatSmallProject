//index.js
var util = require('../../utils/util.js');
Page({
  data: {
    weather: {},
    today: '2016-11-18',
    city: '北京',    //城市名称
    inputCity: '', //输入查询的城市名称
  },
  onLoad: function (options) {
    this.setData({
      today: util.formatTime(new Date()).split(' ')[0]  //更新当前日期
    });
    var self = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=ASAT5N3tnHIa4APW0SNPeXN5&location=' +
            res.latitude + ',' + res.longitude + '&output=json&pois=0',
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            console.log(res)
            var city = res.data.result.addressComponent.city.replace('市', '');  //城市名称
            self.searchWeather(city);
          },
          fail:function(res){
            console.log(res);
          }
        })
      }
    })
  },
  //根据城市名称查询天气预报信息
  searchWeather: function (cityName) {
    var self = this;
    wx.request({
      url: 'https://wthrcdn.etouch.cn/weather_mini?city=' + cityName,//天气预报查询接口
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.status == 1002) //无此城市
        {
          //显示错误信息
          wx.showModal({
            title: '提示',
            content: '输入的城市名称有误，请重新输入！',
            showCancel: false,
            success: function (res) {
              self.setData({ inputCity: '' });
            }
          })
        } else {
          var weather = res.data.data;  //获取天气数据

          for (var i = 0; i < weather.forecast.length; i++) {
            var d = weather.forecast[i].date;
            weather.forecast[i].date = '　' + d.replace('星期', '　星期'); //处理日期信息，添加空格
          }
          self.setData({
            city: cityName,    //更新显示城市名称
            weather: weather,  //更新天气信息
            inputCity: ''      //清空查询输入框
          })
        }
      }
    })
  },
  //输入事件
  inputing: function (e) {
    this.setData({ inputCity: e.detail.value });
  },
  //搜索按钮
  bindSearch: function () {
    this.searchWeather(this.data.inputCity);
  }
})
