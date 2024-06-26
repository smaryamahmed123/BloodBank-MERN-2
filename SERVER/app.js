import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './router/auth-router.js';
import contactRouter from './router/contact-router.js'
import mongoDB from './utiles/db.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import DonerRouter from './router/Doner-router.js';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

const PORT = 3000 || process.env.PORT

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors())
app.use('/api/auth', router);
app.use('/api/form', contactRouter);
app.use('/api/forms', DonerRouter);
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back the React index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

mongoDB().then(()=>{
 app.listen(PORT, ()=>{
    console.log(`app is runinig on port http://localhost:${PORT}`)
})   
})
