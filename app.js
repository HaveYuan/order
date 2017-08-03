//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //调用登录接口获取openid
    // wx.login({
    //   success: function(res) {
    //     var encryptedData = res.encryptedData;
    //     var iv = res.iv;
    //     if(res.code) {
    //       wx.request({
    //         url: '',
    //         data: {
    //           code: res.code,
    //           encryptedData: encryptedData,
    //           iv: iv
    //         },
    //         success: function(data) {
    //           console.log(data);
    //           wx.setStorageSync("uid", uid);
    //         }
    //       })
    //     }
    //   }
    // })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.res){
      typeof cb == "function" && cb(this.globalData.res)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              //that.globalData.userInfo = res.userInfo;
              that.globalData.res = res;
              //typeof cb == "function" && cb(that.globalData.userInfo);
              typeof cb == "function" && cb(that.globalData.res);
            }
          })
        }
      })
    }
  },
  globalData:{
    //userInfo:null,
    res: null
  }
})