import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

const Header = props => {
	return (
		<div className="header-curr">
			<div className="float-l">
				<span className="italic">USD - United States Dollars</span>
				<span className="txt-left">
					<h3 className="italic">USD</h3>
				</span>
			</div>
			<div className="is-flex">
				<TextField
					onChange={props.ChangeCurrency}
					size="small"
					styles={{ margin: 50 }}
					id="outlined-basic"
					label="Currency"
					variant="outlined"
					value={props.changeAmount}
					type="number"
					InputProps={{ inputProps: { min: 0, max: 10000000 } }}
				/>
				{/* <Link>
					<h3>10.0000</h3>
				</Link> */}
			</div>
		</div>
	);
};
export default Header;
