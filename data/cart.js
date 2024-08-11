export const cart = [];

export function addToCart(productId) {
  let matchingItem;
      const valueSelected = document.querySelector(`.js-quantity-selector-${productId}`);

      cart.forEach((cartItem) => {
        if(productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      if(matchingItem) {
        matchingItem.quantity += Number(valueSelected.value);
      } else {
        cart.push({
          productId,
          quantity: Number(valueSelected.value)
        });
      }
}