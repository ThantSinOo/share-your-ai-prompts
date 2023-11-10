import mongoose from "mongoose";

let isConnected = false;

export const connectToDB =  async () =>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("Mongo DB is Connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share-prompt',
            useNewUrlParser: true,
            useUnifiedTopology : true
        })

        isConnected = true;
        console.log("Mongo DB Connected");
    }catch(err){
        console.log(err)
    }
}