var playing =false;
var score;
var action;
var timeremaining;
var correctAnswer;
// if we click on start reset button
document.getElementById("startreset").onclick=
function(){
//if we are playing 
if(playing==true){

location.reload();//reload the page
}
else{//if we are not playing 

    playing=true;

    score=0;

    document.getElementById("value").innerHTML=score;

    show("timeremaining");



    timeremaining=60;

    document.getElementById("timeremainingvalue").innerHTML=timeremaining;

    hide("gameover");

    document.getElementById("startreset").innerHTML="Reset Game";
//start countdown

startcountdown();

generateqa();

}

}

for(i=1;i<5;i++){

    document.getElementById("box"+i).onclick=function(){      

        if(playing==true){

            if(this.innerHTML==correctAnswer){

                //correct Answer

                score++;

                document.getElementById("value").innerHTML=score;

                //hide wrong box;

                hide("wrong");

                show("correct");

                setTimeout(function(){

                    hide("correct");

                },1000)

                //generate the new question

                generateqa();

            }else{

                hide("correct");

                show("wrong");

                setTimeout(function(){

                    hide("wrong");

                },1000)
       

            }

        }


}



}

//reload page



//set score =0
//show countdown
//reduce time by 1 sec
//loop
//time left 
//yes-> continue
//n->game over
//generate q A
 // and moreee....


 function startcountdown(){

    action =setInterval(function(){

        timeremaining-=1;

        document.getElementById("timeremainingvalue").innerHTML=timeremaining;

        if(timeremaining==0){

            stopcountdown();

            show("gameover");

            Document.getElementById("gameover").innerHTML="<p>GAME OVER</p><p> your score is"+score+".</p>";

            hide("timeremaining");

            hide("correct");

            hide("wrong");

            playing=false;

            document.getElementById("startreset").innerHTML="Start Game"

        }

    },1000)

}




function stopcountdown(){

    clearInterval(action);


}



function hide(Id){

    document.getElementById(Id).style.display="none";
}



function show(Id){


    document.getElementById(Id).style.display="block";
}



function generateqa(){

    var x=1+Math.round(9*Math.random());
var y=1+Math.round(9*Math.random());


correctAnswer=x*y;

document.getElementById("question").innerHTML= x+ "X" +y;
   
var correctpostion=1+Math.round(3*Math.random());



   document.getElementById("box"+correctpostion).innerHTML=correctAnswer;//fill one with the correct Answer

   var answer=[correctAnswer]


   
   for(i=1;i<5;i++){
 if(i!=correctpostion){
   
    var wrongAnswer;
   
    do{
   
        wrongAnswer =(1+Math.round(Math.random()))*(1+Math.round(Math.random()));
   
        
     
    }while(answer.indexOf(wrongAnswer)>-1)
    
    document.getElementById("box"+i).innerHTML=wrongAnswer;
    
    answer.push(wrongAnswer);
    
}

}



}
