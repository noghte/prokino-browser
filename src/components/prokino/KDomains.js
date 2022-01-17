//import React, { useEffect, useState, useRef, useMemo } from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { navigate } from 'gatsby';
import TreeItem from '@mui/lab/TreeItem';
import {CLASSIFICATION_ENDPOINT} from './Endpoints'

export default function KDomains() {
  // return ("Not available now");
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = async () => {
        try {
            let result = await axios.get(CLASSIFICATION_ENDPOINT);
            setData(result.data);

        } catch (error) {
            console.log(error)
        }
    }
    res();
}, []);
const handleClick = (e,nodeName) => {
  switch (e.detail) {
    // case 1:
    //   console.log("click");
    //   break;
    case 2: //double click
      const entityClass = "prokino:FunctionalDomain";
       //https://prokino.uga.edu/nb/browse/?c=prokino:Organism&v=prokino:Human
  //    navigate(`/browse/?c=${entityClass}&v=${nodeName}`);
      console.log("double click", nodeName);
      break;
  }
};
  function renderTree(nodes){
      const nodeName = nodes.name ?? nodes;
      const nodeLabel = nodes.label ?? nodes;
      return <TreeItem key={nodeName} nodeId={nodeName} label={nodeLabel} onClick={(e)=>handleClick(e,nodeName)}>
      {Array.isArray(nodes.subnodes)
        ? nodes.subnodes.map((node) => renderTree(node))
        : ""}
    </TreeItem>
      
      // return <TreeItem key={nodes.name} nodeId={nodes.name} label={nodes.label}>
      //           {nodes.subnodes && Array.isArray(nodes.subnodes)
      //             ? nodes.subnodes.map((node) => renderTree(node))
      //             : ""}
      //         </TreeItem>

  }

  if (!data)
        return "Loading ..."
  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={["prokino:ProteinKinaseDomain"]}
      sx={{ flexGrow: 1, overflowY: 'auto' }}
    >
      {renderTree(data)}
    </TreeView>
  );
}