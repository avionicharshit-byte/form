import mongoose from "mongoose";
import app from "./app.cjs"

(async ()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/formsetup")
       console.log("DB Connected");

       const onListening =() =>{
        console.log("Listening on port 8000");

       }
       app.listen(5000, onListening);
        
    } catch (error) {
        console.error("error:" ,error);
        throw err;
        
    }

})()