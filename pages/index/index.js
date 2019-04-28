//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  setMenu: function(){
    if (app.globalData.tokenType == 1){
      app.globalData.tokenType = 2
    }else{
      app.globalData.tokenType = 1;
    }  
    app.globalData.template.tabbar("tabBar", 0, this)//0表示第一个tabbar  
  },

  onLoad: function () {

    app.globalData.template.tabbar("tabBar", 0,this)//0表示第一个tabbar  

  }, 
})
