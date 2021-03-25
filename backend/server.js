const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exerciseRouter=require('./routes/exercises');
const userRouter=require('./routes/users');



require('dotenv').config();
const app=express();
const port=process.env.port || 5000;


// Connect backend to mongodb
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology: true
}
);

const connection=mongoose.connection;
connection.once('open',function (){
  console.log("Mongodb connected");
});

app.use(express.json());
app.use(cors());


app.use('/users',userRouter);
app.use('/exercises',exerciseRouter);

if(process.env.NODE_ENV=="production"){
  app.use(express.static('./build'));
  const path=require('path')
  app.get("*",function(req,res) {
    res.sendFile(path.resolve(__dirname,'.','build','index.html'));
  })
}
app.listen(port,function () {
  console.log(`Server is running on port:${port}`);
})
