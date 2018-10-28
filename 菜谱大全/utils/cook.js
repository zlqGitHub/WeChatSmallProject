import config from "./config";

//调用菜谱大全接口获取搜索的结果
function getCookQuery(keyword,pagenum,returnnum,callback) {
  wx.request({
    url: config.COOK_QUERY_API,
    data: {
      key: config.COOK_KEY,
      menu: keyword,
      albums: 1,
      pn:pagenum,
      rn:returnnum
    },
    success: (res) => {
      // console.log(res);
      let { error_code } = res.data;
      //如果查询有结果
      if (error_code == 0) {
        callback(res.data);
      }
    }
  })
}

//获取菜谱大全分类列表
function getCookCategory(callback,parentId = 0){
    wx.request({
      url: config.COOK_CATEGORY_API,
      data:{
        parentid: parentId,
        key: config.COOK_KEY
      },
      success:function(res){
        callback(res.data);
      } 
    })
}

module.exports = {
  getCookQuery,
  getCookCategory
}
