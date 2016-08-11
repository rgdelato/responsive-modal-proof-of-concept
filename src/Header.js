import React from 'react';
import { Motion, spring } from 'react-motion';


class Header extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			tallHeader: false
		};
	}

	render () {
		const { tallHeader } = this.state;

		return (
			<Motion style={{ height: spring(tallHeader ? 150 : 50) }}>
				{({height}) => (
					<div
						className="header"
						style={{backgroundColor: '#1fa7bc', height: height + 'px', color: '#FFF', textAlign: 'center', lineHeight: height + 'px', cursor: 'pointer'}}
						onClick={() => this.setState({tallHeader: !tallHeader})}
					>
						Netspend
					</div>
				)}
			</Motion>
		);
	}
}


export default Header;
