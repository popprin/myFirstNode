module.exports = {
    //mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '439747223848-faa8547um3pfquvu2pnbqe8eff0c1c0l.apps.googleusercontent.com',
        clientSecret: 'BDYiSAk5eb6TqjXZ4mkJFzzR',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }

}
