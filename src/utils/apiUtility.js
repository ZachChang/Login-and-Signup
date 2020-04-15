import config from '../config';
const token = 'mockToken';


export default {
    register(payload) {
        return new Promise((resolve, reject) => {
            fetch(`${config.apiRecord.domain}/register`, 
                {
                    method: 'POST',
                    headers: { 'content-type': 'application/json', 'Authorization': token },
                    body: JSON.stringify({
                        payload
                    })
                }
            ).then(res => {
                res.status === 200 ? resolve(res.json()) : reject(res);
            }).catch(err => reject(err))
        })
    }
};