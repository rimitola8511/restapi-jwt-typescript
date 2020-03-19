import mongoose, { ConnectionOptions } from 'mongoose'

import config from './config/config'

const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(config.db.uri, dbOptions)

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Mongo db connection stablished')
})

connection.on('error', err => {
    console.log(err)
    process.exit(0)
})

