
/* startボタン押下時の時間 */
let startTime;

/* stopボタン押下時の時間 */
let stopTime = 0;

/* タイマーID */
let timerID;

/* 各ボタンの要素の取得 */
const start_button = document.querySelector('.start');
const stop_button = document.querySelector('.stop');
const reset_button = document.querySelector('.reset');

/* 計測処理 */
function calculateTime() {
    const calculateTime = new Date(Date.now() - startTime + stopTime);
    let calculateHours = String(calculateTime.getHours()-9).padStart(2,'0');
    let calculateMinutes = String(calculateTime.getMinutes()).padStart(2,'0');
    let calculateSeconds = String(calculateTime.getSeconds()).padStart(2,'0');
    let calculateMiliseconds = String(Math.floor(calculateTime.getMilliseconds() / 100)).padStart(2,'0');
    calculateTimeText = `${calculateHours} : ${calculateMinutes} : ${calculateSeconds} : ${calculateMiliseconds}`;
    console.log(calculateMiliseconds)
    document.querySelector('.time-zone').textContent = calculateTimeText;
};

/* スタートボタン押下時の処理 */
start_button.addEventListener('click', function() {    
    startTime = new Date();
    start_button.disabled = true;
    stop_button.disabled = false;
    reset_button.disabled = true;
    timerID = setInterval(calculateTime, 100);
});

/* ストップボタン押下時の処理 */
stop_button.addEventListener('click', function() {
    stopTime += (new Date() - startTime);
    start_button.disabled = false;
    stop_button.disabled = true;
    reset_button.disabled = false;
    clearInterval(timerID);
});

/* リセットボタン押下時の処理 */
reset_button.addEventListener('click', function() {
    startTime = new Date();
    stopTime = 0;
    calculateTime();
    start_button.disabled = false;
    stop_button.disabled = false;
    reset_button.disabled = false;
});


