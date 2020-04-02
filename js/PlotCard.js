class PlotCard {
    constructor() {
        this.cards = [
           "bumpersticker offers excellent advice",
           "key that nobody else has",
           "pills",
           "reunited",
           "what is that smell?",
           "this time it's bound to work",
           "robbery",
           "revenge",
           "shhhhh!",
           "wish comes true"
        ];

        this.firstCard = this.getFirstCard();
    }
    
    getFirstCard() {
        return this.cards[Math.floor(Math.random() * this.cards.length)];
    }

    getSecondCard() {
        const notFirstCard = [];
        this.cards.forEach(card => {
            if (card !== this.firstCard) {
                notFirstCard.push(card);
            }
        });
        return notFirstCard[Math.floor(Math.random() * notFirstCard.length)];
    }
}