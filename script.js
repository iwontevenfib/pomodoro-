
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
const bellSound = new Audio('files/mixkit-arcade-score-interface-217.wav')
const startSound = new Audio('files/mixkit-retro-arcade-racer-start-218.wav')

// TIMER CONDITIOn
let condition;
let menuState = false;

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
        isRunning = true;
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




focus.addEventListener('click', function () {
    focusState = true
    break1State = false
    break2State = false



    if (focusState) {

        if (menuState) {
            focus.stopPropagation();
            focus.preventDefault();

        } else {


            focus.style.backgroundColor = "#53ecb7"
            breakOption1.style.backgroundColor = "#FBFADA"
            breakOption2.style.backgroundColor = "#FBFADA"
            mainHeader.innerText = "Focus Mode"


            resetFocus = true
            resetBreak1 = false
            resetBreak2 = false

            resetTimer();
            focus.stopPropagation();
            focus.preventDefault();

        }

    }


})

breakOption1.addEventListener('click', function () {
    focusState = false
    break1State = true
    break2State = false




    if (break1State) {


        if (menuState) {
            breakOption1.stopPropagation();
            breakOption1.preventDefault();


        } else {

            focus.style.backgroundColor = "#FBFADA"
            breakOption1.style.backgroundColor = "#53ecb7"
            breakOption2.style.backgroundColor = "#FBFADA"
            mainHeader.innerText = "Chill Out"

            resetFocus = false
            resetBreak1 = true
            resetBreak2 = false

            resetTimer();
            breakOption1.stopPropagation();
            breakOption1.preventDefault();
        }

    }

})

breakOption2.addEventListener('click', function () {
    focusState = false
    break1State = false
    break2State = true




    if (break2State) {

        if (menuState) {
            breakOption2.stopPropagation();
            breakOption2.preventDefault();
        } else {


            focus.style.backgroundColor = "#FBFADA"
            breakOption1.style.backgroundColor = "#FBFADA"
            breakOption2.style.backgroundColor = "#53ecb7"
            mainHeader.innerText = "Take a 10 min Vacation"

            resetFocus = false
            resetBreak1 = false
            resetBreak2 = true
            resetTimer();
            breakOption2.stopPropagation();
            breakOption2.preventDefault();
        }

    }

})

//RESET

resetBtn.addEventListener('click', function () {

    resetTimer();

})




// TIMER SETTINGS

setCount = 0;

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

    minutesCount.textContent = `${mleft}`

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










