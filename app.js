const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require('method-override');

require("dotenv").config({path:'./config/keys.env'});
const productRoutes = require("./routes/Product");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use("/",productRoutes);
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");


const MONGO_DB_URL =`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@fatemeh-symtc.mongodb.net/${process.env.MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority`;
//const MONGO_DB_URL =`mongodb+srv://fbrhan:Salsa!193@fatemeh-symtc.mongodb.net/Bakery?retryWrites=true&w=majority`;
//const DBURL= "mongodb+srv://fbrhan:Salsa!193@fatemeh-symtc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGO_DB_URL, {useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{

    console.log(`You have successfully connected to your mongoDB database`);
})
.catch(err=>{
    console.log(`Sorry, something occured :${err}`);
});


const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
    console.log(`Your Web Server has been connected`);
    
});