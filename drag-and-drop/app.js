const king = document.querySelector(".chess-piece");
const squares = document.querySelectorAll(".squre");

king.addEventListener("dragstart", dragStart);

squares.forEach((square) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dragDrop);
});

let beingDragged;

function dragStart(e) {
  beingDragged = e.target;
}
function dragOver(e) {
  e.preventDefault();
}
function dargDrop(e) {
  console.log(e.target);
}
