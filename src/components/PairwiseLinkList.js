import React from "react";
import Link from 'gatsby';

export default function LinkList({values, entityClass, seperator = ", ", key="c",value="v"})
{
    let links = []
    
    if (values)
        {
            //we should have a target value to get filtered values, if not, consider the first element as the main element
            let entity = entityClass ? values.find(el => el[key] === entityClass) : values[0];
            
            if (entity) 
            {
                const length = entity[value].length;
                for (let i=0;i<length;i++) //loop through pairs of values
                {
                    let isLabel = i % 2 == 1; //odd literals are labels, and even literals are link values (for href attribtue)
                    if (isLabel)
                    {
                        const label = entity[value][i];
                        const link = entity[value][i-1];
                        links.push(
                            <Link to={`browse?c=${entityClass}&v=${link}`}>
                                {label}
                            </Link>
                        );
                        if (i<length-1) //if it is not the last item (don't add separator to the last item)
                            links.push(seperator); // add a seperator (e.g. a comma) to seprate list of links
                    }
                }
            }
        }
    return links;
}