// 1 variable declaration
var cvs=document.getElementById("canvas").getContext("2d");
var sPosx=100;
var sPosy=100;
var nPosx=0;
var nPosy=0;
var fPosx=200;
var fPosy=200;
var snakeTail=[];
var snakeSize=1;
var Score=0;
var gameStatus="Ready";
var gameover="Game Over";

// 2 onload function
    window.onload= function(){
    document.addEventListener("keydown",inputControl);
   game=setInterval(mainGame,200);
}


// 3 main game function
    function mainGame(){
        document.getElementById("game-status").innerHTML=gameStatus
        document.getElementById("Score").innerHTML=Score;

        //move snake
        sPosx+=nPosx;
        sPosy+=nPosy

        //snake movement
        if(sPosx>390){
            sPosx=0;
        }
        if(sPosy>390){
            sPosy=0;
        }
        if(sPosx<0){
            sPosx=390;
        }
        if(sPosy<0){
            sPosy=390;
        }
    
    //game area

    //bgclr
    cvs.fillStyle="black";
    cvs.fillRect(0,0,400,400);

    for(var cl=0;cl<400;cl+=20){
    cvs.moveTo(cl,0,);
    cvs.lineTo(cl,400);
    
    }
    
    for(var rl=0;rl<400;rl+=20){
        cvs.moveTo(0,rl);
        cvs.lineTo(400,rl);
        
        }
        cvs.strokeStyle="gray";
        cvs.stroke();

        //snake
        cvs.fillStyle="yellow";
       // cvs.fillRect(sPosx,sPosy,20,20);
       for(i=0;i<snakeTail.length;i++){

        cvs.fillRect(
            snakeTail[i].x,snakeTail[i].y,20,20
        );

        if(sPosx==snakeTail[i].x && sPosy==snakeTail[i].y && snakeSize>1){
            clearInterval(game);
            gameStatus=gameover;
                document.getElementById('game-status').innerHTML=gameStatus;

        }
       }

        //fruit
        cvs.fillStyle="green";
        cvs.fillRect(fPosx,fPosy,20,20);

        //snake eat

        if(sPosx==fPosx && sPosy==fPosy){
            snakeSize++;
            Score+=10;

        fPosx=Math.floor(Math.random()*20)*20;
        fPosy=Math.floor(Math.random()*20)*20;
        }
        snakeTail.push({ x:sPosx,y:sPosy });
        while(snakeTail.length>snakeSize){
            snakeTail.shift();
        }

       
        
    
}

// 4 input function
function inputControl(e){
    console.log(e.keyCode);
    console.log(e.key)

    switch(e.keyCode){
            case 38:
                nPosy-=20;
                nPosx=0;
            break;
            case 40:
                nPosy+=20;
                nPosx=0;
            break;
            case 39:
                nPosx+=20;
                nPosy=0;
            break;
            case 37:
                nPosx-=20;
                nPosy=0;
            break;
           
            }
            if(e.keyCode==37 || e.keyCode==38 || e.keyCode==39 || e.keyCode==40 ){
                gameStatus="Game Started";
                document.getElementById('game-status').innerHTML=gameStatus;
    }
}

