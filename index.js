const btns = document.querySelector('.btns');
const btn = document.querySelectorAll('.btn');

btns.addEventListener("click", function(event){
    currentElement = event.target;
    currentElement.classList.add('active');
});