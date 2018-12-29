// pages/detail/detail.js
Page({
  data: {
    id:0
  },
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    this.getNewsDetail()    
  },
  getNewsDetail(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.id
      },
      header: {
        'content-type': 'application/json'
      },
      success:res=>{
        console.log(res)
      }
    })

  }






})