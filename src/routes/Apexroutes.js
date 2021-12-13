const express= require('express');
const routes=express.Router();
var ID1=0;

const {
    renderabout,
    renderlegends,
    rendermaps,
    renderprofile,
    renderrequirement,
    renderseasson,
    rendersetting
} =require('../controllers/Apexcontrollers')
console.log(ID1);
const Next = () => {
    console.log(ID1);
    
  }

routes.get("/about",renderabout);
routes.get("/legends",renderlegends);
routes.get("/maps",rendermaps);
routes.get("/profile",renderprofile);
routes.get("/requirement",renderrequirement);
routes.get("/seasson",renderseasson);
routes.get("/setting",rendersetting);

module.exports= routes;