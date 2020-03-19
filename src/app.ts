import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Initialization
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/', (req, res) => {
    res.send(`The API is at 'http://localhost:${app.get('port')}`)
})

export default app

