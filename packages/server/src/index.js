const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const operationsRoutes = require('./routes/operations')
const userRoutes = require('./routes/user')

env.config()

app.use(cors())

const connectionString = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLOUSTER}.ybv2n.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('DataBase connected'))

app.use(express.json())

app.use('/budget', operationsRoutes)
app.use('/', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})