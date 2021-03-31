class Form{
    constructor(){
        this.title= createElement('H1');
        this.input= createInput("enter your name here");
        this.button1= createButton('Play');
        this.button2= createButton('Reset');
        this.greeting= createElement('H2');
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button1.hide();
        this.greeting.hide();
    }
    display(){

        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-100,50);

        this.input.position(displayWidth/2-50,displayHeight/2-100);
        this.button1.position(displayWidth/2-200,displayHeight/2-150);
        this.button2.position(displayWidth/2-100,displayHeight/2-150);
        this.button1.mousePressed(()=>{

            this.input.hide();
            this.button1.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=player.count;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Welcome ' +player.name);
            this.greeting.position(displayWidth/2-50,displayHeight/2);
        })

    }

}