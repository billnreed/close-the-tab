const modes = {
  CLASSIC: {
    name: 'classic',
    numberOfTiles: 9,
    numberOfDice: 2,
    numberOfFaces: 6
  },
  BRIAN: {
    name: 'brian',
    numberOfTiles: 13,
    numberOfDice: 3,
    numberOfFaces: 9
  }
}

if (localStorage.debug == "true") {
  modes.TEST = {
    name: 'test',
    numberOfTiles: 1,
    numberOfDice: 1,
    numberOfFaces: 1
  };
}

export default modes;
