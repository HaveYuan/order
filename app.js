//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  
    var that = this;

    //调用登录接口获取openid
    wx.login({
      success: function(res) {
        if(res.code) {
          wx.request({
            url: 'http://localhost/PHP/getCode.php',
            data: {
              code: res.code,
            },
            success: function(data) {
              that.globalData.openid = data.data.openid;
              wx.getUserInfo({
                success: function(u) {
                  wx.request({
                    url: 'http://localhost/PHP/getOpenid.php',
                    data: {
                      sessionKey: data.data.session_key,
                      encryptedData: u.encryptedData,
                      iv: u.iv
                    },
                    success: function(o) {
                      console.log(o);
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  globalData:{
    openid: ''
  }
})