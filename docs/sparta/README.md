---
title: sparta
sidebar: auto
sidebarDepth: 2
---

## 接口域名
- 本地：http://localhost(或本机的ip): 8004
- 测试：
- 正式：


## 接口定义
```js
- req
{
    "apiVersion" : "1.0.0",
    "version" : "2.6.1",
    "appKey" : "", 
    "sign" : "",
    "timeStamp" : "2019-04-16T11:37:40+0800", 
    channel: 设备 1理财师ios, 2理财师安卓， 3壹财富微信 4壹财富pc, 5壹财富h5, 6erp pc端, 
    11壹财富直客ios, 12壹财富直客安卓, 13壹财富直客微信, 14壹财富直客pc, 15壹财富直客h5, 
    21九天ios, 22九天安卓， 26九天erp pc端，27九天pc端，34腾云pc, 1001人才库
    role: 角色 -1潜客, 0理财师, 5高净值理财师直客, 8员工, 21壹财富个人直客, 22壹财富机构直客
} 
- res
{
    runSpanTime
    data
    code
    isSuccess
}

```

## 注意事项
::: tip
- 目前绑定IM账号都是注释掉的，之后会调用erp自己内部的接口，涉及到的接口如下
1. 注册的时候
2. 直客绑定理财师
3. 理财师绑定顾问
:::

## 登录注册

### 用户名密码登录
```js
- req
@param {string} - username 
@param {string} - channel 
@param {string} - clientId
@param {init}   - loginType 0
@param {string} - password 
@param {init}   - role - 直客必填，个人直客21，机构直客22，如果不填，默认理财师0
@url post user/userlogin
- res
@return {
    "data": {
        "id": 707371,
        "adminId": 38,
        "name": "w",
        "mobile": "18521948660",
        ...
        "isRegister": false
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 253
}
```

### 用户名验证码登录、注册
``` js
- req
@param {string} - username 
@param {string} - channel 
@param {string} - clientId
@param {init}   - loginType 1
@param {string} - code 
@param {init}   - role - 直客必填，个人直客21，机构直客22，如果不填，默认理财师0
@url post user/userlogin
- res
@return {

}
```

### 用户名密码注册
``` js
- req
@param {string} - username 
@param {string} - channel 
@param {string} - clientId
@param {init}   - role - 直客必填，个人直客21，机构直客22，如果不填，默认理财师0
@param {init}   - cid - 邀请人的id
@url post user/UserRegister  version:3.0.0
- res
@return {
    "data": {
        "id": 707442,
        "mobile":  ,
        //"isPopUpAward": 0,
        "isRegister": true
    },
}
```

### 发送短信验证码
``` js
- req
@param {string} - mobile 
@param {string} - channel 
@param {string} - smsType 0登录, 1注册, 3重置密码, 5佣金提现, 6修改提现密码, 9添加银行卡发送验证码, 10登录注册（+）
@param {init}   - userId (非必填),当smsType为5、6、9时必填
@param {init}   - codyType 默认传入0, 2为隐藏语音验证功能
@param {string} - isVerifyMobile 
@url post user/SecurityCodeGet
- res
@return {

}
```

### 设置密码
``` js
- req
@param {int}    - userId 
@param {init}   - channel 
@param {string} - mobile
@param {string} - newpassword 新密码，需要md5加密
@url post user/SetPassword
- res
@return success {
    data: userInfoId
}
@return failed {
    errMsg : err.message,
    data : 0
}
```

## 用户相关(直客、理财师)

### 获取用户信息
``` js
- req
@param {init}   - userId
@param {init}   - channel
@param {string} - userMobile
@url post User/GetUserBaseInfoDetail
- res
@return success{
    "data": {
        "userInfo": {
            "id": 710349,
            "tel": "18521948660",
            "mapId": 710348,
            "adminId": 798,//新加字段
            "enterPriseId": 34,//新加字段
            "email": "",
            "realName": "李蓉蓉",
            "photo": "",
            "isMobile": true,
            "isAuth": true,
            "role": "个人",
            "authStatus": 0,
            "pofAccountId": "",
            "sex": 0,
            "qq": "",
            "company": "",
            "companyAddress":"",//公司地址 +
            "position": "",
            "card": "",
            "weChat": "",
            "industry": "",
            "workYear": "",
            "idCard": "**************0127",
            "pid": 310000,
            "cityid": 310100,
            "province": "上海",
            "city": "上海市",
            "area": "",
            "address": "",
            "intro": "",
            "isIdCard": 10,
            "isCard": 0,
            "isEdu": 0,
            "birthday": "1989-02-12 00:00:00",
            "riskPreference": 16,
            "type": 0,
            "vip": 0,
            "hobbyProductType": "",
            "motto": "",
            "workExperience": "",
            "confirmPhoto": "",
            "RiskRiskPreferenceDescription": "稳健型",
            "groupName": "",
            "isPartner": false,
            "isQudao": false,
            "roleValue": 21,
            "mapccId": "llmc",
            "adminAid": "ou", //新加字段 + 
            "manageCapital": 0, //管理资产 +
            "customerCount": 0, //服务客户 +
            "noMaskIdCard": "141181198902120127",
            "surveyUrl": "http://127.0.0.1:3001/app/surveys/result/2?surveyId=7"
        },
        "eduExperienceList": [],
        "workExperienceList": [],
        "userWorkHistoryList": [],
        "userCertificateList": []
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 402
}
```

### 更新用户信息
``` js
- req
@param {string} - userMobile
@param {init}   - userId
@param {init}   - channel
@param {string} - realName 
@param {string} - sex 0:女, 1:男
@param {date}   - birthday
@param {init}   - pid 省
@param {init}   - cityid 市
@param {init}   - manageCapital 持仓资产 +
@param {init}   - customerCount 服务客户数量 +
@param {string} - company 公司名称
@param {string} - companyAddress 公司地址 +
@url post User/UpdateUserBaseInfo
@req{
  "userMobile" : "18521948660", 
  "apiVersion" : "1.0.0",
  "userId" : "710332",
  "channel" : "11",  
  "realName":'dd', 
  "sex" : "1",
  "birthday":"1988-12-17",
  "pid":"310000",
  "cityid":"310100",
  "manageCapital":"1",
  "customerCount":"20"
}
- res 
@return success {
    data: userInfoId
}
```

