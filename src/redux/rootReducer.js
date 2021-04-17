import { combineReducers } from 'redux';
import CartReducer from '../redux/CartReducer';



const rootReducer = combineReducers({ //store tổng của ứng dụng
    stateCart: CartReducer //store cart
})

export default rootReducer;