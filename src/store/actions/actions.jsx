import { CLEAR_CART,ADD_TO_CART, REMOVE_FROM_CART ,  } from "../type";

export function clearCart(){
    return {
        type: CLEAR_CART
    }
}
export function AddToCart(prod_info,quantity){
    return{
        type:ADD_TO_CART,
        prod_info,
        quantity


    }
   
}
export function createRemoveFromCartAction(index){
    return {
        type: REMOVE_FROM_CART,
        index
    }
}
/***
 *  *********REDUX-THUNK*************
 *  1) cartitem import function removeFromCartmethode2 
 * import {removeFromCartmethode2} from "../store/actions/actions";
 *   2)onClick={() => props.removeFromCartmethode2(index)}
 *   3)export default connect(null, {removeFromCartmethode2})(CarttItem);
 */
export function removeFromCartmethode2(index){
    return (dispatch) => {
        dispatch(createRemoveFromCartAction(index));
    };
}
