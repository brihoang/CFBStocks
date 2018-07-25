// @flow strict
'use strict';

const React = require('react');
const Portfolio = require('./portfolio/Portfolio.react');
const MyStocks = require('./my_stocks/MyStocks.react');
const FlexLayout = require('./components/FlexLayout.react');

type TabType = 'portfolio' | 'my_stocks';

type State = {|
	selectedTab: TabType
|};

type Props = {||};

const TabSelector = ({
	callback
}: {|
	+callback: TabType => void
|}): React.Node => {
	return (
		<div style={{margin: '20px'}}>
			<div onClick={() => callback('portfolio')}>Portfolio</div>
			<div onClick={() => callback('my_stocks')}>My Stocks</div>
		</div>
	);
};

class Root extends React.Component<Props, State> {
	state: State = {
		selectedTab: 'portfolio'
	};
	render(): React.Node {
		const {selectedTab} = this.state;
		const dummyStocks = [
			{name: 'Air Force', currentPrice: 55.07, numberOwned: 4},
			{name: 'Texas', currentPrice: 49.29, numberOwned: 16}
		];
		let contents = null;
		switch (this.state.selectedTab) {
			case 'portfolio':
				contents = (
					<Portfolio portfolioData={{cash: 31.71, portfolioValue: 1008.95}} />
				);
				break;
			case 'my_stocks':
				contents = <MyStocks stocks={dummyStocks} />;
				break;
			default:
				null;
		}

		return (
			<div style={{margin: '20px'}}>
				<FlexLayout>
					<TabSelector
						callback={selectedTab => {
							this.setState({selectedTab});
						}}
					/>
					<div style={{margin: '20px'}}>{contents}</div>
				</FlexLayout>
			</div>
		);
	}
}

export default Root;
