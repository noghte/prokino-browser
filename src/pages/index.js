import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import bgImage from '../images/bg.png'
// import {Alert,ColorRow} from '@lekoarts/gatsby-theme-specimens'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* container */}
    <div>
      
    <div className="row align-items-top my-5">
      <div className="col-lg-7">
        <img className="img-fluid rounded mb-4 mb-lg-0" src={bgImage} alt="prokino first page" />
      </div>
      <div className="col-lg-5">

        <h2 className="font-weight-light" style={{marginTop:'-5px'}}>Protein Kinase Ontology (ProKinO)</h2>
        <p>
          The Protein Kinase Ontology (ProKinO) is an ontology and knowledge graph, 
          which
          provides a controlled vocabulary of terms, their hierarchy,
          and relationships unifying sequence, structure, function,
          mutation and pathway information on kinases. The conceptual
          representation of such diverse information in one place
          enables not only rapid discovery of significant information
          related to a specific protein kinase, but also enables large
          scale integrative analysis of the protein kinase family. 
          <br />
          {/* <a href="prokino-info.html">Read More...</a> */}
        </p>
      </div>
    </div>


    <div className="row">
      <div className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">ProKinO Browser</h2>
            <p className="card-text">
              You can use this ontology browser to quickly query, navigate, and explore the knowledge graph including the sequence, structure, function, disease, pathway, and ligand information on kinases.</p>
          </div>
          <div className="card-footer">
            <a href="browser" className="btn btn-primary btn-sm" style={{color:"#FFF"}}>Launch</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">KinView</h2>
            <p className="card-text">The Kinome Viewer (KinView) can be used as a comparative tool to identify differences and similarities in natural variation, cancer variants and post-translational modifications between kinase groups, families and subfamilies. </p>
          </div>
          <div className="card-footer">
            <a href="https://prokino.uga.edu/kinview" className="btn btn-primary btn-sm" style={{color:"#FFF"}}>Launch</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">Downloads</h2>
            <p className="card-text">To download a version of the ontology, or an offline version of the KinView, you can visit the Downloads page.</p>
          </div>
          <div className="card-footer">
            <a href="downloads" className="btn btn-primary btn-sm" style={{color:"#FFF"}}>Launch</a>
          </div>
        </div>
      </div>

    </div>

  </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}


    {/* Tailwind */}
    {/* <div>
    <div className="tw-relative tw-pt-1 tw-pb-28 tw-flex tw-content-center tw-items-center tw-justify-center tw-bg-gray-100"
      style={{
        minHeight: "45vh"
      }}>

      <div className="tw-container mtw-x-auto">

        <div className="lg:tw-mx-8 lg:tw-flex lg:tw-max-w-5xl" >
          <div className="lg:tw-w-2/3" >
            <div className="tw-h-64 tw-bg-contain tw-bg-no-repeat lg:tw-rounded-lg lg:tw-h-full" style={{ backgroundImage: `url(${bgImage})` }} alt="prokino first page"></div>
          </div>
          <div className="tw-py-4 tw-px-8 tw-max-w-xl lg:tw-max-w-5xl lg:tw-w-1/2">
            <h2 className="tw-text-3xl tw-text-gray-800 tw-font-bold"><span className="text-red-600">ProKinO:</span> Protein Kinase Ontology</h2>
            <p className="tw-mt-4 tw-text-gray-600">The ProKinO is a protein kinase-specific ontology, which
            provides a controlled vocabulary of terms, their hierarchy,
            and relationships unifying sequence, structure, function,
            mutation and pathway information on kinases. 
          
              </p>
            <span className="tw-mt-8 tw-float-right">
              <a href="prokino-info.html" className="tw-px-5 tw-font-semibold">Read More</a>
            </span>
          </div>
        </div>

      </div>
      <div
        className="tw-top-auto bottom-0 tw-left-0 right-0 tw-w-full tw-absolute tw-pointer-events-none tw-overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
        <svg
          className="tw-absolute tw-bottom-0 tw-overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="tw-text-gray-300 tw-fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>

    <section className="tw-pb-0 tw-pt-4 tw-bg-gray-300">
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
            <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              <h6 className="text-xl font-semibold">ProKinO Browser</h6>
              <p className="mt-2 mb-4 text-gray-600">
              You can use this ontology browser to quickly locate protein kinase genes and a lot of information related to the genes, including the sequence, structure, function, mutation and pathway information on kinases.
                    </p>
            </div>
          </div>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
            <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              <h6 className="text-xl font-semibold">
              KinView
                    </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                    </p>
            </div>
          </div>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <h6 className="text-xl font-semibold">
                Downloads
                    </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                    </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-20 pb-18 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">
              Collaboration
                </h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
                ProKinO is a collaborative effort between the Evolutionary Systems Biology Group Lab of Dr. Natarajan Kannan at the Biochemistry and Molecular Biochemistry Department and Dr. Krys J. Kochut's lab at the Computer Science Department, both at the University of Georgia.
                </p>
          </div>
        </div>
      </div>
    </section>
    </div> */}
  </Layout>
)

export default IndexPage