### 获取理财师列表(+)
::: tip
1. 同个省市
2. 不同性别
3. 目前先获取后台写死的两个id
:::
``` js
- req
@param {init}   - pid 省
@param {init}   - cityid 市
@param {string} - sex
@url post User/GetUserFinancialList
- res
@return success{
    "data": {
        "list": [
            {
                "isAuth": false,
                "id": 96,
                "RealName": "邹文",
                "mobile": "13817337196",
                "authType": 1,
                "manageCapital": 0,
                "count": 0,
                "cityId": 310100,
                "cityName": "上海市",
                "imgUrl": "",
                "cid": "30"
            },
            {
                "isAuth": false,
                "id": 113,
                "RealName": "李荣宏",
                "mobile": "15502123113",
                "authType": 1,
                "manageCapital": 0,
                "count": 0,
                "cityId": 0,
                "cityName": "",
                "imgUrl": "",
                "cid": "3h"
            }
        ]
    },
    "totalCount": 2,
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 129
}
@return failed{
    errMsg:'未找到您要查找的理财师！'
}
``` 

### 获取用户其他信息
::: tip
- 直客通过手机号码绑定理财师前要判断该理财师是否存在
- 理财师邀请码或者手机号码 cid
:::
``` js
- req
@param {init} - cid 
@param {init} - apiVersion //1.0.0
@url post User/GetUserBaseProfileDetail
@req{
  "apiVersion" : "1.0.0",
  "version" : "2.6.1",
  "appKey" : "ycfzkiosiplqs93zcz98qjhayrm",
  "userMobile" : "18521948660",
  "sign" : "EFB83089B03189E5A49375002DE761EB",
  "timeStamp" : "2019-04-16T11:37:40+0800",
  "userId" : "707442",
  "cid" : "1362164424",
  "channel" : "11"
}
@return success cid {
    "data": {
        "isAuth":false,
        "userMapMobile": "",
        "userMapRealName": "",
        "id": 101757,
        "mobile": "15201939359",
        "exp": 2,
        "email": "1026443062@qq.com",
        "realName": "jason",
        "score": 0,
        "userGradeId": 1,
        "pofAccountId": "",
        "managerMobile": "13611888388",
        "managerName": "CEO",
        "sex": -1,
        "role": 1,
        "industry": "",
        "company": "壹财富测试",
        "position": "",
        "workYear": "",//从业年限
        "confirmcompany": "",//公司名称
        "companyAddress": "",//公司地址
        "card": "",
        "weChat": "",
        "qq": "",
        "idCard": "",
        "confirmphoto": "",//背景图
        "workexperience": "",
        "birthday": null,
        "cityname": "上海市",
        "hobbyproductIntro": "",//擅长领域
        "mangerType": 0,
        "jobNum": "ceo",
        "hobbyProductType": "",
        "selfIntro": "",
        "photo": "",
        "isCard": 0,
        "vip": null,
        "confirmPhoto": "",
        "imUserName": "6tb5rt",
        "authStatus": 0,
        "motto": null,
        "bankCount": 0,
        "userAddress": 0,
        "manageCapital": 0,//持仓资产(单位：亿)
        "customerCount":0,//服务客户数量，
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 132
}
```

### 获取员工其他信息(+)
::: tip
- 理财师通过手机号码绑定销售前要判断该销售是否存在
- 销售邀请码/手机号码 aid
:::
``` js
- req
@param {init} - cid 
@param {init} - apiVersion //1.0.0
@url post User/GetAdminBaseProfileDetail
@req{
  "apiVersion" : "1.0.0",
  "version" : "2.6.1",
  "appKey" : "ycfzkiosiplqs93zcz98qjhayrm",
  "userMobile" : "18521948660",
  "sign" : "EFB83089B03189E5A49375002DE761EB",
  "timeStamp" : "2019-04-16T11:37:40+0800",
  "userId" : "707442",
  "aid" : "15201939359",
  "channel" : "11"
} 
@return success {
    "data": {
        "realName": "唐轶",
        "mobile": "15221953840",
        "isAuth": true,//是否认证
        "id": 101726,
        "email": "1@1.com",
        "company": "",//公司名称
        "lifePhoto": "Upload/20180124/2018012417284741961488.png",//头像
        "address": ""//公司地址
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 134
}
@return failed{
    "errMsg": "您查找的用户不存在",
    "isSuccess": false,
    "code": 10000,
    "runSpanTime": 155
}
@return failed{
    "errMsg": "您输入的手机号码有误",
    "isSuccess": false,
    "code": 10000,
    "runSpanTime": 53
}
```

### 直客绑定理财师(+)
``` js{5}
- req
@param {string} - userMobile
@param {init}   - userId
@param {init}   - channel
@param {init} - apiVersion //2.0.0
@param {init} - cid 理财师的手机号码或者邀请码
@url post User/BindMapId
@return success{
    message:'绑定成功'
}
```

### 理财师绑定顾问(+)
``` js{5}
- req
@param {string} - userMobile
@param {init}   - userId
@param {init}   - channel
@param {init} - apiVersion //2.0.0
@param {init}   - aid 顾问的手机号码或者邀请码
@url post User/BindAdminId
@return success{
    message:'绑定成功'
}
``` 




### 绑定（暂时不用）
``` js
- req
@param {init} - userId
@param {init} - recommendId
@url post User/Bind
- res
@return success{

}
```

