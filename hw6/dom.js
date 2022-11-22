function createProductBox() {
    return createElement({
        el: 'div',
        classStyle: ['card', 'cardBox']
    });
}

function createImageBox(img) {
    let imageElement = createElement({
        el: 'img',
        classStyle: ['image']
    });
    imageElement.src = img[0];

    return createElement({
        el: 'div',
        classStyle: ['card-img'],
        children: [imageElement],
        childrenAction: 'append'
    });
}

function creatDescriptionBox(title, description) {
    let cardTitle = createElement({
        el: 'p',
        classStyle: ['card-title'],
        textContent: title
    });
    let cardDescription = createElement({
        el: 'div',
        classStyle: ['card-text'],
        textContent: description
    });
    return createElement({
        el: 'div',
        classStyle: ['card-body'],
        children: [cardTitle, cardDescription],
        childrenAction: 'append'
    });
}

function creatFooterBox(price, rating) {
    let cardPrice = createElement({
        el: 'span',
        classStyle: ['cardPrice'],
        textContent: `Price: ${price} $`
    });
    let cardRating = createElement({
        el: 'span',
        classStyle: ['cardRating'],
        textContent: `Rating: ${rating}`
    });
    return createElement({
        el: 'div',
        classStyle: ['card-footer', 'cardFoot'],
        children: [cardPrice, cardRating],
        childrenAction: 'append'
    });

}

function createButtonElement(handlers) {
    return createElement({
        el: 'button',
        classStyle: ['cardButton'],
        textContent: 'Add to card',
        handlers
    });

}

function createDefParagraph() {
    return createElement({
        el: 'span',
        classStyle: ['defaultSpan'],
        textContent: 'You dont have any items in order '
    })
}

function createBucketBoxEl(id) {
    return createElement({
        el: 'div',
        classStyle: ['bucket-element'],
        attributes: [{ prop: 'id', value: id }]
    })
}

function createImageBucketEl(img) {
    let bucketImage = createElement({
        el: 'img',
        classStyle: ['imgButton']
    })
    bucketImage.src = img[0];

    return createElement({
        el: 'div',
        classStyle: ['imgButtonBox'],
        children: [bucketImage],
        childrenAction: 'append'
    })
}

function createTitleBucketEl(title) {
    return createElement({
        el: 'span',
        classStyle: ['titleBucketEl'],
        textContent: title,
        attributes: [{ prop: 'title', value: title }]
    })
}

function creareConterBox(count, price, handlers) {
    let counterEl = createElement({
        el: 'div',
        classStyle: ['countEl'],
        textContent: `<span class = 'count'> ${count}</span> x ${price}`
    })
    let upButt = createElement({
        el: 'button',
        classStyle: ['buttUp'],
        textContent: '+'
    })
    let downButt = createElement({
        el: 'button',
        classStyle: ['buttDown'],
        textContent: '-'
    })
    return createElement({
        el: 'div',
        classStyle: ['countBox'],
        handlers,
        children: [downButt, counterEl, upButt],
        childrenAction: 'append'
    })
}

function createDeleteElBox(handlers) {
    return createElement({
        el: 'button',
        classStyle: ['deleteElBut'],
        textContent: 'Remove from order',
        handlers
    })
}

function createBreadCrumb(textContent) {
    return createElement({
        el: 'li',
        classStyle: ['breadcrumb-item'],
        textContent
    })
}