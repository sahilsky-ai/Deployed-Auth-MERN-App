const express = require("express");
require('dotenv').config();
require('./db');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')
const bodyparser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 8001;


app.use(bodyparser.json());
app.use(cors());
app.use('/auth', AuthRouter );
app.use('/products', ProductRouter );

app.get("/", (req,res) =>
{
    res.send("hello world")
})

app.listen(PORT, () =>{
    console.log(`Server started at ${PORT}`);
    
})