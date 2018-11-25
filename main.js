$(document).ready(function() {
    function displayTime() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let timeState = "AM";

        let clockDiv = document.getElementById('clock');

        if (seconds < 10){
            seconds = "0" + seconds;
        }

        if (hours > 12) {
            hours = hours - 12;
            timeState = "PM";
        }

        if (hours === 0){
            hours = 12;
        }
        
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + timeState;
    }
    setInterval(displayTime,1000);
});
