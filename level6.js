const cont = document.querySelector('.doorContainer');
const result = document.querySelector('.result');

cont.addEventListener('click', (event) => {
    
    if(event.target.id === "d1"){
        result.classList.remove('correct');
        result.classList.add('wrong');
        result.innerHTML = '<i class="bi bi-x-circle"></i> Wrong door. Try again!';
    } else if (event.target.id === "d2"){
        result.classList.remove('correct');
        result.classList.add('wrong');
        result.innerHTML = '<i class="bi bi-x-circle"></i> Wrong door. Try again!';
    } else if (event.target.id === "d3"){
        result.classList.add('correct');
        result.innerHTML = '<i class="bi bi-trophy"></i> Correct! Quest Complete <i class="bi bi-check-circle"></i>';
    }

});