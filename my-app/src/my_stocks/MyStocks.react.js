// @flow strict
'use strict';

const React = require('react');

type StockInfo = {|
	+name: string,
	+currentPrice: number,
	+numberOwned: number
|};

type Props = {|
	+stocks: $ReadOnlyArray<StockInfo>
|};

const Stock = ({
	stock: {name, currentPrice, numberOwned}
}: {|
	+stock: StockInfo
|}): React.Node => (
	<div style={{paddingBottom: '8px'}}>
		<div>Name: {name}</div>
		<div>CurrentPrice: {currentPrice}</div>
		<div>Number Owned: {numberOwned}</div>
		<div>Total Value: {currentPrice * numberOwned}</div>
	</div>
);

const MyStocks = ({stocks}: Props): React.Node => (
	<div>{stocks.map(stock => <Stock stock={stock} />)}</div>
);

module.exports = MyStocks;
