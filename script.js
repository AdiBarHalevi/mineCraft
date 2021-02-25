function preGame(game) {
  const pregameSection = document.querySelector(`.pre-game`);
  const tutorialSection = document.querySelector(`.tutorialSection`);
  const tutorialBtn = document.querySelector(`#checkbox2`);
  const startBtn = document.querySelector(`#checkbox1`);
  tutorialBtn.addEventListener(`change`, (e) => {
    e.target.checked
      ? (tutorialSection.style.display = `unset`)
      : (tutorialSection.style.display = `none`);
  });
  startBtn.addEventListener(`change`, function (e) {
    if (e.target.checked) {
        pregameSection.style.display = `none`
        game.style.display = `flex`
    }
  });
}

function gridGen() {
    let grid = document.querySelectorAll(`.innerDiv`);
    for (let r = 0; r < grid.length; r++) {
      if (r < grid.length-20 && r > grid.length-31) {
        grid[r].classList = `grass`;
      } else if (r > grid.length-30) {
        grid[r].classList = `ground`;
      } else {
        grid[r].classList = `sky`;
      }
    }
  }

function landScapeGen(){
    let sky = document.querySelectorAll(`.sky`)
    let selectedObj = {
    tree:[sky[sky.length-3],sky[sky.length-13],sky[sky.length-23]],
    leaf:[sky[sky.length-22],sky[sky.length-24],
        sky[sky.length-32],sky[sky.length-33],sky[sky.length-34],
        sky[sky.length-42],sky[sky.length-43],sky[sky.length-44]],
    rock:[sky[sky.length-7],sky[sky.length-6],sky[sky.length-17],sky[sky.length-16],sky[sky.length-27]]
}
    selectedObj.tree.forEach((e)=>{e.classList = "tree"})
    selectedObj.leaf.forEach((e)=>{e.classList = "leaves"})
    selectedObj.rock.forEach((e)=>{e.classList = "rock"})

}




function lunchWebsite(preGame) {
    const game = document.querySelector(`.game`);
    preGame(game);
    gridGen()
    landScapeGen()
  }

lunchWebsite(preGame);

