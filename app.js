const express = require('express');
const app = express();
app.get('/home', (req, res) => {
    res.send('Git project');
});
app.listen(3000);