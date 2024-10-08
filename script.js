
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
const mainHeader = document.querySelector('.pomodoro-title')


// MGA TUNOG
const bellSound = new Audio("files/mixkit-arcade-score-interface-217.wav")
const startSound = new Audio("files/mixkit-retro-arcade-racer-start-218.wav")
const clickSound = new Audio("files/mixkit-game-click-1114.wav")
const clickSound1 = new Audio("files/mixkit-game-click-1114.wav")
const clickSound2 = new Audio("files/mixkit-game-click-1114.wav")

// TIMER CONDITIOn
let condition;
let menuState;

// MENU CONDITIONS
let focusState = true;
let break1State;
let break2State;


// Reset condition
let resetFocus = true;
let resetBreak1;
let resetBreak2;
let reset;






// Init


mainBtn.addEventListener('click', function () {
    mainBtn.classList.toggle("active")


    if (mainBtn.innerText == 'start') {
        startSound.play()
        mainBtn.innerText = "pause"
        condition = true; 
        menuState = true;
        timer()


    } else if (mainBtn.innerText == "pause") {

        mainBtn.innerText = "resume"
        
        pause()


    } else if (mainBtn.innerText == "resume") {

        mainBtn.innerText = "pause"
        pauseResume()
    } else {

        resetTimer();
        mainBtn.innerText = "start"

    }
}
)





// MENU BUTTONS


focus.disabled = true;


focus.addEventListener('click', function () {
    
    focusState = true
    break1State = false
    break2State = false

 
if (menuState){
    focus.stopPropagation();
    focus.preventDefault();
}else {



    if (focusState) {

        focusState = false

            clickSound.play()
            focus.style.backgroundColor = "#53ecb7"
            breakOption1.style.backgroundColor = "#FBFADA"
            breakOption2.style.backgroundColor = "#FBFADA"
            mainHeader.innerText = "Focus Mode"


            resetFocus = true
            resetBreak1 = false
            resetBreak2 = false

            resetTimer();

            focus.disabled = true;
            breakOption1.disabled = false;
            breakOption2.disabled = false;

    }
}


})

breakOption1.addEventListener('click', function () {
    
    focusState = false
    break1State = true
    break2State = false

if (menuState){
    breakOption1.stopPropagation();
    breakOption1.preventDefault();
}else {

    if (break1State) {

      

        clickSound1.play()
        focus.style.backgroundColor = "#FBFADA"
        breakOption1.style.backgroundColor = "#53ecb7"
        breakOption2.style.backgroundColor = "#FBFADA"
        mainHeader.innerText = "Chill Out"

        resetFocus = false
        resetBreak1 = true
        resetBreak2 = false

        resetTimer();
        focus.disabled = false;
        breakOption1.disabled = true;
        breakOption2.disabled = false;
   

}

}

    

})

breakOption2.addEventListener('click', function () {
    focusState = false
    break1State = false
    break2State = true

 if (menuState){
    breakOption2.stopPropagation();
    breakOption2.preventDefault();

 }else{

    
    if (break2State) {

    

        clickSound2.play()
        focus.style.backgroundColor = "#FBFADA"
        breakOption1.style.backgroundColor = "#FBFADA"
        breakOption2.style.backgroundColor = "#53ecb7"
        mainHeader.innerText = "Take a 10 min Vacation"

        resetFocus = false
        resetBreak1 = false
        resetBreak2 = true
        resetTimer();

        focus.disabled = false;
        breakOption1.disabled = false;
        breakOption2.disabled = true;
   
    

}

 }



})

//RESET

resetBtn.addEventListener('click', function () {

    resetTimer();

})




// TIMER SETTINGS

function timer() {
    const myTimer = Number.parseInt(minutes.textContent)


    if (condition) {
        condition = false;
        secCount = myTimer * 60;
        myInterval = setInterval(updateSecCount, 1000)

    }

}



function updateSecCount() {
    const minutesCount = document.getElementById("minutes");
    const secondsCount = document.getElementById("seconds");

    secCount--;

    let mleft = Math.floor(secCount / 60)
    let sleft = secCount % 60

    if (sleft < 10) {
        secondsCount.textContent = "0" + sleft
    } else {
        secondsCount.textContent = sleft;
    }

    if (mleft == 0 & sleft < 10) {
        seconds.style.color = "red"
        minutes.style.color = "red"

        if (mleft == 0 & sleft == 0) {
            seconds.style.color = "#ADBC9F"
            minutes.style.color = "#ADBC9F"
        }
    }

    if (mleft < 10) {
        minutesCount.textContent = `0${mleft}`
    } else {
        minutesCount.textContent = `${mleft}`
    }



    if (mleft == 0 & sleft == 0) {
        clearInterval(myInterval);
        bellSound.play();

        mainBtn.innerText = "reset"

    }
}


let pauseState;

function pause() {
    clearInterval(myInterval);
    pauseState = true;
}

function pauseResume() {

    if (pauseState) {

        myInterval = setInterval(updateSecCount, 1000)
        pauseState = false;

    }
}

function resetTimer() {


    menuState = false;
    mainBtn.innerText = 'start';

    if (resetFocus) {
        minutes.innerText = 25;
        seconds.innerText = "00";
        clearInterval(myInterval);
    } else if (resetBreak1) {
        minutes.innerText = "0" + 5;
        seconds.innerText = "00";
        clearInterval(myInterval);
    } else if (resetBreak2) {
        minutes.innerText = 10;
        seconds.innerText = "00";
        clearInterval(myInterval);
    }

    menuState = false

}










