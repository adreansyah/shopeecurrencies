import currencysRegions from "utils/currencysRegions";
import { isSetNumber } from "utils/helper";

const initialState = {
  selectedData: [],
  data: []
};

const flowCurrencies = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USD_DEFAULT_CURRENCY":
      const currenciesOption = Object.keys(action.payload.rates);
      const responseCurrency = currenciesOption.map(currency => ({
        keys: currency,
        value: currency,
        money: isSetNumber(action.payload.rates[currency]),
        exchangeRegion: currencysRegions[currency]
      }));
      console.log(responseCurrency);
      return {
        ...state,
        data: [responseCurrency[10],responseCurrency[17],responseCurrency[12],responseCurrency[28]],
        selectedData: responseCurrency
      };
    case "REQUEST_ADD_NEW_CURRENCY":
      const arrayCurrencies = [...state.data, action.payload];
      return {
        ...state,
        data: [...new Set(arrayCurrencies)]
      };
    case "REQUEST_DELETE_NEW_CURRENCY":
      const DelarrCurrencies = state.data.filter(function(el) {
        return el.keys !== action.payload;
      });
      return {
        ...state,
        data: DelarrCurrencies
      };
    case "ERROR_API_NYA":
      return action.message;
    default:
      return state;
  }
};
export default flowCurrencies;
