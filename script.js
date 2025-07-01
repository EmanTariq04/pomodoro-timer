const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');
const timerEl = document.getElementById('timer');

let interval;

function startTimer() {
    interval = setInterval(() => {

    }, 1000)
};

function stopTimer() {
    console.log('Timer stopped');
};

function resetTimer() {
    console.log('Timer reset');
};



startEl.addEventListener('click', startTimer);
stopEl.addEventListener('click', stopTimer);
resetEl.addEventListener('click', resetTimer);
