// import CartItem from '../components/cartItem';


import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/cartSlice';

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
                <div className="cart-item-actions">
                    <button onClick={() => dispatch(removeItemFromCart(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(addItemToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                    }))}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
