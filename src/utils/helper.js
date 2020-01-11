import numeral from 'numeral';
export const removeByAttr = (arr, attr, value) => {
	var i = arr.length;
	while (i--) {
		if (arr[i] && arr[i].hasOwnProperty(attr) && arguments.length > 2 && arr[i][attr] === value) {
			arr.splice(i, 1);
		}
	}
	return arr;
};

export const NUMBERING_SET_FORMAT = '0,0.00';

export const isSetNumber = n => {
	return `${numeral(n).format('0.00')}`;
};

export const isSetThousand = n => {
	return numeral(n).format(`${NUMBERING_SET_FORMAT}`);
};
