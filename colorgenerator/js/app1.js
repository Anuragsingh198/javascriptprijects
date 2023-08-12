const getcolor =()=>{
    const randomnum= Math.floor(Math.random()*16777215);
    const randCode= "#"+ randomnum.toString(16);
    // console.log(randCode);
    document.body.style.backgroundColor = randCode;
    document.getElementById("color-code").innerHTML=randCode;
}
document.getElementById("btn").addEventListener( "click", getcolor)

getcolor()