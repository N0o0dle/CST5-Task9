const badge = document.querySelector('#LevelBadge');
const text = document.querySelector('#CardText');
const btn = document.querySelector('#lvlbtn');

i=1;
btn.addEventListener('click', () => {
    i++;
    badge.innerText = "Level " + i;
    text.innerHTML = '<p id="CartText" class="card-text mb-5 text-muted" style="text-align: center;"><i class="bi bi-arrow-up-circle"></i>  You Leveled Up! Current Level: '+i+'</p>';
});