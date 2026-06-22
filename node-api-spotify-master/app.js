require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo')
const path = require('path');

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(express.static('public'));
app.use('/api/1.0', require('./app/routes'))

app.use(express.static(path.join(__dirname, '../angular-spotify-master/dist/spotify')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../angular-spotify-master/dist/spotify/index.html'));
});

app.listen(PORT, () => {
    console.log(`Tu API es http://localhost:${PORT}/api/1.0`)
    console.log(`Tu Angular está en http://localhost:${PORT}/`)
})