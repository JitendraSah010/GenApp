import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    userName : { type : String, required : true },
    name : { type : String, required : true },
    email : { type : String, required : true },
    phone : { type : String, required : true },
    message : { type : String, required : true }
})

const ContactModel = new mongoose.model( "Contact", contactSchema );

export default ContactModel;