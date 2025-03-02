import express from 'express';
import userRouter from './Routes/userRoutes.js';
import cors from 'cors'
const app=express();
app.use(express.json())

app.use(cors({
  origin: '*', // allow all origins
  credentials: true, // allow cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // allow these methods
  allowedHeaders: ['Content-Type', 'Authorization']  // allow these headers in requests
 
}))
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/auth',userRouter)

app.listen(8080,
    console.log("Server listing at PORT 8080")
)