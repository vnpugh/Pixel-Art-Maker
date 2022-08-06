// Select color input
// Select size input
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
makeGrid(height, width);

sizePicker.addEventListener('click', function (e) {
    e.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove();
    //make grid
    makeGrid(height, width);
});

function makeGrid(height,width){
    //for loop to add height and width for cell
    for (let i = 0; i <= height; i++) {
        const rows = table.insertRow(i);
        for (let j = 0; j <= width; j++) {
            const cell = rows.insertCell(j);
            //eventlistener sets the background color of the cell selected
            cell.addEventListener('click', function (e) {
                cell.style.backgroundColor = color.value;
            });
        }
   }
}






