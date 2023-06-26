

exports.apiCall = async function (url, body, method, token = null) {
console.log("apicall", url, body, method)
    return fetch(url, {
        method: method,
        headers:
        {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
    }).then((response) => {
        return new Promise(function (resolve, reject) {
            response.json().then((responseParsed) => {
                if (
                    response.status == 200 || response.status == 201 || response.status == 204
                ) {
                    resolve({ status: true, response: responseParsed });
                } else if (
                    response.status == 400 || response.status == 401 || response.status == 403
                ) {
                    resolve({ status: false, response: responseParsed });
                } else {
                    resolve({ status: false, response: responseParsed });
                }
            });
        });
    }).catch(err => {
        console.log("Something went wrong, please check your network.", err);
    });
};