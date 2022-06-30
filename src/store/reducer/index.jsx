import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../type";

export default function cartReduer(state, action){

    switch(action.type){
        case ADD_TO_CART: {
            return  [
                    ...state,
                    {
                        product: action.prod_info,
                        quantity: action.quantity
                    }
                ]
           
        }
        case REMOVE_FROM_CART: {
            const item_index = action.index;
            const new_state = [...state];

            /*
            reload page yetfsa5 kol chy
            delete new_state.cart[item_index];
            */
           // save in localstorage 
           new_state.splice(item_index,1);
           /// heka yetfsa5 el 3onser w index mta3ou 
              return new_state;
        }
       

        case CLEAR_CART: {
            let new_state = [...state];
          
            // eslint-disable-next-line no-const-assign
            new_state = [];
            return new_state;
        }

        default: {
            if(state===undefined)
                return [];
                return state;
          
        }
           
    }
}