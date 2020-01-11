# React Assesment Exchange Currencies !

This change currencies project creates by requirement the following :

    - A text input specifying the currency input amount of base currency, USD.
    - Initial default value is 10.00.
    - Initial currency may be hardcoded to USD.
    - A list with the following values:
    - Target currency -- together with the details
    - Calculated converted amount.
    - The calculated amount should change whenever the input amount changes.
    - Current exchange rate
    - A (-) button to remove the target currency
    - An option to add more currency to the list
    - Upon click, user can input their own currency code via dropdown menu and submit

# Features!

- Read Currencies, Update Currencies, Delete Currencies.

### Tech!

The tech, i used the folowing:

- React.js use hooks - Modern Javascript for web apps!
- Redux observable by Rxjs.
- Material -UI - styling framework.
- Node v12.10.0
- npm 6.11.3
- Eslint - Linter the rules for code.
- Flow typing
- Jest - Unit Testing React.

## Folder Structure

```
shopee-test/
  ...
  src/
    component/
	    styles/
		    App.css
		    index.css
		header.js
		listCurrencies.js
    config/
	    actions/
		    actionCurrency.js
	    epic/
		    epicCurrency.js
	    reducers/
		    flowCurrency.js
	    services/
		    index.js
	    mainMiddlewares.js
	    store.js
	pages/
      exchangecurrencies.js
    utils/
      currencysRegions.js
      helper.js
    ...
    .eslintrc
    index.js
```

### Folder Structure Description

- `component` spliting ui component.
- `utils` helper function and generic function.
- `pages` implementation component as view
- `config` the middleware and controller action,reducers,epics, adn store

### Getting Started

Clone and run application.

```sh
$ cd /{YOUR_PATH_FOLDER}/
$ git clone "https://github.com/adreansyah/shopeecurrencies.git"
$ cd shopeecurrencies/
```

1. Start React Apps Using Npm

```sh
$ cd shopeecurrencies/
$ sudo npm install
$ sudo npm install react-scripts -g
$ sudo npm start
```

2. Start React Apps Using Docker

```sh
$ cd shopeecurrencies/
$ docker build . -t shopee-assesment
$ docker container run -it -p 3000:3000 shopee-assesment:latest
```

### Run Unit Test

```sh
$ cd /{GIT_CLONE_FOLDER}/
$ sudo npm test
```

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/adreansyah/shopeecurrencies)
