const app=require("./index");
const connect=require("./configue/db");

app.listen(5000, async()=>{
    try{
        await connect();
        console.log("connecting to port 5000")
    }
    catch(err){
        console.error(err.message)
    }
    
})