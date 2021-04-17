import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { dataPhones } = this.props;
        return (
            <div>
                <div className="card mt-4 text-center" style={{ border: 'none' }}>
                    <img className="card-img-top" src={dataPhones.hinhAnh} alt={dataPhones.tenSP} style={{ with: '250px', height: '350px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{dataPhones.tenSP}</h4>
                        <p className="card-text">{dataPhones.giaBan.toLocaleString()} </p>
                        <button className="btn btn-success"  onClick={() => {

                        }}>Add to card</button>
                    </div>
                </div>

            </div>
        )
    }
}
