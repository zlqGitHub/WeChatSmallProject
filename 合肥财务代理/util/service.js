let getObjectsInfo=function(tableID,cb,num=10){
  let oTableID = new wx.BaaS.TableObject(tableID);
  let query = new wx.BaaS.Query();

  oTableID.setQuery(query).limit(num).orderBy('sort').find().then(res => {
    // success
   cb(res);
  }, err => {
    // err
    console.log("失败！");
  })
}

let getServiceById = function (tableID, id, cb){
  let service = new wx.BaaS.TableObject(tableID)
  service.get(id).then(res => {
    // success
    cb(res);
  }, err => {
    // err
  })
}

module.exports={
  getObjectsInfo,
  getServiceById
}