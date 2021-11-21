import { func } from "prop-types";
import ReactHtmlParser from 'react-html-parser'; 


let mapping = require(`../../static/LabelMappings.json`).mapping;

export function display(text) {
   let label = text in mapping ? mapping[text] : text.split(":")[1];
   return label;
}
export function showList(items, property = "", seperator = `<br />`) {
   if (!items)
      return "";

   const result =  property === "" ? items.join(seperator) : items.map(a => a[property]).join(seperator);
   return ReactHtmlParser(result);
}


export function getLabels(arr) {
   return arr.filter((a, i) => i % 2 === 0);
}

export function getValues(arr) {
   return arr.filter((a, i) => i % 2 === 1);
}

export function splitString(item) {
   return item.replace(/.{5}/g, "$&" + " ");
}

export function getSparqlQueryLabel(rawtext, toRemove) {
   let text = rawtext;
   toRemove && toRemove.forEach(rm => {
      text = text.replace(rm, "")
   });
   return text;
}
;