//Select Element In Here
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const secound = document.getElementById('secound');
const progressBar = document.getElementById('progress');
//End Select

//Set Transition in Progress Bar
progressBar.style.transition = 'all 1s linear'

//Function For Show Time And Update Progress Bar
function showTime(){
    let date = new Date();
    let sec = date.getSeconds();
    hour.textContent = date.getHours();
    minute.textContent = date.getMinutes();
    secound.textContent = sec;

    //Update progress Bar Style Width
    progressBar.style.width = (sec/60)*87+'%';
}

//Update Time Every secound
setInterval(showTime,1000);

