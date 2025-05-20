import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../Store/CartSlice';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(cartActions.addItem(product));
  };

  return (
    <Card 
      sx={{ maxWidth: 345, cursor: 'pointer' }} 
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price.toFixed(2)}
        </Typography>
        <Button 
          variant="contained" 
          size="small" 
          onClick={handleAddToCart}
          sx={{ mt: 2 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
