import React, {useState} from 'react'
import jsonData from "./../data.json"
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    function handleSearch(e) {
        if(e.target.value === "") {
            setProducts(jsonData);
        } else {
            const filtered = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
            setProducts(filtered);
        }
    };
    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar onChange={handleSearch}/>
            <ProductTable products={products}/>
        </div>
    )
}
