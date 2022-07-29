import React from 'react'

export default function ProductRow(props) {
    const {product: {category, price, inStock, name, id}} = props;
    return (
        <tr className={`tableContent ` + `${inStock? null: "red"}`}>
            <th>{name}</th>
            <th>{price}</th>
        </tr>
    )
}
