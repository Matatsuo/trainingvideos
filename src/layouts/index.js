import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <header
    style={{
      backgroundColor: 'rgb(20, 15, 15)',
      borderBottom: 'solid 1px white',
      height: '10vh',
      alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    }}
  >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Company Name
        </Link>
      </h1>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <main
      style={{
        margin: '0 auto',
        textAlign: 'center',
        height: '90vh',
        alignItems: 'center',
        width: '50vw',
    display: 'flex',
    justifyContent: 'center',
      }}
    >
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
