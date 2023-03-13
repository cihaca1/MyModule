[rewrite_local]
^https?:\/\/cubox\.pro\/c\/api\/(userInfo|userPay) url script-response-body https://raw.githubusercontent.com/cihaca1/MyModule/main/cubox.js

[mitm] 
hostname = cubox.pro
