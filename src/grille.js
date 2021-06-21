const main= document.querySelector("main");
const combPossible = [
    [0, 1, 2,],
    [3,4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [1, 4, 7,],
    [2, 5, 8,],
    [0, 4, 8,],
    [2, 4, 6],
];
const tabCercle=[]; // enregistre le coup d joeur
const cells = document.querySelectorAll(".case");

/*const affiCroix=(e)=>{
    e.target.classList.add("cross");
}*/

const affiCercle = (e) => {
     //const CI="circle";
     const Index= parseInt(e.target.id.substr(4));
     e.target.classList.add("circle");
  
     if(tabCercle[Index]==="player"){
        return
        
        };
   
    tabCercle[Index]="player";
        for (let i = 0; i< combPossible.length; i+=1) {
      
            if ( "player"===tabCercle[combPossible[i][0]]
                && "player"===tabCercle[combPossible[i][1]]
                && "player"===tabCercle[combPossible[i][2]]) {
                
              console.log("gangant");
               stop();
                
                const affiVictoire=document.createElement("div");
                affiVictoire.classList.add("modal"); // parceque c'est une classe 
                affiVictoire.tabIndex="-1";
                affiVictoire.innerHTML=` <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Bravo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>`;
              main.appendChild(affiVictoire);
              var myModal = new bootstrap.Modal(affiVictoire,{});
              myModal.show();
              toggle(btnPause,btnStart);
              disctGril();
              incrementPlayer();

            }
    
    }
     console.log(tabCercle);
}
const initGril= () =>{
    tabCercle.splice(0);
    cells.forEach(cell => {
        cell.classList.remove("circle","cross");
    });
    activGril();
}

const activGril = () => {
    cells.forEach(cell => {
        cell.addEventListener("click", affiCercle);

    });
}
const disctGril = () => {
    cells.forEach(cell => {
        cell.removeEventListener("click", affiCercle);
    })
}
btnStart.addEventListener("click", initGril);
btnPause.addEventListener("click", disctGril);
btnResume.addEventListener("click", activGril);


