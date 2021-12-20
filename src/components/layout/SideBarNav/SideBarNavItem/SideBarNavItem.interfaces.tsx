import SideBarNavItem from "./SideBarNavItem";
import React from "react";
import {Nav} from "react-bootstrap";
import './SideBarNavItem.styles.css'
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import { faChalkboard, faCode, faFolderPlus, faGem, faList, faProjectDiagram, faRoad} from "@fortawesome/free-solid-svg-icons";

interface SideBarNavItemOwnProps {
	itemImage: string | IconDefinition;
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
			<Nav.Item className={"side-bar-item"}>
				<Nav.Link eventKey={navBarItems[i].link} style={{maxWidth: currenSideBarWidth -5, marginLeft: "5px"}}>
					<SideBarNavItem itemImage={navBarItems[i].imagePath} key={`nav-item-${i}`} text={navBarItems[i].name} currentSideBarWidth={currenSideBarWidth}/>
				</Nav.Link>
			</Nav.Item>)
	}

	return navBarItemsRender;
}

export const getNavBarItems = () => {
	const items = new Array<NavBarItem>()
	items.push(new NavBarItem("Roadmap", faRoad, "Roadmap", true))
	items.push(new NavBarItem("Backlog", faList, "Backlog", true))
	items.push(new NavBarItem("Board", faChalkboard, "Board", true))
	items.push(new NavBarItem("Code", faCode, "Code", true))
	items.push(new NavBarItem("Project Pages", faProjectDiagram, "ProjectPages", true))
	items.push(new NavBarItem("Add Shortcut", faFolderPlus, "AddShortcut", true))
	// items.push(new NavBarItem("Project Settings", path.resolve(logo), "ProjectSettings", true))
	items.push(new NavBarItem("Project Settings", faGem , "ProjectSettings", true))

	return items
}

class NavBarItem {
	constructor(name: string, imagePath: string | IconDefinition, link: string, renderItem: boolean) {
		this.name = name;
		this.imagePath = imagePath;
		this.link = link;
		this.renderItem = renderItem;
	}

	name: string;
	imagePath: string | IconDefinition;
	link: string;
	renderItem: boolean;
};

export type SideBarNavItemProps =
	SideBarNavItemOwnProps;
