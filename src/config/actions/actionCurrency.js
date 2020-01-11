// @flow

const RequestCurrenciesList = () => {
  return (dispatch: any) => {
    dispatch({
      type: "REQUEST_USD_DEFAULT_CURRENCY"
    });
  };
};

const RequestAddCurrenciesList = (currencyAdd: null) => {
  return (dispatch: any) => {
    dispatch({
      type: "REQUEST_ADD_NEW_CURRENCY",
      payload: currencyAdd
    });
  };
};

const RequestDeleteCurrenciesList = (currencyDelete: number) => {
  return (dispatch: any) => {
    dispatch({
      type: "REQUEST_DELETE_NEW_CURRENCY",
      payload: currencyDelete
    });
  };
};

export const ActionCreators = {
  RequestCurrenciesList,
  RequestAddCurrenciesList,
  RequestDeleteCurrenciesList
};
