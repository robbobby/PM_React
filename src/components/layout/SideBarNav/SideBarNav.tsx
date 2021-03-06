import React, {createRef, useEffect} from 'react';

import {SideBarNavProps} from './SideBarNav.interfaces';
import {Nav} from "react-bootstrap";
import './SideBarNav.styles.css'
import {getPopulateSideBarNavItems} from "./SideBarNavItem/SideBarNavItem.interfaces";

const SideBarNav: React.FunctionComponent<SideBarNavProps> = ({children, leftWidth, setLeftWidth, itemMaxWidth}) => {
	const leftRef = createRef<HTMLDivElement>();

	useEffect(() => {
		if (leftRef.current) {
			if (!leftWidth) {
				setLeftWidth(leftRef.current.clientWidth);
				return;
			}
			leftRef.current.style.width = `${leftWidth}px`;
		}
	}, [leftRef, leftWidth, setLeftWidth]);

	return (
		<div className={"left-pane"} ref={leftRef}>
			<div className={"side-bar-nav-container"} >
				<Nav fill variant="pills" defaultActiveKey="/home" className={"nav-bar"}>
					<span>
					{getPopulateSideBarNavItems(leftWidth)}
						</span>
				</Nav>
			</div>
		</div>
	);
};


export default SideBarNav;