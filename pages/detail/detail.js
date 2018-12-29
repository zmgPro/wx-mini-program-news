// pages/detail/detail.js
Page({
  data: {
    id: 1523074607642
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
        let newsTitle
        let newsDate
        let newsSource

        let newsDetail=[]
        let length = res.data.result.content.length
        
        console.log(length)
      }
    })

  }






})