// pages/map2/map2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 38.011350,
    longitude: 112.442990,
    scale: 16,
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'mineInfo',
      success: function(e) {
        // console.log(e.data);
        let { nickName , avatarUrl} = e.data;
        wx.downloadFile({
          url: avatarUrl,
          success: function (res) {
            // console.log(res);
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          if (res.statusCode === 200) {

          that.setData({
            markers: [
              {
                id: 0,
                latitude: 38.011350,
                longitude: 112.442990,
                title: nickName,
                iconPath: res.tempFilePath,
                width:40,
                height:40,
                label:
                  {
                    content: '中北大学',
                    color: '#D81E06',
                    bgColor: '#00B26A',
                    padding: 5,
                    anchorX: 1000,
                    anchorY: 1000
                  }
              }

            ]
        });
          }
        }

        })  

      },
      
    })
  
  },


})