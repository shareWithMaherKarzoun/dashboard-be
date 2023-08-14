import "dotenv/config";
import app from './app';

app.listen(process.env.PORT,()=>{
    console.log("DASHBOARD SERVER IS RUNNING on the port : "+process.env.PORT)
    
})
