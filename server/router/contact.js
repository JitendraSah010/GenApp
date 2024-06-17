import express from "express";
import submitContactForm from "../controllers/contactForm_controller.js";

const router = express.Router();

router.get('/', (req,res)=>{
    res.json( 'This is contact form' );
} );

router.post('/submit', submitContactForm); 


export default router;

