import React from "react";
import { useState } from 'react';
import Link from 'gatsby';

export default function Header(props){
    const [showMe, setShowMe] = useState(false);
    const [title] = useState(props.title);
    
    function toggle(){
      setShowMe(!showMe);
    }
    return (
      <div style={{paddingLeft: '3.5rem'}}>
      <a onClick={toggle}>
                  {title}
                </a>
                {/* <p style={{color:'blue', pointer:'hand', paddingLeft: '3.5rem'}} onClick={toggle}>
                    {title}
                </p> */}
        
        <div style={{
          display: showMe?"block":"none"
        }}>
          {props.children}
        </div>
      </div>
    );
  }