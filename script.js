const target = new Date(2026, 0, 1, 0, 0, 0);

const elDays = document.getElementById('days');
const elHours = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');
const elDigital = document.getElementById('digitalTime');

const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

function two(n){ return n.toString().padStart(2,'0');}

function updateAll() {
    const now = new Date();

    const diff = target - now;
    if(diff <= 0) {
        elDays.textContent = '0';
        elHours.textContent = '0';
        elMinutes.textContent = '0';
        elSeconds.textContent = '00';
    }else {
        const secTotal = Math.floor(diff/ 1000);
        const days = Math.floor(secTotal / (24*3600));
        const hours = Math.floor((secTotal % (24*3600)) / 3600);
        const minutes = Math.floor((secTotal % 3600) / 60);
        const seconds = secTotal % 60;
        elDays.textContent = days;
        elHours.textContent = two(hours);
        elMinutes.textContent = two(minutes);
        elSeconds.textContent = two(seconds);
    }

    elDigital.textContent = `${two(now.getHours())}:${two(now.getMinutes())}:${two(now.getSeconds())}`;

    const ms = now.getMilliseconds();
    const scconds = now.getSeconds() + ms/1000;
    const minutes = now.getMinutes() + seconds/60;
    const hours = (now.getHours() % 12) + minutes/60;

    const secDeg = seconds * 6;
    const minDeg = minutes * 6;
    const hourDeg = hours * 30;

    secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

updateAll();
setInterval(updateAll, 1000);