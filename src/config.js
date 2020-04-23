module.exports = {
    apiRecord: apiRecord()
}
function apiRecord() {    
    const isDev = process.env.NODE_ENV === 'development';
    return {
        domain: isDev ? 'http://localhost:8080' : 'http://localhost:8080/',
        isDev
    }
}