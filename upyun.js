import request from 'request';

class Upyun {

    /**
     *
     * @param name
     * @param pass
     */
    constructor(user, pass,bucket) {
        this.user = user;
        this.pass = pass;
        this.bucket=bucket;
    }

    /**
     *
     * @param part
     * @param path
     * @returns {Promise}
     */
    upload(part, path) {
        return new Promise((reslove, reject)=> {

            part.pipe(request({
                url: `http://v0.api.upyun.com/${this.bucket}/${path}`,
                method: 'PUT',
                auth: {
                    'user': this.user,
                    'pass': this.pass
                }
            }, function (err, response, body) {

                if (err) {
                    return reject(err);
                }

                return reslove({
                    body: body,
                    response: response
                });
            }));
        })
    }
}

export default Upyun;

