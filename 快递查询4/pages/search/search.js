// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    writeInfo:'',
    selectNo:'sf',
    logisticsInfo:'',
    comName:'顺丰',
    comNo:'sf',
    result2:[]
  //   result: [
  //     {
  //       "com": "顺丰",
  //       "no": "sf",
  //       checked:"true"
  //     },
  //     {
  //       "com": "申通",
  //       "no": "sto"
  //     },
  //     {
  //       "com": "圆通",
  //       "no": "yt"
  //     },
  //     {
  //       "com": "韵达",
  //       "no": "yd"
  //     },
  //     {
  //       "com": "天天",
  //       "no": "tt"
  //     },
  //     {
  //       "com": "京东快递",
  //       "no": "jd"
  //     },
  //     {
  //       "com": "OCS",
  //       "no": "ocs"
  //     },
  //     {
  //       "com": "TNT",
  //       "no": "tnt"
  //     },
  //     {
  //       "com": "东方快递",
  //       "no": "coe"
  //     }
  // ]
  
  },

  writeDown:function(e){
    // console.log(e);
    this.setData({
      writeInfo:e.detail.value
    });
  },

  selectChange:function(e){
    // console.log(e);
    this.setData({
      selectNo:e.detail.value
    });
  },


  bindComChange: function (e) {
    console.log(e);
    var index = e.detail.value;
    this.setData({
      comNo:this.data.result2[index].no,
      comName: this.data.result2[index].com
    });
    
  },


  searchBtn:function(){
    var that = this;
    var writeNo = this.data.writeInfo;
    // var comNo = this.data.selectNo;
    var comNo = this.data.comNo;
    console.log(writeNo);
    console.log(comNo);
    wx.getStorage({
      key: 'logisticsInfo',
      success: function(res) {
        console.log(res);
        that.setData({
          logisticsInfo:res.data
        });
      },
      fail:function(){
        wx.request({
          url: 'http://v.juhe.cn/exp/index',
          // url:'http://v.juhe.cn/exp/index',
          data: {
            key: 'a7a1ac162486c32bb50885b5002a7090',
            // key:'3430c029a043878603c3024a1cc52768',
            com: comNo,
            no: writeNo
          },
          success: function (res) {
            let { resultcode, reason } = res.data;
            console.log(res.data);
            if (resultcode == 200) {
              console.log(res.data.result.list);
              var Info = res.data.result.list;
              wx.setStorage({
                key: 'logisticsInfo',
                data: Info,
              })
              that.setData({
                logisticsInfo: Info
              });
            }
            else {
              wx.showModal({
                showCancel: false,
                title: '错误提示',
                content: reason,
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            }

          }
        })

      }
    })
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    //缓冲加载快递公司信息
    wx.getStorage({
      key: 'result2',
      success: (res) => {
        console.log("缓存成功！");
        console.log(res.data);
        this.setData({
          result2: res.data
        });
      },
      fail: () => {
        wx.request({
          url: 'http://v.juhe.cn/exp/com',
          data: {
            key: 'a7a1ac162486c32bb50885b5002a7090'
          },
          success: (res) => {
            console.log(res.data);
            let { resultcode, reason, result } = res.data;
            this.setData({
              result2: result
            });
            wx.setStorage({
              key: 'result2',
              data: result,
            })
          }
        })
      }
    });

  
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