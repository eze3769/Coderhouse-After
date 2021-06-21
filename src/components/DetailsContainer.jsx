import React, {useState, useEffect} from 'react'
import {Details} from './Details'
import { useParams } from 'react-router'
export const DetailsContainer = () => {
    const [product, setProduct] = useState([])
    let {product_id} =useParams()
    
    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${product_id}?include_attributes=all`)
        .then(res=> res.json())
        .then(res =>{
            setProduct(res)
            console.log(res)
        })
    }, [useParams])

    return (
        <>
            <Details item= {product}/>
        </>
    )
}
