const drawCards = () => {
  for (const card of CONFIG.cards) {
    let currentCard = document.createElement('a');
    let currentCardText = document.createElement('p');
    currentCardText.appendChild(document.createTextNode(card.name));
  }
};
