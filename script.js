const gamePlayObj = {
  preGame: function () {
    const game = document.querySelector(`.game`);
    const pregameSection = document.querySelector(`.pre-game`);
    const tutorialSection = document.querySelector(`.tutorialSection`);
    const sizeSection = document.querySelector(`.select-size`);
    const tutorialBtn = document.querySelector(`#checkbox2`);
    const startBtn = document.querySelector(`#checkbox1`);
    const sizeBtn = document.querySelector(`#checkbox3`);
    tutorialBtn.addEventListener(`change`, (e) => {
      e.target.checked
        ? (tutorialSection.style.display = `unset`)
        : (tutorialSection.style.display = `none`);
    });
    sizeBtn.addEventListener(`change`, (e) => {
      sizeSection.addEventListener(`change`, (e) => {
        switch (e.target.id) {
          case `small`:
            gamePlayObj[`size`] = 100;
            gamePlayObj.reset();
            break;
          case `medium`:
            gamePlayObj[`size`] = 200;
            break;
          case `large`:
            gamePlayObj[`size`] = 400;
            gamePlayObj.reset();
            break;
        }
      });
      e.target.checked
        ? (sizeSection.style.display = `unset`)
        : (sizeSection.style.display = `none`);
    });
    startBtn.addEventListener(`change`, function (e) {
      if (e.target.checked) {
        pregameSection.style.display = `none`;
        game.style.display = `flex`;
      }
    });
  },
  reset: function () {
    const gridArr = document.querySelectorAll(`.grid div`);
    gridArr.forEach((e) => {
      e.remove();
    });
    gamePlayObj.genGame.constructGrid();
    gamePlayObj.genGame.gridGen();
    gamePlayObj.genGame.landScapeGen();
  },
  mediaQuerry: function () {
    const windowSize = window.innerWidth;
    const reset = document.querySelector(`.reset`);
    const game = document.querySelector(`.game`);
    if (windowSize < 600) {
      reset.remove();
      game.appendChild(reset);
    }
  },
  genGame: {
    gamePrep: function () {
      gamePlayObj[`ground`] = document.querySelector(`#ground`);
      gamePlayObj[`leaves`] = document.querySelector(`#leaves`);
      gamePlayObj[`tree`] = document.querySelector(`#tree`);
      gamePlayObj[`rock`] = document.querySelector(`#rock`);
      gamePlayObj[`grass`] = document.querySelector(`#grass`);
      gamePlayObj[`size`] = 200;
      gamePlayObj[`chosenAction`] = `false`;
    },
    constructGrid: function () {
      const gridSection = document.querySelector(`.grid`);
      const screen = document.querySelector(`.screen`);
      switch (gamePlayObj.size) {
        case 400:
          gridSection.style.width = `100rem`;
          screen.style.overflowX = `scroll`;
          gridSection.style.gridTemplateColumns = `repeat(20, 1fr)`;
          break;
      }
      for (v = 0; v < gamePlayObj.size; v++) {
        gridSection.appendChild(document.createElement(`div`));
      }
    },
    gridGen: function () {
      let grid = document.querySelectorAll(`.grid div`);
      if (gamePlayObj.size === 100 || gamePlayObj.size === 200) {
        for (let r = 0; r < grid.length; r++) {
          if (r < grid.length * 0.6 + 20 && r > grid.length * 0.6 + 9) {
            grid[r].classList = `grass`;
          } else if (r > grid.length * 0.6 + 9) {
            grid[r].classList = `ground`;
          } else {
            grid[r].classList = `sky`;
          }
        }
      } else {
        if (gamePlayObj.size === 400) {
          for (let r = 0; r < grid.length; r++) {
            if (r < grid.length * 0.6 + 20 && r > grid.length * 0.6 - 1) {
              grid[r].classList = `grass`;
            } else if (r > grid.length * 0.6 + 9) {
              grid[r].classList = `ground`;
            } else {
              grid[r].classList = `sky`;
            }
          }
        }
      }
    },
    landScapeGen: function () {
      let sky = document.querySelectorAll(`.sky`);
      let selectedObj;
      selectedObj = {
        tree: [
          sky[sky.length - 3],
          sky[sky.length - 13],
          sky[sky.length - 23],
          sky[sky.length - 33],
        ],
        leaf: [
          sky[sky.length - 22],
          sky[sky.length - 24],
          sky[sky.length - 32],
          sky[sky.length - 33],
          sky[sky.length - 34],
          sky[sky.length - 42],
          sky[sky.length - 43],
          sky[sky.length - 44],
          sky[sky.length - 52],
          sky[sky.length - 53],
          sky[sky.length - 54],
        ],
        rock: [
          sky[sky.length - 8],
          sky[sky.length - 7],
          sky[sky.length - 17],
          sky[sky.length - 18],
          sky[sky.length - 27],
          sky[sky.length - 28],
        ],
      };
      if (gamePlayObj.size === 400) {
        selectedObj.leaf.push(sky[sky.length - 62]);
        selectedObj.leaf.push(sky[sky.length - 63]);
        selectedObj.leaf.push(sky[sky.length - 64]);
        selectedObj.leaf.push(sky[sky.length - 72]);
        selectedObj.leaf.push(sky[sky.length - 73]);
        selectedObj.leaf.push(sky[sky.length - 74]);
        selectedObj.rock.push(sky[sky.length - 37]);
        selectedObj.rock.push(sky[sky.length - 38]);
        selectedObj.rock.push(sky[sky.length - 47]);
        selectedObj.rock.push(sky[sky.length - 48]);
      }
      selectedObj.tree.forEach((e) => {
        e.classList = "tree";
      });
      selectedObj.leaf.forEach((e) => {
        e.classList = "leaves";
      });
      selectedObj.rock.forEach((e) => {
        e.classList = "rock";
      });
      gamePlayObj[`map`] = document.querySelectorAll(`.grid div`);
    },
    genGame: function () {
      this.gamePrep();
      this.constructGrid();
      this.gridGen();
      this.landScapeGen();
    },
  },
  gamePlay: {
    collect: {
      actionPick: function () {
        let side = document.querySelector(`.sidebar`);
        let divArr = document.querySelectorAll(`.sidebar div`);
        side.addEventListener(`click`, (e) => {
          switch (e.target.id) {
            case `axe`:
              gamePlayObj[`chosenAction`] = document.querySelector(`#axe`);
              break;
            case `shovel`:
              gamePlayObj[`chosenAction`] = document.querySelector(`#shovel`);
              break;
            case `pickaxe`:
              gamePlayObj[`chosenAction`] = document.querySelector(`#pickaxe`);
              break;
            case `ground`:
              gamePlayObj[`chosenAction`] = document.querySelector(`#ground`);
              break;
            case `leaves`:
              gamePlayObj[`chosenAction`] = document.querySelector(`#leaves`);
              break;
            case `rock`:
              gamePlayObj[`chosenAction`] = document.querySelector(`#rock`);
              break;
            case `grass`:
              gamePlayObj[`chosenAction`] = document.querySelector(`#grass`);
              break;
            case `tree`:
              gamePlayObj[`chosenAction`] = document.querySelector(`#tree`);
              break;
          }
          divArr.forEach((e) => {
            e.style.border = `2px solid black`;
          });
          gamePlayObj.chosenAction.style.border = `4px solid red`;
        });
      },
      elementPick: function () {
        document.querySelector(`.grid`).addEventListener(`click`, (e) => {
          switch (e.target.classList.value) {
            case `ground`:
              switch (gamePlayObj.chosenAction.id) {
                case `shovel`:
                  e.target.classList.value = `sky`;
                  gamePlayObj.ground.textContent++;
                  break;
                case `axe`: {
                  e.target.classList.add(`wrong-choice`);
                  break;
                }
                case `pickaxe`: {
                  e.target.classList.add(`wrong-choice`);
                  break;
                }
                case `false`: {
                  break;
                }
              }
              break;
            case `grass`:
              switch (gamePlayObj.chosenAction.id) {
                case `shovel`:
                  e.target.classList.value = `sky`;
                  gamePlayObj.grass.textContent++;
                  break;
                case `axe`: {
                  e.target.classList.add(`wrong-choice`);
                  break;
                }
                case `pickaxe`: {
                  e.target.classList.add(`wrong-choice`);
                  break;
                }
                case `false`: {
                  break;
                }
              }
              break;
            case `rock`:
              switch (gamePlayObj.chosenAction.id) {
                case `shovel`:
                  e.target.classList.add(`wrong-choice`);
                  break;
                case `axe`: {
                  e.target.classList.add(`wrong-choice`);
                  break;
                }
                case `pickaxe`: {
                  e.target.classList.value = `sky`;
                  gamePlayObj.rock.textContent++;
                  break;
                }
                case `false`: {
                  break;
                }
              }
              break;
            case `tree`:
              switch (gamePlayObj.chosenAction.id) {
                case `shovel`:
                  e.target.classList.add(`wrong-choice`);
                  break;
                case `axe`: {
                  e.target.classList.value = `sky`;
                  gamePlayObj.tree.textContent++;
                  break;
                }
                case `pickaxe`: {
                  e.target.classList.add(`wrong-choice`);
                  break;
                }
                case `false`: {
                  break;
                }
              }
              break;
            case `leaves`:
              switch (gamePlayObj.chosenAction.id) {
                case `shovel`:
                  e.target.classList.add(`wrong-choice`);
                  break;
                case `axe`: {
                  e.target.classList.value = `sky`;
                  gamePlayObj.leaves.textContent++;
                  break;
                }
                case `pickaxe`: {
                  e.target.classList.add(`wrong-choice`);
                  break;
                }
                case `false`: {
                  break;
                }
              }
              break;
            case `sky`:
              switch (gamePlayObj.chosenAction.id) {
                case `shovel`:
                  break;
                case `axe`: {
                  break;
                }
                case `pickaxe`: {
                  break;
                }
                case `false`: {
                  break;
                }
              }
          }
        });
      },
      collect: function () {
        this.actionPick();
        this.elementPick();
      },
    },
    build: function () {
      document.querySelector(`.grid`).addEventListener(`click`, (e) => {
        switch (e.target.classList.value) {
          case `sky`:
            switch (gamePlayObj.chosenAction.id) {
              case `ground`:
                if (gamePlayObj.ground.textContent > 0) {
                  e.target.classList.value = `ground`;
                  gamePlayObj.ground.textContent--;
                }
                break;
              case `grass`:
                if (gamePlayObj.grass.textContent > 0) {
                  e.target.classList.value = `grass`;
                  gamePlayObj.grass.textContent--;
                }
                break;
              case `leaves`:
                if (gamePlayObj.leaves.textContent > 0) {
                  e.target.classList.value = `leaves`;
                  gamePlayObj.leaves.textContent--;
                }
                break;
              case `tree`:
                if (gamePlayObj.tree.textContent > 0) {
                  e.target.classList.value = `tree`;
                  gamePlayObj.tree.textContent--;
                }
                break;
              case `rock`:
                if (gamePlayObj.rock.textContent > 0) {
                  e.target.classList.value = `rock`;
                  gamePlayObj.rock.textContent--;
                }
                break;
            }
        }
      });
    },
    gamePlay: function () {
      this.collect.collect();
      this.build();
    },
  },
};

function lunchWebsite() {
  gamePlayObj.preGame();
  gamePlayObj.genGame.genGame();
  gamePlayObj.gamePlay.gamePlay();
  gamePlayObj.mediaQuerry();
  const reset = document.querySelector(`.reset`);
  reset.addEventListener(`click`, () => {
    gamePlayObj.reset();
  });
}

lunchWebsite();
