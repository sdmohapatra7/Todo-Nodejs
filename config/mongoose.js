const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

//error
db.on('error', function (err) { console.log(err.message); });

//up and running then print the message
db.once('open', function () {

    console.log("Successfully connected to the database");

});