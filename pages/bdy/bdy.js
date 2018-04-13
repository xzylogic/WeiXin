// pages/bdy/bdy.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    proList:null
    // proList:[
    //   {
    //     img:'../../images/yun4.jpg',
    //     title:'标题一',
    //     desc:'内容一内容一内容一内容一'
    //   },
    //   {
    //     img: '../../images/yun4.jpg',
    //     title: '标题二',
    //     desc: '内容二内容二内容二内容二'
    //   },
    //   {
    //     img: '../../images/yun4.jpg',
    //     title: '标题三',
    //     desc: '内容三内容三内容三内容三'
    //   }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      test:'01'  //这个test自己随意换，就是写着玩的，页面要显示的话记得写{{test}}
    });
    this.getProList();
  },
  toDetail:function(e){
    // console.log(e);
    var index=e.currentTarget.dataset.index;
    console.log(index);
    var proList=this.data.proList;
    var title=proList[index].title;
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title //传递数据到其他页面
    })
    //也可以通过本地缓存传值
    // wx.setStorageSync('title', title)
  },
  getProList:function(){
    var that=this;
    wx.request({
      url: 'http://www.xzylogic.xyz/wx_Json_Img/bdy.json', //仅为示例，并非真实的接口地址
      // url:app.globalData.host,  //获取app中定义的全局数据
      method: 'GET',
      // header: {
      //   'content-type': 'application/json'
      // },
      success: function (res) {
        that.setData({
          proList:res.data
        })
        console.log(res.data);
      }
    })
  },
  copy:function(){
    if(wx.setClipboardData){
      wx.setClipboardData({
        data: '这是我要复制的内容32',
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showModal({
                title: '复制成功',
                content: '内容方已经复制成功'
              })
              console.log(res.data) // data
            }
          })
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，请升级'
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})