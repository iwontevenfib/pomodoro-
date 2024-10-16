
// SET TIMER
let myInterval;


// HTML GETELEMENTOS
const mainBtn = document.getElementById('main-btn')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const breakOption1 = document.getElementById('break1')
const breakOption2 = document.getElementById('break2')
const focus = document.getElementById('focusId')
const resetBtn = document.getElementById('resetBtn')
const mainHeader = document.querySelector('.pomodoro-title')

const showTimer = document.querySelector(".pomodoro-main")
const altTitle = document.querySelector(".alt-title");
const timerText = document.querySelector(".main-timer");


// MGA TUNOG
const bellSound = new Audio("files/mixkit-retro-arcade-game-over-470.wav")
const startSound = new Audio("files/mixkit-arcade-bonus-alert-767.wav")
startSound.volume = .5;

const clickSound = new Audio("files/mixkit-unlock-game-notification-253.wav")
const clickSound1 = new Audio("files/mixkit-unlock-game-notification-253.wav")
const clickSound2 = new Audio("files/mixkit-unlock-game-notification-253.wav")




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
        notifTimeStart()
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





focus.addEventListener('click', function () {

    showTimer.style.display = 'block'
    altTitle.style.display = 'none'

    focusState = true
    break1State = false
    break2State = false


    if (menuState) {
        focus.stopPropagation();
        focus.preventDefault();
    } else {



        if (focusState) {

            clickSound.play()
            focus.style.backgroundColor = "#987bff"
            breakOption1.style.backgroundColor = "#ffffff"
            breakOption2.style.backgroundColor = "#ffffff"
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

    showTimer.style.display = 'block'
    altTitle.style.display = 'none'

    focusState = false
    break1State = true
    break2State = false


    if (menuState) {
        breakOption1.stopPropagation();
        breakOption1.preventDefault();
    } else {

        if (break1State) {



            clickSound1.play()
            focus.style.backgroundColor = "#ffffff"
            breakOption1.style.backgroundColor = "#987bff"
            breakOption2.style.backgroundColor = "#ffffff"
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

    showTimer.style.display = 'block'
    altTitle.style.display = 'none'

    focusState = false
    break1State = false
    break2State = true

    if (menuState) {
        breakOption2.stopPropagation();
        breakOption2.preventDefault();

    } else {


        if (break2State) {



            clickSound2.play()
            focus.style.backgroundColor = "#ffffff"
            breakOption1.style.backgroundColor = "#ffffff"
            breakOption2.style.backgroundColor = "#987bff"
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
        seconds.style.color = "#CD5C5C"
        minutes.style.color = "#CD5C5C"
        timerText.style.color = "#CD5C5C"


        if (mleft == 0 & sleft == 0) {
            seconds.style.color = "#CD5C5C"
            minutes.style.color = "#CD5C5C"
        }
    }

    if (mleft < 10) {
        minutesCount.textContent = `0${mleft}`
    } else {
        minutesCount.textContent = `${mleft}`
    }



    if (mleft == 0 & sleft == 0) {
        bellSound.play();
        clearInterval(myInterval);
        notifPop();


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

    timerText.style.color = "#ffffff"
    seconds.style.color = "#ffffff"
    minutes.style.color = "#ffffff"

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




// NOtifisifisication

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function notifTimeStart() {

    if (isMobile()) {
        return;
    } else {

        // FocusNotif
        if (focusState) {


            if (Notification.permission == "granted") {
                new Notification("Pomodoro Timer ni Karl", {
                    body: "Time to Focus!",
                    icon: "files/favicon.png"
                })
            }

        } else if (break1State || break2State) {

            if (Notification.permission == "granted") {

                new Notification("Pomodoro Timer ni Karl", {
                    body: "Chill out man!",
                    icon: "files/favicon.png"

                })
            }

        }

    }



}

function notifTimesUp() {


    if (Notification.permission == "granted") {
        new Notification("Pomodoro Timer ni Karl", {
            body: "Time's Up!",
            icon: "files/favicon.png"
        })
    }

}



if (Notification == "granted") {
    console.log("granted")
} else if (Notification !== "denied") {
    Notification.requestPermission()
}