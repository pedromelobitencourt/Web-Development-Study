const express = require('express');
const app = express();

// It will parse the request body and it will let available 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); // To get the body

app.post('/users', (req, res) => {
    console.log(req.body); // We'll get { namee: 'input' }; name because 'name="namee"'
    res.send("<h1>Congratulations!</h1>"); // The page will load this
});

app.listen(3003);