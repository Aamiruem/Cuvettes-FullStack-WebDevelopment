// import CartItem from '../components/CartItem';
// In Cart.js
import CartItem from '../components/cartItem'; // if file is cartItem.js
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';
import UserProfile from '../components/UserProfile';

function Cart() {
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    if (totalQuantity === 0) {
        return (
            <div className="cart">
                <UserProfile />
                <h2>Your cart is empty</h2>
                <Link to="/">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <UserProfile />
            <h2>Your Cart ({totalQuantity} items)</h2>

            <div className="cart-items">
                {items.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="cart-total">
                <h3>Total: ${totalAmount.toFixed(2)}</h3>
            </div>

            <div className="cart-actions">
                <Link to="/">Continue Shopping</Link>
                <Link to="/checkout" onClick={() => dispatch(clearCart())}>
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    );
}

export default Cart;
