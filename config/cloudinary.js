import {v2 as cloudinary } from "cloudinary"

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: "dtbl6c7cz",
        api_key:"512468919388923",
        api_secret:"JAthOS_0y2d1hBNCkwPmmLqT7iw"
    })

}

export default connectCloudinary;