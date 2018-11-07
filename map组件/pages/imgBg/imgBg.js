// pages/imgBg/imgBg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgBgUrl:''
  },

  changeBg:function(){
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
        // console.log(res);
        var tempFilePaths = res.tempFilePaths[0];

        let MyFile = new wx.BaaS.File();
        let fileParams = { filePath: tempFilePaths }
        let metaData = { categoryID: '5b6e55932ceefc7fd8e15b67' }

        MyFile.upload(fileParams, metaData).then(res => {
          let data = res.data  // res.data 为 Object 类型
          // console.log(res);
          if(res.statusCode == 200){
            that.setData({
              imgBgUrl: data.path
            });
            wx.setStorage({
              key: 'imgBg',
              data: data.path,
            })
          }
          // console.log(that.data.imgBgUrl);
        }, err => {

        })

      }
    })

  },

  //删除所有数据
  clearBg:function(){
    let MyFile = new wx.BaaS.File()
    let query = new wx.BaaS.Query();
    query.compare('category_id', '=', '5b6e55932ceefc7fd8e15b67');

    //删除知晓云内的数据
    MyFile.setQuery(query).find().then((res) => {
      // console.log(res);
      let arr = [];
      res.data.objects.forEach((item)=>{
        arr.push(item.id)  
      });
      // console.log(arr);
      if(arr != ''){
        MyFile.delete(arr).then();
      }
      else{
        wx.showModal({
          title: '友情提示',
          content: '暂无数据！',
        })
      }
      wx.clearStorage();
    }, err => { })


    
   


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
    let that = this;
    wx.getStorage({
      key: 'imgBg',
      success: function (res) {
        // console.log(res);
        that.setData({
          imgBgUrl:res.data
        });
      },
    })
  },

  shareBg:function(){

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