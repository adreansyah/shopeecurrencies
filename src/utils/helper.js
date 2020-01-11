import numeral from "numeral";

export const NUMBERING_DEFAULT_FORMAT = "0,0.00";

export const isSetNumber = n => {
  return `${numeral(n).format("0.00")}`;
};

export const isSetThousand = n => {
  return numeral(n).format(`${NUMBERING_DEFAULT_FORMAT}`);
};
