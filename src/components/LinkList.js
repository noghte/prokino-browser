import React from "react";
import Link from 'gatsby';

export default function LinkList({values, entityClass, seperator, key="entity",value: label="entityDisplay"})
{
    let links = []
    if (values)
        {
            //we should have a target value to get filtered values, if not, consider the first element as the main element
            entityClass = entityClass ? values.find(el => el[key] === entityClass) : values[0].entityClass;
            for (let i = 0; i < values.length; i++) {
                const element = values[i];
                links.push(
                    <>
                    <Link to={`browse?c=${entityClass}&v=${element[key]}`}>
                        {element[label]}
                    </Link>
                    {i<values.length-1 && seperator }  {/* add seperator if it's not the last item */}
                    </>
                );
            }

        }
    return links;
}
