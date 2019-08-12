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

export const removeItem = (cartItem, cartItemToRemove) => {
  const existingItem= cartItem.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if(existingItem.quantity === 1) {
    return cartItem.filter(
      cartItem => cartItem.id !== cartItemToRemove.id
    )
  }
  return cartItem.map(cartItem => 
    cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1} :
    cartItem
    )
}