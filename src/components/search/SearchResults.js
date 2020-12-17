import React from 'react';
import { useState } from 'react';
import Link from 'gatsby';
import axios from 'axios';


function splitText(text)
{
    //The parenthesis in the regex creates a captured group within the quotes
    var myRegexp = /[^\s"]+|"([^"]*)"/gi;
    var tokens = [];
    do {
        //Each call to exec returns the next regex match as an array
        var match = myRegexp.exec(text);
        if (match != null)
        {
            //Index 1 in the array is the captured group if it exists
            //Index 0 is the matched text, which we use if no captured group exists
            tokens.push(match[1] ? '"' + match[1] + '"': match[0]);
        }
    } while (match != null);
    return tokens;

}
function buildSearchTerm(text, mode="match_all")
{
    function isAnOperator(text)
    {
         return ["and","or","-"].includes(text);
    }
    text = text.replace(/\s+/g,' ').trim(); //Finds any number of sequential spaces and removes them
    let tokens = splitText(text);
    let newtokens = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] !== 'or' && tokens[i] !== '-')
        {
            if (i>0 && tokens[i] !== 'and' && !isAnOperator(newtokens[newtokens.length-1])) 
                newtokens.push('and'); //the default operator
            
        }
        if (tokens[i] === 'not')
        {
            newtokens.push('-' + tokens[i+1]);
            i+=1;
        }
        else 
            newtokens.push(tokens[i]);


    }
    //newtokens.push(tokens[tokens.length-1]); //add the last item skipped in the for loop
    let query = newtokens.join('+');
    return query;
}
function getStatus(pageNumber)
{
    if (pageNumber<0)
        return " disabled";
    return " ";
}


export default function SearchResults(props) {
    const [offset,setOffset] = useState(0);
    let searchOption = props.option? "&" + props.option: "";
    let query = buildSearchTerm(props.input);
    const pageSize = 10;
    let url = `http://gumbo.cs.uga.edu:8080/prokinosrv/rest/entity?contains=${query}&pagesize=${pageSize}&pageoffset=${offset}${searchOption}`;
    // const { data, error } = useSWR(url, fetcher);
    // if (error) {
    //     return <span>Failed to load</span>
    // }
    // if (!data) {
    //     return <span>Loading...</span>
    // }   
    // console.table(data);
    axios.get(url)
    .then(function (data) {
      // handle success
      return (
        <div className="container position-relative" id="content">
        {!data.hits? <b>No Results</b>:
          <>
            <p>Showing <b>{data.totalHits>data.pageSize ?data.pageSize:data.totalHits}</b> of <b>{data.totalHits}</b> results.</p>
  {              data.hits.map((item, index) => (
           <div key={"row-"+index} className="list-group-item clearfix">
           <div className="profile-teaser-left">
               <div className="profile-img">
                  {/* <img src="https://static.pexels.com/photos/21011/pexels-photo-large.jpg"/> */}
                 </div>
           </div>
           <div className="search-results profile-teaser-main">
           <Link key={index} href={`browse?c=${item.entityClass}&v=${item.entity}`}>
              <a className="nav-link">{item.entity}</a>
            </Link>
               <div className="profile-info">
               <div className="info"
                    dangerouslySetInnerHTML={{
                      __html: item.snippet
                    }}></div>
               </div>
           </div>
       </div>
            ))}
            <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
        
      <li className={`page-item${getStatus(data.pageOffset - 1)}`}>
        <a className="page-link" onClick={goToPage} name="-1" tabIndex="-1">Previous</a>
      </li>
      
      <li className={`page-item${getStatus(data.pageOffset)}`}><a onClick={goToPage} name="0" className="page-link" >{data.pageOffset+1}</a></li>
      <li className={`page-item${getStatus(data.pageOffset+1)}`}><a onClick={goToPage} name="1" className="page-link" >{data.pageOffset + 2}</a></li>
      <li className={`page-item${getStatus(data.pageOffset+1)}`}><a onClick={goToPage} name="2" className="page-link" >{data.pageOffset + 3}</a></li>
  
      <li className={`page-item${getStatus(data.pageOffset+1)}`}>
        <a className="page-link" onClick={goToPage} name="1">Next</a>
      </li>
    </ul>
  </nav>
            </>
            }
      </div>
      );
    })
    .catch(function (error) {
      // handle error
      return <span>Failed to load</span>
    })
    .then(function () {
      // always executed
      return <span>Loading...</span>
    });
    
    const goToPage = (e) => {
        e.preventDefault();
        let val = offset+Number(e.target.name);
        if (val<0) val=0;
        setOffset(val);
        //props.onChange(Number(offset));
      };

 
    // setResults(data);
    // return (
      
     
    // );
    
  }