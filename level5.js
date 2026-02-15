const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const counter = document.querySelector('#counter');

let i = 0;
plus.addEventListener('click', () => {
    i++;
    counter.innerText = 'Coins: ' + i;
});

minus.addEventListener('click', () => {
    if(i === 0){
    } else {
    i--;
    counter.innerText = 'Coins: ' + i;
    }
});