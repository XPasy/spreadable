const btns = document.querySelector('.btns');
const btn = document.querySelectorAll('.btn');

let money = 100.01;

document.getElementById('money').innerHTML = money + '$'

btns.addEventListener("click", function(event){
    currentElement = event.target;
    currentElement.classList.add('active');
});