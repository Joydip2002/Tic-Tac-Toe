console.log("Welcome Tic Tac Toe: ");
turnAudio = new Audio("beep.mp3")

let turn = "X"
let winner = false;
const changeTurn=()=>{
    return turn === "X"?"O":"X"
}


const checkWins=()=>{
    const boxtexts = document.getElementsByClassName("boxtext");

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            winner = true;
            document.querySelector(".detailsInfo").innerText = boxtexts[e[0]].innerText +" Won";
            document.querySelector(".wimage").getElementsByTagName("img")[0].style.width = "200px"

        }
        else{
            document.querySelector(".detailsInfo").innerText = "Draw Match";
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((e)=>{
    let boxtext = e.querySelector(".boxtext");
    e.addEventListener("click",(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turnAudio.play();
            turn = changeTurn();

            checkWins();

            if(!winner){
            document.getElementsByClassName("detailsInfo")[0].innerText = "Turn for: "+turn
            }
        }
    })
})