
Page({
  data:{
    scrollHenght: 0,       //滚动区域高度
  },

  //查看订单详情
  checkOrder: function() {
    wx.navigateTo({
      url: '../order/order',
    })
  },

  onLoad: function() {
    var that = this;

    //获取可滚动区域高度
    wx.getSystemInfo({
      success: function(res) {
        var height = res.windowHeight - 40;
        that.setData({
          scrollHeight: height
        })
      },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})