## 首页
### banner(没改)
``` js
@param {init} - channel 
@param {init} - type 28
@param {string} - apiVersion 2.1.0
@url post Site/BannerGetList
@return success{
  "data" : [

  ],
  "code" : 0,
  "totalCount" : 0,
  "runSpanTime" : 40,
  "isSuccess" : true
}
```
### 成交数额(没改)
``` js
@param {string} - userMobile
@param {init}   - userId
@param {init}   - channel
@url post Common/DataIndexStat
@return success{
    "data": {
        "tcount": "460.5", //累计成交金额（亿）
        "advisor": "16.0",
        "partner": "666",
        "totalUser": "160047",
        "totalIssuance": "57735770000",
        "totalCommission": "100111",
        "dailyVisits": "18000001",
        "dailyPeople": "1000000",
        "totalHnwUser": "5" //高净值客户(万)
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 190
}
```
### 产品优选(没改)
``` js
- req
@param {string} - userMobile
@param {init}   - userId
@param {init}   - channel
@param {init}   - pageIndex 1
@param {init}   - pageSize 3
@url post Product/ProductGetMostViewedList
@return success{
    "totalCount": 35239,
    "list": [
        {
            "id": 5512,
            "productTypeId": 1,
            "sTitle": "ss九天信托 第1期(第1期)",
            "title": "ss九天信托测试产品",
            "visitCount": 107759,
            "phase": 1,
            "fundType": "",
            "saleStatus": 20,
            "qiXianEx": 6,
            "qiXian": 12,
            "fxList": [
                {
                    "title": "100万≤X＜500万",
                    "price": "10.8%",
                    "isFloat": false,
                    "earningRate": "16%",
                    "packingRate": 16
                },
                {
                    "title": "500万≤X＜800万",
                    "price": "11.9%",
                    "isFloat": true,
                    "earningRate": "17%+浮动",
                    "packingRate": 17
                }
            ],
            "nianHuaShouYiEnd": "17.0",
            "nianHuaShouYiExt": "0",
            "nianHuaShouYiStart": "16.0",
            "investmentTerm": "12+6个月",
            "quitPeriod1": 0,
            "quitPeriod2": 0,
            "expectRevenue": 0,
            "navUnit": 0,
            "assets": 0,
            "foundRate": 0,
            "yearRate": 0,
            "row": "1",
            "bestEarningRate": "17%+浮动",
            "bestEarningRate_fore": 17,
            "bestEarningRate_back": "0",
            "bestPrice": "11.9%",
            "bestPrice_fore": 11,
            "bestPrice_back": "9",
            "bestGroupPrice": "待定",
            "bestGroupPrice_fore": "待定",
            "bestGroupPrice_back": 0,
            "bestEmployeePrice": "待定",
            "bestEmployeePrice_fore": "待定",
            "bestEmployeePrice_back": 0,
            "saleStatusName": "在售",
            "isHot": false,
            "isHotSale": false,
            "isRecommend": false,
            "isChosen": false,
            "packingRate": 0,
            "returnCash": 0
        },
        {
            "id": 4300,
            "productTypeId": 1,
            "sTitle": "XX信托-金马329(第3期)",
            "title": "XX信托-金马329号贵州水城城投应收账款（债权）投资集合资金信托计划",
            "visitCount": 59053,
            "phase": 3,
            "fundType": "",
            "saleStatus": 20,
            "qiXianEx": 0,
            "qiXian": 24,
            "fxList": [
                {
                    "title": "100万≤X＜300万",
                    "price": "1.7%",
                    "isFloat": false,
                    "earningRate": "9%",
                    "packingRate": 9
                },
                {
                    "title": "300万≤X＜1000万",
                    "price": "1.5%",
                    "isFloat": false,
                    "earningRate": "9.6%",
                    "packingRate": 9.6
                },
                {
                    "title": "1000万≤X",
                    "price": "0.7%",
                    "isFloat": false,
                    "earningRate": "10%",
                    "packingRate": 10
                }
            ],
            "nianHuaShouYiEnd": 9.5,
            "nianHuaShouYiExt": "0",
            "nianHuaShouYiStart": "9.0",
            "investmentTerm": "24个月",
            "quitPeriod1": 0,
            "quitPeriod2": 0,
            "expectRevenue": 0,
            "navUnit": 0,
            "assets": 0,
            "foundRate": 0,
            "yearRate": 0,
            "row": "2",
            "bestEarningRate": "10%",
            "bestEarningRate_fore": 10,
            "bestEarningRate_back": "0",
            "bestPrice": "1.7%",
            "bestPrice_fore": 1,
            "bestPrice_back": "7",
            "bestGroupPrice": "待定",
            "bestGroupPrice_fore": "待定",
            "bestGroupPrice_back": 0,
            "bestEmployeePrice": "待定",
            "bestEmployeePrice_fore": "待定",
            "bestEmployeePrice_back": 0,
            "saleStatusName": "在售",
            "isHot": false,
            "isHotSale": false,
            "isRecommend": false,
            "isChosen": false,
            "packingRate": 0,
            "returnCash": 0
        },
        {
            "id": 4146,
            "productTypeId": 1,
            "sTitle": "中江国际-六盘水(第1期)",
            "title": "中江国际-金马362号六盘水城镇化建设投资 集合资金信托计划",
            "visitCount": 56635,
            "phase": 1,
            "fundType": "",
            "saleStatus": 10,
            "qiXianEx": 0,
            "qiXian": 24,
            "fxList": [
                {
                    "title": "100万≤X＜300万",
                    "price": "1.7%",
                    "isFloat": false,
                    "earningRate": "9%",
                    "packingRate": 9
                },
                {
                    "title": "300万≤X＜1000万",
                    "price": "1.5%",
                    "isFloat": false,
                    "earningRate": "9.6%",
                    "packingRate": 9.6
                },
                {
                    "title": "1000万≤X",
                    "price": "0.7%",
                    "isFloat": false,
                    "earningRate": "10%",
                    "packingRate": 10
                }
            ],
            "nianHuaShouYiEnd": 0,
            "nianHuaShouYiExt": "0",
            "nianHuaShouYiStart": 0,
            "investmentTerm": "24个月",
            "quitPeriod1": 0,
            "quitPeriod2": 0,
            "expectRevenue": 0,
            "navUnit": 0,
            "assets": 0,
            "foundRate": 0,
            "yearRate": 0,
            "row": "3",
            "bestEarningRate": "10%",
            "bestEarningRate_fore": 10,
            "bestEarningRate_back": "0",
            "bestPrice": "1.7%",
            "bestPrice_fore": 1,
            "bestPrice_back": "7",
            "bestGroupPrice": "待定",
            "bestGroupPrice_fore": "待定",
            "bestGroupPrice_back": 0,
            "bestEmployeePrice": "待定",
            "bestEmployeePrice_fore": "待定",
            "bestEmployeePrice_back": 0,
            "saleStatusName": "预热",
            "isHot": true,
            "isHotSale": false,
            "isRecommend": false,
            "isChosen": false,
            "packingRate": 0,
            "returnCash": 0
        }
    ],
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 198
}
```
### 精彩视频(没改)
::: tip
排序：attr=4;
type=12 (时间倒序)；
type=11\13\14(时间倒序)
:::

