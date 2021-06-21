

const btnStart= document.querySelector("#timerStart");
const btnPause= document.querySelector("#timerPause");
const btnResume= document.querySelector("#timerResume");
const playTime=document.querySelector("#timerTime");
let IdfInterval=0;
let date=0;

const toggle=(disappear,appear)=>{
        disappear.classList.add("d-none");
        disappear.classList.remove("d-block");
        appear.classList.add("d-block");
        appear.classList.remove("d-none");
};


const increment = ()=>{
    playTime.innerHTML= date.toISOString().substr(14,5);
    date.setSeconds(date.getSeconds()+1);
  
};

const start=()=>{
    date=new Date(0);
    increment();
    toggle(btnStart,btnPause);
    IdfInterval= setInterval(increment,1000);

};



const pause=()=>{
    toggle(btnPause,btnResume);
    clearInterval(IdfInterval);
    
};
const resume=()=>{
    toggle(btnResume,btnPause);
    IdfInterval=setInterval(increment,1000);

};
const stop=()=>{
    clearInterval(IdfInterval);
}

btnStart.addEventListener("click",start);
btnPause.addEventListener("click",pause);
btnResume.addEventListener("click",resume);






