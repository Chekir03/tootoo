
let scorePlayer;
let scoreCPU;
const initscore=()=>{
 scorePlayer=0;
 scoreCPU=0;
 const affiSpinner = $('<div>');
 affiSpinner.addClass("spinner-border");
 affiSpinner.attr("role", "status");
 affiSpinner.html(`<span class="sr-only"></span>`);
 $("main").append(affiSpinner);
 
const xhr= new XMLHttpRequest();
xhr.open("GET","https://api.jsonbin.io/b/60d32ba65ed58625fd177081/latest");
xhr.setRequestHeader("secret-key","$2b$10$5i2libenAGMl21d3Rk46zuWGx4G89RsnbRj0zuvjGQ35GO6Hlo41O");
xhr.onload=()=>{
   const data= JSON.parse(xhr.response);
    console.log(data);
    $("#scoreCPU").text(data.scoreCPU);
    $("#scorePlayer").text(data.scoreplayer);
    scoreCPU= data.scoreCPU;
    scorePlayer=data.scoreplayer ;
    $(".spinner-border").remove();
};
xhr.send();



};
const incrementPlayer=()=> {
    scorePlayer+=1;
 $("#scorePlayer").text(scorePlayer);
 const affiSpinner = $('<div>');
 affiSpinner.addClass("spinner-border");
 affiSpinner.attr("role", "status");
 affiSpinner.html(`<span class="sr-only"></span>`);
 $("main").append(affiSpinner);
  
let req= new XMLHttpRequest();
req.open("PUT","https://api.jsonbin.io/b/60d32ba65ed58625fd177081");
req.setRequestHeader("secret-key","$2b$10$5i2libenAGMl21d3Rk46zuWGx4G89RsnbRj0zuvjGQ35GO6Hlo41O");
req.setRequestHeader("Content-Type","application/json");
req.setRequestHeader("versioning","false");
req.onload=()=>{
$(".spinner-border").remove();
};

const data= {
  "scoreplayer": scorePlayer,
  "scoreCPU": scoreCPU,
     
};
req.send(JSON.stringify(data));

};


