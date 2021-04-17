//setup state cart trên store

const stateCart = {
   cart: [{ "maSP": 1, "tenSP": "VinSmart Live", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg", "soLuong": 2 }]
}

const cartReducer = (state = stateCart, action)=>{
    return {...state}
}

export default cartReducer;