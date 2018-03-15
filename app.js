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
            url: 'https://www.070703.club/webchat_order/getCode.php',
            data: {
              code: res.code,
            },
            success: function(data) {
              that.globalData.openid = data.data.openid;
              wx.getUserInfo({
                success: function(u) {
                  wx.request({
                    url: 'https://www.070703.club/webchat_order/getOpenid.php',
                    data: {
                      sessionKey: data.data.session_key,
                      encryptedData: u.encryptedData,
                      iv: u.iv
                    },
                    success: function(o) {
                      console.log(o);
                    }
                  })
                },
                fail: function() {
                  /*wx.showModal({
                    title: '提示',
                    content: '您选择了拒绝授权，再次授权需要删除小程序后再进入，是否现在授权',
                    confirmColor: '#4cc9e5',
                    success: function(res) {
                      if(res.confirm) {
                        wx.openSetting({
                          success: function(o) {
                            if(o.authSetting["scope.userInfo"] == true) {
                              console.log("用户确定授权");
                            }else {
                              console.log("用户取消授权");
                            }

                          }
                        })
                      }else {
                        console.log(that.globalData.openid);
                      }
                    }
                  })*/
                  wx.request({
                    url: 'https://www.070703.club/webchat_order/insertUser.php',
                    data: {
                      openid: that.globalData.openid,
                      nickName: "餐厅用户",
                      gender: 1,
                      avatarUrl: "https://www.070703.club/webchat_order/img/head.png"
                    },
                    success: function(o) {
                      console.log(o);
                    }
                  })
                  console.log(that.globalData.openid);
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