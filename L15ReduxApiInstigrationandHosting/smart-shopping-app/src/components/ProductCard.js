import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </Link>
            <button onClick={() => dispatch(addItemToCart(product))}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;
