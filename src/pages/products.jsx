import React from 'react'
import styled from 'styled-components';

import ProductItem from '../components/ProductItem'
import { ProductsListe } from '../api/ProdctsListe';
const Products = () => {
  
   
   
    return (
        <Container className=''>
           <h1>Products</h1>         
           <div className="row">
                   
                     {ProductsListe.map((product, index) => {
          return (
            <div className={'col-4'} key={product.id}>
                 <ProductItem id={index} image={product.image} name={product.name} price={product.price}  />
            </div>
         
          );
        })}
                </div>


        </Container>
      )
    }
    const Container= styled.div`
     h1{
        margin-top:5%;
     }
    
    `;export default Products