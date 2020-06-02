---
title: webapp
sidebar: auto
sidebarDepth: 2
---

## 小程序参考网站
* 微信UI在线预览 https://weui.io/
* weui-git地址 https://github.com/Tencent/weui-wxss
* 小程序开发资源汇总 https://github.com/justjavac/awesome-wechat-weapp


## 小程序中canvas绘制和兼容性处理方法
``` js
//view层,这里的id要分别定义，不然报错
<view class='ticket_box'>
    <canvas canvas-id="shareCanvas1" class='canvas' wx:if="{{screenWidth<=320}}" style="height:880rpx;"></canvas> 
    <canvas canvas-id="shareCanvas2" class='canvas' wx:elif="{{screenWidth>320 && screenWidth<=360}}" ></canvas> 
    <canvas canvas-id="shareCanvas3" class='canvas' wx:elif="{{screenWidth>360 && screenWidth<=375}}" ></canvas> 
    <canvas canvas-id="shareCanvas4" class='canvas' wx:elif="{{screenWidth>374 && screenWidth<=414}}" style="height:700rpx;"></canvas> 
    <canvas canvas-id="shareCanvas5" class='canvas' wx:elif="{{screenWidth>414}}" style="height:400px; width:400px; margin:0 auto;"></canvas> 
</view>
//先获取机型，根据机型判断
wx.getSystemInfo({
    success: function(res) {
        console.log(res)
        that.data.screenWidth = res.windowWidth
        that.setData({
            screenWidth: res.windowWidth
        })
    },
})
//draw canvas
drawCanvas: function() {
    var that = this;
    var width = that.data.screenWidth;
    var ctx;
    if (width <= 320) {
        ctx = wx.createCanvasContext('shareCanvas1', that);
    } else if (width > 320 && width <= 360) {
        ctx = wx.createCanvasContext('shareCanvas2', that);
    } else if (width > 360 && width <= 375) {
        ctx = wx.createCanvasContext('shareCanvas3', that);
    } else if (width > 375 && width <= 414) {
        ctx = wx.createCanvasContext('shareCanvas4', that);
    } else if (width > 414) {
        ctx = wx.createCanvasContext('shareCanvas5', that);
    }
    ctx.setFillStyle('#333') // 文字颜色：黑色
    ctx.setFontSize(18) // 文字字号：12px
    ctx.fillText("奖金兑换券", 20, 52)

    if (width <= 320) {
        ctx.drawImage(that.data.iconZhang, 180, 0, 120, 100)
    } else if (width > 320 && width <= 360) {
        ctx.drawImage(that.data.iconZhang, 218, 0, 120, 100)
    } else if (width > 360 && width <= 375) {
        ctx.drawImage(that.data.iconZhang, 230, 0, 120, 100)
    } else if (width > 375 && width <= 414) {
        ctx.drawImage(that.data.iconZhang, 266, 0, 120, 100)
    } else if (width > 414) {
        ctx.drawImage(that.data.iconZhang, 266, 0, 120, 100)
    }

    ctx.font = 'normal bold 16px arial';
    ctx.fillText("￥", 20, 110)
    ctx.setFontSize(30) // 文字字号：12px
    ctx.fillText("1000.00", 36, 110)

    ctx.font = 'normal 12px arial';
    ctx.setFillStyle('#727272')
    ctx.fillText("将本卷保存到本地相册，发送到", 20, 145)
    ctx.setFillStyle('#c194b8')
    ctx.fillText("财务微信", 190, 145)
    ctx.setFillStyle('#727272')
    ctx.fillText("领取奖励", 240, 145)

    ctx.beginPath()
    ctx.setLineWidth(1)
    ctx.moveTo(20, 165)
    ctx.lineTo(364, 165)
    ctx.strokeStyle = '#ededed';
    ctx.stroke()

    ctx.setFontSize(13)
    ctx.fillText("会员名：", 20, 210)
    ctx.fillText("提现时间：", 20, 250)
    ctx.fillText("兑换卷码：", 20, 290)

    if (width <= 320) {
        ctx.setTextAlign('right')
        ctx.fillText("HJ-sssujj", 290, 210)
        ctx.setFillStyle('#b2b2b2')
        ctx.fillText("2019sssssssssssssssss/8/9", 290, 250)
        ctx.fillText("2019sssssssss25", 290, 290)
    } else if (width > 320 && width <= 360) {
        ctx.setTextAlign('right')
        ctx.fillText("HJ-sssujj", 320, 210)
        ctx.setFillStyle('#b2b2b2')
        ctx.fillText("2019sssssssssssssssss/8/9", 320, 250)
        ctx.fillText("2019sssssssss25", 320, 290)
    } else if (width > 360 && width <= 375) {
        ctx.setTextAlign('right')
        ctx.fillText("HJ-sssujj111", 330, 210)
        ctx.setFillStyle('#b2b2b2')
        ctx.fillText("2019sssssssssssssssss/8/9", 330, 250)
        ctx.fillText("2019sssssssss25", 330, 290)
    } else if (width > 375 && width <= 414) {
        ctx.setTextAlign('right')
        ctx.fillText("HJ-sssujj", 360, 210)
        ctx.setFillStyle('#b2b2b2')
        ctx.fillText("2019sssssssssssssssss/8/9", 360, 250)
        ctx.fillText("2019sssssssss25", 360, 290)
    } else if (width > 414) {
        ctx.setTextAlign('right')
        ctx.fillText("HJ-sssujj", 360, 210)
        ctx.setFillStyle('#b2b2b2')
        ctx.fillText("2019sssssssssssssssss/8/9", 360, 250)
        ctx.fillText("2019sssssssss25", 360, 290)
    }


    ctx.setTextAlign('left')
    ctx.setFillStyle('#c194b8')
    ctx.fillText("与年龄为由.还你", 20, 345)
    ctx.setFillStyle('#b2b2b2')
    ctx.fillText("第二肌", 120, 345)
    ctx.draw()
},

```