function transformPriceToMoneyFormat(price) {
  const priceToMoney = price.toFixed(2);

  return priceToMoney > 9 ? priceToMoney : `0${priceToMoney}`;
}

function calculatePrice(orderItems) {
  return orderItems.reduce((result, orderItem) =>
    result += orderItem.item.price * orderItem.amount, 0,
  );
}
