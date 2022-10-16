import express from "express";          // import express
import db from './config/database.js'  // import db from database.js
import productRouter from './routes/index.js'  // import router
import cors from 'cors'
import dotenv from 'dotenv'

db.sync()
dotenv.config()

// set express
const app = express()

// set db connection
try {
    await db.authenticate()  // db authentication process
    console.log('Database Connected...')
} catch (error) {
    console.error('Connection error :', error)
}

// middleware
app.use(cors({origin : '*'}))        // agar API dapat diakes diluar backend
app.use(express.json())                               // untuk menangkap request dari body dalam bentuk json
app.use('/products', productRouter)                     // maka routenya adalah /products

// server connection
const port = process.env.PORT || 5000
app.listen(port, () => console.info('Server now running at http://localhost:5000'))