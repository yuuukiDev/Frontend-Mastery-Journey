import productsData from '../ProductsData';
import Product from './Product';
import './ProductList.css'
import './Products.css'
const ProductsList = () => {
    const products = productsData.map((product) => {
        return product.price > 100 ? (
            <Product key={product.id} product={product}/>
        ) : null;
    });

    return (<div className="products-list">
        <div className="row">
            {products}
        </div>
    </div>);
}

export default ProductsList;