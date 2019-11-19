const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/Product");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use("/",productRoutes);
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
    console.log(`Your Web Server has been connected`);
    
});