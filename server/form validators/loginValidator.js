import {z} from 'zod';

const loginValidator = z.object({
    userName: z
    .string( {required_error: "UserName is required"} )
    .trim()
    .min(3, { message: "Username must be atleast 3 characters" })
    .max(150, { message: " Username must be less than 150 characters" } )
    .regex(/^[a-zA-Z0-9]*$/, { message: "Username must contain only alphabets and numbers (no space)" }),

    email : z
    .string( {required_error: "email is required"} )
    .trim()
    .email( { message: "Invalid Email" } )
    .min(3, { message: "Email must be atleast 11 characters" })
    .max(150, { message: "Email must be less than 150 characters" } ),

    password : z
    .string( { required_error: " password is required " } )
})

export default loginValidator;