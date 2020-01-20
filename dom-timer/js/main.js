'use strict';

//console.log('Zadanie Timer');

var timerForm = document.querySelector('form');

var inputStartStop = document.querySelector('.start-stop');

var buttonReset = document.querySelector('.reset');

var minutes = timerForm.minutes;

var seconds = timerForm.seconds;

var intervalId;

//console.log(minutes, seconds);

//Inicjalizacja kontrolek

minutes.value = 0;

seconds.value = 0;

function countdown(event) {

    event.preventDefault();

    //    console.log('Odliczam...')

    //    buttonReset.addEventListener('submit', resetStoper, false);

    minutes.setAttribute('disabled', true);

    seconds.setAttribute('disabled', true);

    var m = Number(minutes.value); //--- funkcja pozwalająca zamienić nam np. stringa na liczby

    var s = Number(seconds.value); //--- funkcja pozwalająca zamienić nam np. stringa na liczby

    //    console.warn(typeof m, typeof s);  //---- inny sposób korzystania z console.log

    var then = new Date();

    then.setMinutes(then.getMinutes() + m);

    //    console.log(then.setMinutes(then.getMinutes() + m));

    then.setSeconds(then.getSeconds() + s);

    intervalId = setInterval(function tick() {

        var now = new Date();

        var timeLeft = then.getTime() - now.getTime();

        if (timeLeft > 0) {

            var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            var secondsLeft = Math.ceil((timeLeft % (1000 * 60)) / 1000);

            minutes.value = minutesLeft;

            seconds.value = secondsLeft;

            if (secondsLeft === 60) {

                seconds.value = '00';
                minutes.value = minutesLeft + 1;

            }

        } else {
            //koniec odliczania
            minutes.value = 0;

            seconds.value = 0;

            minutes.removeAttribute('disabled');

            seconds.removeAttribute('disabled');

            clearInterval(intervalId);

            //usuwa atrybut disabled z inputów
            //clearInterval(intervalId);

        }

    }, 1000);

}

//Obsługa buttonu restart
function resetStoper(e) {

    e.preventDefault();

    //    console.log('działa');

    minutes.value = 0;

    seconds.value = 0;

    minutes.removeAttribute('disabled');

    seconds.removeAttribute('disabled');

    timerForm.addEventListener('submit', countdown);

    clearInterval(intervalId);

}

//Blokada niepotrzebnych klawiszy              
function switchOffKeys(keySign) {

    if (keySign.keyCode === 43 || keySign.keyCode === 44 || keySign.keyCode === 45 || keySign.keyCode === 46 || keySign.keyCode === 101) {

        keySign.preventDefault(); //preventDelault(); --- musi być tutaj, aby nie zablokować całej klawiatury

        return false;

    }

}


timerForm.addEventListener('submit', countdown);

buttonReset.addEventListener('click', resetStoper);

timerForm.addEventListener('keypress', switchOffKeys);