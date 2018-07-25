// @flow strict
'use strict';

const React = require('react');

type Props = {|
	+align: Align,
	+children: React.Node,
	+direction: Direction
|};

type Align = 'start' | 'end' | 'center';
type Direction = 'vertical' | 'horizontal';

const FlexLayout = ({direction, children, align}: Props): React.Node => {
	let flexDirection;
	let flexAlign;

	switch (direction) {
		case 'vertical':
			flexDirection = 'column';
			break;
		case 'horizontal':
			flexDirection = 'row';
			break;
	}

	switch (align) {
		case 'start':
			flexAlign = 'flex-start';
			break;
		case 'end':
			flexAlign = 'flex-end';
			break;
		case 'center':
			flexAlign = 'center';
			break;
	}

	const style = {
		display: 'inline-flex',
		alignItems: flexAlign,
		flexDirection
	};

	return <div style={style}>{children}</div>;
};

FlexLayout.defaultProps = {direction: 'horizontal', align: 'start'};

module.exports = FlexLayout;
