import express from 'express'
import blogsRouter from './controllers/blogs.js'
import loginRouter from './controllers/login.js'

const app = express()

app.use(express.json())

app.use('/api/blogs', blogsRouter)
app.use('/api/login', loginRouter)

export default app