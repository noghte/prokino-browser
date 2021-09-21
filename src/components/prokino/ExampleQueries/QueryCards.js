import React from 'react';

import {
    Card, Button, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody,
  } from 'reactstrap';


export default function QueryCards({categories,index}) {
}
/*
export default function QueryCards({categories,index}) {
 p
    let url = `example_queries.json`;
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <span>Failed to load</span>
    }
    if (!data) {
        return <span>Loading...</span>
    }   
    //index==0 means all categories
    let queryList = index ===0 ? data:data.filter(q=>q.category ===index);
    // setResults(data);
    const viewQuery = (q) => {
      console.log(q);
      // router.push({
      //   pathname: '/queries',
      //   query: { query: q }
      // });
    }
    return (
        <CardColumns>
        {
         queryList.map(function(q,index)
         {
         const card = <Card key={index} style={{ padding: 2, margin: 10, border: 0, borderRadius: '.25rem', boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)' }}>
             <CardBody>
         <CardTitle style={{ fontStretch: 'semi-expanded', fontWeight: 'bold' }}>{q.title}</CardTitle>
         <CardSubtitle style={{ fontStyle: 'italic' }}>{categories.filter(c=>c.id === q.category)[0].title}</CardSubtitle>
               <hr />
               <CardText style={{ borderTop: '1px' }}>
                   {q.description}
                   </CardText>
               <Button color="primary" size="sm" onClick={()=>viewQuery(q.query)}>View</Button>
             </CardBody>
           </Card>
           return card;
         })
        }
   
         </CardColumns>
    );
    
  }

   // const queryList = 
    // {
    //   categories:
    //   [
    //     {id:1,title:"Hypothesis-driven",description:"Queries related to hypothesis-driven analysis using ProKinO "},
    //     {id:2,title:"Kinase",description:"These queries were introduced and discussed in <br/> Gosal, Gurinder, Krys J. Kochut, and Natarajan Kannan, 'ProKinO: An ontology for integrative analysis of protein kinases in cancer,' PloS ONE 6.12 (2011): e28782. <br /> [view article]"},
    //     {id:3,title:"Mutations",description:"Queries counting mutations"}
    //   ],
    //   queries:
    //   [
    //     {
    //       title:"Query 15",
    //       category:1,
    //       description:"Find all missense mutations that occur in the canonical RD Pocket, then sort the results by protein name and the corresponding PKA position.",
    //       query: `
    //               PREFIX     rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    //               PREFIX    rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    //               PREFIX prokino: <http://prokino.uga.edu/prokino#>
    //               PREFIX     xsd: <http://www.w3.org/2001/XMLSchema#>

    //               SELECT distinct (STR(?pname) as ?Protein)
    //                     (STR(?mname) as ?Motif)
    //                     (STR(?wt) AS ?Wild_Type) 
    //                     (STR(?pos) as ?Position)
    //                     (STR(?mutt) as ?Mutant_Type)
    //                     (STR(?pka) as ?PKA_Position)  
    //                     (STR(?dname) as ?Disease)
    //                     (STR(?psite) as ?Primary_Site)
    //                     (STR(?subsite) as ?Subsite)
    //               WHERE
    //               {
    //                 ?mut   rdf:type                    prokino:Missense .
    //                 ?pro   prokino:hasMutation         ?mut .
    //                 ?pro   prokino:hasPrimaryName      ?pname .
    //                 ?mut   prokino:hasWildTypeResidue  ?wt .
    //                 ?mut   prokino:hasMutantType       ?mutt .
    //                 ?mut   prokino:hasStartLocation    ?pos .
    //                 ?mut   prokino:hasPKAStartLocation ?pka .
    //                 filter(STR(?pka) != '0')

    //                 ?mut   prokino:locatedIn           ?motif .
    //                 ?motif prokino:hasPrimaryName      ?mname .
    //                 filter(STR(?mname) = 'Canonical RD Pocket')

    //                 ?mut   prokino:inSample            ?samp .
    //                 ?samp  prokino:hasPrimarySite      ?psite .
    //                 ?samp  prokino:hasSiteSubType      ?subsite .
    //                 ?samp  prokino:hasPrimaryHistology ?dname .
    //               }
    //               ORDER BY ?pname xsd:integer(?pka)
    //       `,
    //     },
    //     {
    //       title:"Query 16",
    //       category:1,
    //       description:"Find all missense mutations that occur in the KE salt bridge, then sort the results by protein name and the corresponding PKA position.",
    //       query:"",
    //     },
    //     {
    //       title:"Query 5b",
    //       category:1,
    //       description:"Find the counts of protein kinases having missense mutations implicated in different types of cancer and display them in descending order.",
    //       query:"",
    //     },
    //     {
    //       title:"Query 5a",
    //       category:2,
    //       description:"Find the counts of substitution missense mutations (at least 4) implicated in different types of cancer and display them in descending order",
    //       query:"",
    //     },
    //     {
    //       title:"Query 7",
    //       category:3,
    //       description:"Find the counts of different mutations (of all types) for all kinase proteins and display the top 10 in the descending order.",
    //       query:"",
    //     },
    //     {
    //       title:"Query 14",
    //       category:3,
    //       description:"Find the counts of substitution missense mutations of the Human protein kinase FLT3 all having the primary site of Haematopoietic and Lymphoid tissue, and located in various sub-domains and display them in descending order.",
    //       query:""

    //     }
    //   ]
    // }
    */