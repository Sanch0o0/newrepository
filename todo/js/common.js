function createElement({
    tag,
    classList,
    attributes,
    textContent,
    children,
    childrenAction,
}) {
    const element = document.createElement(tag);

    if (classList ? .length) {
        element.classList.add(...classList);
    }

    if (attributes ? .length) {
        attributes.forEach(({ prop, value }) => {
            element.setAttribute(prop, value);
        });
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (handlers ? .length) {
        handlers.forEach(({ event, handler }) => {
            element.addEventListener(event, handler);
        });
    }

    if (children) {
        element[childrenAction](...children);
    }

    return element;
}