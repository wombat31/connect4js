var xoffset = 45;
var yoffset = 45;
var tokenRecord = [
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."],
    [".",".",".",".",".",".","."]
]

var columnOne = 6;
var columnTwo = 6;
var columnThree = 6;
var columnFour = 6;
var columnFive = 6;
var columnSix = 6;
var columnSeven = 6;


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


function updateGame(){
    drawboard();
}

updateGame();