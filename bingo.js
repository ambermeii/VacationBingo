
// Finds every element that has class 'cell' and stores in list
const cells = document.querySelectorAll(".cell");

// Every cell listsn for clicks, turns "on/off," then checks for bingo
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        cell.classList.toggle("marked");
        checkBingo();
    });
});

const winningCombos = [
  // rows
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],

  // columns
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],

  // diags
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

function clearWinners() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("winner");
    }
    // NOTE THIS FUNCTION CAN ALSO BE WRITTEN AS:
    // cells.forEach(cell => {
    //     cell.classList.remove("winner");
    // })
}

// This function checks each cell
function checkBingo() {
    clearWinners();
    // Track cells that are marked
    let marked = [];

    // Build a list that tracks which cells are marked (true/false)
    for (let i = 0; i < cells.length; i++) {
        marked[i] = cells[i].classList.contains("marked");
    }

    // Check each winning combo
    for (let j = 0; j < winningCombos.length; j++) {
        let combo = winningCombos[j];
        let isWinner = true;

    // Check all 5 cells in this combo
    for (let k = 0; k < combo.length; k++) {
        let value = combo[k];
        if (!marked[value]) {
            isWinner = false;
            break;
        }
    }

    // If all 5 were marked, highlight them
    if (isWinner) {
        for (let k = 0; k < combo.length; k++) {
            let index = combo[k];
            cells[index].classList.add("winner");
            }
        }
    }
}

// This function takes the BINGO combo and highlights each one
function highlightWinner(combo) {
  combo.forEach(index => {
    cells[index].classList.add("winner");
  });
}
