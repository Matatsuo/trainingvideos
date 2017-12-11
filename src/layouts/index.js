import React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/header';

import '../styles/main.scss';

let WebFont;
if (typeof window !== 'undefined') {
  WebFont = require('webfontloader');
  WebFont.load({
    google: {
      families: ['PT Sans:400,700'],
    },
    timeout: 2000,
  });
}

export default ({ children, data }) => (
  <div>
    <Helmet
      title="Medi-Map Training"
      meta={[
        { name: 'robots', content: 'noindex, nofollow' },
        {
          name: 'google-site-verification',
          content: 'w0ZJ1nKHJsEFuwN4fpOYJuyWiV0S2sVip1lq8wiSLow',
        },
      ]}
    />
    <Header pages={data.allMarkdownRemark.edges} />

    <main>{children()}</main>
  </div>
);

export const pageQuery = graphql`
  query pagesQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            heading
            path
          }
        }
      }
    }
  }
`;
