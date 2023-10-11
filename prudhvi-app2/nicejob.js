const express = require('express')
const app = express()
const port = 3000

app.get('/nicejob', (req, res) => {
  res.send("This is prudhvi's nicejob!")
})

app.listen(port, () => {
  console.log(`prudhvi app listening on port ${port}`)
})
