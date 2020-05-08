module.exports = {
    apiRecord: apiRecord(),
    isDev: process.env.NODE_ENV === 'development',
    style: {
        signup: {
            paper: {
                maxWifth: 540,
                background: '#e0e0e02b'
            },
            textField: {
                margin: '15px 0',
                width: '85%',
                '& input:-webkit-autofill': {
                    transition: 'background-color 5000s ease-in-out 0s'
                },
                '& input': {
                    borderBottom: '1px solid gray'
                }
            },
            confirmBtn: {
                textTransform: 'none',
                margin: '20px 0'
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