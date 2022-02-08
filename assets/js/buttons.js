// ┌─┐┌─┐┬─┐┌┬┐┌─┐
// │  ├─┤├┬┘ ││└─┐
// └─┘┴ ┴┴└──┴┘└─┘
// Function to print Button Cards.

const generateButtons = () => {
  console.log("Yeah, Buttons are working");
}

const printLinksBlockLeft = () => {
  
  for (const button of CONFIG.buttons) {
    let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          class="card button button__${button.id}"
        >
          <i class="buttonIcon" icon-name="${button.icon}"></i>
        </a>
    `;

    const position = 'beforeend';

    linksBlockLeft.insertAdjacentHTML(position, item);
  }
};

generateButtons();
printLinksBlockLeft();
