const express = require('express');
const apiRoute = require('./routes/apiRoute/noteRoute');
const htmlRoute = require('./routes/htmlRoute/index');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});