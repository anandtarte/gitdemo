let heading=document.querySelector('#id1');
let button=document.querySelector('button');

function respond(){
    heading.innerHTML="changed using DOM in js";
}

button.addEventListener('click',respond);