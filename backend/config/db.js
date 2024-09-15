import mongoose from "mongoose";

export const connectDB = async()=>{
    (await mongoose.connect('mongodb+srv://srnithin04:dtEUTyZB5OsJr79M@cluster0.gonmk.mongodb.net/food-del').then(()=>console.log('DataBase is connected')));
}
