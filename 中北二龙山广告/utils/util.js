import config from './config.js';

//通过tableID来查询数据
let searchInfo = function(cb){
  let oTable = new wx.BaaS.TableObject(config.TABLEID.test);
  let query = new wx.BaaS.Query();
  oTable.find().then(res => {
    cb(res);
  }, err => {
    console.log("数据查询失败");
  });
}

//通过contentID来查询对应的内容库
let searchContent = function(contentID,cb){
  let contentGroupID = config.CONTENTGROUPID.test;

  let MyContentGroup = new wx.BaaS.ContentGroup(contentGroupID)
  MyContentGroup.getContent(contentID).then(res => {
    cb(res);
  }, err => {
    console.log("内容获取失败");
  })
}

//通过id将广告删除
let deleteAd = function(id){
  let tableId = config.TABLEID.test;
  let Product = new wx.BaaS.TableObject(tableId)
  Product.delete('5c8cf64f77a61e799a80ef34').then(res => {
    console.log("删除成功");
  }, err => {
    console.log(err);
  })
}

//通过contentID将广告内容库删除    ???
// let deleteContent = function (contentID) {
//   let contentName = config.CONTENTGROUPID.name;
//   let Product = new wx.BaaS.ContentGroup(contentName)
//   Product.find(contentID).then(res => {
//     console.log(res);
//   }, err => {
//     // err
//   })
// }

module.exports = {
  searchInfo,
  searchContent,
  deleteAd
}