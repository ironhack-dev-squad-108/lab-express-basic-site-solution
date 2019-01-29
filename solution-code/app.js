const express = require('express')

const app = express()

// Everything in public can be access (example: http://localhost:3000/images/space1.jpg)
// Example:
app.use(express.static('public'))

// Route: GET /
app.get('/', (req,res) => {
  // The response is the file '/views/home.html'
  res.sendFile(__dirname + '/views/home.html')
})

// Route: GET /about
app.get('/about', (req,res) => {
  res.sendFile(__dirname + '/views/about.html')
})

// Route: GET /gallery
app.get('/gallery', (req,res) => {
  res.sendFile(__dirname + '/views/gallery.html')
})


// Launch the server on port 3000
app.listen(3000, () => {
  console.log("Server launched and accessible on http://localhost:3000/")
})