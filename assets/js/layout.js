// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
  let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;
  let secondButtonsContainer = `
    <div class="buttonsContainer" id="buttons_2"></div>
  `;
  let firstListsContainer = `
    <div class="listsContainer" id="lists_1"></div>
  `;

  let secondListsContainer = `
    <div class="listsContainer" id="lists_2"></div>
  `;

  const position = 'beforeend';

  switch (CONFIG.bentoLayout) {
    case 'bento':
      linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
      linksBlockRight.insertAdjacentHTML(position, firstListsContainer);
      break;
    case 'lists':
      linksBlockLeft.insertAdjacentHTML(position, firstListsContainer);
      linksBlockRight.insertAdjacentHTML(position, secondListsContainer);
      break;
    case 'buttons':
      linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
      linksBlockRight.insertAdjacentHTML(position, secondButtonsContainer);
      break;
    default:
      break;
  }

  console.log('Layout Generated');
};

generateLayout();
