const timehour = document.getElementById("hour");
const timeminute = document.getElementById("minute");
const timesecond = document.getElementById("second");
const timeampm = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12){
        ampm = "PM"
    }
    if (h < 10){
        h = "0" + h
    }else if (m < 10){
        m = "0" + m
    }else if (s < 10){
        s = "0" + s 
    }
    
    timehour.innerHTML = h;
    timeminute.innerHTML = m;
    timesecond.innerHTML = s;
    timeampm.innerHTML = ampm;
    setTimeout(()=>{
        updateclock()
    },100)
    
}
updateclock();
