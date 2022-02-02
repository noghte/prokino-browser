
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {SPARQL_CATEGORIES,SPARQL_SAMPLEQUERIES} from '../prokino/Endpoints';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, CardHeader, Collapse, Container
} from 'reactstrap';
import { navigate } from 'gatsby-link';

export default function ExampleQueries(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [categories, setCategories] = useState(null);
    const [exampleQueries, setExampelQueries] = useState(null);
    const [filteredQueries, setFilteredQueries] = useState(null);

    // const [queries, setQueries] = useState(0);

    useEffect(() => {
        let url = `${SPARQL_CATEGORIES}`;
        const res = async () => {
            try {
                const result = await axios.get(url);
                setCategories(result.data);

            } catch (error) {
                console.log("error=", error)
            }
        };
        //  if (props.triggerSearch)
        res();
    }, []);

    useEffect(() => {
        let url = `${SPARQL_SAMPLEQUERIES}`;
        const res = async () => {
            try {
                const result = await axios.get(url);
                setExampelQueries(result.data);
                setFilteredQueries(result.data);

            } catch (error) {
                console.log("error=", error)
            }
        };
        res();
    }, []);

    const viewQuery = (q) => {
        // console.log(q);
       // props.onSelect(q);
        navigate(`/queries/?id=${q.id}`)
        // router.push({
        //   pathname: '/queries',
        //   query: { query: q }
        // });
    }
    const toggle = (c) => {
        setActiveIndex(c);
        if (c === 0)
             setFilteredQueries(exampleQueries);
         else
            setFilteredQueries(exampleQueries.filter(q => q.category === c));

    };
    if (!filteredQueries || !exampleQueries)
        return <p>Loading ...</p>
    return (
        <>
            <Button color={activeIndex == 0 ? "primary" : "secondary"} onClick={() => toggle(0)} data-toggle="collapse" id="toggler1" style={{ margin: '0.3rem' }}>
                All
            </Button>
            {
                categories.map(function (c, idx) {
                    return <Button key={`btn-${idx}`} color={activeIndex == c.id ? "primary" : "secondary"} onClick={() => toggle(c.id)} aria-expanded="false" id={`toggler-${idx}`} style={{ margin: '0.3rem' }}>
                        {c.title}
                    </Button>
                })
            }

            {
                categories.map(function (c, idx) {
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
                    filteredQueries.map(function (q, index) {
                        const card = <Card key={index} style={{ padding: 2, margin: 10, border: 0, borderRadius: '.25rem', boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)' }}>
                            <CardBody>
                                <CardTitle style={{ fontStretch: 'semi-expanded', fontWeight: 'bold' }}>{q.title}</CardTitle>
                                {/* <CardSubtitle style={{ fontStyle: 'italic' }}>{categories.filter(c => c.id === q.id)[0].title}</CardSubtitle> */}
                                {/* <hr /> */}
                                <CardText style={{ borderTop: '1px' }}>
                                    {q.description}
                                </CardText>
                                <Button color="primary" size="sm" onClick={() => viewQuery(q)}>View</Button>
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


        </>
    );

}