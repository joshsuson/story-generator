class CharacterCard {
    constructor() {
        this.cards = [
            "person who needs to remove a tattoo right away",
            "person with an unfortunate nickname",
            "sucker",
            "celebrity stalker",
            "violinist",
            "person who needs a job",
            "vet",
            "person who asks what nobody ever asks"
        ]
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