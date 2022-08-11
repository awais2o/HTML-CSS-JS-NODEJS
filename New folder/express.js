const express = require('express')
const app = express();
const port = 80;
app.get('/', (req, res) => {
    res.send('index opened')
}
)
app.get('/school', (req, res) => {
    res.send('school opened')
}
)
app.listen(port)