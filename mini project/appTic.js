let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

let turnO = true; // playerX , playerO

const winPattens = [
    [0 , 1, 2],
    [0 , 3, 6],
    [0 , 4, 8],
    [1 , 4 , 7],
    [2 , 5, 8],
    [2 , 4 , 6],
    [3 , 4, 5],
    [6 , 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPattens) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText,
        );

        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
    }
}


