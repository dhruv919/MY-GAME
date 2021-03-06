var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bike1img,bike2img,bike3img,bike4img,trackimg;
var form, player, game;
var bikesAtEnd = 0;
var powerCoinImage,powerCoins

var bikes,bike1,bike2,bike3,bike4;
function preload(){
  bike1img=loadImage("images/bike1.png")
  bike2img=loadImage("images/bike2.png")
  bike3img=loadImage("images/bike3.png")
  bike4img=loadImage("images/bike4.png")
  trackimg=loadImage("images/track.jpg")
  powerCoinImage = loadImage("images/goldCoin.png");
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
  if(bikesAtEnd===4){
    clear();
    game.showLeaderBoard();
  }
}
