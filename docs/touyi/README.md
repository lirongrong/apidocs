---
title: TouYi
sidebar: auto
sidebarDepth: 2
---

## 接口域名
- 本地：
- 测试：
- 正式：


## 接口定义
```js
- req
{
    
} 
- res
{
    isSuccess
    code
    msg
    data
}

```

## 授权
### 验证用户状态
```js
@url post TouYiUser/UserCheck
- req
{
    "wxCode":"08196TcR0ij6Q62fYwcR0uWVcR096Tc1"  
}
- res
@return {
    "isSuccess": false,
    "code": 101,
    "msg": "未获取到 openId ！",
    "data": {
        "userId": 0,
        "hasMobile": false,
        "hasCard": false,
        "status": 0
    }
}
@return {
    "isSuccess": true,
    "code": 0,
    "msg": "成功",
    "data": {
        "hasCard": false
        "hasMobile": false
        "status": 0,//0待认证，2已认证，-1认证失败
        "userId": 8
    }
}
```
### 用户注册
```js
@url post TouYiUser/CreateUser
- req
{
    "wxCode":"08196TcR0ij6Q62fYwcR0uWVcR096Tc1"  
}
- res
@return {
    "isSuccess": true,
    "code": 101,
    "msg": "无法获取到 openId ！",
    "data": null
}
@return {
    "isSuccess": true,
    "code": 0,
    "msg": "成功",
    "data": {
        "id": 7,
        "openId": null,
        "name": null,
        "nickName": null,
        "sex": null,
        "mobile": null,
        "birthday": "0001-01-01 00:00:00",
        "userCompanyId": null,
        "position": null,
        "inviterId": null,
        "email": null,
        "wechat": null,
        "idCardNo": null,
        "photo": null,
        "card": null,
        "status": 0,
        "isDelete": false,
        "createTime": "0001-01-01 00:00:00",
        "updateTime": "0001-01-01 00:00:00"
    }
}
```

### 提交认证
``` js
```

## 用户
### 获取用户信息
```js
@url post TouYiUser/GetUser
- req
{
    "UserId":"7"  
}
- res
@return {
    "id": 7,
    "openId": "",
    "name": null,
    "nickName": null,
    "sex": 0,
    "mobile": null,
    "birthday": "2019-11-29 15:39:20",
    "userCompanyId": 0,
    "position": null,
    "inviterId": 0,
    "email": null,
    "wechat": null,
    "idCardNo": null,
    "photo": null,
    "card": null,
    "status": 2,
    "isDelete": false,
    "createTime": "2019-11-29 15:39:20",
    "updateTime": "2019-11-29 15:39:20"
} 
```
### 跟新用户信息
```js
@url post TouYiUser/UpdateUser
- req
{
    "UserId":"7",
    "Mobile":"17621171111"
}
- res
@return {
    "isSuccess": true,
    "code": 0,
    "msg": "成功",
    "data": null
}
```

## 产品
### 产品列表（融资需求）
```js
@url post touYiCompany/getCompanyListPage
- req
{
	"PageIndex":2,
	"PageSize":2,
	"PlatformType":2,//平台类型(2 政信类/ 4 地产类/ 6 工商企业类)
	"CompanyType":4,//公司类型(2 担保/ 4 融资)
}
- res
@return {
    "totalCount": 3,
    "data": [
        {
            "companyFinanceList": null,
            "clueList": null,
            "contactList": null,
            "id": 8,
            "name": "公司8",
            "shortName": "公司8",
            "companyType": 2,
            "platformType": 4,
            "companyGrade": 0,
            "issueType": 0,
            "totalAssets": 0,
            "netAssets": 0,
            "debtRatio": 0,
            "generalFinance": 80,
            "platformLevel": 0,
            "projectStage": 0,
            "rankCRIC": 0,
            "stockCode": 0,
            "province": 7,
            "city": 8,
            "area": 9,
            "isOnList": false,
            "shareHolders": null,
            "description": null,
            "shareholderStructureMapUrl": null,
            "logo": null,
            "isRecommend": false,
            "status": 0,
            "isOnline": false,
            "isDelete": false,
            "createTime": "2019-12-02 10:06:04",
            "updateTime": "2019-12-02 10:06:04",
            "clueCount": 0,
            "topScore": 0
        }
    ],
    "errCode": null,
    "errMsg": null,
    "isSucceed": true
}
```

### 产品详情（融资详情）
```js
@url post TouYiCompany/GetCompanyDetail
- req
{
	"CompanyShowType":4, 
	"CompanyId":3 
}
- res
@return {
    "isSuccess": true,
    "code": 0,
    "msg": null,
    "data": {
        "companyFinanceList": [
            {
                "id": 1,
                "companyId": 3,
                "year": 2019,
                "totalAssets": 111,
                "netAssets": 11,
                "debtRatio": 1,
                "totalProfit": 2,
                "isDelete": false,
                "createTime": "2019-11-30 16:14:54",
                "updateTime": "2019-11-30 16:14:54"
            }
        ],
        "clueList": [
            {
                "creditMeasureList": null,
                "id": 3,
                "companyId": 3,
                "clueName": "线索3.1",
                "clueMobile": null,
                "financeId": null,
                "recency": 0,
                "recencyInfo": null,
                "strength": 0,
                "strengthInfo": null,
                "maturity": 0,
                "maturityInfo": null,
                "remarkOut": null,
                "remarkIn": null,
                "card": null,
                "status": 0,
                "count": 0,
                "adminId": 0,
                "isDelete": false,
                "createTime": "2019-11-30 12:27:19",
                "updateTime": "2019-11-30 12:27:19"
            },
            {
                "creditMeasureList": null,
                "id": 4,
                "companyId": 3,
                "clueName": "线索3.2",
                "clueMobile": null,
                "financeId": null,
                "recency": 0,
                "recencyInfo": null,
                "strength": 0,
                "strengthInfo": null,
                "maturity": 0,
                "maturityInfo": null,
                "remarkOut": null,
                "remarkIn": null,
                "card": null,
                "status": 0,
                "count": 0,
                "adminId": 0,
                "isDelete": false,
                "createTime": "2019-11-30 13:40:24",
                "updateTime": "2019-11-30 13:40:24"
            }
        ],
        "contactList": null,
        "id": 3,
        "name": "公司3",
        "shortName": "简称3",
        "companyType": 2,
        "platformType": 2,
        "companyGrade": 0,
        "issueType": 0,
        "totalAssets": 0,
        "netAssets": 0,
        "debtRatio": 0,
        "generalFinance": 30,
        "platformLevel": 0,
        "projectStage": 0,
        "rankCRIC": 0,
        "stockCode": 0,
        "province": 1,
        "city": 2,
        "area": 3,
        "isOnList": false,
        "shareHolders": null,
        "description": null,
        "shareholderStructureMapUrl": null,
        "logo": "1",
        "isRecommend": false,
        "status": 0,
        "isOnline": false,
        "isDelete": false,
        "createTime": "2019-11-30 11:13:29",
        "updateTime": "2019-11-30 11:13:29",
        "clueCount": 0,
        "topScore": 0
    }
}
```
