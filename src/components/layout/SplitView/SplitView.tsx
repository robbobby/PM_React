import React, {createRef, useState} from "react";
import {SplitViewProps} from "./SplitView.interfaces";
import "./SplitView.styles.css"
import {SideBarNav} from "../SideBarNav";
import {MainBody} from "../MainBody";

const MIN_WIDTH = 70;
const MAX_WIDTH = window.innerWidth / 2;


const SplitView: React.FunctionComponent<SplitViewProps> = () => {
	const [leftWidth, setLeftWidth] = useState<number>(MIN_WIDTH);
	const [separatorXPosition, setSeparatorXPosition] = useState<undefined | number>(undefined);
	const [dragging, setDragging] = useState(false);

	const splitPaneRef = createRef<HTMLDivElement>();

	const onMouseDown = (e: React.MouseEvent) => {
		setSeparatorXPosition(e.clientX);
		setDragging(true);
	};

	const onTouchStart = (e: React.TouchEvent) => {
		setSeparatorXPosition(e.touches[0].clientX);
		setDragging(true);
	};

	const onMove = (clientX: number) => {
		if (dragging && leftWidth && separatorXPosition) {
			const newLeftWidth = leftWidth + clientX - separatorXPosition;
			setSeparatorXPosition(clientX);

			if (newLeftWidth < MIN_WIDTH) {
				setLeftWidth(MIN_WIDTH);
				return;
			}
			if (newLeftWidth > MAX_WIDTH) {
				setLeftWidth(MAX_WIDTH);
				return;
			}

			if (splitPaneRef.current) {
				const splitPaneWidth = splitPaneRef.current.clientWidth;
				if (newLeftWidth > splitPaneWidth - MIN_WIDTH) {
					setLeftWidth(splitPaneWidth - MIN_WIDTH);
					return;
				}
			}

			setLeftWidth(newLeftWidth);
		}
	};

	const onMouseMove = (e: MouseEvent) => {
		e.preventDefault();
		onMove(e.clientX);
	};

	const onTouchMove = (e: TouchEvent) => {
		onMove(e.touches[0].clientX);
	};

	const onMouseUp = () => {
		setDragging(false);
	};

	React.useEffect(() => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("touchmove", onTouchMove);
		document.addEventListener("mouseup", onMouseUp);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("touchmove", onTouchMove);
			document.removeEventListener("mouseup", onMouseUp);
		};
	});

	return (
		<div className={`splitView`} ref={splitPaneRef}>
			<SideBarNav leftWidth={leftWidth} setLeftWidth={setLeftWidth} itemMaxWidth={MIN_WIDTH}>
				{"Nav bar items"}
			</SideBarNav>
			<div
				className="split-view-drag-bar"
				onMouseDown={onMouseDown}
				onTouchStart={onTouchStart}
				onTouchEnd={onMouseUp}
			>
			</div>
			<MainBody/>
		</div>
	);
};

export default SplitView;