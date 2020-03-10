
var b = document.getElementById("button1");

b.onclick = function() {
    // do something cool here
    console.log("Clicked");
    b.textContent = "WHAAAT";
}

var board = document.getElementById("board");

var cells = document.querySelectorAll(".cell");

var player = 'X';

for (let c of cells) {
    c.onclick = function() {
        if (this.textContent === "") {
            this.textContent = player;
            if (player === 'X') {
                player = 'O';
            }
            else {
                player = 'X';
            }
        }
    }
}