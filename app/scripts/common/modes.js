const modes = {
  CLASSIC: {
    numberOfTiles: 9,
    numberOfDice: 2,
    numberOfFaces: 6
  },
  BRIAN: {
    numberOfTiles: 13,
    numberOfDice: 3,
    numberOfFaces: 9
  }
}

if (localStorage.debug == "true") {
  modes.TEST = {
    numberOfTiles: 1,
    numberOfDice: 1,
    numberOfFaces: 1
  };
}

export default modes;
