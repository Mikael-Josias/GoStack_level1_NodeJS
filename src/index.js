const express = require('express');

const app = express();

app.get('/', (require, response) => {
    return response.json({message: 'Hello World'});
});

app.listen(3333);