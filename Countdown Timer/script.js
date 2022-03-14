const daysEl = document.getElementById("days");

const hoursEl = document.getElementById("hours");

const minutesEl = document.getElementById("minutes");

const secondsEl = document.getElementById("seconds");

const goodDays ='1 February 2024';

function countDown() {
    
    const goodDaysDate = new Date(goodDays);
    
    const currentDate = new Date();
    
    const totalseconds =(goodDaysDate-currentDate)/1000;
    
    const days=Math.floor(totalseconds/3600/24);
    
    const hours=Math.floor(totalseconds/3600)%24;
    
    const minutes=Math.floor(totalseconds/60)%60;
    
    const seconds = Math.floor(totalseconds%60);
    
    console.log(days,hours,minutes,seconds);

    daysEl .innerHTML=formatTime(days);
    
    hoursEl.innerHTML=formatTime(hours);
    
    minutesEl.innerHTML=formatTime(minutes);
    
    secondsEl.innerHTML=formatTime(seconds);

}

function formatTime(time){
   
    return time <10 ? `0${time}` : time;
}

setInterval(countDown,1000);

countDown();

