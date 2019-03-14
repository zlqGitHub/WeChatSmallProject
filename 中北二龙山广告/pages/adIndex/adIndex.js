// pages/adIndex/adIndex.js
Page({
  data: {
    types: ['今日推荐', '学习', '生活', '招聘'],
    activeCategory: '今日推荐',
    title: "广告推广",
    imgs: [
      'https://c.vpimg1.com/upcb/2019/03/04/74/ias_155167624553256_570x273_90.jpg',
      'https://d.vpimg1.com/upcb/2019/03/08/153/ias_155203728499115_570x273_90.jpg',
      'https://c.vpimg1.com/upcb/2019/02/21/0/ias_155071561368648_570x273_90.jpg ',
    ],
    content:'即日起中北二龙山广告推广正式上线'
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

  },
  
  onLoad: function (options) {

  },

  onShareAppMessage: function () {

  }
})