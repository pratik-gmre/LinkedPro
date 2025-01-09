import dotenv from "dotenv"
dotenv.config()


import express from 'express'
import http from 'http'
import cors from 'cors';
import { Server } from "socket.io";
import router from './routes/authRoute.js';
import { connectToMongo } from "./utlis/db.js";
import cookieParser from "cookie-parser";
import { router as userRouter } from "./routes/userRoute.js";
import { postRouter } from "./routes/postRouter.js";
import { upload } from "./utlis/multer.js";
import  cloudinary  from "./utlis/multer.js";
import { cloudinaryRoute } from "./routes/cloudinaryRoute.js";
import { router as networkRouter } from "./routes/networkRoute.js";




const app = express()
app.use(express.json({limit:"50mb"}))
app.use(cookieParser() )
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))





const port  =process.env.PORT || 8080;
app.use('/api/auth',router)
app.use('/api/user',userRouter)
app.use('/api/post',postRouter)
app.use('/api',networkRouter)
const server = http.createServer(app)


app.use('/api/upload',cloudinaryRoute)




export const io= new Server(server,{ 
    cors:{ 
        origin:"http://localhost:5173",
        credentials:true
    }
})


io.on("connnection",(socket)=>{ 
    console.log("user connected",socket.id);


    socket.on("register",(user)=>{ 
        socket.user=user
    })
})

connectToMongo().then(()=>( 

server.listen(port,()=>{ 
    console.log(`server is running on  ${port}`)
   })
)).catch(()=>{ 
    console.log("db not connected");
})


