// pages/detail/detail.js
Page({
  data: {
    id: 1523074607642,
    title:'',
    source:'人民日报',
    date:"",
    image:"/images/test.jpg",
    newsDetail:[]
    
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
      success:(res)=>{
        console.log(res)
        let newsDetail=[]
        let length = res.data.result.content.length
        for (let i=0;i<length;i++){
          if (res.data.result.content[i].type=='p'){
            newsDetail.push({
              content: res.data.result.content[i].text,
              type: res.data.result.content[i].type
            })
          }
          else if (res.data.result.content[i].type=='image'){
            newsDetail.push({
              content: res.data.result.content[i].src,
              type: res.data.result.content[i].type
            })
          }
  
        }
        
        this.setData({
          title:res.data.result.title,
          //source:res.data.result.source,
          date: res.data.result.date.substring(11, 16),
          image:res.data.result.firstImage,
          newsDetail:newsDetail
        })
        console.log(this.data.newsDetail)
      }
    })

  }






})