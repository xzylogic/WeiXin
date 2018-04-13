// pages/aboutme/aboutme.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  tell:function(){
    wx.makePhoneCall({
      phoneNumber: '1314520' //仅为示例，并非真实的电话号码
    })
  }
})
