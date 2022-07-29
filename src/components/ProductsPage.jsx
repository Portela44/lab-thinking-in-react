import React, {useState} from 'react'
import jsonData from "./../data.json"
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [isChecked, setIsChecked] = useState(true);
    function handleSearch(e) {
        if(e.target.value === "") {
            setProducts(jsonData);
        } else {
            const filtered = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
            setProducts(filtered);
        }
    };
    function handleStock(isChecked) {
        if(isChecked) {
            const filtered = products.filter(product => product.inStock);
            setProducts(filtered);
            setIsChecked(!isChecked);
        } else {
            setProducts(jsonData);
            setIsChecked(!isChecked);
        }
    };
    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar onChange={handleSearch} onCheck={handleStock} isChecked={isChecked}/>
            <ProductTable products={products}/>
        </div>
    )
}
