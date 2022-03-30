//import React, { useEffect, useState, useRef, useMemo } from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { navigate } from 'gatsby';
import TreeItem from '@mui/lab/TreeItem';
import { CLASSIFICATION_ENDPOINT } from './Endpoints'
import {
  Alert
} from 'reactstrap';
const mapToRename = new Map([
  ["name", "id"],
]);
// https://stackoverflow.com/a/19752570/87088
function refit_keys(o) {
  // Only handle non-null objects
  if (o === null || typeof o !== "object") {
    return o;
  }

  // Handle array just by handling their contents
  if (Array.isArray(o)) {
    return o.map(refit_keys);
  }

  const build = {};
  for (const key in o) {
    // Get the destination key
    const destKey = mapToRename.get(key) || key;

    // Get the value
    let value = o[key];

    // If this is an object, recurse
    // If this is an object, recurse
    if (Array.isArray(value)) { //typeof value === "object" && 
      value = refit_keys(value);
    }
    //   ? nodes.subnodes.map((node) => renderTree(node.label != undefined ? node: { "id": node, "name": node }  ))


    // Set it on the result using the destination key
    build[destKey] = value;
  }
  return build;
}

export default function KDomains() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = async () => {
      try {
        let result = await axios.get(CLASSIFICATION_ENDPOINT);
        const modifiedResult = refit_keys(result.data);
        setData(modifiedResult);

      } catch (error) {
        console.log(error)
      }
    }
    res();
  }, []);
  const handleClick = (e, nodeName) => {
    // if (typeof nodeName !== 'string') return;
    switch (e.detail) {
      case 1:
        console.log("click");
        break;
      case 2: //double click
        e.stopPropagation();
        e.preventDefault();
        const entityClass = "prokino:FunctionalDomain";
        //https://prokino.uga.edu/nb/browse/?c=prokino:Organism&v=prokino:Human
        navigate(`/browse/?c=${entityClass}&v=${nodeName}`);
        console.log("double click", nodeName);
        break;
    }
  };

  function renderTree(nodes) {
    const isLeaf = typeof nodes === 'string';
    const nodeId = nodes.id ?? nodes;
    const nodeLabel = nodes.label ?? nodes;
    if (isLeaf)
      return <TreeItem key={nodeId}
        nodeId={nodeId}
        label={nodeLabel}
        onClick={(e) => handleClick(e, nodes)}>
      </TreeItem>
    return <TreeItem key={nodeId} nodeId={nodeId} label={nodeLabel}>
      {Array.isArray(nodes.subnodes)
        ? nodes.subnodes.map((node) => renderTree(node))
        : ""}
    </TreeItem>
  }

  // onClick={(e)=>handleClick(e,nodeName)}
  // function renderTree(nodes){
  //     // return <TreeItem key={nodes.name} nodeId={nodes.name} label={nodes.label}>
  //     //           {nodes.subnodes && Array.isArray(nodes.subnodes)
  //     //             ? nodes.subnodes.map((node) => renderTree(node))
  //     //             : ""}
  //     //         </TreeItem>

  // }

  if (!data)
    return "Loading ..."
  return (
    <>
      <h3>Kinome Tree</h3>
      <div>
  <Alert
    color="primary"
    dismissible
  >
Click on the families to expand. <br /> Double-click on the domains to navigate to the corresponding domain details page.  </Alert>
</div>

      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['prokino:ProteinKinaseDomain']}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={["prokino:ProteinKinaseDomain"]}
        sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {renderTree(data)}
      </TreeView>
    </>
  );
}