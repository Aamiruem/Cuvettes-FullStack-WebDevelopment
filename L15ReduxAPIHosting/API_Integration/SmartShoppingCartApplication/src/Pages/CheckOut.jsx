import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Thank you for your order!</h2>
      <p>Your order has been placed successfully.</p>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
      >
        Continue Shopping
      </Button>
    </div>
  );
}
