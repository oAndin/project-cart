import CartItem from "../CartItem/Index";

/* eslint-disable react/prop-types */
const Cart = ({ cartItems, onUpdateCart }) => {

  return (
    <div className="test">
      <h1>Carrinho</h1>
      {cartItems.length === 0 ?
        (<p>Não há items no carrinho</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} />
            ))}
          </>
        )}
    </div >
  )
};

export default Cart;