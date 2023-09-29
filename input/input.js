let input=document.querySelector('#inputarea');
let summary=document.querySelector('#summary');

function summarize(e){
    console.log(e.key);
    summary.innerText=e.target.value;
}

input.addEventListener('keypress',summarize);