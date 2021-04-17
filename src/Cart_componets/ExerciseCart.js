import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

export default class ExerciseCart extends Component {


    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-center">Product List</h3>
               <p className="text-right d-block " data-toggle="modal" data-target="#modelId"  style = {{marginRight: '10%', cursor: 'pointer', fontSize:'20px'}}> <i className="fa fa-cart-plus "   /> (0)</p>
                <ProductList />
                <Cart />
                

            </div>
        )
    }
}
