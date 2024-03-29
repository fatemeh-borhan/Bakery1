const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title:  
  {
      type:String,
      required:true
  },
  price :  
  {
      type:Number,
      required:true
  },
 
  description:  
  {
      type:String,
      required:true
  },
  quantity:
  {
    type:Number,
    required:true

  },

  taxable : {
    type=Boolean,
    //required:true
  },

  dateCreated :
  {
      type:Date,
      default: Date.now()
  }

});

const productModel =mongoose.model("Product",productSchema);

module.exports=productModel;