console.log('Connected lists');

const printFirstList = () => {
  let icon = `<i class="list__head" data-feather="${CONFIG.firstListIcon}"></i>`;
  const position = 'beforeend';
  list_1.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.firstList) {
    let item = `
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${link.link}"
        class="list__link"
        >${link.name}</a
        >
    `;
    const position = 'beforeend';
    list_1.insertAdjacentHTML(position, item);
  }
};

const printSecondList = () => {
  let icon = `<i class="list__head" data-feather="${CONFIG.secondListIcon}"></i>`;
  const position = 'beforeend';
  list_2.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.secondList) {
    let item = `
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
    const position = 'beforeend';
    list_2.insertAdjacentHTML(position, item);
  }
};

printFirstList();
printSecondList();
