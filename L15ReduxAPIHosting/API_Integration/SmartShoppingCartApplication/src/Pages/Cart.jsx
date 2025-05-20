import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../Store/CartSlice';
import CartItem from '../Components/CartItem';
import Button from '@mui/material/Button';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(cartActions.clearCart());
    navigate('/checkout');
  };

  if (cart.totalQuantity === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          onRemove={() => dispatch(cartActions.deleteItem(item.id))}
          onDecrease={() => dispatch(cartActions.removeItem(item.id))}
          onIncrease={() => dispatch(cartActions.addItem(item))}
        />
      ))}
      <div className="cart-total">
        <h3>Total: ${cart.totalAmount.toFixed(2)}</h3>
        <p>{cart.totalQuantity} items</p>
      </div>
      <Button 
        variant="contained" 
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </div>
  );
}
