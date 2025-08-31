export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 3
},
{
  productId: 'bc2847e9-5323-403f-b7cf-57fde044a955',
  quantity: 3
}
];

export function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
      matchingItem = cartItem;
      }
    });

    if( matchingItem){
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }
}


export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

}