``` js
@param {string} - userMobile
@param {init}   - userId
@param {init}   - channel
@param {init}   - pageIndex 1
@param {init}   - pageSize 4
@url post Site/VideoList
@return success{
    "data": {
        "totalCount": 4,
        "data": [
            {
                "id": 207,
                "title": "ss直播测试",
                "type": 12,
                "productId": 0,
                "image": "Upload/Video/20180201/2018020114042413284553.png",//app视频封面
                "pcimage": "Upload/Video/20180201/2018020114043175639593.jpg",
                "appimage": null,//直客端app首页封面
                "tag": [],
                "files": "#",
                "guest": "直客嘉宾",
                "content": "111",
                "startTime": "2018-02-02 10:00",
                "attr": 4,
                "attachment": [
                    {
                        "guid": "04d03ba290e94d54a0f735582eef1c5f",
                        "name": "WechatIMG13263.jpeg",
                        "file": "Upload/Video/20190521/04d03ba290e94d54a0f735582eef1c5f.jpeg", //app首页图片地址
                        "postfix": "jpeg"
                    },
                    {
                        "guid": "201e3642d5884d589ea91c018f26f632",
                        "name": "WechatIMG139.jpeg",
                        "file": "Upload/Video/20190521/201e3642d5884d589ea91c018f26f632.jpeg",
                        "postfix": "jpeg"
                    }
                ],
                "count": 1389,
                "status": 20,
                "order1": 1,
                "order2": "1",
                "row": "1"
            },
            {
                "id": 185,
                "title": "测试产品解说",
                "type": 13,
                "productId": 5513,
                "image": "Upload/Video/20180113/0012ccd7f965401a8fbba69f309cd073.jpg",
                "pcimage": null,
                "tag": [],
                "files": "http://1caifu-file-public.oss-cn-hangzhou.aliyuncs.com/video/business-institute/%E5%A4%A9%E5%B1%B11%E5%8F%B7-5172eedc76ae426eb808230b86890662.mp4",
                "guest": "嘉宾",
                "content": "产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描\n    述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述\n产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描\n    述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描\n    述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描\n    述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描\n    述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描\n    述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描\n    述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描\n    述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述产品解说描述",
                "startTime": "2018-02-02 14:30",
                "attr": 4,
                "attachment": [],
                "count": 1603,
                "status": 100,
                "order1": 2,
                "order2": "1",
                "row": "2"
            },
            {
                "id": 184,
                "title": "资管世界资管世界资管世界资管世界",
                "type": 11,
                "productId": 5806,
                "image": "Upload/Video/20180113/2a73e1db038f406da3fa782dcf32c9f5.jpg",
                "pcimage": "Upload/Video/20180113/fa2f82b9f32447eda7bd69052a4861b6.png",
                "tag": [],
                "files": "http://1caifu-file-public.oss-cn-hangzhou.aliyuncs.com/video/business-institute/%E5%A4%A9%E5%B1%B11%E5%8F%B7-5172eedc76ae426eb808230b86890662.mp4",
                "guest": "演讲嘉宾",
                "content": "资管世界描述资管世界描述资\n管世界描述资管世界描述资管世界描述资管世界描述资管世界描述资管世界描述资管世界描述资管世界描述资\n管世界描述资管世界描述资管世界描述资管世界描述资管世界描述资管世界描述资管世界描述",
                "startTime": "2018-02-02 14:30",
                "attr": 4,
                "attachment": [],
                "count": 1364,
                "status": 100,
                "order1": 2,
                "order2": "2",
                "row": "3"
            },
            {
                "id": 187,
                "title": "资管世界3",
                "type": 11,
                "productId": 0,
                "image": "Upload/Video/20180115/929ed48f76d44601b4b1b23d813430c2.jpg",
                "pcimage": null,
                "tag": [],
                "files": "#",
                "guest": "",
                "content": "333",
                "startTime": "2018-01-12 00:00",
                "attr": 4,
                "attachment": [],
                "count": 1100,
                "status": 100,
                "order1": 2,
                "order2": "3",
                "row": "4"
            }
        ]
    },
    "totalCount": 4,
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 41
}
```

