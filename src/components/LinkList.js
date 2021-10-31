import React from "react";
import {Link} from 'gatsby';
import { navigate } from '@reach/router';

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
                    {/* onClick={linkClicked(entityClass,element,i)} */}
                    <a className="prokino-link" href={`?c=${entityClass}&v=${element[key]}`} key={`link-${entityClass}-${i}`}>
                        {element[label]}
                    </a>
                    {i<values.length-1 && seperator }  {/* add seperator if it's not the last item */}
                    </>
                );
            }

        }
    return links;
}


// Alternative:
// import React from "react";
// import { Link } from "gatsby"

// export default function LinkList({values, entityClass, seperator, key="entity",value: label="entityDisplay"})
// {
//     let links = []
//     if (values)
//         {
//             entityClass = entityClass ? values.find(el => el[key] === entityClass) : values[0].entityClass;
//             for (let i = 0; i < values.length; i++) {
//                 const element = values[i];
//                 links.push({
//                     to: `browse?c=${entityClass}&v=${element[key]}`,
//                     label: element[label],
//                 });
//             }

//         }

//     return <div>
//         {links.map(item => (
//              <Link to={item.to}>{item.label}</Link>
//         ))}
//         </div>
  


// }
