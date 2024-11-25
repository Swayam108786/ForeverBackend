import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    await mongoose.connect(`mongodb+srv://swayam:swayam@swayamcloud.9fhbp.mongodb.net/e-commerce`)

}

export default connectDB;