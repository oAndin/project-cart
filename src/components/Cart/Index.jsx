/* eslint-disable react/prop-types */
const Cart = ({ cartItems }) => {

  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ?
        (<p>Não há items no carrinho</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name}
                </p>
              </div>
            ))}
          </>
        )}
    </div >
  )
};

export default Cart;