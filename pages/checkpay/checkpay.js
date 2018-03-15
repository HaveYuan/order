
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 500,                   // 滚动视图高度
    carArray: [],                  // 所点食物
    totalPrice: 0.00,                 // 总价格
    totalCount: 0,                   // 菜品总数量
    hotCheck: 4,
    act1: false,
    act2: false,  
    act3: false,  
    act4: false,  
    act5: false,                  
  },

  //单选事件
  hotCheckedChange: function(e) {
    this.setData({
      hotCheck: e.detail.value
    })
  },

  //多选事件
  checkboxChange1: function (e) {
    this.setData({
      act1: !this.data.act1
    })
    console.log(e.detail.value);
  },

  //多选事件
  checkboxChange2: function(e) {

    console.log(e.detail.value);
  },

  active2: function() {
    this.setData({
      act2: !this.data.act2
    })
  },
  active3: function () {
    this.setData({
      act3: !this.data.act3
    })
  },
  active4: function () {
    this.setData({
      act4: !this.data.act4
    })
  },
  active5: function () {
    this.setData({
      act5: !this.data.act5
    })
  },

  //微信支付
  webchatPay: function() {
    wx.request({
      url: 'http://xcx.misass.com/misassorder/ajax/ajaxpay.php',
      dataType: "json",
      data: {
        
      },
      success: function(res) {
        console.log(res);
        wx.requestPayment({
          'timeStamp': res.data.time.toString(),
          'nonceStr': res.data.nonce_str,
          'package': res.data.prepay_id,
          'signType': 'MD5',
          'paySign': res.data.sign,
          success: function() {

          }
        })
      }
    })
    // var resultType = 'success';
    // wx.navigateTo({
    //   url: 'pay/pay?resultType=' + resultType
    // })
  },

  onLoad: function(options) {
    var carArray1 = JSON.parse(options.carArray);
    // var totalNum1 = this.data.totalNum;
    // for(var i=0; i<carArray1.length; i++) {
    //   totalNum1 = totalNum1 + carArray1[i].num;
    // }
    this.setData({
      carArray: carArray1,
      totalPrice: options.totalPrice,
      totalCount: options.totalCount
    })
    console.log(carArray1);
    console.log(options.totalPrice);
  },

  onShow: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          height: res.windowHeight - 91
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