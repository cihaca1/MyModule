let headers = $request.headers;

headers["User-Agent"] = "Loon/975 CFNetwork/3860.600.12 Darwin/25.5.0";
headers["Accept"] = "*/*";
headers["Accept-Language"] = "zh-CN,zh-Hans;q=0.9";
headers["Referer"] = "https://kelee.one/";

delete headers["Cookie"];

$done({
  headers
});
