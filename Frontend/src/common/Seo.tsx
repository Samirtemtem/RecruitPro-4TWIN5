import { Helmet as HelmetImport, HelmetProps } from 'react-helmet';
import React from "react";
// @ts-ignore
const Helmet = HelmetImport as React.ComponentClass<HelmetProps>;

interface SeoProps {
  pageTitle: string;
}

const Seo: React.FC<SeoProps> = ({ pageTitle }) => (
  <>
    <Helmet> 
      <title>
        {pageTitle &&
          `${pageTitle} || RecruitPro - Job Board`}
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet> 
  </>
);

export default Seo;