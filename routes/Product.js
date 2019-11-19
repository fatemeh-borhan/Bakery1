const express = require('express')
const router = express.Router();
const Product= require("../models/Product");

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
            res.redirect("/list");
        
        })
        .catch(err=>console.log(`Error : ${err}`));
  
});
router.get("/list",(req,res)=>
 {

    Product.find()
     .then((product)=>{
       res.render("Product/productList",
        {
            lists:product
        });
    })
    .catch(err=>console.log(`Error : ${err}`));
});
router.get("/profile/:id",(req,res)=>{

    Product.findById(req.params.id)
    .then((product)=>{
        res.render("Product/productProfile",{
            productDocument:product
        })
    })
    .catch(err=>console.log(`Error : ${err}`));
})


//Route to direct user to the task profile page
router.get("/edit/:id",(req,res)=>{

    Product.findById(req.params.id)
    .then((product)=>{
        res.render("Product/productEditForm",{
            productDocument:product
        })
    })
    .catch(err=>console.log(`Error : ${err}`));
})


//Route to direct user to edit task form
router.put("/edit/:id",(req,res)=>
{
    Product.findById(req.params.id)
    .then((product)=>{

        product.title=req.body.title;
        product.description=req.body.description;
        product.price=req.body.price;
        product.quantity=req.body.quantity;

        product.save()

        .then(()=>{
           res.redirect("/list") 
        })
        .catch(err=>console.log(`Error : ${err}`));

    })
    .catch(err=>console.log(`Error : ${err}`));
});


module.exports=router;