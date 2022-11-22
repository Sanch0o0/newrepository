let products = [];
let filteredProducts = [];
let orderItems = [];
let finalPrice = 0;

const wrapperElement = document.querySelector('.wrapper');
const navPriceElement = document.querySelector('.card-price');
const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartPlaceholder = document.querySelector('.shopping-cart-placeholder');
const shoppingCartList = document.querySelector('.shopping-cart-list');
const shoppingCartBtn = document.querySelector('.shopping-cart-nav-btn');
const orderPanelCloseBtn = document.querySelector('.shopping-cart-close');
const orderTotalPriceElement = document.querySelector('.shopping-cart-price');
const orderBtn = document.querySelector('.order-btn');
const searchFormElement = document.querySelector('.search-form');

function setPrice() {
    const price = calculatePrice(orderItems);
    const formattedPrice = transformPriceToMoneyFormat(price);
    finalPrice = price;

    navPriceElement.textContent = `${formattedPrice}$`;
    orderTotalPriceElement.textContent = `Total: ${formattedPrice}$`;
}

function loadProducts() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(handleDataLoaded);
}

function initListeners() {
    searchFormElement.addEventListener('submit', handleProductSearch);
    shoppingCartBtn.addEventListener('click', () => changeOrderPanelVisibility(true));
    orderPanelCloseBtn.addEventListener('click', () => changeOrderPanelVisibility(false));
    wrapperElement.addEventListener('click', handleCartChange);
}

function handleDataLoaded(data) {
    products = data.products;
    filteredProducts = products;

    addProductsToPage();
}

function addProductsToPage() {
    const carts = filteredProducts.map(createColumnElement);

    replaceChildren(wrapperElement, carts);
}

function handleProductSearch(event) {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;

    searchProducts(searchValue)
    addProductsToPage();
}

function changeOrderPanelVisibility(isOrderPanelVisible) {
    if (isOrderPanelVisible) {
        shoppingCart.classList.add('shopping-cart-visible');
        document.body.style.overflow = 'hidden';
    } else {
        shoppingCart.classList.remove('shopping-cart-visible');
        document.body.style.overflow = '';
    }
}

function handleCartChange(event) {
    const productId = event.target.closest('.card').dataset.itemId;

    addProductToOrder(productId);
    setPrice();
    setCartContent();
}

function addProductToOrder(productId) {
    const productToAdd = products.find(product => product.id === parseInt(productId));
    const isProductAlreadyAdded = orderItems.find(orderItem => orderItem.item.id === productToAdd.id);

    if (isProductAlreadyAdded) {
        orderItems = orderItems.map(orderItem => {
            if (orderItem.item.id === productToAdd.id) {
                return {
                    ...orderItem,
                    amount: orderItem.amount + 1,
                }
            } else {
                return orderItem;
            }
        })
    } else {
        orderItems.push({
            item: productToAdd,
            amount: 1,
        });
    }
}

function setCartContent() {
    const orderListElements = createShoppingCartItems(orderItems, handleOrderItemDelete, handleOrderItemAmountChange);
    replaceChildren(shoppingCartList, orderListElements);

    updateCartControlStatus(orderItems.length);
}

function updateCartControlStatus(isOrderItems) {
    if (isOrderItems) {
        shoppingCartPlaceholder.classList.add('shopping-cart-placeholder-hidden');
        shoppingCartList.classList.add('shopping-cart-list-visible');
        orderBtn.disabled = false;
    } else {
        shoppingCartPlaceholder.classList.remove('shopping-cart-placeholder-hidden');
        shoppingCartList.classList.remove('shopping-cart-list-visible');
        orderBtn.disabled = true;
    }
}

function handleOrderItemDelete(event) {
    const itemToDelete = event.target.closest('.list-group-item');
    deleteOrderItem(itemToDelete);

    if (!orderItems.length) {
        updateCartControlStatus(false);
    }

    setPrice();
}

function deleteOrderItem(itemToDelete) {
    const itemId = itemToDelete.dataset.itemId;

    orderItems = orderItems.filter(orderItem => orderItem.item.id !== +itemId);
    itemToDelete.remove();
}

function handleOrderItemAmountChange(event, action) {
    const itemToUpdate = event.target.closest('.list-group-item');

    changeOrderItemAmount(itemToUpdate, action);
    setPrice();
}

function changeOrderItemAmount(itemToUpdate, action) {
    const itemAmountElement = itemToUpdate.querySelector('.badge');
    const decreaseButtonElement = itemToUpdate.querySelector('.btn-decrease');
    const itemId = itemToUpdate.dataset.itemId;
    let updatedAmount = 0;

    orderItems = orderItems.map(orderItem => {
        if (orderItem.item.id === +itemId) {
            updatedAmount = action === 'increase' ? orderItem.amount + 1 : orderItem.amount - 1;
            itemAmountElement.textContent = `${updatedAmount} x ${orderItem.item.price}`;

            return {
                ...orderItem,
                amount: updatedAmount,
            }
        } else {
            return orderItem;
        }
    });

    decreaseButtonElement.disabled = updatedAmount < 2;
}

function searchProducts(searchValue) {
    const value = searchValue.trim().toLowerCase();

    filteredProducts = products.filter(product =>
        product.title.trim().toLowerCase().includes(value) ||
        product.description.trim().toLowerCase().includes(value));
}