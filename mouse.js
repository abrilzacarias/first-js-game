var state = 0;
var color = "white";
var area = document.getElementById("area_dibujo");
var paper = area.getContext("2d");
var x;
var y;
document.addEventListener("mouseup", clickMouse);
document.addEventListener("mousedown", dropMouse);
document.addEventListener("mousemove", drawMouse);

drawLine("black", 0, 0, 0, 500, paper);
drawLine("black", 0, 500, 500 , 500, paper);
drawLine("black", 0, 0, 500 , 0, paper);
drawLine("black", 500, 0, 500 , 500, paper);

function drawLine(color, x_first, y_first, x_final, y_final, paper)
{
    paper.beginPath();
    paper.strokeStyle = color;
    paper.lineWidth = 4;
    paper.moveTo(x_first, y_first);
    paper.lineTo(x_final, y_final);
    paper.stroke();
    paper.closePath();
}

function drawMouse(event){
    if (estado == 1) {  
      drawLine(color, x, y, event.x, event.y, paper);
      x = event.x;
      y = event.y;
    }
  }

function dropMouse(event){
    if (state = 0) {  
      drawLine(color, x, y, event.x, event.y, paper);
      x = event.x;
      y = event.y;
    }
}

function clickMouse(event){
    if (state = 1) {  
      drawLine(color, x, y, event.x, event.y, paper);
      x = event.x;
      y = event.y;
    }
}


