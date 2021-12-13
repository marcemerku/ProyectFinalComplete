const express= require('express');
const app= express();

const info = require('../../config/cardlegends.json');
app.use(express.json());
var ID1=0, ID2=5,ID3=4;


const Next = () => {
    console.log(ID1);
    
  }



const renderabout= (req,res)=>{

    res.render('pages/index');
};
const renderlegends= (req,res)=>{
    ID3++;
    res.render('pages/legends',{info,ID1,ID2,ID3});
};
const rendermaps= (req,res)=>{

    res.render('pages/maps');
};
const renderprofile= (req,res)=>{

    res.render('pages/profile');
};
const renderrequirement= (req,res)=>{

    res.render('pages/requirement');
};
const renderseasson= (req,res)=>{

    res.render('pages/seasson');
};
const rendersetting= (req,res)=>{

    res.render('pages/setting');
};

module.exports= {
    renderabout,
    renderlegends,
    rendermaps,
    renderprofile,
    renderrequirement,
    renderseasson,
    rendersetting
};