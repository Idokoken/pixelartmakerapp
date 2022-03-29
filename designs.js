// Select color input
// Select size input
const gridTable = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker").value;
const gridSize = document.getElementById("sizePicker");
const gridheight = document.getElementById("inputHeight").value;
const gridWidth = document.getElementById("inputWidth").value;
// When size is submitted by the user, call makeGrid()

// const test = document.querySelector(".test");
// let tableTwo = document.querySelector("tr");
// tableTwo.parentNode.removeChild(tableTwo);
///gridTable.removeChild(tableTwo);

function makeGrid(e) {
  e.preventDefault();

  // Your code goes here!
  for (let i = 1; i <= gridheight; i++) {
    const row = document.createElement("tr");
    gridTable.appendChild(row);
    for (let j = 1; j <= gridWidth; j++) {
      const cell = document.createElement("td");
      row.appendChild(cell);

      function putColor(e) {
        e.target.style.backgroundColor = color;
      }
      cell.addEventListener("click", putColor);
    }
    // row.remove();
    //row.parentNode.removeChild(row);
    //const lastrow = gridTable.lastChild;
    // lastrow.remove();
    // console.log(lastrow);
  }
  console.log(gridheight);
}

gridSize.addEventListener("submit", makeGrid);

gridSize.addEventListener("dblclick", () => {
  gridTable.remove();
});
