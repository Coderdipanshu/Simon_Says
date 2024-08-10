let gameSeq = [];
let userSeq = [];
let btn = ["blue", "green", "red", "yellow"];
let started = true;
let level = 0;
let score = 0;
let h2 = document.querySelector("h2");
let h3=document.querySelector(".h1");
h3.innerText=level;
document.addEventListener("keypress", function () {
  if (started == true) {
    h2.innerText = "Game started";
    console.log("game is started");
    started = false;
    levelUp();
  }
});

function levelUp() {
  
  userSeq = [];
  level = level + 1;
  h3.innerText =  level;
  let randIdx = Math.floor(Math.random() * btn.length);
  let randCol = btn[randIdx];
  let randbtn = document.querySelector(`.${randCol}`);
  gameSeq.push(randCol);
  console.log(`this is game seq  ${gameSeq}`);

  for (let i = 0; i < gameSeq.length - 1; i++) {
    let color = gameSeq[i];
    let btn = document.querySelector(`.${color}`);
    setTimeout(() => flashBtn(btn), i * 1000);
  }

  setTimeout(() => {
    flashBtn(randbtn);

    setTimeout(() => {}, 1000);
  }, (gameSeq.length - 1) * 1000 + 500);
}

function flashBtn(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function btnPress(event) {
  let btn = event.target;
  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  addEventListener("click", btnPress);
}
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length - 1 == gameSeq.length - 1) {
      setTimeout(levelUp, 1000);
    }
  } else {
    
      h2.innerHTML=`Game over!  Your score was <b>${level}</b> <br>Press any key to Restart`;
document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
    document.querySelector("body").style.backgroundColor="rgb(176, 211, 209)";
   },1000);
   document.addEventListener("keypress",reset);
    
  }
}
function reset(){
  // console.log("its workS")
  started=false;
  level=0;
  gameSeq=[];
  userSeq=[];
  h2.innerText = "Game started";
  levelUp();
}
