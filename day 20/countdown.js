document.addEventListener("DOMContentLoaded",() =>{
    const input=document.getElementById("timeInput");
    const startbtn=document.getElementById("startBtn");
    const display=document.getElementById("display");
    let timer;
    startbtn.addEventListener("click",() =>{
        let timeleft=parseInt(input.value);
        if(isNaN(timeleft)||timeleft<=0){
            display.textContent="enter valid seconds";
            return;
        }
        clearInterval(timer);//clear old time if any
        display.textContent=timeleft;
        timer=setInterval(()=>{
            timeleft--;
            display.textContent=timeleft;
            if(timeleft<=0){
                clearInterval(timer);
                display.textContent="time's up!";
            }
        },1000)
    });
});