var button = document.getElementById("go");

button.onclick = function () {
    // stuff we want to happen when we click the go button

    // get the number of rows

    var numRows = document.getElementById("rows").value;
    var numCols = document.getElementById("cols").value;

    if (numRows < 1 || numRows > 100) {
        alert("No!");
        return;
    }

    if (numCols < 1 || numCols > 100) {
        alert("No!!");
        return;
    }
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

    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    let tableBody = document.createElement("tbody");

    board.appendChild(tableBody);

    for (let row = 0; row < numRows; row++) {
        let tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);

        for (let col = 0; col < numCols; col++) {
            let tableData = document.createElement("td");
            tableRow.appendChild(tableData);
            tableData.appendChild(document.createTextNode("X"));
        }
    }

    board.style.setProperty("grid-template-columns", "repeat(" + numCols + ",1fr)");
    board.style.setProperty("grid-template-rows", "repeat(" + numRows + ",1fr)");

    // make sure the table gets that number of rows (tr) and columns (td)


}