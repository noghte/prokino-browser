/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState,useEffect} from "react"
import PropTypes from "prop-types"
import { Link, withPrefix } from "gatsby"
import ugaLogo from '../images/GEORGIA-FS-CW-1024x335.png'
import AppendHead from 'react-append-head';
import {
  Row, Col
} from 'reactstrap';
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

const [hostName,setHostName] = useState("");
useEffect(()=>{
  if (typeof window === 'undefined' && process.env)
      setHostName(process.env.GATSBY_HOST_NAME)
})
  return (
    <>
      <AppendHead>
        <meta charSet="utf-8" />
        <title>Protein Kinase Ontology (ProKinO)</title>
      </AppendHead>
      <Menu>
        <Link id="home" className="menu-item" to="/">Home</Link>
        <Link id="search" className="menu-item" to="/browser">Search</Link>
        <p className="menu-item menu-item-category">Browse</p>
        <a id="browse-organisms" className="menu-item-level2" href={withPrefix("/browse-data/?v=organisms")}>Organisms</a>
        <a id="browse-diseases" className="menu-item-level2" href={withPrefix("/browse-data/?v=diseases")}>Diseases</a>
        <a id="browse-diseases" className="menu-item-level2" href={withPrefix("/browse-data/?v=fdomains")}>Functional Domains</a>

        <Link id="sparql" className="menu-item" to="/queries">SPARQL Queries</Link>
        <Link id="about" className="menu-item" to="/about">About</Link>
      </Menu>
      <nav id="prokino-navbar" className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container">

          <img src={ugaLogo} alt="UGA Logo" id="ugalogo" />
          <Link id="prokino-title" className="navbar-brand container d-flex justify-content-center" to="/browser">ProKinO</Link>
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

        {/* <footer className="footer bg-secondary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col" style={{paddingTop:'1.5rem', width:'1px'}}>
      
              </div>
              <div className="col-11">
                <p className="m-0 text-center text-white">
                </p>
                <div className="col" style={{ textAlign:'right'}}>


              </div>
              </div>
            </div>

          </div>
        </footer> */}
        {/* End Footer */}


      </div>
      <footer className="footer bg-secondary">

        <Row xs="3" style={{padding: '1rem'}}>
          <Col>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
              <img alt="Creative Commons License" style={{ paddingTop: '0.5rem' }} src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
            </a>
          </Col>
          <Col  style={{textAlign:'center'}}>
            <p className="text-white">This work is licensed under a <a style={{ color: '#FFF', textDecoration: 'underline' }} rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
            </p>
          </Col>
          <Col style={{textAlign:'right', display:hostName == 'netlify' ? 'block':'none'}}>
            <a href="https://www.netlify.com">
              <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
            </a>
          </Col>

        </Row>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
