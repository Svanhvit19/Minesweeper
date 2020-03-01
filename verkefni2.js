var responseBoard;

var bombImage = '<img src="bomb.png">';
var flagImage = '<img src="flag.png">';


var row = document.getElementById('inputrow').value;
var column = document.getElementById('inputcols').value;
var mines = document.getElementById('inputmines').value;

function doAjax() {

    //The URL to which we will send the request
    var url = 'https://veff213-minesweeper.herokuapp.com/api/v1/minesweeper';

    //Perform an AJAX POST request to the url, and set the param 'myParam' in the request body to paramValue
    axios.post(url, { row: row, column: column, mines: mines })
        .then(function (response) {
            //When successful, print 'Success: ' and the received data
            console.log("Success: ", response.data);
            responseBoard = response.data.board;
            drawBoard();
        })
        .catch(function (error) {
            //When unsuccessful, print the error.
            console.log(error);
        })
        .then(function () {
            // This code is always executed, independent of whether the request succeeds or fails.
        });
}

function drawBoard() {
  var htmlBoard = document.getElementById("board")
  for (var i=0; i<responseBoard.row; i++) {
    var miniRow = document.createElement("div");

    for (var j=0; j<responseBoard.column; j++) {
      var button = document.createElement("button");
      mybutton.innerHTML="&nbsp";

      miniRow.appendChild(button);

    }
    htmlBoard.appendChild(miniRow);
  }
}


