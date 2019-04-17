---
title: 小虎sparta接口
sidebar: auto
sidebarDepth: 3
---

## 接口域名
- 本地：http://localhost(或本机的ip): 8004
- 测试：
- 正式：

## 接口定义
```json
"apiVersion" : "1.0.0",
"version" : "2.6.1",
"appKey" : "", 
"sign" : "",
"timeStamp" : "2019-04-16T11:37:40+0800",   
```

## 用户相关
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

### 发送短信验证码
``` js
- req
@param {string} - mobile 
@param {string} - channel 
@param {string} - smsType 0登录, 1注册, 3重置密码, 5佣金提现, 6修改提现密码, 9添加银行卡发送验证码
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
@param {string} - channel 
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