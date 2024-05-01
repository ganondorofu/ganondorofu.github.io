const choices = document.querySelector(".choices");
const btn = document.querySelector(".btn");
const enemy = document.querySelector(".enemy");
const result = document.querySelector(".result");
var G = 0;
var C = 0;
var P = 0;
var games = 0;
var win = 0;
var draw = 0;
var lose = 0;
const gamesElement = document.querySelector(".games");
const winElement = document.querySelector(".win");
const drawElement = document.querySelector(".draw");
const loseElement = document.querySelector(".lose");
const arry = ["グー", "チョキ", "パー"];

btn.addEventListener("click", () => {
  games = win + draw + lose;
  gamesElement.innerHTML = games;
  winElement.innerHTML = win;
  drawElement.innerHTML = draw;
  loseElement.innerHTML = lose;
  console.log(games);
  if (G == C && C == P) {
    const random = Math.floor(Math.random() * arry.length); //回数が同じならランダム
    enemy.value = arry[random];
  }
  if (G > C && G > P) {
    enemy.value = "パー"; //グーが多い
  } else if (C > G && C > P) {
    enemy.value = "グー"; //チョキが多い
  } else if (P > G && P > C) {
    enemy.value = "チョキ"; //パーが多い
  } else {
    const random = Math.floor(Math.random() * arry.length); //回数が同じ手が2つならランダム
    enemy.value = arry[random];
  }
  if (choices.value == "グー") {
    G++; //各手を確認
  } else if (choices.value == "チョキ") {
    C++; //各手を確認
  } else if (choices.value == "パー") {
    P++; //各手を確認
  }
  if (choices.value == enemy.value) {
    result.textContent = "あいこ"; //以下判定
    draw++;
  } else {
    if (choices.value == "グー") {
      if (enemy.value == "チョキ") {
        result.textContent = "勝ち";
        win++;
      } else {
        result.textContent = "負け";
        lose++;
      }
    }
    if (choices.value == "チョキ") {
      if (enemy.value == "パー") {
        result.textContent = "勝ち";
        win++;
      } else {
        result.textContent = "負け";
        lose++;
      }
    }
    if (choices.value == "パー") {
      if (enemy.value == "グー") {
        result.textContent = "勝ち";
        win++;
      } else {
        result.textContent = "負け";
        lose++;
      }
    }
  }
});