const matrix3X3X3 = [];
for (let i = 0; i < 3; i++) {
  matrix3X3X3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3X3X3[i][j] = [];
    for (let k = 0; k < 3; k++) {
      matrix3X3X3[i][j][k] = [];
    }
  }
}

for (let i = 0; i < matrix3X3X3.length; i++) {
  for (let j = 0; j < matrix3X3X3.length; j++) {
    for (let k = 0; k < matrix3X3X3.length; k++) {
      console.log(matrix3X3X3[i][j][k]);      
    }
  }
}