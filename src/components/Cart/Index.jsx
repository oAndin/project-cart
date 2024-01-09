import CartItem from "../CartItem/Index";
import CheckoutButton from "../Checkout/Index";

/* eslint-disable react/prop-types */
const Cart = ({ cartItems, onUpdateCart, handleRemoveFromCart }) => {

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="">
      <h1>Carrinho</h1>
      {cartItems.length === 0 ?
        (<p>Não há items no carrinho</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} handleRemoveFromCart={handleRemoveFromCart} />
            ))}
            <div className="total">
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <CheckoutButton />
          </>
        )}
    </div >
  )
};

export default Cart;