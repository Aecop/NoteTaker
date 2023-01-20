const express = require('express');
const apiRoute = require('./routes/apiRoute/');
const htmlRoute = require('./routes/htmlRoute/');

const app = express();
const PORT = process.env.PORT || 3001;

//Parse JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'))

//use api route
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});