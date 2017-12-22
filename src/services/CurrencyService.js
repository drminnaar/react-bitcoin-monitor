const currencies  = require('./currencies');

export class CurrencyService {
    
    getSupportedCurrencies() {
        return currencies;
    }
}