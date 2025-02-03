let valueDisplay=document.querySelectorAll(".num");
let interval=10000;

valueDisplay.forEach((valueDisplay)=>{
let startValue=0;
let endValue=parseInt(valueDisplay.getAttribute("data-val"));
console.log(endValue);

let duration=Math.floor(interval/endValue);
let counter=setInterval(function(){
    startValue+=1;
    valueDisplay.textContent=startValue;
    if(startValue==endValue)
    clearInterval(counter);

},duration);

});