const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const resultBox = document.querySelector('#results');

var timer = [0,0,0,0];
var interval;
var isTimerRunning = false;
var errorCounter = 0;
// Add leading zero to numbers 9 or below (purely for aesthetics):
function changeFormat(time){
    if(time <= 9){
        time = "0"+time;
    }
    return time;
} 

// Run a standard minute/second/hundredths timer:
function setTimer(){
   
    let dispTime = changeFormat(timer[0])+":"+changeFormat(timer[1])+":"+changeFormat(timer[2]);
    theTimer.innerHTML = dispTime;
    timer[3]++;

    timer[0] = Math.floor(timer[3]/100/60);
    timer[1] = Math.floor(timer[3]/100 - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000) )
    
}

// Match the text entered with the provided text on the page:
function spellChecker(){
    let enteredText = testArea.value;
    let toBeMatchedText = originText.substring(0,enteredText.length);
    if(enteredText ==originText){ 
        testWrapper.style.borderColor = "green";
        clearInterval(interval);
        resultBox.value = "Total errors committed:"+errorCounter;
    }
    else if(enteredText == toBeMatchedText){
        testWrapper.style.borderColor = "blue";
    }
    else{
        testWrapper.style.borderColor = "red";
        errorCounter++;
    }

}
// Start the timer:
function startTimer(){
    let enteredTextLength = testArea.value.length;
    if(enteredTextLength === 0 && !isTimerRunning){
        isTimerRunning = true;
        interval = setInterval(setTimer,10);
    }
}

// Reset everything:
function revertBack(){
    clearInterval(interval);
    interval = null;
    testArea.value = "";
    isTimerRunning = false;
    timer = [0,0,0,0];
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor="grey"
    resultBox.value = "";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener('keypress',startTimer,false);
testArea.addEventListener('keyup',spellChecker,false);
resetButton.addEventListener('click',revertBack,false);
