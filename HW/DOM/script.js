var curRow = 1;
var curCol = 0;
function buttonHandler(currentEvent) {
    //alert("Handler: " + currentEvent);
    // Unmark the old selection
    table.children[curRow].children[curCol].style.border = "0px solid black";
    
    if (currentEvent == "up") {
        if (curRow >= 2) {
            curRow--;
        }
    } else if (currentEvent == "down") {
        if (curRow != 3) {
            curRow++;
        }
    } else if (currentEvent == "left") {
        if (curCol != 0) {
            curCol--;
        }
    } else if (currentEvent == "right") {
        if (curCol != 3) {
            curCol++;
        }
    } else if (currentEvent == "mark") {
        table.children[curRow].children[curCol].style.background = "yellow";
    }

    table.children[curRow].children[curCol].style.border = "1px solid black";
}


var table = document.createElement("TABLE");
for (var i = 0; i < 4; i++) {
    var row = document.createElement("TR");
    for (var j = 0; j < 4; j++) {
		if (i == 0) {
            var cell = document.createElement("TH");
            cell.textContent = "Header " + (j+1);
        } else {
            var cell = document.createElement("TD");
            cell.textContent = i + "," + (j+1);
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
}

// Create buttons
var upBut = document.createElement("BUTTON");
upBut.textContent = "Up";
upBut.setAttribute("id", "upBut");
upBut.addEventListener("click", function(){
    buttonHandler("up");
}, false);
var downBut = document.createElement("BUTTON");
downBut.textContent = "Down";
downBut.setAttribute("id", "downBut");
downBut.addEventListener("click", function(){
    buttonHandler("down");
}, false);
var leftBut = document.createElement("BUTTON");
leftBut.textContent = "Left";
leftBut.setAttribute("id", "leftBut");
leftBut.addEventListener("click", function(){
    buttonHandler("left");
}, false);
var rightBut = document.createElement("BUTTON");
rightBut.textContent = "Right";
rightBut.setAttribute("id", "rightBut");
rightBut.addEventListener("click", function(){
    buttonHandler("right");
}, false);
var markBut = document.createElement("BUTTON");
markBut.textContent = "Mark";
markBut.setAttribute("id", "markBut");
markBut.addEventListener("click", function(){
    buttonHandler("mark");
}, false);

// Start of with fist cell selected
table.children[curRow].children[curCol].style.border = "1px solid black";

document.getElementById("table").appendChild(table);
document.getElementById("buttons").appendChild(upBut);
document.getElementById("buttons").appendChild(downBut);
document.getElementById("buttons").appendChild(leftBut);
document.getElementById("buttons").appendChild(rightBut);
document.getElementById("buttons").appendChild(markBut);
