import React, {useEffect, useState} from 'react';
import {SideBarNavItemProps} from './SideBarNavItem.interfaces';
import './SideBarNavItem.styles.css'

const SideBarNavItem: React.FunctionComponent<SideBarNavItemProps> = ({itemImage, text, currentSideBarWidth}) => {

	let sideBarItemWidth = currentSideBarWidth -30;
	function setButtonVisibilityMode() {
		sideBarItemWidth = currentSideBarWidth - 30;
	}

	useEffect(setButtonVisibilityMode, [currentSideBarWidth])

	return (
		<div className={"side-bar-item"} style={{width: sideBarItemWidth}}>
            <img src={itemImage} className={"side-bar-item-image"} alt="text" width={50}/>
			{text}
		</div>
	);
};

export default SideBarNavItem;