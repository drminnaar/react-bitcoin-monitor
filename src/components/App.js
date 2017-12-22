import React from 'react';
import { Header } from './Header';
import { BitcoinMonitor } from './BitcoinMonitor/BitcoinMonitor';

const App = () => (
    <div>
        <Header title='Monitor' />
        <div className="mt-md-5 mx-md-5">
            <BitcoinMonitor />
        </div>
    </div>
);

export default App;