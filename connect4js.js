var xoffset = 45;
var yoffset = 45;
var redTurn = true;


var tokenRecord = [
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."]
]

var columnOne = 5;
var columnTwo = 5;
var columnThree = 5;
var columnFour = 5;
var columnFive = 5;
var columnSix = 5;
var columnSeven = 5;


function drawboard(){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(20,20,350,300);
    ctx.closePath();
    for (x = 1; x<7; x++){
        for (y = 1; y < 6; y++){
            ctx.beginPath();
            ctx.arc( x * 56, y * 56,20,0, 2* Math.PI, false);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function column1(){
    if (columnOne >= 0){
        if(redTurn){
            tokenRecord[columnOne][0] = "R";
            redTurn = false;
            document.getElementById('turn').style.color = "yellow";
            document.getElementById('turn').innerHTML = "Yellow Turn";
        } else {
            tokenRecord[columnOne][0] = "Y";
            redTurn = true;
            document.getElementById('turn').style.color = "red";
            document.getElementById('turn').innerHTML = "Red Turn";
           }
        columnOne -= 1;
    } else {
        alert("Not a valid move");
    }
}


function updateGame(){
    drawboard();
}

updateGame();