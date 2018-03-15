
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canlmin: true,
    submin: true,
    nickBox: 'hidden',       // 修改昵称文本框
    phoneBox: 'hidden',      // 修改手机文本框
    nickname: '',            // 用户名
    gender: '',              // 用户性别 0：未知、1：男、2：女 
    avatarUrl: '',           // 用户头像
    nameValue: '',           // 获取昵称文本框的值
    phoneValue: '',          // 获取手机号文本框的值
    phoneNum: '',              // 手机号
    openid: ''
  },

  //按钮按下时样式变化，false时按钮变小，true时按钮不变化
  canltouchstart: function() {
    this.setData({
      canlmin: false
    })
  },
  canltouchend: function() {
    this.setData({
      canlmin: true
    })
  },
  subtouchstart: function () {
    this.setData({
      submin: false
    })
  },
  subtouchend: function () {
    this.setData({
      submin: true
    })
  },

  //显示修改手机的文本框
  showPhoneBox: function() {
    this.setData({
      phoneBox: 'visible'
    })
  },

  //显示修改昵称的文本框
  showNickBox: function () {
    this.setData({
      nickBox: 'visible'
    })
  },

  //修改手机号码文本框事件
  //点击取消后文本框消失
  phoneCanl: function() {
    this.setData({
      phoneBox: 'hidden',
      nameValue: ''
    })
  },

  //点击确定后修改手机号码文本框消失
  phoneSub: function() {
    var that = this;
    var phoneNum1 = this.trim(this.data.phoneValue);
    var re = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;    //手机号码正则表达式
    if(!re.test(phoneNum1)) {
      wx.showModal({
        title: '手机号码格式不对',
        showCancel: false,
        confirmColor: '#4cc9e5',
      })
    }else {
      //将修改后的值传到后台
      wx.request({
        url: 'https://www.070703.club/webchat_order/changeInfo.php',
        data: {
          openid: this.data.openid,
          phone: phoneNum1
        },
        success: function(res) {
          console.log(res);
          that.setData({
            phoneBox: 'hidden',
            phoneNum: phoneNum1,
            phoneValue: ''
          })
        }
      }) 
    }
  },

  //获取修改手机号的文本框的值
  changePhone: function (e) {
    this.setData({
      phoneValue: e.detail.value
    })
  },

  //修改昵称确定和取消按钮事件
  //点击取消后文本框消失
  nickCanl: function () {
    this.setData({
      nickBox: 'hidden',
      nameValue: ''
    })
  },

  //点击确定后文本框消失
  nickSub: function () {
    var that = this;
    var nickname1 = this.trim(this.data.nameValue);
    if(nickname1 == '') {
      wx.showModal({
        title: '昵称不能为空哦',
        confirmColor: '#4cc9e5',
        showCancel: false
      })
    }else if(nickname1.length > 8) {
      wx.showModal({
        title: '昵称太长',
        confirmColor: '#4cc9e5',
        showCancel: false
      })
    }else{
      wx.request({
        url: 'https://www.070703.club/webchat_order/changeInfo.php',
        data: {
          openid: this.data.openid,
          nick: nickname1
        },
        success: function(res) {
          console.log(res);
          that.setData({
            nickBox: 'hidden',
            nickname: nickname1,
            nameValue: ''
          })
        }
      })
    }
  },

  //获取修改昵称的文本框的值
  changeNickname: function(e) {
    this.setData({
      nameValue: e.detail.value
    })
  },

  //修改性别
  changeSex: function(e) {
    var sex = e.detail.value;
    wx.request({
      url: 'https://www.070703.club/webchat_order/changeInfo.php',
      data: {
        openid: this.data.openid,
        sex: sex
      },
      success: function(res) {
        console.log(res);
      }
    })
  },

  //去左空格;
  ltrim(s){
    return s.replace(/(^\s*)/g, "");
  },
  //去右空格;
  rtrim(s) {
    return s.replace(/(\s*$)/g, "");
  },
  //去左右空格;
  trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  },
  
  //页面开始加载
  onLoad: function (options) {
    console.log(options);
    //获取openid
    var oid = getApp().globalData.openid;

    //获取个人中心页面的用户信息
    this.setData({
      nickname: options.nickname,
      gender: options.gender,
      avatarUrl: options.avatarUrl,
      phoneNum: options.phoneNum,
      openid: oid
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})