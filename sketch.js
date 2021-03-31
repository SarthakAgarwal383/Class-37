var  db;
var playerCount;
var gameState=0;
var allPlayers,car1,car2,car3,car4,cars;
var finishedPlayers=0;
var passed;
var distance=0;
var form,player,game;

function setup(){
  db = firebase.database();
  createCanvas(displayWidth-20,displayHeight);
  //console.log(database);

 game= new Game();

game.getState();
game.start();


}

function draw(){
  background("white");
  
  if(playerCount===4 && finishedPlayers===0){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
  if(finishedPlayers===4){
    game.update(2);
  }
  if(gameState===2 && finishedPlayers===4){
    game.displayRank();
  }

    drawSprites();
  
}
