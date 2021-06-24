const main = $("main");
let combPossible;
let tabCercle;
let cells;

const initgrille = () => {
  initTimer();
  initscore();
  combPossible = [
    [0, 1, 2,],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [1, 4, 7,],
    [2, 5, 8,],
    [0, 4, 8,],
    [2, 4, 6],
  ];

  tabCercle = [];
  cells = $(".case");

  btnStart.on("click", initGril);
  btnPause.on("click", disctGril);
  btnResume.on("click", activGril);


}

const affiCercle = (e) => {
  const target = $(e.target);
  const Index = parseInt(target.attr("id").substr(4));
  target.addClass("circle");
  if (tabCercle[Index] === "player") {
    return
  };
  tabCercle[Index] = "player";
  for (let i = 0; i < combPossible.length; i += 1) {
    if ("player" === tabCercle[combPossible[i][0]]
      && "player" === tabCercle[combPossible[i][1]]
      && "player" === tabCercle[combPossible[i][2]]) {
    affichModal("Bravo");
      stop();
  toggle(btnPause, btnStart);
      disctGril();
      incrementPlayer();
    }
  };
};

const affichModal = (result) => {
 const affiVictoire = $('<div>');
  affiVictoire.addClass("modal");
  affiVictoire.attr("tabIndex", "-1");
  affiVictoire.html(`<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">${result}</h5>
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
</div>`);
  $("main").append(affiVictoire);
  var myModal = new bootstrap.Modal(affiVictoire, {});
  myModal.show();
};

const initGril = () => {
  tabCercle.splice(0);
  cells.each((index, cell) => {
    const celljquery = $(cell);
    celljquery.removeClass("circle", "cross");
  });
  activGril();
};

const activGril = () => {
  cells.each((index, cell) => {
    const celljquery = $(cell);
    celljquery.on("click", affiCercle);

  });
};

const disctGril = () => {
  cells.each((index, cell) => {
    const celljquery = $(cell);
    celljquery.off("click", affiCercle);
  })
};



