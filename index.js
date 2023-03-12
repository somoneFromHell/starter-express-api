const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('ok thats how it shuld work')
})
app.listen(process.env.PORT || 3000)