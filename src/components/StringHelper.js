export function display(text)
{
   return text.split(":")[1];
}
export function showList(items, property="", seperator = ", ")
{
   if (!items)
      return "";
   
   return property === "" ? items.join(seperator) : items.map(a => a[property]).join(seperator);
}

export function getLabels(arr)
{
   return arr.filter((a,i)=>i%2===0);
}

export function getValues(arr)
{
   return arr.filter((a,i)=>i%2===1);
}

export function splitString(item)  {
   return item.replace(/.{5}/g, "$&" + " ");
};