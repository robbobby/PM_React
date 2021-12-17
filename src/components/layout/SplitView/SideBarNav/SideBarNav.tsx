import React, {createRef, useEffect} from 'react';

import { SideBarNavProps } from './SideBarNav.interfaces';

const SideBarNav: React.FunctionComponent<SideBarNavProps> = ({ children, leftWidth, setLeftWidth }) => {
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


export default SideBarNav;