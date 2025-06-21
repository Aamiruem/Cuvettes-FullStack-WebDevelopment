// import CartSummary from '../components/CartSummary';

// In Home.js
import CartSummary from '../components/cartSummary'; // if file is cartSummary.js
import { useState, useContext } from 'react';
// import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import UserProfile from '../components/UserProfile';
import { UserContext } from '../context/UserContext';

// Mock products data
const products = [
    { id: 1, name: 'Laptop', price: 999, image: 'laptop.jpg' },
    { id: 2, name: 'Smartphone', price: 699, image: 'phone.jpg' },
    { id: 3, name: 'Headphones', price: 199, image: 'headphones.jpg' },
    { id: 4, name: 'Tablet', price: 499, image: 'tablet.jpg' },
];

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    useContext(UserContext);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home">
            <div className="header">
                <UserProfile />
                <CartSummary />
            </div>

            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="products-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;
