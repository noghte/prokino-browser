
import React,{ useState, useEffect } from 'react';
import Layout from '../components/Layout';

//import QueryResult from './QueryResult';

import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, CardHeader, Collapse, Container
} from 'reactstrap';

export default function ExampleQueries() {
    const [activeIndex, setActiveIndex] = useState(0);

    const queryList =
    {
        categories:
            [
                { id: 1, title: "Hypothesis-driven", description: "Queries related to hypothesis-driven analysis using ProKinO " },
                { id: 2, title: "Kinase", description: "These queries were introduced and discussed in <br/> Gosal, Gurinder, Krys J. Kochut, and Natarajan Kannan, 'ProKinO: An ontology for integrative analysis of protein kinases in cancer,' PloS ONE 6.12 (2011): e28782. <br /> [view article]" },
                { id: 3, title: "Mutations", description: "Queries counting mutations" }
            ],
        queries:
            [
                {
                    id: 1,
                    title: "Query 15",
                    category: 1,
                    description: "Find all missense mutations that occur in the canonical RD Pocket, then sort the results by protein name and the corresponding PKA position.",
                    query: `
                  PREFIX     rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                  PREFIX    rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                  PREFIX prokino: <http://prokino.uga.edu/prokino#>
                  PREFIX     xsd: <http://www.w3.org/2001/XMLSchema#>

                  SELECT distinct (STR(?pname) as ?Protein)
                        (STR(?mname) as ?Motif)
                        (STR(?wt) AS ?Wild_Type) 
                        (STR(?pos) as ?Position)
                        (STR(?mutt) as ?Mutant_Type)
                        (STR(?pka) as ?PKA_Position)  
                        (STR(?dname) as ?Disease)
                        (STR(?psite) as ?Primary_Site)
                        (STR(?subsite) as ?Subsite)
                  WHERE
                  {
                    ?mut   rdf:type                    prokino:Missense .
                    ?pro   prokino:hasMutation         ?mut .
                    ?pro   prokino:hasPrimaryName      ?pname .
                    ?mut   prokino:hasWildTypeResidue  ?wt .
                    ?mut   prokino:hasMutantType       ?mutt .
                    ?mut   prokino:hasStartLocation    ?pos .
                    ?mut   prokino:hasPKAStartLocation ?pka .
                    filter(STR(?pka) != '0')

                    ?mut   prokino:locatedIn           ?motif .
                    ?motif prokino:hasPrimaryName      ?mname .
                    filter(STR(?mname) = 'Canonical RD Pocket')

                    ?mut   prokino:inSample            ?samp .
                    ?samp  prokino:hasPrimarySite      ?psite .
                    ?samp  prokino:hasSiteSubType      ?subsite .
                    ?samp  prokino:hasPrimaryHistology ?dname .
                  }
                  ORDER BY ?pname xsd:integer(?pka)
          `,
                },
                {
                    title: "Query 16",
                    category: 1,
                    description: "Find all missense mutations that occur in the KE salt bridge, then sort the results by protein name and the corresponding PKA position.",
                    query: "",
                },
                {
                    title: "Query 5b",
                    category: 1,
                    description: "Find the counts of protein kinases having missense mutations implicated in different types of cancer and display them in descending order.",
                    query: "",
                },
                {
                    title: "Query 5a",
                    category: 2,
                    description: "Find the counts of substitution missense mutations (at least 4) implicated in different types of cancer and display them in descending order",
                    query: "",
                },
                {
                    title: "Query 7",
                    category: 3,
                    description: "Find the counts of different mutations (of all types) for all kinase proteins and display the top 10 in the descending order.",
                    query: "",
                },
                {
                    title: "Query 14",
                    category: 3,
                    description: "Find the counts of substitution missense mutations of the Human protein kinase FLT3 all having the primary site of Haematopoietic and Lymphoid tissue, and located in various sub-domains and display them in descending order.",
                    query: ""

                }
            ]
    }
    const viewQuery = (q) => {
        console.log(q);
        // router.push({
        //   pathname: '/queries',
        //   query: { query: q }
        // });
    }
    const [filteredCategories, setFilteredCategories] = useState(queryList.queries);
    const toggle = (c) => {
        setActiveIndex(c);
        if (c === 0)
            setFilteredCategories(queryList.queries);
        else
            setFilteredCategories(queryList.queries.filter(q => q.category === c));

    };
    return (
        <Layout>
            <Button color={activeIndex == 0 ? "primary" : "secondary"} onClick={() => toggle(0)} data-toggle="collapse" id="toggler1" style={{ margin: '0.3rem' }}>
                All
    </Button>
            {
                queryList.categories.map(function (c, idx) {
                    return <Button key={`btn-${idx}`} color={activeIndex == c.id ? "primary" : "secondary"} onClick={() => toggle(c.id)} aria-expanded="false" id={`toggler-${idx}`} style={{ margin: '0.3rem' }}>
                        {c.title}
                    </Button>
                })
            }

            {
                queryList.categories.map(function (c, idx) {
                    return <Collapse key={`collapse-${idx}`} toggler={`#toggler-${idx}`} isOpen={activeIndex == c.id}>
                        <Card>
                            <CardBody>
                                {c.description}
                            </CardBody>
                        </Card>
                    </Collapse>
                })
            }

            <CardColumns>
                {
                    filteredCategories.map(function (q, index) {
                        const card = <Card key={index} style={{ padding: 2, margin: 10, border: 0, borderRadius: '.25rem', boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)' }}>
                            <CardBody>
                                <CardTitle style={{ fontStretch: 'semi-expanded', fontWeight: 'bold' }}>{q.title}</CardTitle>
                                <CardSubtitle style={{ fontStyle: 'italic' }}>{queryList.categories.filter(c => c.id === q.category)[0].title}</CardSubtitle>
                                <hr />
                                <CardText style={{ borderTop: '1px' }}>
                                    {q.description}
                                </CardText>
                                <Button color="primary" size="sm" onClick={() => viewQuery(q.query)}>View</Button>
                            </CardBody>
                        </Card>
                        return card;
                    })
                }


                {/* <Card style={{padding:2,margin:10,border:0, borderRadius:'.25rem', boxShadow:'0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)'}}>
        <CardBody>
        <CardTitle style={{fontStretch:'semi-expanded',fontWeight:'bold'}}>Query 15</CardTitle>
          <CardSubtitle style={{fontStyle:'italic'}}>Hypothesis-driven analysis</CardSubtitle>
          <CardText style={{borderTop:'1px'}}>
              <hr />
          Find all missense mutations that occur in the canonical RD Pocket, then sort the results by protein name and the corresponding PKA position.
          </CardText>
          <Button color="primary" size="sm">View</Button>
        </CardBody>
      </Card> */}

            </CardColumns>


        </Layout>
    );

}