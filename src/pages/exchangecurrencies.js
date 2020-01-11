import React, { useEffect, useState } from 'react';
import {
	Button,
	Container,
	CssBaseline,
	Card,
	CardContent,
	FormControl,
	InputLabel,
	Select,
	FormHelperText,
	MenuItem,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { ActionCreators } from '../config/actions/actionCurrency';
import { bindActionCreators } from 'redux';
import Header from 'component/header';
import ListCurrencies from 'component/listCurenncies';
import currencysRegions from 'utils/currencysRegions';
// @flow

type Props = {
	flowCurrencies: number,
	RequestCurrenciesList: () => void,
};

const SiteExchange = (props: Props) => {
	const [selectValue, setSelect] = useState('');
	const [activeInput, setActiveInput] = useState(0);
	const [changeAmount, setChangeAmount] = useState(1);
	const {
		RequestCurrenciesList,
		RequestAddCurrenciesList,
		RequestDeleteCurrenciesList,
		RequestUpdateCurrenciesList,
		flowCurrencies,
	} = props;

	const FormInputActiveCurrencies = () => {
		setActiveInput(1);
	};

	const AddCurrencies = (e: null) => {
		setSelect(e.target.value);
	};

	const SubmitCurrencies = e => {
		e.preventDefault();
		selectValue !== '' && setActiveInput(0);
		selectValue !== '' && RequestAddCurrenciesList(selectValue);
	};

	const DeleteCurrencies = (item: null) => {
		RequestDeleteCurrenciesList(item);
	};

	const ChangeCurrency = (e: null) => {
		setChangeAmount(e.target.value);
	};

	useEffect(() => {
		RequestCurrenciesList();
	}, [RequestCurrenciesList]);

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Card style={{ marginTop: 20 }}>
					<CardContent>
						<Header ChangeCurrency={e => ChangeCurrency(e)} changeAmount={changeAmount} />
						{activeInput !== 0 ? (
							<>
								<form onSubmit={SubmitCurrencies}>
									<FormControl
										size="small"
										variant="outlined"
										style={{ minWidth: '75%', marginBottom: 12 }}
									>
										<InputLabel id="demo-simple-select-outlined-label">Currencies</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											value={selectValue}
											onChange={AddCurrencies}
										>
											{flowCurrencies.selectedData.map((currencyItem, index) => {
												return (
													<MenuItem key={index} value={currencyItem}>
														{currencyItem.value} - {currencyItem.exchangeRegion}
													</MenuItem>
												);
											})}
										</Select>
									</FormControl>
									<Button
										type="submit"
										size="medium"
										variant="contained"
										color="secondary"
										style={{ margin: 2 }}
									>
										Submit
									</Button>
								</form>
							</>
						) : (
							<Button
								size="medium"
								onClick={FormInputActiveCurrencies}
								fullWidth
								variant="contained"
								color="secondary"
							>
								<FontAwesomeIcon icon={faPlus} fixedWidth /> Add More Currencies
							</Button>
						)}
						{flowCurrencies.data.length !== 0 ? (
							flowCurrencies.data.map((value, index) => {
								return (
									<ListCurrencies
										key={index}
										data={value}
										DeleteCurrencies={() => DeleteCurrencies(value.keys)}
										changeAmount={changeAmount}
									/>
								);
							})
						) : (
							<div className="txt-center el-not-found">Exchange Currencies Not found</div>
						)}
					</CardContent>
				</Card>
			</Container>
		</React.Fragment>
	);
};

const mapStateToProps = state => {
	return {
		...state,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteExchange);