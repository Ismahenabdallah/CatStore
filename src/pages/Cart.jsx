import React from 'react'
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import {connect} from "react-redux";
import {clearCart} from "../store/actions/actions";
const Cart = (Props) => {
  const placeOrder = () => {
    // send the request to the server
    // clear cart
    Props.clearCart();
    alert('We recieved your order, and we are working on it.');
};
   
   
    return ( 
        <Container className=''>
           <h1>Cart</h1>         
           <div className="row gap-lg-0">
{Props.cartItems.map((item, index) => 
                        <div className={'col-md-4'} key={index}>
                           <CartItem item={item} index={index} />
                        
       
                        </div>
                    )}

                </div>
<br/>
<h3>Total :{Props.total}</h3>
<br/>
<button className="btn btn-primary btn-block" onClick={placeOrder}>Place order</button>
        </Container>
      )
    }
    const Container= styled.div`
     h1{
        margin-top:5%;
     }
    
    `;


    const mapStateToProps = (state) => {
      return {
          cartItems: state.cart,
         total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
      };
  } 
  
  const mapDispatchToProps = (dispatch) => {
      return {
          clearCart: () => dispatch(clearCart()),
      };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cart);