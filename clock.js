const clock = document.getElementById('clock');
 function getClock() {
    const presentTime = new Date();

    const hours = presentTime.getHours().toString().padStart(2, '0');
    const minutes = presentTime.getMinutes().toString().padStart(2, '0');
    const seconds = presentTime.getSeconds().toString().padStart(2, '0');

    const clockString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = clockString;
 }

 setInterval(getClock, 1000);
 getClock();


