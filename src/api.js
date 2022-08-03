const ApiResult = require('./ApiResult');
const http = require('./http');

module.exports= {
    async get(url) {
        return new ApiResult(  await http.get(url));
    },
    async post(url,postData={}) {
        return new ApiResult(await http.post(url,postData));
    },
    async  postJson(url,postData={}){
        return new ApiResult( await http.post(url,postData));
    }
}
