// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
  let bentoLayout = `
        <div class="linksBlockLeft" id="linksBlockLeft">
            <div class="buttonsContainer" id="buttons_1"></div>
        </div>

        <div class="linksBlockRight" id="linksBlockRight">
           
        </div>
    `;
  let listLayout = `
        <div class="linksBlockLeft" id="linksBlockLeft">
            <div class="card list list__1" id="list_1"></div>
            <div class="card list list__2" id="list_2"></div>
        </div>

        <div class="linksBlockRight" id="linksBlockRight">
            <div class="card list list__3" id="list_3"></div>
            <div class="card list list__4" id="list_4"></div>
        </div>
    `;
  let buttonsLayout = `
        <div class="linksBlockLeft" id="linksBlockLeft">
            <div class="buttonsContainer" id="buttons_1"></div>
        </div>

        <div class="linksBlockRight" id="linksBlockRight">
        <div class="buttonsContainer" id="buttons_2"></div>
        </div>
    `;

  const position = 'beforeend';
  switch (CONFIG.bentoLayout) {
    case 'bento':
      linksBlock.insertAdjacentHTML(position, bentoLayout);
      break;
    case 'lists':
      linksBlock.insertAdjacentHTML(position, listLayout);
      break;
    case 'buttons':
      linksBlock.insertAdjacentHTML(position, buttonsLayout);
      break;
    default:
      break;
  }

  console.log('Layout Generated');
};

generateLayout();
