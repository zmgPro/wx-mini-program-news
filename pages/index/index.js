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
    section:"gn"

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

  },
  changeTitle(e){
    let result = e.currentTarget.dataset.title
    let section = titleMap[result]
    this.setData({
      section: section
    })
    this.getNewsList()
  },
  getNewsList(){
    console.log(this.data.section)
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
            title: result[i].title,
            date: result[i].date.substring(11,16),
            source: result[i].source,
            image: result[i].firstImage
          })
        }
        console.log(result)
        this.setData({
          newsList:newsList
        })
        
      },
      fail: res => {
        console.log(res)
      }
    })

  }


})