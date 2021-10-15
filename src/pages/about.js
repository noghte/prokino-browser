import Layout from '../components/Layout';
import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function About() {
    return (<Layout>
        {/*  Ontology */}

            <div id="top" className="container mbr-black">
                <div className="row justify-content-center">
                    <div className="favth-col-xs-6">
                        <h3 class="style3">
                            About ProKinO
                        </h3>
                        <br />
                        <h4 class="style4">
                            Ontology
                        </h4>
                        <hr />
                        <table width="620" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td width="615">
                                    <span style={{ fontWeight: 'bold' }}> Current version: 62 </span> <br />
                                    Date: 2021-09-15
                                    <p>The Protein Kinase Ontology (ProKinO), is a protein kinase-specific
                                        ontology, which provides a controlled vocabulary of terms, their
                                        hierarchy, and relationships unifying sequence, structure, function,
                                        mutation and pathway information on kinases.
                                        The conceptual representation of such diverse information in one place
                                        enables not only rapid discovery of significant information related to
                                        a specific protein kinase, but also enables  large scale integrative
                                        analysis of the protein kinase family.</p>
                                    <p>
                                        ProKinO is a collaborative effort between the Evolutionary Systems
                                        Biology Group Lab of Dr. Natarajan Kannan at the Biochemistry and Molecular
                                        Biology Department and Dr. Krys J. Kochut's lab at the Computer Science Department,
                                        both at University of Georgia, Athens, USA.  Gurinder Gosal, Computer Science,
                                        UGA, created the software system to automatically populate ProKinO from the
                                        selected data sources.  The population system has
                                        been enhanced by Shima Dastgheib, Computer Science, UGA and Daniel McSkimming,
                                        IOB, UGA.  Currently, the population system is maintained and enhanced by
                                        Abbas Keshavarzi, Computer Science, UGA.</p>
                                    <p>Publications:</p>
                                    <p>McSkimming, D.I., Dastgheib, S., Talevich, E., Narayanan, A., Katiyar, S.,
                                        Taylor, S.S., Kochut, K.J., Kannan, N., 2015,
                                        "ProKinO: a unified resource for mining the cancer
                                        kinome." Human Mutation 36(2):175-86. doi:10.1002/humu.22726.</p>
                                    <p>
                                        Gosal, G., Kochut, K.J., Kannan, N., 2011 "ProKinO: An Ontology for Integrative Analysis of Protein Kinases
                                        in Cancer." PLoS ONE 6(12):e28782. doi:10.1371/journal.pone.0028782</p>
                                    <p>
                                        Gosal, G., Kannan, N. Kochut, K.J., "ProKinO: A
                                        Framework for Protein Kinase Ontology," in Proceedings
                                        of the 2011 IEEE International
                                        Conference on Bioinformatics and Biomedicine (BIBM), Location: Atlanta, GA, USA, pp. 550-555.
                                    </p>

                                </td>
                            </tr>
                            </tbody></table>
                        <div className="back-to-top-wrapper">
                            <Link to="#top" className="back-to-top-link" aria-label="Scroll to Top">Scroll to Top</Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Schema */}
            <div className="container mbr-black">
                <div className="row justify-content-center">
                    <div className="favth-col-xs-6">
                        <h4 class="style4">
                            Schema
                        </h4>
                        <hr />
                        <table width="620" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td width="615">

                                    The picture below is an outline of the ProKinO schema as a UML class diagram.
                                    It shows major ProKinO classes and object properties
                                    (relationships connecting ProKinO classes). It is
                                    <Link to="../ui/ProKinO-Schema-3.pdf"> available in PDF</Link>, as well<p>

                                    <Link to="../ui/ProKinO-Schema-3.png"> 
                                        <img src="../ui/ProKinO-Schema-3.png" alt="ProKinO Schema" style={{ width: '700px' }} />
                                    </Link>
                                       
                                    </p></td>
                            </tr>
                            </tbody></table>
                            <div className="back-to-top-wrapper">
                            <Link to="#top" className="back-to-top-link" aria-label="Scroll to Top">Scroll to Top</Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Data Sources */}
            <div className="container mbr-black">
                <div className="row justify-content-center">
                    <div className="favth-col-xs-6">
                        <h4 class="style4">
                            Data Sources
                        </h4>
                        <hr />
                        <table width="620" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td width="615">
                                    The following table shows the versions of the
                                    datasources used for population of the ProKinO
                                    version loaded in this browser.
                                    <p>
                                    </p><table width="400" style={{ border: '1px solid #000' }} align="center" cellpadding="3" cellspacing="3">
                                        <tbody><tr>
                                            <th align="left">Source</th>
                                            <th align="left">Version</th>
                                        </tr>
                                            <tr>
                                                <td align="left">COSMIC</td>
                                                <td align="left">94</td>
                                            </tr>
                                            <tr>
                                                <td align="left">Reactome</td>
                                                <td align="left">77</td>
                                            </tr>
                                            <tr>
                                                <td align="left">UniProt</td>
                                                <td align="left">2021_03</td>
                                            </tr>
                                            <tr>
                                                <td align="left">KinBase</td>
                                                <td align="left">August, 2012</td>
                                            </tr>
                                            <tr>
                                                <td align="left">Pseudokinases</td>
                                                <td align="left">September, 2018</td>
                                            </tr>
                                            <tr>
                                                <td align="left">MSA</td>
                                                <td align="left">December, 2015</td>
                                            </tr>
                                            <tr>
                                                <td align="left">Sub-domains</td>
                                                <td align="left">July, 2021</td>
                                            </tr>
                                        </tbody></table>
                                    <p>
                                        <strong>Disease Data </strong>
                                        <Link to="http://www.sanger.ac.uk/genetics/CGP/cosmic/">COSMIC</Link>
                                        (Catalogue of Somatic Mutations in Cancer) database
                                        `		  is used as the source of information regarding kinase cancer mutations. In
                                        addition to mutations, other information such as, the primary sites,
                                        histology, samples, description and other relevant features is also
                                        obtained from COSMIC.<br />
                                    </p><p>The mutation data was obtained from the Sanger Institute Catalogue Of
                                        Somatic Mutations In Cancer web site, http://www.sanger.ac.uk/cosmic
                                        Bamford et al (2004) The COSMIC (Catalogue of Somatic Mutations in
                                        Cancer) database and website. Br J Cancer, 91,355-358.
                                    </p>

                                    <strong>Pathway and Reaction Data </strong>
                                    The pathway and reaction data in ProKinO is obtained from
                                    <Link to="http://www.reactome.org"> Reactome</Link>.
                                    <p>Reactome project. http://www.reactome.org/ (26th January 2011).
                                    </p>

                                    <strong>Function Data </strong>
                                    The information regarding functional domains and functional
                                    features associated with kinase domains is obtained from
                                    <Link to="http://www.uniprot.org/"> UniProt</Link>. The
                                    information regarding the functional domains associated with kinase
                                    domains, the crystal structures solved for each kinase domain,
                                    isoforms, and functional features associated with kinases, such as
                                    the modified residue, signal peptide, topological domain, cellular
                                    location and tissue specificity, are obtained from UniProt.
                                    <p>The UniProt Consortium, Ongoing and future developments at the
                                        Universal Protein Resource Nucleic Acids Res. 39: D214-D219 (2011).
                                    </p>

                                    <strong>Classification and Sequence Data </strong>
                                    Data regarding protein kinase sequence and classification is
                                    obtained from <Link to="http://kinase.com/kinbase/"> KinBase</Link>.
                                    <p>The Protein Kinase Complement of the Human Genome, G Manning, DB
                                        Whyte, R Martinez, T Hunter, S Sudarsanam (2002). Science 298:1912-1934.
                                    </p>

                                    <strong>Pseudokinase data and their classification </strong>
                                    Pseudokinase sequences were identified from the
                                    Uniprot reference proteomes database and classified
                                    into pseudokinase families in the Kannan Lab at the
                                    University of Georgia.
                                    Pseudokinase protein names were either obtained from
                                    UniProt or assigned by the pseudokinase
                                    classification if the protein name is not provided by UniProt.
                                    <p></p>

                                    <strong>Kinase Sub-domain Data </strong>
                                    To capture the sub-domain information in ProKinO, we have used a
                                    motif model [1, 2] with key motifs corresponding to each of the
                                    sub-domains in the kinase domain [3].
                                    <ol>
                                        <li>Neuwald AF, Liu JS, Lawrence CE. Gibbs motif sampling: detection
                                            of bacterial outer membrane protein repeats. Protein Sci. 1995
                                            Aug;4(8):1618-32. PubMed PMID:8520488; PubMed Central PMCID: PMC2143180.</li>
                                        <li>Kannan N, Neuwald AF. Did protein kinase regulatory mechanisms
                                            evolve through elaboration of a simple structural component? J Mol
                                            Biol. 2005 Sep 2;351(5):956-72. PubMed PMID: 16051269.</li>
                                        <li>Hanks SK, Hunter T. Protein kinases 6. The eukaryotic protein
                                            kinase superfamily: kinase (catalytic) domain structure and
                                            classification. FASEB J. 1995 May;9(8):576-96. Review. PubMed PMID:7768349.</li>
                                    </ol>
                                    <p></p>

                                </td>
                            </tr>
                            </tbody></table>
                                            
                    </div>
                </div>
            </div>

            {/* Browser */}
            <div className="container mbr-black">
                <div className="row justify-content-center">
                    <div className="favth-col-xs-6">
                        <table width="620" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td width="615">
                                    <p>You can use this ontology browser to quickly locate protein kinase
                                        proteins and a lot of information related to the proteins, including
                                        the sequence, structure, function, mutation and pathway information on
                                        kinases.
                                    </p><p>You may initiate ProKinO browsing by selecting one of the following
                                        items in the <strong>Browse</strong> menu:
                                    </p><ul>
                                        <li><strong>Organisms</strong>, which provides the list of organisms;
                                            select an organism of interest and click on it to display the kinase proteins for the
                                            organism.  Subsequently, you can select and click one of the proteins to explore.</li>
                                        <li><strong>Proteins</strong>, which provides the list
                                            of kinase proteins for many organisms; select a protein
                                            of interest and click on it to display the protein data.</li>
                                        <li><strong>Kinase Domains</strong>, which provides the hierarchy all kinase domains;
                                            you will be able to expand the groups into families and subfamilies,
                                            eventually finding the domains; again, select one of interest and
                                            click on it to display the kinase domain information.</li>
                                        <li><strong>Diseases</strong>, which provides the list of all diseases (limited to
                                            cancers at this time) that are affected by kinase proteins; select
                                            one of interest and click on it to display the cancer data.</li>
                                        <li><strong>Functional Domains</strong>, which provides the list of all functional
                                            domains; again, you may select one of interest and click on it to display the
                                            functional domain data.</li>
                                    </ul>
                                    <p>It is also possible to initiate ProKinO browsing by searching for a specific kinase protein,
                                        disease, pathway, or for any object.  The searching uses a set of terms, possibly separated
                                        by OR, AND and AND NOT boolean connectors.  It is possible to use wildcards, for example, FGFR*.
                                        Phrases should be enclosed within double quotes.</p>
                                    <p>
                                        The <strong>Query</strong> functionality for Proteins,
                                        Arbitrary SPARQL queries can be
                                        submitted (however, the size of the resulting set is limited
                                        to 1500, at this time).
                                    </p><p>
                                        The ProKinO ontology has not been released for downloading, yet.
                                    </p><p>
                                        After you initiate ProKinO browsing by selecting and displaying the data
                                        information page for one of the proteins, kinase domains, diseases, or functional domains,
                                        you will be able to explore the ontology by activating the hyper-links
                                        leading to a variety of related data.
                                    </p><p>Usually, a data information page includes the properties of the shown
                                        entity (for example, cellular location or tissue specificity of
                                        the proteins), and links to other related ontology entities (for example,
                                        functional domains, sequences, pathways of the
                                        proteins).

                                    </p><p>The protein data is subdivided into sub-areas, including the general
                                        information, functional features, mutations, pathways, and external
                                        references.  These sub-areas of information are available by
                                        clicking on the provided tabs.  The mutations are further subdivided
                                        into substitutions, insertions, deletions, complex mutations, and
                                        other.

                                    </p><p>Enjoy!

                                    </p></td>
                            </tr>
                            </tbody></table>
                            <div className="back-to-top-wrapper">
                            <Link to="#top" className="back-to-top-link" aria-label="Scroll to Top">Scroll to Top</Link>
                        </div>
                    </div>
                </div>
            </div>

    </Layout>)
}