import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartSummary() {
    const { totalQuantity, totalAmount } = useSelector(state => state.cart);

    return (
        <div className="cart-summary">
            <Link to="/cart">
                <span>Items: {totalQuantity}</span>
                <span>Total: ${totalAmount.toFixed(2)}</span>
            </Link>
        </div>
    );
}

export default CartSummary;
