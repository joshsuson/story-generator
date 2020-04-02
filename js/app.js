const cardDiv = document.querySelector('#cardDiv');
const cardButton = document.querySelector('#cardButton');

function getCards(Class, _class) {
    const card = new Class;
    const firstCard = card.firstCard;
    const secondCard = card.getSecondCard();
    const cardDivs = document.querySelectorAll(_class);
    cardDivs[0].innerHTML = `<p>${firstCard}</p>`;
    cardDivs[1].innerHTML = `<p>${secondCard}</p>`;
}

cardDiv.addEventListener('click', (e) => {
    if (e.target === cardButton) {
        getCards(CharacterCard, '.character-card');
        getCards(PlotCard, '.plot-card');
    }
})