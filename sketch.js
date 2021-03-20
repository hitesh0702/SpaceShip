var canvas, backgroundImage;
var car1,car2,car3,car4,cars;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1_img,car2_img,car3_img,car4_img,track;

function preload(){
car1_img=loadImage("images/1.png");
car2_img=loadImage("images/2.png");
car3_img=loadImage("images/3.png");
car4_img=loadImage("images/4.png");
track=loadImage("images/track.jpg");


}
function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-150);
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
  if(gameState === 2){
game.end();

  }
}