### 投资顾问查询
``` js
- req 
@param {string} - mobile //查询的手机号码
@url post User/checkUserFinancial
- res
@return success{
    "data": {
        "isAuth": true,
        "userMapMobile": "",
        "userMapRealName": "",
        "id": 707301,
        "mobile": "13262990292",
        "exp": 216,
        "email": "",
        "realName": "鲍国蓉",
        "score": 0,
        "userGradeId": 1,
        "pofAccountId": "",
        "managerMobile": "15214385006",
        "managerName": "汪园欢",
        "sex": 0,
        "role": 0,
        "industry": "",
        "company": "",
        "position": "",
        "workYear": "",
        "confirmcompany": "",
        "companyAddress": "",
        "card": "Upload/IOS/20180725/2018072512395581408907.jpg",
        "weChat": "",
        "qq": "",
        "idCard": "320831199205110427",
        "confirmphoto": "",
        "workexperience": "",
        "birthday": null,
        "cityname": "上海市",
        "hobbyproductIntro": "",
        "mangerType": 0,
        "jobNum": "X000006",
        "hobbyProductType": "",
        "selfIntro": "",
        "photo": "",
        "isCard": 10,
        "isIdCard": 10,
        "vip": null,
        "confirmPhoto": "",
        "imUserName": "18hu",
        "authStatus": 0,
        "motto": null,
        "manageCapital": 0,
        "customerCount": 0,
        "bankCount": 1,
        "userAddress": 0,
        "cid":"lin5"
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 460
}
@return failed{
    "errMsg": "没有找到您要查找的用户",
    "isSuccess": false,
    "code": 10000,
    "runSpanTime": 43
}
```


## 新闻

### 新闻列表(修改)
``` js
- req
@param {string} - channel
@param {init}   - newstypeid //新闻类型,测试环境为97
@param {init}   - pageSize //一页的数量
@param {init}   - pageIndex //页码
@url post Site/GetNewsList
- res
@return success{
    "data": [
        {
            "id": 33857,
            "title": "rr测试01",
            "image": "",
            "releaseTime": "2019-05-10 10:52:00",
            "sContent": "测试测试",
            "source": "",
            "isCollectedByCurrentUser": 0,
            "attachment": {
                "guid": "55f9a5a611cf4ce8ba0f42c5c9df4d64",
                "name": "越吻越伤心.mp3",
                "file": "Upload/News/20190510/55f9a5a611cf4ce8ba0f42c5c9df4d64.mp3",//附件
                "postfix": "mp3"
            },
            "readTime":1,//预计阅读时间（分）
            "viewCount": 0, //阅览量 init
            "startCount":0, //点赞量 init
        }
    ],
    "totalCount": 1,
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 113
}
```
### 新闻播报列表(新增)
``` js
- req
@param {string} - channel
@param {init}   - newstypeid //新闻类型,测试环境为97
@param {init}   - pageSize //一页的数量
@param {init}   - pageIndex //页码
@url post Site/getNewsListSimple
- res
@return success{
    "data": [
        {
            "id": 33859,
            "title": "rr测试03",
            "file": "Upload/News/20190510/a78af56120fd48e7aaf03b2bc1eda8fc.mp3"
        },
        {
            "id": 33858,
            "title": "rr测试02",
            "file": "Upload/News/20190510/4ac26f1152b44944b711b45e165474d4.mp3"
        },
        {
            "id": 33857,
            "title": "rr测试01",
            "file": "Upload/News/20190510/55f9a5a611cf4ce8ba0f42c5c9df4d64.mp3"
        }
    ],
    "totalCount": 3,
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 229
}
```


### 新闻详情(修改)
``` js
- req
@param {init} - id //新闻的id
@param {init} - channel
@url post Site/GetNewsDetail
- res
@return success{
    "data": {
        "id": 33857,
        "seqNo": "25636",
        "title": "rr测试01",
        "sContent": "测试测试",
        "createTime": "2019-05-10 10:53:26",
        "releaseTime": "2019-05-10 10:52:00",
        "status": 1,
        "mapId": null,
        "contents": "我是谁，我在哪，我在干什么",
        "newsTypeId": 97,
        "sort": 0,
        "seodes": "",
        "seoKeyword": "",
        "source": "",
        "attr": 0,
        "image": null,
        "attachment": {
            "guid": "55f9a5a611cf4ce8ba0f42c5c9df4d64",
            "name": "越吻越伤心.mp3",
            "file": "Upload/News/20190510/55f9a5a611cf4ce8ba0f42c5c9df4d64.mp3",
            "postfix": "mp3"
        },
        "viewCount": 0,//阅读数量
        "starCount": 0,//点赞数
        "updateTime": "2019-05-10 10:53:26",
        "preId": 33858, //上一首
        "nextId": null, //下一首
        "preTitle": "rr测试02",
        "nextTitle": null,
        "totoalCount": 25637,
        "sTitle":"",//短标题
        "readTime": 1,//阅读时间（分）公式：按一分钟可以读300个字计算
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 88
}
```

### 更新新闻阅读量(+)
``` js
- req
@param {init} - id
@param {init} - channel
@url post Site/UpdateNewsViewCount
- res 
@return success{
    "data": {
        "isUpdate": true
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 53
}
```

### 更新点赞个数(+)
``` js
- req
@param {init} - id //新闻的id
@param {init} - channel
@param {boole} - isStar // 点赞：true; 取消赞：false
@url post Site/UpdateNewsStarCount
- res
@return success{
    "data": {
        "isUpdate": true
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 35
}
```
## 实名认证

### 直客个人认证 isidcard
``` js
- req
@param {}
@url post User/fourFactorVerification
- res
@return success{

}
```

### 直客机构认证 iscard
``` js
- req
@param {}
@url post User/verifyCompanyName
- res
@return success{

}
```

### 理财师认证
``` js
- req
@param {}
@url post User/CardAuth
- res
@return success{

}
```

## 商城
::: tip
待审核0；已支付5；已审核10；已采购20；已发货30； 已完成40

待发货 <=20; 已发货 30; 已完成：40

:::

### 不同状态的订单数量
``` js
- req
@param {string} - userId 
@url post erp/mall/order/getStatistical
- res
@return success{
    "data": {
        "waitingDelivery": 7, //待发货
        "hasDelivery": 0, //待收货
        "successed": 1 //已完成
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 55
}
```

