window.onload = function() {
    //It ensures that the code inside the event handler is executed only when all the elements on the page are ready and accessible.
    //Code to be executed after the webpage has finished loading
   var second = 00;
   var minutes = 00; 
   var appendMinutes = document.getElementById("minutes")
   var appendSecond = document.getElementById("second")
   var buttonStart = document.getElementById('button-start');
   var buttonStop = document.getElementById('button-stop');
   var buttonReset= document.getElementById('button-reset');
   var Interval; 

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        second = "00";
        minutes = "00";
        appendSecond.innerHTML = second; 
        appendMinutes.innerHTML = minutes; 
    }

    function startTimer () {
        minutes++; 
        if (minutes <=9 ) {
            appendMinutes.innerHTML = "0" + minutes;
        } 
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
        if (minutes > 99) {
            console.log("seconds");
            second++;
            appendSecond.innerHTML = "0" + second;
            minutes = 0;
            appendMinutes.innerHTML = "0" + 0;
        }
          
          if (second > 9){
            appendSecond.innerHTML = second;
        }
        
    }

}