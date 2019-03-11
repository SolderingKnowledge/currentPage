import React, { Component, Fragment } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                {this.props.product.name}
            </Fragment>
        );
    }
}

export default Product;