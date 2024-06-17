import ContactModel from "../model/contactModel.js";

const submitContactForm = async (req, res)=>{
    try {

        const contactFormData = req.body;
        await ContactModel.create( contactFormData )
        res.status(200).json( {message: "Contact form submitted successfully"} );
        } catch (error) {
        console.log("at back",error);
        res.status(400).json({message: "Form not submitted. Try again"})

    }
}

export default submitContactForm;