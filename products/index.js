let products = [];
const wrapperElement = document.querySelector('.wrapper');

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    products = data.products;

    addProductsToPage(products);
  });

function addProductsToPage(products) {
  products.forEach((product) => {
    const itemColumnElement = createColumnElement();
    const card = createCardElement();
    const cardImage =  createCardImage(product);
    const cardBody =  createCardBody(product);

    card.append(cardImage, cardBody);
    itemColumnElement.append(card);

    wrapperElement.append(itemColumnElement);
  });
}

function createColumnElement() {
  return createElement('div', ['col-sm-12', 'col-md-3', 'column-item']);
}

function createCardElement() {
  return createElement('div', ['card', 'h-100', 'card-item']);
}

function createCardImage(product) {
  const imageAttributes = [
    {
      prop: 'src',
      value: product.thumbnail,
    },
    {
      prop: 'alt',
      value: product.title,
    },
  ];
  const imageElement = createElement('img', ['card-img-top', 'card-image'], imageAttributes);
  const imageContainerElement = createElement('div', ['image-container'], null, null, [imageElement], 'append');

  return imageContainerElement;
}

function createCardBody(product) {
  const bodyTitle = createElement('h5', ['card-title'], null, product.title);
  const bodyText = createElement('p', ['card-text', 'flex-grow-1'], null, product.description);
  const priceElement = createElement('p', null, null, `Price: ${product.price}$`);
  const ratingElement = createElement('p', null, null, `Rating: ${product.rating}`);
  const cardFooter = createElement('div', ['card-footer', 'd-flex', 'justify-content-between', 'align-items-center'], null, null, [priceElement, ratingElement], 'append');
  const cardBody = createElement('div', ['card-body', 'd-flex', 'flex-column'], null, null, [bodyTitle, bodyText, cardFooter], 'append');

  return cardBody;
}

function createElement(tag, classList, attributes, textContent, children, childrenAction) {
  const element = document.createElement(tag);

  if (classList?.length) {
    element.classList.add(...classList);
  }

  if (attributes?.length) {
    attributes.forEach(({ prop, value }) => {
      element.setAttribute(prop, value);
    });
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (children) {
    element[childrenAction](...children);
  }

  return element;
}
