import config from '../config';
const token = 'mockToken';


export default {
    register(payload) {
        console.log(config.apiRecord);
        
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
    },

    login(payload) {
        return new Promise((resolve, reject) => {
            fetch(`${config.apiRecord.domain}/login`, 
                {
                    method: 'POST',
                    headers: { 'content-type': 'application/json', 'Authorization': token },
                    body: JSON.stringify({
                        payload
                    })
                }
            ).then(res => {
                if (res.data.result === 'success') {
                    localStorage.setItem('TOKEN_KEY', res.data.token);
                    console.log('success!', res.data.message);
                } else {
                    console.log('erro!', res.data.message);
                    
                }
            }).catch(err => reject(err))
        })
    }
};