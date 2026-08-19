import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const dbFile = path.join(__dirname, 'db.json')

const readDb = () => JSON.parse(fs.readFileSync(dbFile, 'utf-8'))
const writeDb = (data) => fs.writeFileSync(dbFile, JSON.stringify(data, null, 2))

app.get('/api/anecdotes', (req, res) => {
  const db = readDb()
  res.json(db.anecdotes)
})

app.post('/api/anecdotes', (req, res) => {
  const anecdote = req.body
  if (!anecdote || !anecdote.content) {
    return res.status(400).json({ error: 'content missing' })
  }

  const db = readDb()
  const nextId = db.anecdotes.length > 0 ? Math.max(...db.anecdotes.map(a => a.id)) + 1 : 1
  const newAnecdote = { ...anecdote, id: nextId }
  db.anecdotes.push(newAnecdote)
  writeDb(db)
  res.status(201).json(newAnecdote)
})

const frontendDist = path.join(__dirname, '..', 'client', 'dist')
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist))
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('Frontend build not found. Run npm --prefix ../client run build first.')
  })
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
