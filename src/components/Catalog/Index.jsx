/* eslint-disable react/prop-types */
import productsData from '../data/products_mock.json'
import Product from "../Product/Index";
const Catalog = ({ onAddToCart }) => {

  return (
    <div className=''>
      <h1>Catálogo de Produtos</h1>
      <div className="products-container">
        {productsData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
};

export default Catalog;