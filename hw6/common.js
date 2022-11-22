function createElement({
    el,
    classStyle,
    textContent,
    attributes,
    handlers,
    children,
    childrenAction
}) {
    let element = document.createElement(el);

    if (classStyle) {
        element.classList.add(...classStyle);
    }

    if (textContent) {
        element.innerHTML = textContent;
    }

    if (attributes) {
        attributes.forEach(({ prop, value }) => {
            element.setAttribute(prop, value);
        });
    }

    if (handlers) {
        handlers.forEach(({ event, handler }) => {
            element.addEventListener(event, handler);
        });
    }


    if (children) {
        element[childrenAction](...children);
    }

    return element;
}