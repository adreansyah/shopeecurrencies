import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Setup } from '../services';

export const epicCurrencies = action$ =>
	action$.pipe(
		ofType('REQUEST_USD_DEFAULT_CURRENCY'),
		mergeMap(async action => {
			Setup.createEntities(['latest']);
			const rawResponse = await Setup.endpoints.entities.getOne({
				params: {
					base: 'USD',
				},
			});
			return dispatch => {
				dispatch({ type: 'GET_USD_DEFAULT_CURRENCY', payload: rawResponse.data });
			};
		}),
		catchError(err => Promise.resolve({ type: 'ERROR_API_NYA', message: err.message }))
	);
