import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import {connect} from "react-redux";
 function CartIcon(Props) {
  return (
    <Container>
      <Link to ='/cart'>
      <i className="fa fa-shopping-cart  text-black "></i>
        <span className='badge badge-danger'>{Props.totalQuantity}</span>
      </Link>   
       
    
    </Container>
  )
}
const mapStateToProps = (state) => {
  return {
      totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
  };
}

export default connect(mapStateToProps)(CartIcon);

const Container=styled.div`
i{
    font-size:25px;
}
span{
    position:absolute;
    top:10%;
   right:4.5%;
 
    font-size:10px;
}
    
}
@media only screen and (max-width: 767px) {
  span {
    left:10%;
   
   
  
 }
}
@media only screen and (max-width: 900px) {
    span {
       
       top:80% ;
     
   right:88%;
     
     
    }
   }

`;
