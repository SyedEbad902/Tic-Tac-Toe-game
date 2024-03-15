let boxes = document.querySelectorAll(".box");
let bgclr = document.querySelector("div");
let turn = true;
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let msgcnt = document.querySelector(".msg");
let mesgcont = document.querySelector(".msgcont");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".newgame");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
        box.innerText = "X";  
        turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (i of winPattern) {
    let pos1 = boxes[i[0]].innerText;
    let pos2 = boxes[i[1]].innerText;
    let pos3 = boxes[i[2]].innerText;
    if ((pos1 != "" && pos2 != "", pos3 != "")) {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log(`${pos1} is winner`);
        disable();
        showWinner(pos1);
      }
    }
  }
};
const disable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enable = () => {
  for (let box of boxes) {
    box.disabled = false;
    turn = true;
    mesgcont.classList.add("hide");
  }
};
const showWinner = (value) => {
  msgcnt.innerText = `Congratulation Winner is ${value}`;
  mesgcont.classList.remove("hide");
};

resetBtn.addEventListener("click", () => { 
    enable();
    boxes.innerText = "";
    for (let box of boxes) { 
        box.innerText = '';
    }
})
newBtn.addEventListener("click", () => { 
    enable();
    boxes.innerText = "";
    for (let box of boxes) { 
        box.innerText = '';
    }
})


