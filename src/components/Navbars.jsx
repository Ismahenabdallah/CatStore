/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import RoutesPages from "./RoutesPages";
import styled from "styled-components";
import CartIcon from "./CartIcon";

function Navbars() {
  return (
    <Container className="container">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
       <a className="navbar-brand" href="#">CatsStore</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
           
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
           
            <li className="nav-item cart">  <CartIcon/></li> 
          
          </ul>

        </div>

   
      </nav>
      <RoutesPages/>
    </Container>

  );
}
const Container= styled.div`
 li{
    margin-left:4%;
    margin-right:4%;
    a{
      text-decoration:none;
      color:green;
    }
   
 }
 .cart {
  margin-top:5px;
  margin-left:83vh;
 }
 
 @media only screen and (max-width: 900px) {
  .cart {
    margin-left:4%;
   
  }
 }
 
`;
export default Navbars;