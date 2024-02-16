const express = require('express')
const app = express()
const port = 3000

app.get('/a', (req, res) => {
  res.send('First: A, updated!')
})

app.get('/b', (req, res) => {
    res.send('First: B!')
  })
  

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})