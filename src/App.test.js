// @flow

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import { Setup } from "config/services";
import { isSetThousand, isSetNumber } from "utils/helper";
import store from "config/store";
import App from "./App";
import SiteExchange from "pages/exchangecurrencies";
import flowCurrencies from "config/reducers/flowCurrency";

describe("Show Render Apps ", () => {
  it("renders", () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});

describe("Show element page notfound  ", () => {
  const sel = id => `[data-test="${id}"]`;
  const hasContentnotfound = wrapper =>
    wrapper.find(sel("not-found")).length === 1;
  it("show value not found", () => {
    const wrapper = mount(
      <Provider store={store}>
        <SiteExchange />
      </Provider>
    );
    expect(hasContentnotfound(wrapper)).toBe(true);
  });
});

describe("Test API Currencies by Region  ", () => {
  it("Define Currency response and function convert", async function() {
    Setup.createEntities(["latest"]);
    const rawResponse = await Setup.endpoints.entities.getOne({
      params: {
        base: "USD"
      }
    });
    const currenciesOption = Object.keys(rawResponse.data.rates);
    const regIDR = "137,625.01";
    const regCHF = "9.76";
    const regBRL = "40.74";
    const regSGD = "13.50";
    const defaultAmount = 10; //you can change this default by USD, as you want to change :)
    expect(rawResponse.data.rates.currenciesOption).toBe(
      rawResponse.data.rates.currenciesOption
    );
    expect(
      isSetThousand(isSetNumber(rawResponse.data.rates.IDR * defaultAmount))
    ).toBe(regIDR);
    expect(
      isSetThousand(isSetNumber(rawResponse.data.rates.CHF * defaultAmount))
    ).toBe(regCHF);
    expect(
      isSetThousand(isSetNumber(rawResponse.data.rates.BRL * defaultAmount))
    ).toBe(regBRL);
    expect(
      isSetThousand(isSetNumber(rawResponse.data.rates.SGD * defaultAmount))
    ).toBe(regSGD);
  });
});

describe("Get Initial States", () => {
  test("is correct", () => {
    const action = { type: "GET_DUMMY_USD_DEFAULT_CURRENCY" };
    const initialState = {
      data: [],
      selectedData: []
    };
    expect(flowCurrencies(undefined, action)).toEqual(initialState);
    expect(flowCurrencies(undefined, action)).toMatchSnapshot();
  });
});
