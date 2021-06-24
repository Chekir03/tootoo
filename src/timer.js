

let btnStart;
let btnPause;
let btnResume;
let playTime;
let IdfInterval;
let date;

const initTimer= ()=>{
    btnStart= $("#timerStart");
    btnPause= $("#timerPause");
    btnResume= $("#timerResume");
    playTime= $("#timerTime");
    IdfInterval=0;
    date=0;
    
    btnStart.on("click",start);
    btnPause.on("click",pause);
    btnResume.on("click",resume);

}
 
const toggle=(disappear,appear)=>{
        disappear.addClass("d-none");
        disappear.removeClass("d-block");
        appear.addClass("d-block");
        appear.removeClass("d-none");
};


const increment = ()=>{ 
    playTime.text(date.toISOString().substr(14,5));
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








