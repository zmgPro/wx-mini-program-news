// pages/content.js
const titleMap={
  "国内": 'gn',
  '国际': 'gj',
  "财经":'cj',
  "娱乐":'yl' ,
  "军事":'js', 
  "体育":'ty',
  "其他":'other' 
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:["国内","国际","财经","娱乐","军事","体育","其他"],
    newsList:[],
    section:"gn",
    idx: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){
    this.getNewsList()
    
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getNewsList(function () {
      wx.stopPullDownRefresh()
    })
    
  },
  changeTitle(e){
    let result = e.currentTarget.dataset.title
    let index = e.currentTarget.dataset.index; 
    //console.log(e.currentTarget.dataset)
    let section = titleMap[result]
    this.setData({
      section: section,
      idx: index   
    })
    this.getNewsList()
  },
  intoDetail(e){
    let id = e.currentTarget.dataset.index
    wx,wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getNewsList(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data:{
        type: this.data.section
      },
      header:{
        'content-type':'application/json'
      },
      success: (res) => {
        let newsList=[]
        let result=res.data.result
        let length = result.length
        for (let i =0 ;i<length;i++){
          newsList.push({
            id:result[i].id,
            title: result[i].title,
            date: result[i].date.substring(11,16),
            source: result[i].source,
            image: result[i].firstImage
          })
        }

        this.setData({
          newsList:newsList
        })
        
      },
      complete: function () {
        if (callback) { callback() }
      },    
      fail: res => {
        console.log(res)
      }
    })

  }


})