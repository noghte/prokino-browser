
import React from 'react';
import { Link, withPrefix } from "gatsby"

export default function AboutDataSources() {
    return (
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
                                                                <td align="left">97</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left">Reactome</td>
                                                                <td align="left">83</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left">UniProt</td>
								<td align="left">2023_01</td>
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
                                                                <td align="left">Ligands data</td>
                                                                <td align="left">September, 2021</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left">Sub-domains</td>
                                                                <td align="left">July, 2021</td>
                                                            </tr>
                                                        </tbody></table>
						    <br/>
                                                    <p>
                                                        <strong>Disease Data </strong>
                                                        <Link to="http://www.sanger.ac.uk/genetics/CGP/cosmic/">COSMIC </Link>
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
                                            </tbody></table>)
}
