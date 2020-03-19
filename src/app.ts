import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes/auth.routes'
import passport from 'passport'
import passportMiddleware from './middleware/passport'
import protectedRoutes from './routes/protected.routes'

// Initialization
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())
passport.use(passportMiddleware)

// Routes
app.get('/', (req, res) => {
    res.send(`The API is at 'http://localhost:${app.get('port')}`)
})

app.use('/api', routes)
app.use('/api', protectedRoutes)

export default app

