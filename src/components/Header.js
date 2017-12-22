import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark" style={{overflowX: 'hidden'}}>
        <div className="text-center mx-auto">            
            <div className="">
                <i className="fa fa-btc fa-3x my-auto d-inline-block" style={{color: '#FFC107'}}></i>
                <div className="h3 ml-3 my-auto text-light d-inline-block">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export { Header };