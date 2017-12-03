import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Header } from '../components/header';

import '../styles/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Medi-Map Training"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        {
          name: 'google-site-verification',
          content: 'w0ZJ1nKHJsEFuwN4fpOYJuyWiV0S2sVip1lq8wiSLow',
        },
      ]}
      script={[{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]}
    />
    <Header />
    <main>{children()}</main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
