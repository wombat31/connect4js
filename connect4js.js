var xoffset = 45;
var yoffset = 45;
var redTurn = true;
var tokenColor = "red";


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
    ctx.fillRect(20,20,400,350);
    ctx.closePath();
    for (x = 1; x<7; x++){
        for (y = 1; y < 8; y++){
            if (tokenRecord[x-1][y-1]== "R"){
                tokenColor = "red";
            } else if (tokenRecord[x-1][y-1] == "Y"){
                tokenColor = "yellow";
                }
            else {
                tokenColor = "black";
            }
            
            ctx.beginPath();
            ctx.arc( y * 56, x * 56,20,0, 2* Math.PI, false);
            ctx.fillStyle = tokenColor;
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
            updateGame();
        } else {
            tokenRecord[columnOne][0] = "Y";
            redTurn = true;
            document.getElementById('turn').style.color = "red";
            document.getElementById('turn').innerHTML = "Red Turn";
            updateGame();
           }
        columnOne -= 1;
    } else {
        alert("Not a valid move");
    }
    
}

function column2(){
    if (columnTwo >= 0){
        if(redTurn){
            tokenRecord[columnTwo][1] = "R";
            redTurn = false;
            document.getElementById('turn').style.color = "yellow";
            document.getElementById('turn').innerHTML = "Yellow Turn";
            updateGame();
        } else {
            tokenRecord[columnTwo][1] = "Y";
            redTurn = true;
            document.getElementById('turn').style.color = "red";
            document.getElementById('turn').innerHTML = "Red Turn";
            updateGame();
           }
        columnTwo -= 1;
    } else {
        alert("Not a valid move");
    }
    
}

function column3(){
    if (columnThree >= 0){
        if(redTurn){
            tokenRecord[columnThree][2] = "R";
            redTurn = false;
            document.getElementById('turn').style.color = "yellow";
            document.getElementById('turn').innerHTML = "Yellow Turn";
            updateGame();
        } else {
            tokenRecord[columnThree][2] = "Y";
            redTurn = true;
            document.getElementById('turn').style.color = "red";
            document.getElementById('turn').innerHTML = "Red Turn";
            updateGame();
           }
        columnThree -= 1;
    } else {
        alert("Not a valid move");
    }
    
}

function column4(){
    if (columnFour >= 0){
        if(redTurn){
            tokenRecord[columnFour][3] = "R";
            redTurn = false;
            document.getElementById('turn').style.color = "yellow";
            document.getElementById('turn').innerHTML = "Yellow Turn";
            updateGame();
        } else {
            tokenRecord[columnFour][3] = "Y";
            redTurn = true;
            document.getElementById('turn').style.color = "red";
            document.getElementById('turn').innerHTML = "Red Turn";
            updateGame();
           }
        columnFour -= 1;
    } else {
        alert("Not a valid move");
    } 
}

function column5(){
    if (columnFive >= 0){
        if(redTurn){
            tokenRecord[columnFive][4] = "R";
            redTurn = false;
            document.getElementById('turn').style.color = "yellow";
            document.getElementById('turn').innerHTML = "Yellow Turn";
            updateGame();
        } else {
            tokenRecord[columnFive][4] = "Y";
            redTurn = true;
            document.getElementById('turn').style.color = "red";
            document.getElementById('turn').innerHTML = "Red Turn";
            updateGame();
           }
        columnFive -= 1;
    } else {
        alert("Not a valid move");
    } 
}

function column6(){
    if (columnSix >= 0){
        if(redTurn){
            tokenRecord[columnSix][5] = "R";
            redTurn = false;
            document.getElementById('turn').style.color = "yellow";
            document.getElementById('turn').innerHTML = "Yellow Turn";
            updateGame();
        } else {
            tokenRecord[columnSix][5] = "Y";
            redTurn = true;
            document.getElementById('turn').style.color = "red";
            document.getElementById('turn').innerHTML = "Red Turn";
            updateGame();
           }
        columnSix -= 1;
    } else {
        alert("Not a valid move");
    } 
}

function column7(){
    if (columnSeven >= 0){
        if(redTurn){
            tokenRecord[columnSeven][6] = "R";
            redTurn = false;
            document.getElementById('turn').style.color = "yellow";
            document.getElementById('turn').innerHTML = "Yellow Turn";
            updateGame();
        } else {
            tokenRecord[columnSeven][6] = "Y";
            redTurn = true;
            document.getElementById('turn').style.color = "red";
            document.getElementById('turn').innerHTML = "Red Turn";
            updateGame();
           }
        columnSeven -= 1;
    } else {
        alert("Not a valid move");
    } 
}

function winCheck(){
    //check across the rows for a winner
    for (y=0; y<6; y++){
        for (x=0; x<5; x++){
            
            if(tokenRecord[y][x] == "R" && tokenRecord[y][x+1]=="R" && tokenRecord[y][x+2] == "R" && tokenRecord[y][x+3] == "R"){
                alert("Red Wins");
            }

            else if (tokenRecord[y][x] == "Y" && tokenRecord[y][x+1]=="Y" && tokenRecord[y][x+2] == "Y" && tokenRecord[y][x+3] == "Y"){
                alert("Yellow Wins");
            }
        }
    }
    //check down the columns for a winner
    for (y=0; y < 3; y++){
        for (x=0; x< 7; x++){
            if(tokenRecord[y][x] == "R" && tokenRecord[y+1][x] == "R" && tokenRecord[y+2][x] == "R" && tokenRecord[y+3][x]== "R"){
                alert("Red Wins");
                document.getElementById("resetButton").style.display = "block";
            }

            else if (tokenRecord[y][x] == "Y" && tokenRecord[y+1][x] == "Y" && tokenRecord[y+2][x] == "Y" && tokenRecord[y+3][x]== "Y"){
                alert("Yellow Wins");
                document.getElementById("resetButton").style.display = "block";
            }

        }
    }
    //check for diagonal winner (/)
    for (y=3; y<6; y++){
        for(x=0; x<4; x++){
            if(tokenRecord[y][x] == "R" && tokenRecord[y-1][x+1] == "R" && tokenRecord[y-2][x+2] == "R" && tokenRecord[y-3][x+3]== "R"){
                alert("Red Wins");
                document.getElementById("resetButton").style.display = "block";
            }

            else if (tokenRecord[y][x] == "Y" && tokenRecord[y-1][x+1] == "Y" && tokenRecord[y-2][x+2] == "Y" && tokenRecord[y-3][x+3]== "Y"){
                alert("Yellow Wins");
                document.getElementById("resetButton").style.display = "block";
            }
        }
    }
    // check for diagonal winner (\)
    for (y=0; y<3; y++){
        for(x=0; x<4; x++){
            if(tokenRecord[y][x] == "R" && tokenRecord[y+1][x+1] == "R" && tokenRecord[y+2][x+2] == "R" && tokenRecord[y+3][x+3]== "R"){
                alert("Red Wins");
                document.getElementById("resetButton").style.display = "block";
            }

            else if (tokenRecord[y][x] == "Y" && tokenRecord[y+1][x+1] == "Y" && tokenRecord[y+2][x+2] == "Y" && tokenRecord[y+3][x+3]== "Y"){
                alert("Yellow Wins");
                document.getElementById("resetButton").style.display = "block";
            }
        }
    }
    

}

function playAgain(){
    location.reload();
}


function updateGame(){

    drawboard();
    winCheck();
}

updateGame();