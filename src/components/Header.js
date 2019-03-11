import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Header</h1>
                <div>
                    <small>Fixinity / {this.props.currentPage}/
                        <span onClick={() => this.props.setPage('device')}>
                            Device
                        </span>/Profile
                    </small>
                </div>
            </div>
        );
    }
}

export default Header;