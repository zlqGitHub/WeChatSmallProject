// components/tag/index.js
// 判断是否有预设的颜色值
let isPresetColor =  (color) => {
  if(!color){   //当没有传color值的时候 
    return false;
  }
  return (/^(red|pink|blue)$/.test(color));   //正则匹配是否存在实现定义好的类样式
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    color:{
      type:String,
      value:'',
      observer:function(newVal){
        console.log(newVal);
        let isPreset = isPresetColor(newVal);
        let style = !isPreset ? `background-color:${newVal};color:#fff` : '';    /*ES6中字符串的拼接*/
        let className = isPreset ? `moocba-tag--${newVal}` : '';
        this.setData({
          className,
          style
        })
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    className: '',
    style:''

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tagTab:function(){
      console.log("ok");
    }

  }
})
