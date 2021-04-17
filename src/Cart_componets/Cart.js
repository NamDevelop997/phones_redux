import React, { Component } from 'react'

//library connect do react-redux cung cap
import { connect } from 'react-redux'
class Cart extends Component {

    render() {
        let { cart } = this.props;
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ width: '700px' }} >
                            <div className="modal-header">
                                <h5 className="modal-title ">Cart Item</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.maSP}</td>
                                                    <td>{item.tenSP}</td>
                                                    <td><img src={item.hinhAnh} style={{ with: '50px', height: '50px' }}></img></td>
                                                    <td>{item.giaBan.toLocaleString()}</td>
                                                    <td>{item.soLuong}</td>
                                                    <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.stateCart.cart,
    }
}

export default connect(mapStateToProps)(Cart)