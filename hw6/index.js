let wrapper = document.querySelector('.wrapper');
let bucketButt = document.querySelector('.bucketButt');
let bucketSum = document.querySelector('.bucketSum');
let bucket = document.querySelector('.bucket');
let closeBucket = document.querySelector('.closeBucket');
let bucketBox = document.querySelector('.bucketBox');
let totalSum = document.querySelector('.totalSum');
let disableContainer = document.querySelector('.container-disable-off');
let searchForm = document.querySelector('#form');
let searchInput = document.querySelector('#form-input');
let productSum = 0;
let productCounter = {};
let buccetProducts = [];
let products = [];

bucketButt.addEventListener('click', () => renderBucket(buccetProducts, productCounter));
closeBucket.addEventListener('click', closeButtonBox);
searchForm.addEventListener('submit', searchProduct);

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        // Start here :)
        products = data.products;
        console.log(products);

        renderProductBox(products);
    });

function renderProductBox(products) {
    wrapper.replaceChildren();

    products.forEach((product) => {
        let { images, title, description, price, rating, id } = product;
        let productBox = createProductBox();
        let productImage = createImageBox(images);
        let productDescBox = creatDescriptionBox(title, description);
        let productFotter = creatFooterBox(price, rating);
        let productButton = createButtonElement([{ event: 'click', handler: () => addToBucket(product) }]);

        productBox.append(productImage, productDescBox, productFotter, productButton);
        wrapper.append(productBox);
    })
}

function addToBucket(product) {
    let count;

    if (productCounter[product.id] === undefined) {
        count = 0;
        productCounter[product.id] = ++count;
        buccetProducts[product.id] = product;
    } else {
        count = productCounter[product.id];
        productCounter[product.id] = ++count;
    }

    productSum += product.price;
    renderSum(productSum);

}

function renderBucket(products, productCounter) {
    bucket.classList.remove('hide');
    disableContainer.classList.add('container-disable-on');
    bucketButt.setAttribute('disabled', "disabled");
    document.body.style.overflow = 'hidden';

    if (!Object.keys(productCounter).length) {
        bucketBox.append(createDefParagraph());
    }

    products.forEach((product) => {
        let { images, title, price, id } = product;
        let bucImageEl = createImageBucketEl(images);
        let bucTitleEl = createTitleBucketEl(title);
        let bucCountBox = creareConterBox(productCounter[id], price, [{ event: 'click', handler: counterUpDown }]);
        let deleteElBox = createDeleteElBox([{ event: 'click', handler: deleteElem }]);
        let bucketBoxList = createBucketBoxEl(id);
        bucketBoxList.append(bucImageEl, bucTitleEl, bucCountBox, deleteElBox)
        bucketBox.append(bucketBoxList);
    })

    if (bucketBox.clientHeight >= 440) {
        bucketBox.classList.add('bucketBoxScroll');
    }
}

function closeButtonBox(event) {
    let bucketBoxList = event.target.parentElement;
    bucketBoxList.classList.add('hide');
    disableContainer.classList.remove('container-disable-on');

    bucketBox.replaceChildren();
    bucketButt.removeAttribute('disabled');
    document.body.style.overflow = 'scroll';
}

function deleteElem(event) {
    let bucketElement = event.target.parentElement;
    let id = bucketElement.getAttribute('id');

    productSum -= buccetProducts[id].price * productCounter[id];
    delete buccetProducts[id];
    delete productCounter[id];

    renderSum(productSum);
    bucketElement.remove();

    if (!Object.keys(productCounter).length) {
        bucketBox.append(createDefParagraph());
    }

    if (bucketBox.scrollHeight <= '440') {
        bucketBox.classList.remove('bucketBoxScroll');
    }
}

function counterUpDown(event) {
    let count = event.target.getAttribute('class');
    let current = event.currentTarget;

    let id = event.currentTarget.parentElement.getAttribute('id');
    let currentCount = current.querySelector('.count');

    if (count === 'buttUp') {
        ++productCounter[id];
        currentCount.textContent = productCounter[id];
        productSum += buccetProducts[id].price;
    } else if (productCounter[id] === 1) {
        return
    } else {
        --productCounter[id];
        currentCount.textContent = productCounter[id];
        productSum -= buccetProducts[id].price;
    }

    renderSum(productSum);
}

function renderSum(productSum) {
    bucketSum.textContent = productSum;
    totalSum.textContent = productSum;
}

function searchProduct(event) {
    event.preventDefault();

    const title = searchInput.value.toLowerCase('');

    if (!(title.trim())) {
        return renderProductBox(products);
    }

    let searchProducts = products.filter((product) => {
        return product.title.toLowerCase('').includes(title);
    })
    console.log(searchProducts);

    renderProductBox(searchProducts);
}