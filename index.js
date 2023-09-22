window.addEventListener('load', () => {
    spread = localStorage.getItem('spread');
    spreadText.innerText = 'Спред: ' + spread + "%";
})

const btns = document.querySelector('.btns');
const btn = document.querySelectorAll('.btn');
const inputChange = document.querySelector('.change-input');
const TextChange = document.getElementById('change-text');
const spreadText = document.getElementById('spread-text');

let money = 1000.01;
let spread = 5;

document.getElementById('money').innerHTML = money + '$';

function show_change(){
    document.querySelector('.change').classList.toggle('none');
    TextChange.innerText = 'Текущий спред: ' + spread + "%";
}

function save_spread(){
    spread = inputChange.value;
    localStorage.setItem('spread', spread);
    if(inputChange.value != ''){
        TextChange.innerText = 'Текущий спред: ' + spread + "%";
    }
}