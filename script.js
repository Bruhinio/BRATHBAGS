const DROP_DATE=new Date("2026-10-01T20:00:00-06:00");

function tick(){
 let diff=Math.max(0,DROP_DATE-new Date()),d=Math.floor(diff/86400000);diff%=86400000;
 let h=Math.floor(diff/3600000);diff%=3600000;let m=Math.floor(diff/60000);diff%=60000;let s=Math.floor(diff/1000);
 document.querySelectorAll("[data-countdown]").forEach(x=>{x.querySelector("[data-days]").textContent=String(d).padStart(2,"0");x.querySelector("[data-hours]").textContent=String(h).padStart(2,"0");x.querySelector("[data-minutes]").textContent=String(m).padStart(2,"0");x.querySelector("[data-seconds]").textContent=String(s).padStart(2,"0")})
}
setInterval(tick,1000);tick();

function enterSite(){location.href="proximamente.html"}
function enterAndLogin(){location.href="proximamente.html"}
