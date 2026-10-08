import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
const app = express();

dotenv.config();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/test', (req,res) => {
    res.send('hhhh');
})
app.use('/api', authRoutes)



startServer();
function startServer(){
    try {
      
        app.listen(process.env.PORT, () => {
            console.log("server in on 3000", process.env.PORT)
        })
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}


