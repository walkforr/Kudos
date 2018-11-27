const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

const MONGDOB_URI = process.env.MONGDOB_URI || 'mongodb://localhost/kudos';
mongoose.connect(MONGDOB_URI, { useNewUrlParser: true });

require('./routes/api-routes')(app);

app.listen(PORT, function() {
    console.log(`App running on PORT ${PORT}`);
});