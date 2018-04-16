import React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/header';

import '../styles/main.scss';

if (typeof window !== 'undefined') {
  if ('fonts' in document) {
    // Optimization for Repeat Views
    if (sessionStorage.fontsLoadedCriticalFoftDataUri) {
      // only stage 2 needed here, the subset isn’t needed anymore
      document.documentElement.className += ' fonts-loaded-2';
      // return;
    } else {
      document.fonts.load('700 1em PT SansSubset').then(() => {
        document.documentElement.className += ' fonts-loaded-1';
        Promise.all([
          document.fonts.load('400 1em PT Sans'),
          document.fonts.load('700 1em PT Sans'),
        ]).then(() => {
          document.documentElement.className += ' fonts-loaded-2';
          // Optimization for Repeat Views
          sessionStorage.fontsLoadedCriticalFoftDataUri = true;
        });
      });
    }
  }
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
