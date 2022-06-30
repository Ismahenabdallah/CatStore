//import { createStore } from "redux";
import { legacy_createStore as createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Middleware from 'redux-thunk';

import Reducer from "./reducer";
import  throttle  from 'lodash.throttle';
import { combineReducers } from "redux";
// reload page yetfsa5 kol chy  (chouf reducer/index /remove)
/*

import img1 from '../imgs/1.jpg'
const initialState={
    cart : [
        {
            product:{
              
                    "id": 1,
                    "name": "White Cat",
                    "price": 100,
                    "image": img1,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  },
                  quantity: 4
            
        }
    ]
};
//function reducer (state){
//    return state;
//}




const store = createStore(Reduer, initialState,  composeWithDevTools(applyMiddleware(Middleware)));
export default store ;
*/
// SAVE IN LOCALSTORAGE 
function loadState(){
    try {
        const state= localStorage.getItem(' cart ');
    if(state !== null ){
        return JSON.parse(state)
    }
    //JSON.parse tkou string ybadelhaaa  
    } catch (error) {
       console.error(error) 
    }
    
    return {
        cart :[]
    }
}
function saveState(state ){
    console.log('saveState ...')
   localStorage.setItem(' cart ',JSON.stringify(state)) 
//JSON.stringify ybadelhaaa string
}
const AppReducer =combineReducers({
    cart:Reducer

})
const store = createStore(AppReducer,loadState(),composeWithDevTools(applyMiddleware(Middleware)));
store.subscribe(throttle(()=>{
    // lehnaa ay changemment ya3mil talab l saveState ()
    //throttle ywa5er  fn saveState()
    // throttle ya3mil taleb mta3 fn mara wa7da kol 2 min 
    saveState(store.getState())
}),2000)
export default store ;