### 商城列表
``` js
- req 
@param {init} - pageIndex 
@param {init} - pageSize 
@param {string} - type //类型 eq:"数码"
@url post site/GoodsGetList
- res
@return success{
    "data": [
        {
            "id": 61,
            "title": "【iphone6s】64G ",
            "pic": "Upload/GoodsImage/20160229/2016022911551378126175.jpg",
            "point": 60880,
            "price": 6088,
            "type": "数码",
            "count": 10000,
            "startTime": null,
            "endTime": null,
            "intro": "",
            "content": "输入方式 触控<br />\n智能机 是<br />\n操作系统 苹果（IOS）<br />\n操作系统版本 iOS<br />\nCPU品牌 苹果<br />\n<p>\n\tCPU说明 64 位架构的 A9 芯片，嵌入式 M9 运动协处理器 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n</p>\n<p>\n\t机身内存 64GB ROM &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;\n</p>\n<p>\n\t屏幕尺寸 4.7英寸\n</p>\n触摸屏 具备 3D Touch 技术的 Retina HD 显示屏<br />\n1400：1 对比度 (标准)<br />\n500 cd/m2 最大亮度 (标准)<br />\n全 sRGB 标准<br />\n支持广阔视角的双域像素<br />\n正面采用防油渍防指纹涂层<br />\n支持多种语言文字同时显示<br />\n放大显示<br />\n便捷访问功能<br />\n分辨率 1334 x 750<br />\n<br />",
            "status": 1,
            "orderId": 48,
            "createTime": "2016-02-29 11:53:25",
            "updateTime": "2016-02-29 11:53:25",
            "attachment": "[{\"guid\":\"07F11DF3-6319-4058-878C-3E9731FE19E5\",\"name\":\"2016022911551378126175.jpg\",\"file\":\"Upload/GoodsImage/20160229/2016022911551378126175.jpg\",\"postfix\":\"jpg\"}]",
            "imgCount": 1,
            "activityStatus": "active"
        },
        {
            "id": 60,
            "title": "松下数码摄像机",
            "pic": "Upload/GoodsImage/20160229/2016022911512329682936.jpg",
            "point": 53990,
            "price": 5399,
            "type": "数码",
            "count": 10000,
            "startTime": null,
            "endTime": null,
            "intro": "",
            "content": "传感器类型 BSI MOS传感器<br />\n传感器尺寸 1/2.3<br />\n防抖功能 光学防抖<br />\n快门 1/25 – 1/8000<br />\n图像记录 JPEG (DCF/Exif2.2), MPO<br />\n视频记录 1080/50p (28Mbps / VBR), (1920 x 1080/50p)<br />\n其他参数<br />\n存储介质 SD存储卡；SDHC存储卡；SDXC存储卡<br />\n输入输出接口 AV（音像）,HDMI ,麦克风（迷你立体声）,耳机（迷你立体声）,USB<br />\n电池 锂电池（1940毫安时）<br />\n尺寸 65 x 73 x 139 mm<br />\n重量 353g<br />\n屏幕参数<br />\n液晶屏尺寸 3.0英寸<br />\n液晶屏像素 46万<br />\n液晶屏比例 3：2<br />\n曝光控制<br />\n白平衡 自动，预设（室内1，室内2，日光，阴天，白平衡预设）<br />\n镜头<br />\n焦距 34.5 – 690.3 mm<br />\n滤镜直径 49mm<br />\n视角/缩放比率(35 mm 等值) 34.5 – 690.3 mm<br />\n镜头描述 徕卡 Dicomar 镜头<br />\n光圈（F）值 F1.8 (广角) / F3.6 (长焦)<br />\n硬盘/内存<br />\n容量 16GB<br />",
            "status": 1,
            "orderId": 46,
            "createTime": "2016-02-29 11:51:07",
            "updateTime": "2016-02-29 11:51:07",
            "attachment": "[{\"guid\":\"43EBC327-5722-43CB-B7C1-F796585B2F66\",\"name\":\"2016022911512329682936.jpg\",\"file\":\"Upload/GoodsImage/20160229/2016022911512329682936.jpg\",\"postfix\":\"jpg\"},{\"guid\":\"B3454A7E-D817-402E-B998-944D882BEA5A\",\"name\":\"2016022911512875005084.jpg\",\"file\":\"Upload/GoodsImage/20160229/2016022911512875005084.jpg\",\"postfix\":\"jpg\"}]",
            "imgCount": 2,
            "activityStatus": "active"
        }
    ],
    "totalCount": 10,
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 78
}
```
### 商城详情（修改）
``` js
- req
@param {init} id //商品详情 eq:61
@url post site/GoodsInfoGet
- res success{
    "data": {
        "id": 61,
        "title": "【iphone6s】64G ",
        "pic": "Upload/GoodsImage/20160229/2016022911551378126175.jpg",
        "price": 6088,
        "point": 60880,
        "orderId": 48,
        "intro": null,
        "type": "数码",
        "soldcount": 0, //已售
        "ContentAttachment": "", //直客端的内容显示，图片
        "count": 10000,
        "startTime": null,
        "endTime": null,
        "attachment": "[{\"guid\":\"07F11DF3-6319-4058-878C-3E9731FE19E5\",\"name\":\"2016022911551378126175.jpg\",\"file\":\"Upload/GoodsImage/20160229/2016022911551378126175.jpg\",\"postfix\":\"jpg\"}]",
        "content": "输入方式 触控<br />\n智能机 是<br />\n操作系统 苹果（IOS）<br />\n操作系统版本 iOS<br />\nCPU品牌 苹果<br />\n<p>\n\tCPU说明 64 位架构的 A9 芯片，嵌入式 M9 运动协处理器 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n</p>\n<p>\n\t机身内存 64GB ROM &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;\n</p>\n<p>\n\t屏幕尺寸 4.7英寸\n</p>\n触摸屏 具备 3D Touch 技术的 Retina HD 显示屏<br />\n1400：1 对比度 (标准)<br />\n500 cd/m2 最大亮度 (标准)<br />\n全 sRGB 标准<br />\n支持广阔视角的双域像素<br />\n正面采用防油渍防指纹涂层<br />\n支持多种语言文字同时显示<br />\n放大显示<br />\n便捷访问功能<br />\n分辨率 1334 x 750<br />\n<br />",
        "status": 1,
        "createTime": "2016-02-29 11:53:25",
        "updateTime": "2016-02-29 11:53:25",
        "activityStatus": "active",
        "imagesList": [
            {
                "guid": "07F11DF3-6319-4058-878C-3E9731FE19E5",
                "name": "2016022911551378126175.jpg",
                "file": "Upload/GoodsImage/20160229/2016022911551378126175.jpg",
                "postfix": "jpg",
                "title": "2016022911551378126175.jpg",
                "thumbImg": "Upload/GoodsImage/20160229/2016022911551378126175.jpg",
                "originalImg": "Upload/GoodsImage/20160229/2016022911551378126175.jpg",
                "goodsId": 61
            }
        ],
        "imgCount": 1
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 101
}
```
### 提交订单(新增2.0)
``` js
- req
@param {init} - addressId //收货地址
@param {init} - goodsId //商品id
@param {init} - count //数量
@param {string} - remark //留言（非必填）
@param {string} - apiVersion // "2.0.0",
@url post site/MallOrderSaveInfo
- res
@return success {
    "data": {
        "orderId": 1305//订单编号
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 123
}
@return failed {
    "errMsg": "ERP中剩余库存为[0],已不足！",
    "isSuccess": false,
    "code": 10000,
    "runSpanTime": 60
}
```

