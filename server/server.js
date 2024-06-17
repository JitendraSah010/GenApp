import express from 'express';
import dotenv  from 'dotenv';
import authRouter from './router/auth.js';
import contactRouter from './router/contact.js';
import serviceRouter from './router/service.js';
import connectDB from './connectDB/db.js';
import errorMiddleware from './middleware/error_middleware.js';
import cors from 'cors';

const app = express();

const corsOption = {
    origin: 'http://localhost:5173',
    methods: " GET, POST, DELETE, PUT, PATCH, HEAD ",
    credentials : true
}

app.use(cors(corsOption));

dotenv.config();
app.use(express.json());


//router
app.use('/auth', authRouter);
app.use('/contact', contactRouter);
app.use('/service', serviceRouter);




app.get('/', (req,res)=>{
    res.status(200).send( '<h1>Backend server is running</h1>' );
})


app.use(errorMiddleware);           // this must be here just above the server starting

const PORT = process.env.PORT || 3000;

connectDB().then( ()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`);
    } );
} )