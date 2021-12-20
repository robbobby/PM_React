import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';
import {SideBarNavItemProps} from './SideBarNavItem.interfaces';
import './SideBarNavItem.styles.css'
import 'font-awesome/css/font-awesome.min.css';

const SideBarNavItem: React.FunctionComponent<SideBarNavItemProps> = ({itemImage, text, currentSideBarWidth}) => {

	const [sideBarItemWidth, setSideBarItemWidth] = useState(currentSideBarWidth -30);
	const [showText, setShowText] = useState(true)
	function setButtonVisibilityMode() {
		if(currentSideBarWidth-30 < 100) {
			setSideBarItemWidth(currentSideBarWidth + 30)
			setShowText(false)
		}
		else {
			setSideBarItemWidth(currentSideBarWidth - 30);
			setShowText(true);
		}
	}

	useEffect(setButtonVisibilityMode, [currentSideBarWidth])

	return (
		<div className={"side-bar-item-div"} style={{width: sideBarItemWidth}}>
			<span style={{width: "50px", marginRight: "10px"}}>
			{typeof itemImage === 'string' ?
				<img src={itemImage} className={"side-bar-item-image"} alt="text" width={50} style={{marginLeft: "-5px"}}/>
				:
				<FontAwesomeIcon icon={itemImage} className={"fa-1x"} style={{ width:"50px"}}/>
			}
			</span>
			{showText ? text : null}
		</div>
	);
};

export default SideBarNavItem;