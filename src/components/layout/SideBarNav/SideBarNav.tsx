import React, {createRef, useEffect} from 'react';

import {SideBarNavProps} from './SideBarNav.interfaces';
import {SideBarNavItem} from "../../SideBarNavItem";
import logo from "../../../assets/images/logo.png"
import * as path from "path";
import {Nav} from "react-bootstrap";
import './SideBarNav.styles.css'
import {getPopulateSideBarNavItems} from "../../SideBarNavItem/SideBarNavItem.interfaces";

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
			<div className={"side-bar-nav-container"} style={{maxWidth: itemMaxWidth}}>
				<Nav fill variant="pills" defaultActiveKey="/home">
					{getPopulateSideBarNavItems(leftWidth)}
					<Nav.Item>
						<Nav.Link href="/home">
							<SideBarNavItem itemImage={path.resolve(logo)} text={"thing"} currentSideBarWidth={leftWidth}/>
						</Nav.Link>
					</Nav.Item>
					{/*<Nav.Item>*/}
					{/*	<Nav.Link eventKey="link-2">*/}
					{/*		<SideBarNavItem itemImage={path.resolve(logo)} text={"thing"}/></Nav.Link>*/}
					{/*</Nav.Item>*/}
					{/*<Nav.Item>*/}
					{/*	<Nav.Link eventKey="link-3">*/}
					{/*		<SideBarNavItem itemImage={path.resolve(logo)} text={"thing"}/></Nav.Link>*/}
					{/*</Nav.Item>*/}
					{/*<Nav.Item>*/}
					{/*	<Nav.Link eventKey="link-4">*/}
					{/*		<SideBarNavItem itemImage={path.resolve(logo)} text={"thing"}/></Nav.Link>*/}
					{/*</Nav.Item>*/}
					{/*<Nav.Item>*/}
					{/*	<Nav.Link eventKey="link-5">*/}
					{/*		<SideBarNavItem itemImage={path.resolve(logo)} text={"thing"}/></Nav.Link>*/}
					{/*</Nav.Item>*/}
				</Nav>
			</div>
		</div>
	);
};


export default SideBarNav;