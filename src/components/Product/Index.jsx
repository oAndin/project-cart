import { useState } from "react";

/* eslint-disable react/prop-types */
const Product = ({ product, onAddToCart }) => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <img
        className='product-img'
        src={product.image}
        alt="imagem do produto" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="cart-button">
        <select name="" id="" onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((x) => (
            <option key={x.id} value={x + 1}>{x + 1}</option>
          ))}
        </select>
      </div>
      <button onClick={() => onAddToCart(product, quantity)}>
        Adicionar ao carrinho
      </button>
    </div>
  )
};

export default Product;