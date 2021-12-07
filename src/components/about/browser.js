import React from 'react';

export default function AboutBrowser() {
    return (
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

                    </p></td>
            </tr>
            </tbody></table>)
}