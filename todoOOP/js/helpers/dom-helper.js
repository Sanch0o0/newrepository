class DomHelper {
  static createCheckbox(handlers) {
    return DomHelper.createElement({
      tag: 'input',
      classList: ['checkbox'],
      attributes: [{ prop: 'type', value: 'checkbox' }],
      handlers,
    });
  }

  static createTitle(title) {
    return DomHelper.createElement({
      tag: 'label',
      classList: ['todo-title'],
      textContent: title,
    });
  }

  static createEditInput(title) {
    return DomHelper.createElement({
      tag: 'input',
      classList: ['form-control', 'todo-input'],
      textContent: title,
    });
  }

  static createEditButton(handlers) {
    return DomHelper.createElement({
      tag: 'button',
      classList: ['btn', 'btn-success', 'todo-item-btn-edit'],
      textContent: 'Edit',
      handlers,
    });
  }

  static createDeleteButton(handlers) {
    return DomHelper.createElement({
      tag: 'button',
      classList: ['btn', 'btn-danger', 'todo-item-btn-delete'],
      textContent: 'Delete',
      handlers,
    });
  }

  static createListItem(children) {
    return DomHelper.createElement({
      tag: 'li',
      classList: ['todo-item'],
      children,
      childrenAction: 'append',
    });
  }

  static createElement({
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
      handlers.forEach(({ event, handler}) => {
        element.addEventListener(event, handler);
      });
    }

    if (children) {
      element[childrenAction](...children);
    }

    return element;
  }
}
