// Select size input
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
// select the grid
var canvas = document.getElementById("pixelCanvas");
// select the color
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});

// start the pixel art game after click the submit button
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

// create the gred
function makeGrid() {
    for (var r=0; r<height.value; r++){
        var row = canvas.insertRow(r);
        for (var c=0; c<width.value; c++){
            var cell = row.insertCell(c);
            cell.setAttribute('id', 'cell');
        }
    }
}

// clear the grid
function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

// event to paint the cell on click
canvas.addEventListener('click', function(e) {
    var currentCanvas = e.target;
    currentCanvas.style.backgroundColor = color.value;
});