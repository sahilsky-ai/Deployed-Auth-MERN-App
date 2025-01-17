const mongoose = require('mongoose');

const url = process.env.MONGO_CONN;

mongoose.connect(url)
.then(() => {
    console.log('MongoDB Connected ...');
}).catch((err) => {
console.log('MongoDB connection Error: ', err);

})
    

