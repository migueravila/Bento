// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const printFirstList = () => {
  let icon = `<i class="listIcon" icon-name="${CONFIG.firstListIcon}"></i>`;
  const position = 'beforeend';
  list_1.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.firstList) {
    let item = `
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${link.link}"
        class="listItem"
        >${link.name}</a
        >
    `;
    const position = 'beforeend';
    list_1.insertAdjacentHTML(position, item);
  }
};

const printSecondList = () => {
  let icon = `<i class="listIcon" icon-name="${CONFIG.secondListIcon}"></i>`;
  const position = 'beforeend';
  list_2.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.secondList) {
    let item = `
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="listItem"
          >${link.name}</a
          >
      `;
    const position = 'beforeend';
    list_2.insertAdjacentHTML(position, item);
  }
};

printFirstList();
printSecondList();
