const express = require('express')
const app = express()
app.get('/',async(req,res)=>{
    res.send('star ......')
})
app.listen(3001,()=>{
    console.log("sever is listen at 3001")
}
)