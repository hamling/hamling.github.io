var button = document.getElementById("go");

button.onclick = function () {
    // stuff we want to happen when we click the go button

    // get the number of rows

    var numRows = document.getElementById("rows").value;
    var numCols = document.getElementById("cols").value;

    //console.log(numRows);
    //console.log(numCols);

    // update the grid-template-rows and grid-template-columns on the game board

    var board = document.getElementById("board");

    // var rowval = "";

    // for (var r = 0; r < numRows; r++) {
    //     rowval = rowval + "1fr ";
    // }

    var rowval = "1fr ";


    console.log(rowval);
    console.log(rowval.repeat(numRows));


//    board.style.setProperty("grid-template-rows", "???");

    // make sure the table gets that number of rows (tr) and columns (td)


}