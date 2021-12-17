import React, { createRef, useEffect, useState } from "react";
import {SplitViewProps} from "./SplitView.interfaces";
import "./SplitView.styles.css"
import {SideBarNav} from "./SideBarNav";

const MIN_WIDTH = 75;
const MAX_WIDTH = window.innerWidth / 2;

const LeftPane: React.FunctionComponent<{
    leftWidth: number | undefined;
    setLeftWidth: (value: number) => void;
}> = ({ children, leftWidth, setLeftWidth }) => {
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

    return <div className={"left-pane"} ref={leftRef}>{children}</div>;
};

export const SplitView: React.FunctionComponent<SplitViewProps> = ({
                                                                       left,
                                                                       right,
                                                                       className
                                                                   }) => {
    const [leftWidth, setLeftWidth] = useState<undefined | number>(undefined);
    const [separatorXPosition, setSeparatorXPosition] = useState<
        undefined | number
        >(undefined);
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
            if(newLeftWidth > MAX_WIDTH) {
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
            <SideBarNav leftWidth={leftWidth} setLeftWidth={setLeftWidth}>
                {"Nav bar items"}
            </SideBarNav>
            <div
                className="divider-hitbox"
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                onTouchEnd={onMouseUp}
            >
            </div>
            <div className="rightPane">{"Some words"}</div>
        </div>
    );
};
