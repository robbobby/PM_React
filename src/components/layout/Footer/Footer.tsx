import React from 'react';

import { FooterProps } from './Footer.interfaces';

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <div className={"footer-layout"}>
      &copy; BPM all rights reserved -2022
    </div>
  );
};

export default Footer;