
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
    code: ''
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
    wx.navigateTo({
      url: 'changeInfo/changeInfo?nickname='+nickname+'&&gender='+gender+'&&avatarUrl='+avatarUrl
    })
  },

  //页面开始加载
  onLoad: function(option) {
    //调用全局变量的用户信息
    var that = this;
    wx.login({
      success: function(res) {
        console.log(res);
      }
    })
    getApp().getUserInfo(
      function(res) { 
        that.setData({
          nickname: res.userInfo.nickName,
          gender: res.userInfo.gender,
          avatarUrl: res.userInfo.avatarUrl,
          res: res,
          code: res.code
        })
        //console.log(res.code);
      })
  },

  onShow: function () {
    console.log("kkk");
    var that = this;
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
  }
})