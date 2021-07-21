console.log("Connected cards");

const printCards = () => {
  for (const card of CONFIG.cards) {
    console.log(card.id);

    let item = `
        <a
          href="${card.link}"
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          class="buttonLink__link card buttonLink__link-${
            card.id
          }"
        >
          <i class="buttonLink__icon" data-feather="${
            card.icon
          }"></i>
        </a>
    `;

    const position = "beforeend";

    buttonsContainer.insertAdjacentHTML(position, item);
  }
};

printCards();
