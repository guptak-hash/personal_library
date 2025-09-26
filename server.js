const express = require('express');
const libraryRouter = require('./routes/library.route')

const app = express();

app.use(express.json());  // sense incoming json 

app.use('/library',libraryRouter);

// undefined route
app.use((req,res)=>{
    res.json({msg:'Undefined route'})
})


// test route
app.use('/test',(req,res)=>{
    res.json({msg:'Test route'})
})

app.listen(8000,()=>{
    console.log('Server started at port 8000')
})