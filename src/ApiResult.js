class ApiResult {

    constructor(body) {
        this.body = body;
        try {
            let tmp = JSON.parse(body);
            this.code = parseInt(tmp.code);
            this.msg = tmp.msg;
            this.data = tmp.data;
        } catch (error) {
            this.code = -1000;
            this.msg = error;
            this.data = null;
        }

    }
    isSuccess(success_code = 1) {
        return this.code == success_code;
    }

    getCode(){
        return this.code;
    }

    getData(){
        return this.data;
    }
    getBody(){
        return this.body;
    }
    getMsg(){
        return this.msg;
    }

}

module.exports= ApiResult;