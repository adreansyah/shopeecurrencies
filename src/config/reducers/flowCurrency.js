import currencysRegions from 'utils/currencysRegions';
import { removeByAttr, isSetNumber } from 'utils/helper';

const initialState = {
	selectedData: [],
	data: [],
};

const flowCurrencies = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_USD_DEFAULT_CURRENCY':
			const currenciesOption = Object.keys(action.payload.rates);
			const responseCurrency = currenciesOption.map(currency => ({
				keys: currency,
				value: currency,
				money: isSetNumber(action.payload.rates[currency]),
				exchangeRegion: currencysRegions[currency],
			}));
			return {
				...state,
				data: [responseCurrency[10]],
				selectedData: responseCurrency,
			};
		case 'REQUEST_ADD_NEW_CURRENCY':
			const arrayCurrencies = [...state.data, action.payload];
			return {
				...state,
				data: [...new Set(arrayCurrencies)],
			};
		case 'REQUEST_DELETE_NEW_CURRENCY':
			removeByAttr(state.data, 'keys', action.payload);
			return {
				...state,
				data: state.data,
			};
		case 'ERROR_API_NYA':
			return action.message;
		default:
			return state;
	}
};
export default flowCurrencies;
