const express = require('express')
const app = express()
const server = require('http').createServer(app)

const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json({ type: '*/*', limit: '50mb'}))
app.use(cors({credentials:true, origin: true}))

server.listen(port, function() {
    console.log(`Backend server is running on port ${port}`)
})

