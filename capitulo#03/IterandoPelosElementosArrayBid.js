function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

let avarageTemp = [];
avarageTemp[0] = [72,75.79,79,81,81];
avarageTemp[1] = [81,79,75,73,73];

// Dia 1
avarageTemp[0][0] = 72; 
avarageTemp[0][1] = 75;
avarageTemp[0][2] = 79;
avarageTemp[0][3] = 79;
avarageTemp[0][4] = 81;
avarageTemp[0][5] = 81;
// Dia 2
avarageTemp[1][0] = 72; 
avarageTemp[1][1] = 75;
avarageTemp[1][2] = 79;
avarageTemp[1][3] = 79;
avarageTemp[1][4] = 81;
avarageTemp[1][5] = 81;

printMatrix(avarageTemp);
