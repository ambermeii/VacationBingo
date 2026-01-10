const cells = document.querySelectorAll(".cell");

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

  // diagonals
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

function checkBingo() {
  const cells = document.querySelectorAll(".cell");

  const marked = [...cells].map(cell =>
    cell.classList.contains("marked")
  );

  for (let combo of winningCombos) {
    if (combo.every(i => marked[i])) {
      highlightWinner(combo);
      return;
    }
  }
}


function highlightWinner(combo) {
  const cells = document.querySelectorAll(".cell");
  combo.forEach(index => {
    cells[index].classList.add("winner");
  });
}
