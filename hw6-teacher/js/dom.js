// Product item creation functions
function createColumnElement(product) {
  const cardImage = createCardImage(product);
  const cardBody = createCardBody(product);
  const card = createCardElement(product, [cardImage, cardBody]);

  return createElement({
    tag: 'div',
    classList: ['col-sm-12', 'col-md-3', 'column-item'],
    children: [card],
    childrenAction: 'append',
  });
}

function createCardElement(product, children) {
  return createElement({
    tag: 'div',
    classList: ['card', 'h-100', 'card-item'],
    attributes: [{ prop: 'data-item-id', value: product.id }],
    children,
    childrenAction: 'append',
  });
}

function createCardImage(product) {
  const imageElement = createElement({
    tag: 'img',
    classList: ['card-img-top', 'card-image'],
    attributes: [{ prop: 'src', value: product.thumbnail }, { prop: 'alt', value: product.title }],
  });

  return createElement({
    tag: 'div',
    classList: ['image-container'],
    children: [imageElement],
    childrenAction: 'append',
  });
}

function createCardBody(product) {
  const bodyTitle = createElement({
    tag: 'h5',
    classList: ['card-title'],
    textContent: product.title,
  });

  const bodyText = createElement({
    tag: 'p',
    classList: ['card-text', 'flex-grow-1'],
    textContent: product.description,
  });

  const priceElement = createElement({
    tag: 'p',
    textContent: `Price: ${product.price}$`,
  });

  const ratingElement = createElement({
    tag: 'p',
    textContent: `Rating: ${product.rating}`,
  });

  const orderBtnElement = createElement({
    tag: 'button',
    classList: ['btn', 'btn-primary'],
    textContent: 'Add to cart',
  });

  const cardFooter = createElement({
    tag: 'div',
    classList: ['card-footer', 'd-flex', 'justify-content-between', 'align-items-center'],
    children: [priceElement, ratingElement],
    childrenAction: 'append',
  });

  return createElement({
    tag: 'div',
    classList: ['card-body', 'd-flex', 'flex-column'],
    children: [bodyTitle, bodyText, cardFooter, orderBtnElement],
    childrenAction: 'append',
  });
}

// Cart item creation functions
function createShoppingCartItems(orderItems, handleOrderItemDelete, handleOrderItemAmountChange) {
  return orderItems.map((orderItem) => {
    const imgElement = createElement({
      tag: 'img',
      classList: ['list-item-thumbnail'],
      attributes: [{ prop: 'src', value: orderItem.item.thumbnail }, { prop: 'alt', value: orderItem.item.title }],
    });

    const orderTitle = createElement({
      tag: 'span',
      classList: ['list-item-title'],
      textContent: orderItem.item.title,
    });

    const orderAmount = createElement({
      tag: 'span',
      classList: ['badge', 'bg-primary', 'rounded-pill'],
      textContent: `${orderItem.amount} x ${orderItem.item.price}`,
    });

    const itemDeleteBtn = createElement({
      tag: 'button',
      classList: ['btn', 'btn-danger'],
      textContent: 'Remove from order',
      handlers: [{ event: 'click', handler: handleOrderItemDelete }],
    });

    const itemIncreaseBtn = createElement({
      tag: 'button',
      classList: ['btn', 'btn-secondary', 'btn-sm', 'btn-increase'],
      textContent: '+',
      handlers: [{ event: 'click', handler: handleOrderItemAmountChange, additionalParams: ['increase'] }],
    });

    const itemDecreaseBtn = createElement({
      tag: 'button',
      classList: ['btn', 'btn-secondary', 'btn-sm', 'btn-decrease'],
      attributes: orderItem.amount < 2 ? [ { prop: 'disabled', value: true }] : [],
      textContent: '-',
      handlers: [{ event: 'click', handler: handleOrderItemAmountChange, additionalParams: ['decrease'] }],
    });

    const itemControlsContainer = createElement({
      tag: 'div',
      classList: ['list-item-controls'],
      children: [itemDecreaseBtn, orderAmount, itemIncreaseBtn],
      childrenAction: 'append',
    });

    return createElement({
      tag: 'li',
      classList: ['list-group-item', 'd-flex', 'align-items-center'],
      attributes: [{ prop: 'data-item-id', value: orderItem.item.id }],
      children: [imgElement, orderTitle, itemControlsContainer, itemDeleteBtn],
      childrenAction: 'append',
    });
  });
}

// Element common method
function replaceChildren(parent, children) {
  parent.replaceChildren(...children);
}

function createElement({
  tag,
  classList,
  attributes,
  textContent,
  handlers,
  children,
  childrenAction,
}) {
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

  if (handlers?.length) {
    handlers.forEach(({ event, handler, additionalParams }) => {
      element.addEventListener(event, additionalParams ? (event) => handler(event, ...additionalParams) : handler);
    });
  }

  if (children) {
    element[childrenAction](...children);
  }

  return element;
}
