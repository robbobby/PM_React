import React from 'react';

import { DefaultLayoutProps } from './DefaultLayout.interfaces';
import {Header} from "../Header";
import {Footer} from "../Footer";
import {SplitView} from "../SplitView";

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = () => {
  return (
    <>
        <Header  />
        <div>
        <SplitView/>
        </div>
        <Footer />
    </>
  );
};

export default DefaultLayout;