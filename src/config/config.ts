export default {
    jwtsecret: process.env.JWT_SECRET || 'somesecrettoken',
    db: {
        uri: process.env.MONGODB || 'mongodb://localhost/jwttutorial',
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD,
    }
}