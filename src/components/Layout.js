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
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
          <div className="container">
            <img src={ugaLogo} alt="UGA Logo" id="ugalogo" />
            <Link className="navbar-brand container d-flex justify-content-center" to="/">ProKinO</Link>
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
        // maxWidth: 1200,
        // padding: `0 1.0875rem 1.45rem`,
      }}
    >
      {/* Begin Header */}
      <div style={{ marginBottom: '2rem' }}>


      </div>
      {/* End Header */}


      <main>{children}</main>
      {/* Begin Footer */}
      <footer className="py-3 bg-secondary" style={{ marginTop: '2rem' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                <img alt="Creative Commons License" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
              </a>
            </div>
            <div className="col-11">
              <p className="m-0 text-center text-white">
                This work is licensed under a <a style={{color:'#FFF', textDecoration:'underline'}} rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
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
