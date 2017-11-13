var board = document.querySelector('board-js');
//var allCells = ;
var BOM = "*",
    SHOW = "X";

var matrixOrigin = [[1, 1, 1,""],
                    [1, BOM, 1, ""],
                    [1,1,2,1],
                    ["", "",1, BOM]];
//board.addEventListener('click', displayCell);

function displayCell(event) {
  if(event.target.matches('td')) { /*Al aplicar el evento a la estructura de tabla que solo se muestre esto cuando el usuario le aya hecho click a el td*/
    var value = getCell(event)

    event.target.textContent = value;

    if(value === BOMB) {
      showMatrix('red');
    }
  }
};

function getCell(event) {
  var row = parseInt(target.parentElement.dataset.row);
  var column = parseInt(event.target.parentElement.dataset.column);

  return matrixOrigin[row - 1][column - 1];
};

function showMatrix(event, color) {
  for (var i = 0; i< matrixOrigin.length; i++) {
    for (var j = 0; j<matrixOrigin[i].length; j++) {
      if(matrixOrigin[i][j]) {
        allCells[i*4 + j].style.backgroundColor = color;
      }
    }
  }
};
