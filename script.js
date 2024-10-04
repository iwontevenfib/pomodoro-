
// SET TIMER
let myInterval;


// HTML ELEMENTOS
const mainBtn = document.getElementById('main-btn')
const minutes = document.getElementById('minutes')
const breakOption1 = document.getElementById('break1')
const breakOption2 = document.getElementById('break2')
const focus = document.getElementById('focusId')


// MGA TUNOG
const bellSound = new Audio('/files/mixkit-arcade-score-interface-217.wav')
const startSound = new Audio('/files/mixkit-retro-arcade-racer-start-218.wav')

// TIMER CONDITIOn
let condition = true;

// MENU CONDITIONS
let focusState = true;
let break1State;
let break2State;




 focus.addEventListener('click', function () {

    focusState = true
     break1State = false
     break2State = false
    minutes.innerText = 25;

    if (focusState){
        focus.style.backgroundColor = "#53ecb7"
        breakOption1.style.backgroundColor = "#FBFADA"
        breakOption2.style.backgroundColor = "#FBFADA"
    }
})

breakOption1.addEventListener('click', function () {

    focusState = false
    break1State = true
    break2State = false
    minutes.innerText = 5;

    if (break1State){
        focus.style.backgroundColor = "#FBFADA"
        breakOption1.style.backgroundColor = "#53ecb7"
        breakOption2.style.backgroundColor = "#FBFADA"
    }
})

breakOption2.addEventListener('click', function () {

    focusState = false
    break1State = false
    break2State = true
    minutes.innerText = 10;

    if (break2State){
        focus.style.backgroundColor = "#FBFADA"
        breakOption1.style.backgroundColor = "#FBFADA"
        breakOption2.style.backgroundColor = "#53ecb7"
    }
})



mainBtn.addEventListener('click', function() {
    mainBtn.classList.toggle("active")


    if (mainBtn.innerText == 'start'){
        startSound.play()
        mainBtn.innerText = "pause"
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











