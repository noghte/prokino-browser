
import React from 'react';
export default function AboutOntology() {
    return (
        <table width="620" border="0" cellpadding="0" cellspacing="0">
            <tbody><tr>
                <td width="615">
                    <span style={{ fontWeight: 'bold' }}> Current version: 65 </span> <br />
                    Date: 2023-03-16
                    <p>
		    <br/>
  			Protein Kinase Ontology (ProKinO) is a collaborative effort between
                        the Evolutionary Systems Biology Group Lab of Dr. Natarajan Kannan at the Biochemistry and Molecular
                        Biology Department and Dr. Krys J. Kochut's lab at the School of Computing,
                        both at the University of Georgia, Athens, USA.  Dr. Gurinder Gosal, formerly a student in Computer Science,
                        UGA, created an initial version of the software system to automatically populate 
			ProKinO from the selected data sources (see Data sources, below).  The population system has
                        been subsequently enhanced by our students Dr. Shima Dastgheib, formerly Computer Science, UGA, 
                        Dr. Daniel McSkimming, formerly IOB, UGA, and Dr. Abbas Keshavarzi, formerly Computer Science, UGA,
			and several other current and former lab members (see People, below).</p>
                    <p>
                        The conceptual representation of such diverse information in one place, in the form of the ProKinO knowledge graph,
                        enables not only rapid discovery of significant information related to
                        a specific protein kinase, but also enables large scale integrative
                        analysis of the protein kinase family.  An outline of the data organization in ProKinO is represented
			using a UML class diagram (see Schema, below).</p>
                    <p>Publications:</p>
		    <p>Soleymani, S., Gravel, N., Huang, L. C., Yeung, W., Bozorgi, E., Bendzunas, N. G., Kochut, K.J., and Kannan, N. (2022). 
                       Dark kinase annotation, mining and visualization using the Protein Kinase Ontology. bioRxiv, 2022-02. 
                       doi: https://doi.org/10.1101/2022.02.25.482021</p>
                    <p>Salcedo, M., Gravel, N., Keshavarzi, A., Huang, L., Kochut, K., Kannan, N. (2023). 
                       Predicting Protein and Pathway Associations for Understudied Dark Kinases using Pattern-constrained Knowledge Graph Embedding. 
                       PeerJ, under review </p>
                    <p>Yeung, W., Zhou, Z., Li, S., & Kannan, N. (2023). 
                       Alignment-free estimation of sequence conservation for identifying functional sites using protein sequence embeddings. 
                       Briefings in Bioinformatics, 24(1), bbac599.</p>
                    <p>McSkimming, D.I., Dastgheib, S., Talevich, E., Narayanan, A., Katiyar, S.,
                        Taylor, S.S., Kochut, K.J., Kannan, N. (2015).
                        "ProKinO: a unified resource for mining the cancer
                        kinome." Human Mutation 36(2):175-86. doi:10.1002/humu.22726.</p>
                    <p>
                        Gosal, G., Kochut, K.J., Kannan, N. (2011). "ProKinO: An Ontology for Integrative Analysis of Protein Kinases
                        in Cancer." PLoS ONE 6(12):e28782. doi:10.1371/journal.pone.0028782</p>
                    <p>
                        Gosal, G., Kannan, N., Kochut, K.J. (2011). "ProKinO: A
                        Framework for Protein Kinase Ontology," in Proceedings
                        of the 2011 IEEE International
                        Conference on Bioinformatics and Biomedicine (BIBM), pp. 550-555.
                    </p>

                </td>
            </tr>
            </tbody></table>
    )
}

