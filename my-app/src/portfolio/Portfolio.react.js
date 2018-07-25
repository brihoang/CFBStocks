// @flow strict

'use strict';

const React = require('react');

export type PortfolioData = {|
	+cash: number,
	+portfolioValue: number
|};

type Props = {|
	+portfolioData: PortfolioData
|};

const Portfolio = ({
	portfolioData: {cash, portfolioValue}
}: Props): React.Node => (
	<div>
		<div>Cash: {cash}</div>
		<div>Portfolio Value: {portfolioValue}</div>
		<div>Total Value: {cash + portfolioValue}</div>
	</div>
);

module.exports = Portfolio;
