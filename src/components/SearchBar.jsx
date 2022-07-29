import React from 'react'

export default function SearchBar(props) {
    const {onChange, onCheck, isChecked} = props;
    return (
        <div>
            <h3>Search</h3>
            <input type="text" onChange={onChange}/>
            <br></br>
            <input type="checkbox" onChange={() => onCheck(isChecked)}/><span>Only show products in stock</span>
        </div>
    )
}