import React, { useEffect, useState } from 'react'
import { ProductsListe } from '../api/ProdctsListe';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from '../components/Loader';
import { AddToCart } from '../store/actions/actions';
function Details(props) {
    const [loader, setLoader] = useState(true)
    const [quantity, setquantity] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000)
    }, [])
    const handleQuntity = (e) => {
        const value = e.target.value
        if (value < 0) return;
        setquantity(value)
    }
    const addToCart = (product) => {
       props.AddToCart(product,quantity);
    }
    const { id } = useParams();
    const productByid = ProductsListe[id];
    return loader ? (
        <Loader />

    ) :
        (
            <Container className='row container'>
                <div className={'col-6 '} style={{ Width: '' }}>
                    <img src={productByid.image} alt="" />
                </div>
                <div className={'col-12 '}>
                    <h1> {productByid.name}</h1>

                    <p>
                        <b>price:</b> {productByid.price}$
                    </p>
                    <p>{productByid.description}</p>
                    <input type='number' value={quantity} onChange={handleQuntity} />
                    <p>Total : {quantity * productByid.price}$</p>
                    <hr />
                    <button className='btn btn-primary' onClick={() => addToCart(productByid)}> Add To Cart </button>
                </div>


            </Container>

        )
}
const Container = styled.div`
margin-top:5%;
display:grid;
grid-template-columns: 30% auto;
gap:0;
img {
    width:50vh;
    height:70vh;
    
}
@media only screen and (max-width: 600px) {
    display:block;
    img {
        width:50vh;
        height:50vh;
        
    }
   
}
@media only screen and (max-width: 900px) {
    
    display:block;
    img {
        width:50vh;
        height:50vh;
        
    }
    ;}

`;
const mapDispatchToProps = (dispatch) => {
    return {
        AddToCart: (prod_info, quantity) => dispatch(AddToCart(prod_info, quantity)),
    };
}
export default connect(null, mapDispatchToProps)(Details);