let counter=document.querySelector('#counter');
let incBtn =document.querySelector('#inc');
let decBtn=document.querySelector('#dec');
let count=parseInt(counter.innerText);
console.log(count);

function increment(){
    ++count;
    counter.innerText=count;
    
}

function decrement(){
    --count;
    counter.innerText=count;
    
}

incBtn.addEventListener('click',increment);
decBtn.addEventListener('click',decrement);

