// ┌─┐┌─┐┬─┐┌┬┐┌─┐
// │  ├─┤├┬┘ ││└─┐
// └─┘┴ ┴┴└──┴┘└─┘
// Function to print Button Cards.

const printCards = () => {
  for (const card of CONFIG.cards) {
    let item = `
        <a
          href="${card.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          class="card button button__${card.id}"
        >
          <i class="buttonIcon" icon-name="${card.icon}"></i>
        </a>
    `;

    const position = 'beforeend';

    buttonsContainer.insertAdjacentHTML(position, item);
  }
};

printCards();