### 订单列表
``` js
- req 
@param {init} - userId 
@param {init} - status //全部：不传值；待发货0，待收货1；已完成2
@url post site/MallOrderList
- res
@return success{
    "data": [
        {
            "id": 1301,
            "orderCode": "M2019053115404915",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
            "count": 1,
            "status": 0
        },
        {
            "id": 1302,
            "orderCode": "M2019053115405140",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
            "count": 1,
            "status": 30
        },
        {
            "id": 1303,
            "orderCode": "M2019053117191443",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
            "count": 1,
            "status": 0
        },
        {
            "id": 1304,
            "orderCode": "M2019053117295825",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": null,
            "count": 1,
            "status": 20
        },
        {
            "id": 1305,
            "orderCode": "M2019053117434447",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
            "count": 1,
            "status": 40
        },
        {
            "id": 1306,
            "orderCode": "M2019053117441390",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
            "count": 1,
            "status": 30
        },
        {
            "id": 1307,
            "orderCode": "M2019053117591089",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
            "count": 1,
            "status": 0
        },
        {
            "id": 1308,
            "orderCode": "M2019060316092727",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
            "count": 1,
            "status": 0
        },
        {
            "id": 1310,
            "orderCode": "M2019060414512443",
            "score": 1000,
            "goodsId": 81,
            "goodsTitle": "100元兑",
            "goodsType": "时尚",
            "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
            "count": 1,
            "status": 0
        },
        {
            "id": 1314,
            "orderCode": "M2019060416325579",
            "score": 2000,
            "goodsId": 74,
            "goodsTitle": "手机充值卡100",
            "goodsType": "特别奖品",
            "goodsPic": "Upload/GoodsImage/20170405/8cf9ed0c698f4229bb2fa73c236b0a8b_76.jpg",
            "count": 2,
            "status": 0
        }
    ],
    "totalCount": 18,
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 178
}
```

### 订单详情
``` js
- req
@param {init} - orderId //商品id  1305
@url post site/MallOrderdetail
- res
@return success{
    "data": {
        "appId": 4,
        "name": "谢安琪",
        "mobile": "13698523648",
        "province": 110000,
        "city": 110100,
        "area": 110104,
        "address": "高兴路1447号",
        "express": "顺丰速递",
        "expressNo": "1111111",//快递单号
        "mallOrderLogList": [
            {
                "id": 22,
                "status": 0,
                "createTime": "2019-05-31 15:40:51"//创建时间
            },
            {
                "id": 22,
                "status": 5,
                "createTime": "2019-05-31 15:40:51"//支付时间
            },
            {
                "id": 23,
                "status": 30,
                "createTime": "2019-05-31 15:41:32"//发货时间
            },
            {
                "id": 27,
                "status": 40,
                "createTime": "2019-05-31 15:41:32"//成交时间
            }
        ],
        "id": 1302,//订单id
        "orderCode": "M2019053115405140",//订单编号
        "score": 1000,//金币
        "goodsId": 81,
        "goodsTitle": "100元兑",
        "goodsPic": "Upload/GoodsImage/20170405/65a602d04ada43bcb32b9fb97479c667_76.jpg",
        "goodsType": "时尚",
        "count": 1,//商品数量
        "status": 1,//订单状态   
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 174
}
```



### 确认订单
``` js
- req 
@param {init} - orderId //订单编号
@url post site/MallOrderDeliveryConfirm
@return success{
    "data":{
        "message:'您的状态已更新'
    }
    "isSuccess": false,
    "code": 10000,
    "runSpanTime": 118
}
@return failed{
    "errMsg": "ERP中订单状态不合法",
    "isSuccess": false,
    "code": 10000,
    "runSpanTime": 118
}
```
## 地址

### 地址列表
``` js
- req
@param {init} - userId 用户id
@param {init} - pageIndex
@param {init} - pageSize
@url post user/userAddressGetList
- res
@return success{
    "data": [
        {
            "id": 4439,
            "userId": 702664,
            "name": " ",
            "mobile": " ",
            "province": 450000,
            "city": 450700,
            "area": 450702,
            "address": "11",
            "isDefault": false,
            "postcode": " ",
            "createTime": "2019-01-21 14:38:53",
            "updateTime": "2019-01-24 16:40:27",
            "provinceName": "广西壮族自治区",
            "cityName": "钦州市",
            "areaName": "钦南区"
        }
    ],
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 148
}
```

