import SideBarNavItem from "./SideBarNavItem";
import path from "path";
import React from "react";
import logo from '../../assets/images/logo.png'
import {Nav} from "react-bootstrap";

interface SideBarNavItemOwnProps {
	itemImage: string;
	text: string
	currentSideBarWidth: number
}

export const getPopulateSideBarNavItems = (currenSideBarWidth: number) => {
	return setItemsToRender(currenSideBarWidth);
}

const setItemsToRender = (currenSideBarWidth: number) => {
	let navBarItems: NavBarItem[] = getNavBarItems();
	let navBarItemsRender = new Array<JSX.Element>();
	for (let i = 0; i < navBarItems.length; i++) {
		navBarItemsRender.push(
			<Nav.Item>
				<Nav.Link eventKey={navBarItems[i].link}>
					<SideBarNavItem itemImage={path.resolve(logo)} text={navBarItems[i].name} currentSideBarWidth={currenSideBarWidth}/>
				</Nav.Link>
			</Nav.Item>)
	}

	return navBarItemsRender;
}

export const getNavBarItems = () => {
	const items = new Array<NavBarItem>()
	items.push(new NavBarItem("Roadmap", path.resolve(logo), "Roadmap", true))
	items.push(new NavBarItem("Backlog", path.resolve(logo), "Backlog", true))
	items.push(new NavBarItem("Board", path.resolve(logo), "Board", true))
	items.push(new NavBarItem("Code", path.resolve(logo), "Code", true))
	items.push(new NavBarItem("Project Pages", path.resolve(logo), "ProjectPages", true))
	items.push(new NavBarItem("Add Shortcut", path.resolve(logo), "AddShortcut", true))
	items.push(new NavBarItem("Project Settings", path.resolve(logo), "ProjectSettings", true))

	return items
}

class NavBarItem {
	constructor(name: string, imagePath: string, link: string, renderItem: boolean) {
		this.name = name;
		this.imagePath = imagePath;
		this.link = link;
		this.renderItem = renderItem;
	}

	name: string;
	imagePath: string;
	link: string;
	renderItem: boolean;
};

export type SideBarNavItemProps =
	SideBarNavItemOwnProps;
