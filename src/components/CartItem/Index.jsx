/* eslint-disable react/prop-types */
const CartItem = ({ item, onUpdateCart, handleRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="cart-button">
        <input type="text" value={item.quantity} onChange={(e) => onUpdateCart(item, e.target.value)} />
        <button onClick={(e) => handleRemoveFromCart(item)}>Remover</button>
      </div>
    </div>
  )
}

export default CartItem;