import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    const {products} = props
    return (
        <div>
            <h2>Product table</h2>
            <table className="productTable">
                <tbody>
                    <tr className="tableHeader">
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {products.map(product => {
                    return <ProductRow product={product} key={product.id}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}
