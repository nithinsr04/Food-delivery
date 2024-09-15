import foodModel from "../models/foodModel.js";
import fs from 'fs';



// add food items


const addFood = async(req,res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    
    try {
        await food.save();
        res.json({success:true,message:"Food Added"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Couldn't upload the food, please try again!!",data:error});
    }

}

// all food items
const foodList = async(req,res) =>{
    try {
        const  foods = await foodModel.find({});
        res.json({success:true,data:foods});        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"foodlist couldn't be loaded"})
    }
}

// remove food item

const removeFood = async(req,res) => {
    try {
        // const food = await foodModel.findById(req.body.id);
        const food  = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Couldn't find the item!!"});
    }
}

export {addFood,foodList,removeFood};