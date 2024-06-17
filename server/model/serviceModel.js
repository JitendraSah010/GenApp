import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema( {
    technology : {
        type : String,
        required : true
    },
    examples : {
        type : [String],
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }
} );

const serviceModel = new mongoose.model("service", serviceSchema);
export default serviceModel;