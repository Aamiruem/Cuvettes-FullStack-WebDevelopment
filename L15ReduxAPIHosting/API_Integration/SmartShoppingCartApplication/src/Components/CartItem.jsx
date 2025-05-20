import { IconButton, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem({ item, onRemove, onDecrease, onIncrease }) {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      justifyContent="space-between" 
      spacing={2}
      sx={{ p: 2, borderBottom: '1px solid #eee' }}
    >
      <img 
        src={item.image} 
        alt={item.name} 
        style={{ width: 50, height: 50, objectFit: 'cover' }} 
      />
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {item.name}
      </Typography>
      <Stack direction="row" alignItems="center">
        <IconButton size="small" onClick={onDecrease}>
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography variant="body1" sx={{ mx: 1 }}>
          {item.quantity}
        </Typography>
        <IconButton size="small" onClick={onIncrease}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Typography variant="body1" sx={{ minWidth: 80, textAlign: 'right' }}>
        ${item.totalPrice.toFixed(2)}
      </Typography>
      <IconButton onClick={onRemove}>
        <DeleteIcon color="error" />
      </IconButton>
    </Stack>
  );
}
