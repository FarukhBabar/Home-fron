import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await axios.get('https://api.homeessentialshive.co.uk/api/products', {
                params: { q: searchTerm }
            });
            setProducts(response.data);

            // After fetching products, navigate to the All Products page
            navigate('/all-products', { state: { products: response.data } });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className='d-flex'>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products"
                className="form-control" 
            />
            <button className='btn btn-success ms-2' onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;
