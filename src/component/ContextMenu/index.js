import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContextMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			contextMenuData: this.props.contextMenuData || { titles: [], links: [] },
			contextMenuPosition: this.props.contextMenuPosition || { x: 0, y: 0 },
			showContextMenu: false
		}

		window.addEventListener("click", e => {
			this.setState({ showContextMenu: false });
		});

		window.addEventListener("contextmenu", e => {
			const { contextMenuPosition } = this.state;
			if (contextMenuPosition.x !== e.pageX || contextMenuPosition.y !== e.pageY) this.setState({ showContextMenu: false });
		});
	}

	componentDidUpdate(prevProps) {
		const { contextMenuData, contextMenuPosition } = this.props;
		if (contextMenuPosition && contextMenuData.titles.length > 0 &&
			prevProps.contextMenuPosition.x !== contextMenuPosition.x &&
			prevProps.contextMenuPosition.y !== contextMenuPosition.y) {
			this.setState({
				contextMenuData,
				contextMenuPosition,
				showContextMenu: true
			});
		}
	}

	render() {
		const { contextMenuData, contextMenuPosition, showContextMenu } = this.state;
		const titles = contextMenuData.titles;
		const links = contextMenuData.links;
		const style = { left: contextMenuPosition.x, top: contextMenuPosition.y, display: showContextMenu > 0 ? 'block' : 'none' };
		return (
			<div className="menu" style={style}>
				<ul className="menu-options">
					{titles.map((title, index) => {
						return <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer">
							<li className="menu-option">{title}</li>
						</a>
					})}
				</ul>
			</div>
		);
	}
}

ContextMenu.propTypes = {
	contextMenuData: PropTypes.object,
	contextMenuPosition: PropTypes.object
}

export default ContextMenu;