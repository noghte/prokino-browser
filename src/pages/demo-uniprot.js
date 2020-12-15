import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Helmet } from 'react-helmet'
window.addEventListener('protvista-event', (e) => console.log(e.detail));

const DemoUniprot = () => (
  <Layout>
       <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0.0/dist/fetch.umd.min.js" defer></script>
        <script src="https://d3js.org/d3.v4.min.js" charset="utf-8" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/litemol@2.4.2/dist/js/LiteMol-plugin.min.js" defer></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/litemol@2.4.2/dist/css/LiteMol-plugin.min.css" type="text/css"></link>
        <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.2.10/webcomponents-bundle.js" charset="utf-8" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.2.10/custom-elements-es5-adapter.js" charset="utf-8" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/@babel/polyfill@7.4.4/dist/polyfill.min.js" charset="utf-8" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/protvista-uniprot@2.0.9/dist/protvista-uniprot.js" defer></script>
      </Helmet>
    <SEO title="Demo Uniprot-protvista" />
    <div>
    <protvista-uniprot accession="P05067" />
    </div>

  </Layout>
)

export default DemoUniprot
