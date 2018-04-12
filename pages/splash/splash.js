//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  
  // 页面加载
  onLoad: function () {
  },

  // 页面渲染完成
  onReady : function(){
    
  },

  // 页面显示完成
  onShow : function(){
    // 延时1.5秒后，跳转到首页。
    setTimeout(function(){
      wx.switchTab({
        url: '../../pages/home/index',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    },1500)
  }

})
