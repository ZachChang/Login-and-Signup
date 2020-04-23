module.exports = {
    apiRecord: apiRecord()
}

function apiRecord() {    
    return {
        domain: process.env.REACT_APP_API_URL,
        isDev: process.env.NODE_ENV === 'development'
    }
}