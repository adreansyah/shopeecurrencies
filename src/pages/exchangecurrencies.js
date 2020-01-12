// @flow
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { ActionCreators } from "../config/actions/actionCurrency";
import { bindActionCreators } from "redux";
import Header from "component/header";
import ListCurrencies from "component/listCurenncies";

type Props = {
  flowCurrencies: {
    data: Array<*>,
    selectedData: Array<*>
  },
  RequestCurrenciesList: () => void,
  RequestAddCurrenciesList: () => void,
  RequestDeleteCurrenciesList: () => void
};

const SiteExchange = (props: Props) => {
  const [selectValue, setSelect] = useState("");
  const [activeInput, setActiveInput] = useState(0);
  const [changeAmount, setChangeAmount] = useState(10);
  const {
    RequestCurrenciesList,
    RequestAddCurrenciesList,
    RequestDeleteCurrenciesList,
    flowCurrencies
  } = props;

  const FormInputActiveCurrencies = () => {
    setActiveInput(1);
  };

  const AddCurrencies = (e: null) => {
    setSelect(e.target.value);
  };

  const SubmitCurrencies = e => {
    e.preventDefault();
    selectValue !== "" && setActiveInput(0);
    selectValue !== "" && RequestAddCurrenciesList(selectValue);
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
            <Header
              ChangeCurrency={e => ChangeCurrency(e)}
              changeAmount={changeAmount}
            />
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
              <div data-test="not-found" className="txt-center el-not-found">
                Exchange Currencies Not found
              </div>
            )}
            {activeInput !== 0 ? (
              <>
                <form onSubmit={SubmitCurrencies}>
                  <FormControl
                    size="small"
                    variant="outlined"
                    style={{ minWidth: "75%", marginBottom: 12 }}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Currencies
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={selectValue}
                      onChange={AddCurrencies}
                    >
                      {flowCurrencies.selectedData.map(
                        (currencyItem, index) => {
                          return (
                            <MenuItem key={index} value={currencyItem}>
                              {currencyItem.value} -{" "}
                              {currencyItem.exchangeRegion}
                            </MenuItem>
                          );
                        }
                      )}
                    </Select>
                  </FormControl>
                  <Button
                    type="submit"
                    size="medium"
                    variant="contained"
                    color="secondary"
                    style={{
                      margin: 2,
                      backgroundColor: "#f35c31",
                      color: "#FFF"
                    }}
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
                style={{
                  borderRadius: 35,
                  backgroundColor: "#f35c31",
                  color: "#FFF"
                }}
              >
                <FontAwesomeIcon icon={faPlus} fixedWidth /> Add More Currencies
              </Button>
            )}
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteExchange);
