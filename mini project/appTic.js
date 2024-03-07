let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message");
let msg = document.querySelector("#msg");

let turnO = true; // playerX , playerO
let a = 0;  // to count for "Draw"

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

const resetGame = () => {
    turnO = true;
    a = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked");
        //box.innerText = "Shlok" ;
        
        if (turnO) {
            //playerO
            box.innerText = "X";
            box.classList.remove("colorchange");
            turnO = false;
        } else {
            //playerX
            box.innerText = "O";
            box.classList.add("colorchange");
            turnO = true;
        } 

        box.disabled = true;
        a++;

        let b = checkWinner();

        if ( a === 9 && !b ) {
            //console.log("Draw");
            showDraw();
        }

        /*
        drawCountcount++;
        let isWin = checkWinner();
        if( drawCountcount === 9 && !isWin) {
            Drawgame();
        }*/
    });
});

const showDraw = () => {
    msg.innerHTML = `The Match is " Draw ", You both are Loooose. ;) `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPattens) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                //console.log("Winner! is ", pos1Val);
                
                showWinner(pos1Val);

                return true;
            }
        }
    }
};

/*
const checkWinner = () => {
    for (let pattern of winPattens) {
        /*console.log(pattern);*//*
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText,
        );
    }
};
*/

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
