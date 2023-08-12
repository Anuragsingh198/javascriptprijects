const enddate= "10 September 2023 10:00 PM"
document.getElementById("end-date").innerText= enddate;

const inputs= document.querySelectorAll("input");

function clock(){
    const end= new Date(enddate)
    const now= new Date();
    const diff= (end-now)/1000; // seconds
    console.log(diff);
//   console.log(end, now)
    if(diff<0) return ;
    console.log(diff/3600/24);
    console.log((diff/3600)%24);

    inputs[0].value= Math.floor(diff/3600/24);
    inputs[1].value= Math.floor(diff/ 3600) %24;
    inputs[2].value= Math.floor(diff/60) %60;
    inputs[3].value= Math.floor(diff%60);
}
// clock()
setInterval(() => {
    clock()
}, 1000);