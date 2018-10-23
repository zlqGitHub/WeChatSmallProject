
//查询服务项目表所有数据
let getServices = function(cb,num=10){

  // 1、通过 tableID 实例化一个 Table 对象，操作该对象即相当于操作对应的数据表
  let tableID = 46947;
  let serviceTable = new wx.BaaS.TableObject(tableID);

  //2、示例化一个 Query 对象，在该对象上添加查询条件
  let query = new wx.BaaS.Query()

  //3.支持查询条件并执行查找操作
  query.compare('status', '=', 1); //只查询上架状态的

  serviceTable.setQuery(query).limit(num).orderBy('sort').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err

  })

}

//根据服务项目的记录Id获取服务项目的内容
let getServiceById = function (id,cb){
  let tableID = 46947;
  let Service = new wx.BaaS.TableObject(tableID)

  Service.get(id).then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}


module.exports = {
  getServices,
  getServiceById
}