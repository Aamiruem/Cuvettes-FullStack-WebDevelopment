import { Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

function Checkout() {
    return (
        <div className="checkout">
            <UserProfile />
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase.</p>
            <Link to="/">Continue Shopping</Link>
        </div>
    );
}

export default Checkout;
