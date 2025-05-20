import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { UserContext } from '../Context/UserContext';
import ProductCard from '../Components/ProductCard';
import SearchBar from '../Components/SearchBar';

const products = [
  { id: 1, name: 'Product 1', price: 10.99, image: 'image1.jpg', description: 'Description 1' },
  { id: 2, name: 'Product 2', price: 19.99, image: 'image2.jpg', description: 'Description 2' },
  // Add more products
];

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { user } = useContext(UserContext);
  const cartTotal = useSelector(state => state.cart.totalQuantity);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="cart-summary">
        <span>Cart: {cartTotal} items</span>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
