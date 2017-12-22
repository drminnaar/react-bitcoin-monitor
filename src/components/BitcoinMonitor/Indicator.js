import React from 'react';
import PropTypes from 'prop-types';

const Indicator = (props) => {

    let indicator = null;

    if (props.currentRate > props.previousRate) {
        indicator = <i className="fa fa-chevron-up text-success ml-2"></i>;
    } else if (props.currentRate < props.previousRate) {
        indicator = <i className="fa fa-chevron-down text-danger ml-2"></i>;
    } else {
        indicator = <i className="fa fa-minus text-secondary ml-2"></i>;
    }

    return indicator;
};

Indicator.propTypes = {
    currentRate: PropTypes.number,
    previousRate: PropTypes.number
};

export { Indicator };