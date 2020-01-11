// @flow
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { isSetThousand } from "utils/helper";

type Data = {
  keys: string,
  value: string,
  money: string,
  exchangeRegion: string
};
const ListCurrencies = (props: Data) => {
  const setData = props.data;
  return (
    <>
      <div className="el-currencies">
        <div className="el-flex">
          <div className="el-size-left">
            <div className="el-flex">
              <div className="el-fair-size-left">
                <span className="el-number-dictionary">{setData.keys}</span>
              </div>
              <span className="el-number-dictionary txt-right">
                {props.changeAmount <= 1
                  ? isSetThousand(setData.money)
                  : isSetThousand(setData.money * props.changeAmount)}
              </span>
            </div>
            <div className="el-fair-size-left">
              <span>
                {setData.keys} - {setData.exchangeRegion}
              </span>
            </div>
            <div className="el-fair-size-left">
              <span>
                1 USD = {setData.keys}{" "}
                {props.changeAmount <= 1
                  ? isSetThousand(setData.money)
                  : isSetThousand(setData.money * props.changeAmount)}
              </span>
            </div>
          </div>
          <button onClick={props.DeleteCurrencies} className="el-size-right">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ListCurrencies;
