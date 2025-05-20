import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../Store/CartSlice';
import Button from '@mui/material/Button';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  // In a real app, fetch product details by ID
  // For demonstration, let's use a mock list and find by id param
  const products = [
    {
      id: '1',
      name: 'Product 1',
      price: 10.99,
      image: 'image1.jpg',
      description: 'Detailed description here'
    },
    {
      id: '2',
      name: 'Product 2',
      price: 15.99,
      image: 'image2.jpg',
      description: 'Another product description'
    }
  ];
  const product = products.find(p => p.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const isInCart = cartItems.some(item => item.id === product.id);

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(cartActions.removeItem(product.id));
    } else {
      dispatch(cartActions.addItem(product));
    }
  };

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <Button 
          variant="contained" 
          onClick={handleCartAction}
        >
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
}
