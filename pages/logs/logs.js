//logs.js
const util = require('../../utils/util.js')

var template = require('../../template/template.js');

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    template.tabbar("tabBar", 2, this)
  }
})
