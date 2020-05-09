module.exports = {
    apiRecord: apiRecord(),
    isDev: process.env.NODE_ENV === 'development',
    style: {
        signup: {
            paper: {
                maxWifth: '540px',
                background: '#e0e0e02b'
            },
            textField: {
                margin: '15px 0',
                width: '100%',
                '& input:-webkit-autofill': {
                    transition: 'background-color 5000s ease-in-out 0s'
                },
                '& input': {
                    borderBottom: '1px solid gray'
                }
            },
            confirmBtn: {
                textTransform: 'none',
                width: '40%',
                margin: '20px auto'
            }
        }
    }
}
function apiRecord() {    
    const isDev = process.env.NODE_ENV === 'development';
    return {
        domain: isDev ? 'http://localhost:8080' : 'http://localhost:8080/',
        isDev
    }
}