import config from "./config";
//新增
let addBook = function(obj,cb){
  let oTable = new wx.BaaS.TableObject(config.TABLEID.bookTableId);  
  //通过 tableID 实例化一个 TableObject 对象,操作该对象即相当于操作对应的数据表
  let Record = oTable.create();   //本地创建一条空记录
  Record.set(obj).save().then(res => {
    // success
    cb(res);
  }, err => {
    // err
  })

}

//查询，根据uid(用户名的created_by)
let getBooksByUid = function(uid,cb){   //cd为回调函数
  let obook = new wx.BaaS.TableObject(config.TABLEID.bookTableId);
  let query = new wx.BaaS.Query();
  query.compare('created_by', '=', uid)
  obook.setQuery(query).find().then(res => {
    // success
    cb(res);
  }, err => {
    // err
  })
  
}

//更新
let upDataBookById = function(id,obj,cb){
  let upDataBookById = new wx.BaaS.TableObject(config.TABLEID.bookTableId);
  let Record = upDataBookById.getWithoutData(id);
  Record.set(obj).update().then(res => {
    // success
    cb(res);
  }, err => {
    // err
  })
}

//单项删除及删除所有或删除选中
let deleteBookById = function(id,cb){
  let deleteBookById = new wx.BaaS.TableObject(config.TABLEID.bookTableId);
  deleteBookById.delete(id).then(res => {
    // success
    cb(res);
  }, err => {
    // err
  })
}

// let clearAll = function (id) {
//   let deleteBookById = new wx.BaaS.TableObject(config.TABLEID.bookTableId);
//   deleteBookById.delete(id).then(res => {
//     // success
    
//   }, err => {
//     // err
//   })
// }

module.exports = {
  getBooksByUid,
  addBook,
  deleteBookById,
  upDataBookById
  // clearAll
}