const express= require('express');
const app=express();
const routes= require('./routes/Apexroutes');
const path= require('path');
ID1=0;


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use("/",routes);

const Next = () => {
    console.log(ID1);
    
  }
app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000")
});