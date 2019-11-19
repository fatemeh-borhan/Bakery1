const express = require('express')
const router = express.Router();
const Task = require("../models/Product");

router.get("/",(req,res)=>
{
    res.render("Product/productDashboard")
});
router.get("/add",(req,res)=>
{
    res.render("Product/productAddForm")
});

router.post("/add",(req,res)=>
{
    const newProduct=
    {
        title:req.body.title,
        description : req.body.description,
        price : req.body.price,
        quantity : req.body.quantity,
        taxable : req.body.taxable
    }

    
        const product = new Product(newProduct)
        product.save()
        .then(()=>{
            console.log(`Product was added to the database`);
            console.log(`${product}`);
            res.redirect("/Product/list");
        
        })
        .catch(err=>console.log(`Error : ${err}`));
  
});

module.exports=router;