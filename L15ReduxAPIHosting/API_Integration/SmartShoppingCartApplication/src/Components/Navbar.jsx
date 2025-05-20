import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  const { user } = useContext(UserContext);
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Smart Shop
          </Link>
        </Typography>
        
        <Button 
          color="inherit" 
          startIcon={<AccountCircleIcon />}
          onClick={() => navigate('/profile')}
        >
          {user.name}
        </Button>
        
        <Button 
          color="inherit" 
          startIcon={
            <Badge badgeContent={cartQuantity} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          }
          onClick={() => navigate('/cart')}
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
}
