import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Checkout() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h4" gutterBottom>
                Thank you for your order!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Your order has been placed successfully.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
                sx={{ mt: 4 }}
            >
                Continue Shopping
            </Button>
        </Container>
    );
}
