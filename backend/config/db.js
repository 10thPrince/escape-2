import mongoose from "mongoose";
import colors from '@colors/colors'

const dbConnect = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);

        console.log(colors.yellow(`Database connected: ${connect.connection.host}, ${connect.connection.name}`));

    }catch(err){
        console.log(err)
        process.exit(1);
    }
}

export default dbConnect