### 地址详情
``` js
- req 
@param {init} id //地址id
@url post user/UserAddressGetInfo
```
### 新增地址
``` js
@url post User/UserAddressSave
```

### 删除地址
``` js
@url post user/UserAddressDelete
```

### 获取默认地址
``` js
@url post user/DefaultAddressGet
```

## 个人中心

### 资产数值
``` js
@param url post User/financialOverview
- req{ 
  "userId" : "710332", 
  "apiVersion" : "1.0.0"
}
- res
@return success{
  "isSuccess" : true,
  "hasFloatProduct" : false,
  "holdMoney" : 0,//我的资产（万元）
  "hadFloatProduct" : false,
  "code" : 0,
  "runSpanTime" : 73,
  "cumulativeRevenue" : 0,//历史收益（元）
  "futureRevenue" : 0,//预期总收益（元）
}
```
### 下次付息时间
``` js
@param url post user/ExistenceNearest
- req{
    "userId":"710336",
}
- res
@return success{
    "data": {
        "id": 0,
        "productName": "中江信托 - 金虎262号",
        "productId": 3778,
        "productTypeId": 1,
        "enumProductTypeName": "集合信托",
        "phase": 2,
        "dealTime": "2015-10-27 00:00:00",
        "userId": 710336,
        "orderId": 1054,
        "orderPayTime": "2014-12-12 00:00:00",
        "name": "张启滨",
        "userName": "胡俊逸",
        "price": 200,
        "reId": 4867,
        "rePayTime": "2019-12-20 00:00:00",//下次付息时间
        "payType": 10,
        "advanceMsg": null,
        "fxJson": "[{\"title\":\"100万≤X＜300万\",\"title1\":\"100\",\"title2\":\"300\",\"costPrice\":\"1.7\",\"earningRate\":\"9\",\"groupPrice\":\"1.7\",\"price\":\"1.7\",\"earningPrice\":\"\"},{\"title\":\"300万≤X＜1000万\",\"title1\":\"300\",\"title2\":\"1000\",\"costPrice\":\"1.5\",\"earningRate\":\"9.6\",\"groupPrice\":\"1.5\",\"price\":\"1.5\",\"earningPrice\":\"\"},{\"title\":\"1000万≤X\",\"title1\":\"1000\",\"title2\":\"\",\"costPrice\":\"0.7\",\"earningRate\":\"10\",\"groupPrice\":\"0.7\",\"price\":\"0.7\",\"earningPrice\":\"\"},{\"title\":\"\",\"costPrice\":\"\",\"earningRate\":\"\",\"groupPrice\":\"\",\"price\":\"\",\"earningPrice\":\"\"}]",
        "profit": null,
        "enumPayTypeName": "支付利息",
        "payStatus": null,
        "adminId": 42,
        "adminName": "黄友娟",
        "platform": 0,
        "earningRate": 0
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 88
}
@return success{
    "data": {},
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 324
}
```


### 我的金币我的经验值
``` js
- req{  
  "apiVersion" : "1.0.0", 
  "userMobile" : "18521948660",
  "userId":"707285", 
}
@param url post User/UserGradeGet
- res
@ruturn success{
    "data": {
        "userId": 707285,
        "level": 1,//等级 普通会员：1； 黄金会员：2；铂金会员：3； 钻石会员；4
        "exp": 254,//经验值
        "registerTime": "2018-05-10 16:12:23",
        "score": 1499000,//我的金币
        "photo": "",
        "name": "普通会员",
        "nextName": "黄金会员",
        "nextExp": 1000,
        "diffExp": 746,
        "expRatio": 26,
        "levelPicType": 1,
        "levelPicCount": 1,
        "daysStr": "2天",
        "scoreToday": 4,
        "recommendCode": "MACAD5",
        "shareUrl": "http://localhost:3000/register/agent-register?recommend=MACAD5"
    },
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 195
}
```


## IM
### 通讯录
``` js
- req 
@param {string} - userMobile
@param {string} - userId
@param {string} - channel
@url post im/IMContactList
- res
@return success{//直客端
    "kefu": [
        {
            "ex": "{\"personnelType\":1}",
            "icon": "https://rescdn.xiaohu.in/Upload/Temp/20150203/default-icon.png",
            "accid": "bss",
            "name": "1875会员",
            "gender": 0
        }
    ],
    "licaishi": [
        {
            "ex": "{\"personnelType\":2}",
            "icon": "https://img.1caifu.com/Upload/Temp/20150203/default-icon.png",
            "accid": "6tb5rt",
            "name": "jason",
            "gender": 0
        }
    ],
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 665
}
@return success{//理财师端
    "kefu":[{

    }],
    "kehu":[{//直客

    }],
    "fulijingli":[{

    }],
    "huiyuan":[{//以服务经理身份登陆，名下的会员

    }]
}
```

## 活动
### 直客端注册点击领取金币
::: tip
*   新用户：提示“获取388金币”
*   已领取过的用户：提示“此活动用户已参与”
*   老用户：提示“活动仅限新注册用户参与”
:::
``` js
- req 
@param {string} - userId 
@url post erp/user/useractivity/receive
- res
@return success{
    "errMsg": "此活动用户已参与",
    "isSuccess": false,
    "code": 10000,
    "runSpanTime": 92
}
```

### 直客端判断用户是否领取过金币
``` js
- req 
@param {string} - userId 
@url post erp/user/useractivity/checkReceived
- res
@return success{
    "data": true,
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 206
}
```

## 新增
### 官网用户协议
::: tip
*   判断是否度过用户协议
:::
``` js
- req 
@param {string} - userId 
@url post erp/user/checkAgreementIsReaded
- res
@return success{
    "data": true,
    "isSuccess": true,
    "code": 0,
    "runSpanTime": 206
}