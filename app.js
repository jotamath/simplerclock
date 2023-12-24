function updateClock() {
    let clock = document.getElementById('clock');
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeString = `${hours}:${minutes}:${seconds}`;
    clock.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();