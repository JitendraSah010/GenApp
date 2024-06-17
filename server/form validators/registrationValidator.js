import {z} from 'zod';

const signupSchemaValidator = z.object({
    userName: z
    .string( {required_error: "UserName is required"} )
    .trim()
    .min(3, { message: "Username must be atleast 3 characters" })
    .max(150, { message: " Username must be less than 150 characters" } )
    .regex(/^[a-zA-Z0-9]*$/, { message: "Username must contain only alphabets and numbers (no space)" }),

    name: z
    .string( {required_error: "Name is required"} )
    .trim()
    .min(3, { message: " Name must be atleast 3 characters" })
    .max(150, { message: " Name must be less than 150 characters" } )
    .regex(/^[a-zA-Z\s]*$/, { message: "Name must contain only alphabets" }),

    email : z
    .string( {required_error: "email is required"} )
    .trim()
    .email( { message: "Invalid Email" } )
    .min(3, { message: "Email must be atleast 11 characters" })
    .max(150, { message: "Email must be less than 150 characters" } ),

    phone: z
    .string( {required_error:"phone number is required"} )
    .trim()
    .regex(/^[0-9]*$/, { message: "Phone number must contain only numbers" })
    .min(10, { message: " Phone number atleast be 10 digit" })
    .max(10, { message: " Phone number must be 10 digit" } ),

    password: z
    .string( {required_error:"password is required"} )
    .trim()
    .min(8, { message: "password must be atleast 8 characters" })
    .max(150, { message: "password must be less than 150 characters" } ),
})

export default signupSchemaValidator;
