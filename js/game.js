class Game{
constructor(){

}
getState(){
    db.ref('gameState').on("value",(data)=>{
        gameState= data.val();
    })
}
update(state){
    db.ref('gameState').update({
        gameState: state
    })
}
async start(){
    if(gameState===0){
        player= new Player();
        var playerCountRef= await db.ref('playerCount').once("value")
        if(playerCountRef.exists()){
            playerCount= playerCountRef.val();
            player.getCount();
        }
        form= new Form();
        form.display();
    }
    car1= createSprite(100,200);
    car2= createSprite(300,200);
    car3= createSprite(500,200);
    car4= createSprite(700,200);
    cars=[car1,car2,car3,car4];
    passed= false;
}
play(){
    form.hide();
    Player.getPlayerInfo();
    player.getFinishedPlayers();

    if(allPlayers != undefined){
        var index=0;
        var x=0;
        var y;

        for(var plr in allPlayers){
            index= index+1;
            x= x+200;
            y= displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;


            if(index===player.index){
                camera.position.x= displayWidth/2;
                camera.position.y= cars[index-1].y;
            }
            textAlign(CENTER);
            textSize(20);
            text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+75);
        }
    }
    if(keyIsDown(UP_ARROW) && player.index != null && passed!= true){
        player.distance= player.distance+15;
        player.update();
        console.log(player.distance);
    }

    if(player.distance>2500 && passed===false){
        Player.updateFinishedPlayers();
        player.rank= finishedPlayers;
        player.update();
        passed= true;
    }
 drawSprites();    
}
displayRank(){
    
}


}