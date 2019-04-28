//初始化数据

function setOtabbar(TOKEN_TYPE){
  return TOKEN_TYPE == 1 ? [
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/imgs/home.png",
      "selectedIconPath": "/imgs/home_on.png",
      "text": "主页1"
    },
    {
      "current": 0,
      "pagePath": "/pages/news/news",
      "iconPath": "/imgs/message.png",
      "selectedIconPath": "/imgs/message_on.png",
      "text": "资讯1"

    },
    {
      "current": 0,
      "pagePath": "/pages/logs/logs",
      "iconPath": "/imgs/category.png",
      "selectedIconPath": "/imgs/category_on.png",
      "text": "分类1"
    },
  ] : [
      {
        "current": 0,
        "pagePath": "/pages/index2/index2",
        "iconPath": "/imgs/home.png",
        "selectedIconPath": "/imgs/home_on.png",
        "text": "主页2"
      },
      {
        "current": 0,
        "pagePath": "/pages/news2/news2",
        "iconPath": "/imgs/message.png",
        "selectedIconPath": "/imgs/message_on.png",
        "text": "资讯2"

      },
    ];
}

/**
 * tabbar主入口
 * @param  {String} bindName 
 * @param  {[type]} id       [表示第几个tabbar，以0开始]
 * @param  {[type]} target   [当前对象]
 */
function tabbarmain(bindName = "tabdata", id, target) {
  const app = getApp()
  var TOKEN_TYPE = app.globalData.tokenType;
  var that = target;
  var bindData = {};  
  let otabbar = setOtabbar(TOKEN_TYPE)
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar;
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}