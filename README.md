# React Bitcoin Monitor

An app that monitors changes in the _Bitcoin Price Index (BPI)_.

By default, the BPI will be shown for _USD_, _GBP_, and _EUR_. Optionally, one can select ones own currency to display in addition to the 3 aforementioned currencies.

_Bitcoin Monitor_ makes use of the _[CoinDesk Bitcoin Price Index API]_. Go [here](https://www.coindesk.com/price/) for more price information by CoinDesk.

Go **[here](http://react-bitcoin-monitor.drminnaar.me/)** for live demo.

The application is composed of the following components:

* Header - A heading that displays application title

* BitcoinMonitor - The primary (root) component that manages state for itself and all underlying components. It is also responsible for connecting to _BitcoinService_ to retrieve _Bitcoin Price Index_ data.

* Display - Displays the _Bitcoin Price Index_ data for USD, GBP, and EUR as a default. Also allows one to select a currency as a fourth price to monitor.

* Indicator - Used by the _Display_ component, it displays an indicator that shows if the current price is up or down from previous price.

Component Diagram
![Component Diagram](https://user-images.githubusercontent.com/33935506/34460739-2e3b6a84-ee20-11e7-8808-a654fbdaaf55.png)

The following services are used to obtain _Bitcoin Price Index_ data:

* BitcoinService

  A wrapper that is responsible for integrating with the [CoinDesk Bitcoin Price Index API]

Service Diagram
![react-bitcoin-monitor-services](https://user-images.githubusercontent.com/33935506/34460740-2e7c490a-ee20-11e7-936e-60c637b630da.png)

Features:

* Show BPI for USD, GBP, and EUR
* Show BPI for any custom selected currency

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration
* [CoinDesk Bitcoin Price Index API] integration

**Screenshots:**

... | ...
---|---
![](https://user-images.githubusercontent.com/33935506/34460771-4309303a-ee21-11e7-8a41-867a266e092c.png) | ![](https://user-images.githubusercontent.com/33935506/34460772-4337f320-ee21-11e7-9cc5-aa3b78f5f6b0.png)
![](https://user-images.githubusercontent.com/33935506/34460773-436739be-ee21-11e7-9604-8450e09ee9cc.png) | ![](https://user-images.githubusercontent.com/33935506/34460774-43a80264-ee21-11e7-8323-fbee96ccce35.png)

---

## Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [CoinDesk Bitcoin Price Index API] - Provides Bitcoin Price Index data
* [Surge] - Static web publishing for Front-End Developers

---

## Related Projects

* [react-starter]

  A basic template that consists of the essential elements that are required to start building a React application

* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-bitcoin-monitor'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-bitcoin-monitor.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-bitcoin-monitor.git
  ```

* Install node modules

   ```bash
   cd react-bitcoin-monitor
   npm install
   ```

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-bitcoin-monitor/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[CoinDesk Bitcoin Price Index API]: https://www.coindesk.com/api/
[Surge]: https://surge.sh/
[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard
