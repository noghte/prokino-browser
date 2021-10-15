/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ugaLogo from '../images/GEORGIA-FS-CW-1024x335.png'

//import { useStaticQuery, graphql } from "gatsby"

// import "./layout.css"
import { slide as Menu } from 'react-burger-menu'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Menu>
          <Link id="home" className="menu-item" to="/">Home</Link>
          <Link id="search" className="menu-item" to="/browser">Search</Link>
          <p className="menu-item menu-item-category">Browse</p>
              <Link id="browse-organisms" className="menu-item-level2" to="/organisms">Organisms</Link>
              <Link id="browse-diseases" className="menu-item-level2" to="/diseases">Diseases</Link>
              <Link id="browse-fd" className="menu-item-level2" to="/functional-domains">Functional Domains</Link>
          <Link id="sparql" className="menu-item" to="/queries">SPARQL Queries</Link>
          <Link id="about" className="menu-item" to="/about">About</Link>
        </Menu>
      <nav id="prokino-navbar" className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container">

          <img src={ugaLogo} alt="UGA Logo" id="ugalogo" />
          <Link id="prokino-title" className="navbar-brand container d-flex justify-content-center" to="/browser">ProKinO Browser</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

            </ul>
          </div>
        </div>
      </nav>
      <div className="container"
        style={{
          margin: `0 auto`,
          paddingTop: `2rem`
          // maxWidth: 1200,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {/* Begin Header */}
        <div style={{ marginBottom: '2rem' }}>


        </div>
        {/* End Header */}


        <main className="prokino-main">{children}</main>
        {/* Begin Footer */}
        {/* <div class="push"></div> */}
        <footer className="footer bg-secondary"> 
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                  <img alt="Creative Commons License" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
                </a>
              </div>
              <div className="col-11">
                <p className="m-0 text-center text-white">
                  This work is licensed under a <a style={{ color: '#FFF', textDecoration: 'underline' }} rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
                </p>

              </div>
            </div>

          </div>
        </footer>
        {/* End Footer */}


      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
