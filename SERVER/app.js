import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './router/auth-router.js';
import contactRouter from './router/contact-router.js'
import mongoDB from './utiles/db.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import DonerRouter from './router/Doner-router.js';

const app = express();

const PORT = 3000 || process.env.PORT

app.use(express.json());
app.use(cors())
app.use('/api/auth', router);
app.use('/api/form', contactRouter);
app.use('/api/forms', DonerRouter);
app.use(bodyParser.json());


mongoDB().then(()=>{
 app.listen(PORT, ()=>{
    console.log(`app is runinig on port http://localhost:${PORT}`)
})   
})
