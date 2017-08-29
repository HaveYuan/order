
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myOrder: true,
    serverInfo: false,
    scrollHeight: '600',
    nickname: '',            // 用户名
    gender: '',              // 用户性别 0：未知、1：男、2：女 
    avatarUrl: '',           // 用户头像
    userinfo: [],
    res: [],
    code: '',
    phoneNum: '',
  },

  //我的订单页面显示
  my_order: function(e) {
    this.setData({
      myOrder: true,
      serverInfo: false
    })
  },

  //服务纪录页面显示
  server_info: function(e) {
    this.setData({
      myOrder: false,
      serverInfo: true
    })
  },

  //跳转到菜单页
  rePrev: function() {
    wx.navigateBack({
      url: '../goods/goods'
    })
  },

  //跳转到修改个人信息页
  change_info: function() {
    var nickname = this.data.nickname;
    var gender = this.data.gender;
    var avatarUrl = this.data.avatarUrl;
    var phoneNum = this.data.phoneNum;

    wx.navigateTo({
      url: 'changeInfo/changeInfo?nickname='+nickname+'&&gender='+gender+'&&avatarUrl='+avatarUrl+'&&phoneNum='+phoneNum
    })
  },

  //页面开始加载
  onLoad: function(option) {
    
  },

  onShow: function () {
    //调用全局变量的用户信息
    var that = this;

    //调用全局变量openid
    var openid = getApp().globalData.openid;

    //调取数据库用户数据
    wx.request({
      url: 'http://localhost/PHP/getUserInfo.php',
      data: {
        openid: openid
      },
      dataType: "json",
      success: function (res) {
        that.setData({
          nickname: res.data.nickName,
          gender: res.data.gender,
          avatarUrl: res.data.avatarUrl,
          phoneNum: res.data.phoneNum
        })
      }
    }) 

    // 页面显示
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
        var height = res.windowHeight - 183;   //footerpannelheight为底部组件的高度
        that.setData({
          scrollHeight: height
        });
        console.log(height);
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})