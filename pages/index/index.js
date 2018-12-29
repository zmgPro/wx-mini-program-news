// pages/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:["国内","国际","财经","娱乐","军事","体育","其他"],
    newsList:[],

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
  getNewsList(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data:{
        type:'gn'
      },
      header:{
        'content-type':'application/json'
      },
      success: (res) => {
        let newsList=[]
        let result=res.data.result
        for (let i =0 ;i<9;i++){
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