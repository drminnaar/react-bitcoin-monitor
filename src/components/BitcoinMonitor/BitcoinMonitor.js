import React, { Component } from 'react';
import { Display } from './Display';
import { BitcoinService}  from '../../services/BitcoinService';
import { CurrencyService } from '../../services/CurrencyService';

const bitcoinService = new BitcoinService();
const currencyService = new CurrencyService();

const mapToPrice = (currentPrice, previousPrice) => {
    return {
        code: currentPrice.code,
        description: currentPrice.description,
        currentRate: currentPrice.currentRate,
        previousRate: previousPrice ? previousPrice.currentRate : 0
    };
};

class BitcoinMonitor extends Component {

    constructor(props){
        super(props);

        this.state = {
            prices: {},
            ready: false,
            currencies: []
        };

        this.handleOnRefresh = this.handleOnRefresh.bind(this);
        this.loadBitcoinPriceIndex = this.loadBitcoinPriceIndex.bind(this);
        this.handleOnCurrencyChanged = this.handleOnCurrencyChanged.bind(this);
    }

    
    handleOnRefresh() {
        if (this.state.prices.SELECTED) {            
            
            const currency = this.state.prices.SELECTED.code;
            
            bitcoinService
                .getPrice(currency)
                .then(price => {
                    if (price) {
                        this.loadBitcoinPriceIndex(price);
                    } else {
                        this.loadBitcoinPriceIndex();
                    }
                })
                .catch(error => console.log(error.message));

        } else {
            this.loadBitcoinPriceIndex();
        }
    }

    
    handleOnCurrencyChanged(event) {
        
        const currency = event.target.value;
        
        bitcoinService
            .getPrice(currency)
            .then(price => {
                if (price) {                    
                    this.setState(prevState => {
                        const prices = prevState.prices;
                        prices.SELECTED = mapToPrice(price[currency], prevState.prices[currency]);
                        return { prices: prices };
                    });
                }
            })
            .catch(error => console.log(error.message));
    }

    
    loadBitcoinPriceIndex(additionalPrice) {
        bitcoinService
            .getPrices()
            .then(prices => {
                if (prices) {                    
                    this.setState(prevState => {
                        const newPrices = {
                            EUR: mapToPrice(prices.EUR, prevState.prices.EUR),
                            GBP: mapToPrice(prices.GBP, prevState.prices.GBP),
                            USD: mapToPrice(prices.USD, prevState.prices.USD)
                        };

                        if (additionalPrice) {
                            newPrices.SELECTED = mapToPrice(
                                Object.values(additionalPrice)[0],
                                prevState.prices.SELECTED);
                        }

                        return { prices: newPrices, ready: true };
                    });
                }
            })
            .catch(error => console.log(error.message));
    }

    
    loadSupportedCurrencies() {
        this.setState(() => ({ currencies: currencyService.getSupportedCurrencies() }));
    }

    
    componentDidMount(){
        this.loadSupportedCurrencies();
        this.loadBitcoinPriceIndex();
    }


    render() {
        return (
            this.state.ready === true && <div>
                
                <Display 
                    currencies={this.state.currencies}
                    prices={this.state.prices}
                    onCurrencyChanged={this.handleOnCurrencyChanged} />

                <div className=" mt-5 text-center">
                    <button className="btn btn-lg btn-refresh" onClick={this.handleOnRefresh}>
                        <i className="fa fa-refresh fa-lg"></i>
                    </button>
                </div>

            </div>
        );
    }
}

export { BitcoinMonitor };