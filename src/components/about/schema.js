import React from 'react';
import { Link, withPrefix } from "gatsby"

export default function AboutSchema() {
    return (
        <table width="900" border="0" cellpadding="0" cellspacing="0">
            <tbody><tr>
                <td>

                    The picture below is an outline of the ProKinO schema as a UML class diagram.
                    It shows major ProKinO classes and object properties
                    (relationships connecting ProKinO classes). It is
                    <a href={withPrefix("/ui/ProKinO-Schema-3.pdf")}> available in PDF</a>, as well<p>

                        <a href={withPrefix("/ui/ProKinO-Schema-3.png")}>
                            <img src={withPrefix("/ui/ProKinO-Schema-3.png")} alt="ProKinO Schema" style={{ width: '100%' }} />
                        </a>

                    </p></td>
            </tr>
            </tbody></table>
    )
}

