// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:'',
    msgData:[]
  },
  changeInputVal(ev){
    // console.log(ev.detail.value);
    this.setData({
      inputVal: ev.detail.value
    });
    // console.log(1111)
  },
  addMsg(ev){
    // console.log(this.data.inputVal);
    // 记住，不能通过this.data进行更改数据，以下被注释的是错误写法
    // this.data.msgData.push({
    //   msg:this.data.inputVal
    // });
    var list=this.data.msgData;
    list.push({
      msg:this.data.inputVal
    });
    // var n = list.length-1;
    // console.log(n + "===" + list[n].msg);
    wx.setStorage({
      key: 'comment',
      data: list,
    })
    //更新
    this.setData({
      msgData: list,
      inputVal: ''
    });
  },
  delMsg(ev){
    // console.log(ev);
    // console.log(ev.target.dataset.index);
    var n = ev.target.dataset.index;
    var list=this.data.msgData;
    list.splice(n,1);
    wx.setStorage({
      key: 'comment',
      data: list,
    });
    this.setData({
      msgData:list
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取本地数据
    wx.getStorage({
      key: 'comment',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          msgData:res.data
        });
      }
    });
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