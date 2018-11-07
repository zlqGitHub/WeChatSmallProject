// pages/book/book.js
import book from "../../utils/book";
Page({

  data: {
    title: '我的书架',
    bookList:[],     //存放所有书籍
    bookName:'',
    checkedList:[],   //用来存放删除选中项
    checked:false,
    bookNameEditing:''
  },

  //编辑输入
  editInput:function(e){
    // console.log(e.detail.value);
    if (e.detail.value != ''){
     this.setData({
       bookNameEditing: e.detail.value
     });
   }
   else{
      this.setData({
        bookNameEditing: this.data.bookNameEditing
      });
   }
  },

  //编辑选项按钮
  bookEditingTab:function(e){
    // console.log(e);
    let index = e.currentTarget.dataset.index;
    let bookList = this.data.bookList;
    bookList.forEach((value,key)=>{
      // console.log(value,key);
      if(key == index){    //添加isEditing属性
        value.isEditing = true;
        // console.log(value.isEditing);
        // console.log(value.bookName);
        this.setData({    //将需要编辑的当前项的值赋给bookNameEditing
          bookNameEditing:value.bookName
        });
      }
      else{
        value.isEditing = false
      }
    });
    this.setData({
      bookList
    });
    // console.log(this.data.bookList);

  },

  //保存编辑后的数据
  saveBookTab:function(e){
    // console.log(e);
    let id = e.currentTarget.dataset.id;
    let bookNameEditing = this.data.bookNameEditing;
    // console.log(bookNameEditing);
    let data = {    //需要更新的数据，一次性赋值
      bookName: bookNameEditing
    };
    book.upDataBookById(id,data,(res)=>{
      // console.log(res);
      this.fetchBookList();
    });

  },

  //  多项选择器，确定删除项
  checkboxTab:function(e){
    // console.log(e.detail.value);
    // console.log(e);  
    this.setData({
      checkedList: e.detail.value
    });

  },

  //删除选中
  clearSelectedTab:function(){
    let checkedList = this.data.checkedList;
   if(checkedList != ""){
      checkedList.forEach((res) => {
        console.log(res);
        book.deleteBookById(res,()=>{
          this.fetchBookList();
        });
      });
      this.setData({   //将存储id的数组清空
        checkedList:''
      });

   }
   else{
     wx.showModal({
       title: '友情提示',
       content: '请先选择',
     })
   }
  },

  //清空所有
  clearAllTab:function(){
    let bookList = this.data.bookList;
    // console.log(bookList);
    if (bookList != ''){
     bookList.forEach((value) => {
       console.log(value);
       book.deleteBookById(value.id);
     });
     this.fetchBookList();

   }
   else{
      wx.showModal({
        title: '友情提示',
        content: '您的书架已清空',
      })
   }
  },

//根据id删除
  deleteTab:function(e){
    // console.log(e);  将id传过来
    let id = e.currentTarget.dataset.id;
    book.deleteBookById(id,(res)=>{
      // console.log(res);
      this.fetchBookList();
    });
  },

  //输入事件
  bookNameInput:function(e){
  //  console.log(e.detail.value);
    this.setData({
      bookName:e.detail.value
    });
  },

  //添加事件
  addTab:function(){
    let bookName = this.data.bookName;
    if(bookName != ''){
      let data = {   //一次性赋值方式
        bookName: bookName
      }
      book.addBook(data, (res) => {
        // console.log(res);
        this.fetchBookList();
      });
      this.setData({  //成功后将输入框清空
        bookName: ''
      });

    }
    else{
      wx.showModal({
        title: '友情提示',
        content: '请您先输入！！！',
      })
    }
    

  },

  //加载时当前用户信息
  onLoad: function (options) {
    wx.BaaS.login(false).then(res => {
      // 登录成功
      // console.log(res);
      this.fetchBookList();
    }, res => {
      // 登录失败
    })
    

  },

//获取数据
  fetchBookList:function(){
    book.getBooksByUid(wx.BaaS.storage.get('uid'),(res)=>{
      // console.log(res);
      this.setData({
        bookList:res.data.objects
      });
    })
  },
  onShareAppMessage:function(){   //转发

  }
 
})