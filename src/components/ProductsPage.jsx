import React, {useState} from 'react'
import productData from "../data.json"
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function ProductsPage() {
    return (
        <div>
            <SearchBar/>
            <ProductTable/>
        </div>
    )
}
