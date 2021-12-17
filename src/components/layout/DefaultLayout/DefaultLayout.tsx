import React from 'react';

import { DefaultLayoutProps } from './DefaultLayout.interfaces';
import {Header} from "../Header";
import {Footer} from "../Footer";
import {SplitView} from "../SplitView/SplitView";

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = () => {
  return (
    <>
        <Header  />
        <div>
        <SplitView className={"dark"} left={<div style={{ margin: "1rem" }}>Left item</div>}
                   right={<div style={{ margin: "1rem" }}>Right item</div>}
        />
        </div>
        <Footer />
    </>
  );
};

export default DefaultLayout;