export const addItemToCart = (cartItem, cartItemToAdd) => {
  const existingItem = cartItem.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if(existingItem) {
    return cartItem.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1} :
      cartItem
      )
  }
  
  return [...cartItem, {...cartItemToAdd, quantity: 1}]
}