
// SET TIMER
let myInterval;


// HTML ELEMENTOS
const mainBtn = document.getElementById('main-btn')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const breakOption1 = document.getElementById('break1')
const breakOption2 = document.getElementById('break2')
const focus = document.getElementById('focusId')
const resetBtn = document.getElementById('resetBtn')


// MGA TUNOG
const bellSound = new Audio('/files/mixkit-arcade-score-interface-217.wav')
const startSound = new Audio('/files/mixkit-retro-arcade-racer-start-218.wav')

// TIMER CONDITIOn
let condition;
let menuState = false;

// MENU CONDITIONS
let focusState;
let break1State;
let break2State;

// Reset condition
let reset;


resetBtn.addEventListener('click', function(){

    resetTimer();

})


// MENU BUTTONS
 focus.addEventListener('click', function () {
    focusState = true
     break1State = false
     break2State = false

    if (menuState) {
    focus.stopPropagation();
    focus.preventDefault();
}
    if (focusState){
          resetTimer();
        focus.style.backgroundColor = "#53ecb7"
        breakOption1.style.backgroundColor = "#FBFADA"
        breakOption2.style.backgroundColor = "#FBFADA"
        focus.stopPropagation();
        focus.preventDefault();
    }

    
    
})

breakOption1.addEventListener('click', function () {
     focusState = false
    break1State = true
    break2State = false

    if (menuState){
        breakOption1.stopPropagation();
        breakOption1.preventDefault();
    }


    if (break1State){
        resetTimer();
        focus.style.backgroundColor = "#FBFADA"
        breakOption1.style.backgroundColor = "#53ecb7"
        breakOption2.style.backgroundColor = "#FBFADA"
        breakOption1.stopPropagation();
        breakOption1.preventDefault();
    }

    
})

breakOption2.addEventListener('click', function () {
      focusState = false
    break1State = false
    break2State = true
   

    if (menuState){
        breakOption2.stopPropagation();
        breakOption2.preventDefault();
    }

  

    if (break2State){
        resetTimer();
        focus.style.backgroundColor = "#FBFADA"
        breakOption1.style.backgroundColor = "#FBFADA"
        breakOption2.style.backgroundColor = "#53ecb7"
        breakOption2.stopPropagation();
        breakOption2.preventDefault();
    }
    
})


// Init


mainBtn.addEventListener('click', function() {
    mainBtn.classList.toggle("active")


    if (mainBtn.innerText == 'start'){
        startSound.play()
        mainBtn.innerText = "pause"
        condition = true;
        menuState = true;
        timer()
        

       }else if(mainBtn.innerText == "pause"){

        mainBtn.innerText = "resume"

        pause()

       }else if (mainBtn.innerText == "resume"){

        mainBtn.innerText = "pause"
        pauseResume()
       }
}
)


// TIMER SETTINGS
 
setCount = 0;

function timer(){
  const myTimer = Number.parseInt(minutes.textContent)


  if (condition){
    condition = false;
     secCount = myTimer * 60;
   myInterval = setInterval(updateSecCount, 1000)

   
  }

}



function updateSecCount(){
    const minutesCount = document.getElementById("minutes");
    const secondsCount = document.getElementById("seconds");
 
         secCount --;
 
        let mleft = Math.floor(secCount / 60)
         let sleft = secCount % 60
 
         if (sleft < 10 ){
             secondsCount.textContent = "0" + sleft
         }else {
             secondsCount.textContent = sleft;
         }
 
         minutesCount.textContent = `${mleft}`
 
         if (mleft == 0 & sleft == 0){
             clearInterval(myInterval);
             bellSound.play();
       
         }
     }


     let pauseState;

function pause(){
    clearInterval(myInterval);
    pauseState = true;
}

function pauseResume(){

    if (pauseState){

     myInterval = setInterval(updateSecCount, 1000)
      pauseState = false;
       
    }
}

function resetTimer(){

    menuState = false;

    mainBtn.innerText = 'start';
   
    if (focusState){
        minutes.innerText = 25;
        seconds.innerText = "00";
        clearInterval(myInterval);
    }else if(break1State){
         minutes.innerText ="0" + 5;
        seconds.innerText = "00";
        clearInterval(myInterval);
    }else if (break2State){
          minutes.innerText = 10;
        seconds.innerText = "00";
        clearInterval(myInterval);
    }
    

}










