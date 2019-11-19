const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>
{
    res.render("Product/productDashboard")
});
router.get("/add",(req,res)=>
{
    res.render("Product/productAddForm")
});

module.exports=router;