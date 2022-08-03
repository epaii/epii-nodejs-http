
function mkPromise(p) {
    return new Promise(function (ok, error) {
        p.then((response) => {
            if (typeof response.data == "object") {
                ok(JSON.stringify(response.data));
            } else
                ok(response.data);
        }).catch((e) => {
            ok(JSON.stringify({ "code": 0, "msg": "500错误", "time": 1603861492, "data": {} }))
        })

    });
}

module.exports = {

    get(url) {
        return mkPromise(require("axios").get(url))
    },
    post(url, data = {}) {

        var content = require('querystring').stringify(data);
        return mkPromise(require("axios").post(url, content, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }));
    },
    postJson(url, data = {}) {
        return mkPromise(require("axios").post(url, data));
    }
}