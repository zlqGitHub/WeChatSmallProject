// pages/search/search.js
import config from "../../utils/config";
import cook from "../../utils/cook";
Page({

  data: {
    searchIcon:false, //搜索图标显示状态
    menu:"", //搜索关键字
    searchResult:[], //搜索结果
    moreHidden:true,
    pagenum:1,
    returnnum:5
  },

  //获取焦点事件
  focus: function(){
    this.setData({
      searchIcon: true  //隐藏搜索图标
    })
  }, 

  //失去焦点事件
  blur: function () {
    if(!this.data.menu)
    {
      this.setData({  
        searchIcon: false  //显示搜索图标
      })
    }
  }, 

  input: function (e) {
    //更新搜索关键字
    this.setData({
      menu: e.detail.value
    })

    // console.log(e.detail.value);
  },


  searchTap:function(){
    let menu = this.data.menu;
    let pagenum = this.data.pagenum;
    let returnnum = this.data.returnnum;

    cook.getCookQuery(menu,pagenum,returnnum,function(res){
        console.log(res);
    });
  },

  onPullDownRefresh:function(){
      console.log('top');

  },

  onReachBottom:function(){
     console.log('bottom');
     this.setData({
       moreHidden:false
     });
  }

})