import React from 'react';
import PropTypes from 'prop-types';
import { Indicator } from './Indicator';

const formatNumber = (number) => number.toFixed(4).toString().padEnd(11, '0');

const Display = (props) => (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th className="text-uppercase text-center"></th>
                    <th className="text-uppercase text-center">Before</th>
                    <th className="text-uppercase text-center">Current</th>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr>
                    <td>
                        <i className="fa fa-usd fa-lg"></i>
                    </td>
                    <td>
                        {formatNumber(props.prices.USD.previousRate)}
                    </td>
                    <td>
                        {formatNumber(props.prices.USD.currentRate)}
                        <Indicator
                            currentRate={props.prices.USD.currentRate}
                            previousRate={props.prices.USD.previousRate} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-gbp fa-lg"></i>
                    </td>
                    <td>
                        {formatNumber(props.prices.GBP.previousRate)}
                    </td>
                    <td>
                        {formatNumber(props.prices.GBP.currentRate)}
                        <Indicator 
                            currentRate={props.prices.GBP.currentRate}
                            previousRate={props.prices.GBP.previousRate} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-eur fa-lg"></i>
                    </td>
                    <td>
                        {formatNumber(props.prices.EUR.previousRate)}
                    </td>
                    <td>
                        {formatNumber(props.prices.EUR.currentRate)}
                        <Indicator
                            currentRate={props.prices.EUR.currentRate}
                            previousRate={props.prices.EUR.previousRate} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <select
                            name="currency"
                            id="currency"
                            className="currency form-control mx-auto"
                            onChange={props.onCurrencyChanged}>
                            {
                                props.currencies && props.currencies.map(currency => (
                                    <option key={currency.currency} value={currency.currency}>
                                        {currency.currency}
                                    </option>
                                ))
                            }
                        </select>
                    </td>
                    <td>
                        {props.prices.SELECTED && formatNumber(props.prices.SELECTED.previousRate)}
                    </td>
                    <td>
                        {
                            props.prices.SELECTED &&
                            <div>
                                {formatNumber(props.prices.SELECTED.currentRate)}
                                <Indicator
                                    currentRate={props.prices.SELECTED.currentRate}
                                    previousRate={props.prices.SELECTED.previousRate} />
                            </div>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

Display.propTypes = {
    currencies: PropTypes.array,
    prices: PropTypes.object,
    onCurrencyChanged: PropTypes.func
};

export { Display };