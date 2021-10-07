import React, { useState, useEffect } from 'react';
import QueryCards from '../prokino/ExampleQueries/QueryCards';
import axios from 'axios';
import Layout from '../Layout';
import {
    Card, Button, CardBody, Collapse
} from 'reactstrap';


export default function ExampleQueries(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        let url = `example_categories.json`;
        const res = async () => {
            try {
                const result = await axios.get(url);
                setCategories(result.data);

            } catch (error) {
                setError("Failed to load example queries...")
                console.log("error=", error)
            }
        };
        //  if (props.triggerSearch)
        res();
    }, []);


    const toggle = (c) => {
        setActiveIndex(c);
        // if (c === 0)
        //   setFilteredCategories(queryList.queries);
        // else
        //   setFilteredCategories(queryList.queries.filter(q=>q.category === c));

    };
    function handleOnSelect(q)
    {
        props.onSelect(q);
    }
    if (error)
        return <Layout><p>{error}</p></Layout>;
    if (!categories)
        return <Layout><p>Loading example queries' categories ...</p></Layout>;
    // setResults(data);
    return (
        <Layout>
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
            <QueryCards categories={categories} index={activeIndex} onSelect={e=>handleOnSelect(e)} />

        </Layout>
    );
}