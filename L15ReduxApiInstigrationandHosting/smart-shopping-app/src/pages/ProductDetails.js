import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/cartSlice';

// Mock products data (same as in Home.js)
const products = [
    { id: 1, name: 'Laptop', price: 999, image: 'laptop.jpg', description: 'Powerful laptop with great performance' },
    { id: 2, name: 'Smartphone', price: 699, image: 'phone.jpg', description: 'Latest smartphone with amazing camera' },
    { id: 3, name: 'Headphones', price: 199, image: 'headphones.jpg', description: 'Noise cancelling wireless headphones' },
    { id: 4, name: 'Tablet', price: 499, image: 'tablet.jpg', description: 'Portable tablet for work and play' },
];

function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const isInCart = cartItems.some(item => item.id === product.id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            {isInCart ? (
                <button onClick={() => dispatch(removeItemFromCart(product.id))}>
                    Remove from Cart
                </button>
            ) : (
                <button onClick={() => dispatch(addItemToCart(product))}>
                    Add to Cart
                </button>
            )}

            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default ProductDetails;
