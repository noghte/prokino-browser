import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "gatsby"
import axios from 'axios';
import { ENTITY_ENDPOINT } from '../prokino/Endpoints';
import { propTypes } from 'react-bootstrap/esm/Image';

function splitText(text) {
  //The parenthesis in the regex creates a captured group within the quotes
  var myRegexp = /[^\s"]+|"([^"]*)"/gi;
  var tokens = [];
  do {
    //Each call to exec returns the next regex match as an array
    var match = myRegexp.exec(text);
    if (match != null) {
      //Index 1 in the array is the captured group if it exists
      //Index 0 is the matched text, which we use if no captured group exists
      tokens.push(match[1] ? '"' + match[1] + '"' : match[0]);
    }
  } while (match != null);
  return tokens;

}
function buildSearchTerm(text, mode = "match_all") {
  function isAnOperator(text) {
    return ["and", "or", "-"].includes(text);
  }
  text = text.replace(/\s+/g, ' ').trim(); //Finds any number of sequential spaces and removes them
  let tokens = splitText(text);
  let newtokens = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] !== 'or' && tokens[i] !== '-') {
      if (i > 0 && tokens[i] !== 'and' && !isAnOperator(newtokens[newtokens.length - 1]))
        newtokens.push('and'); //the default operator

    }
    if (tokens[i] === 'not') {
      newtokens.push('-' + tokens[i + 1]);
      i += 1;
    }
    else
      newtokens.push(tokens[i]);


  }
  //newtokens.push(tokens[tokens.length-1]); //add the last item skipped in the for loop
  return newtokens.join('+');
}



export default function SearchResults(props) {
  const [offset, setOffset] = useState(0);
  const [results, setResults] = useState([]);
  const [totalHits, setTotalHits] = useState(null);
  const [pageOffset, setPageOffset] = useState(null);
  let searchOptions = !props.searchOption ? "" : "&" + props.searchOption;
  // if (searchOption)
  //     searchOptions = "&" + props.searchOption;
  // else
  //     searchOptions = ""
  const pageSize = 40;
  function getStatusPreviousPage(pageNumber) {
    if (pageNumber < 0)
      return " disabled";
    return " ";
  }
  function getStatusNextPage(pageNumber)
  {
    if (pageSize * (pageNumber-1)> (totalHits - pageSize))
      return " disabled";
  
  }
  function immutableMove(arr, from, to) {
    return arr.reduce((prev, current, idx, self) => {
      if (from === to) {
        prev.push(current);
      }
      if (idx === from) {
        return prev;
      }
      if (from < to) {
        prev.push(current);
      }
      if (idx === to) {
        prev.push(self[from]);
      }
      if (from > to) {
        prev.push(current);
      }
      return prev;
    }, []);
  }
  function sortByName(field) {
    return function (a, b) {
      return (a[field] > b[field]) - (a[field] < b[field])
    };
  }
  function sortByHuman(field) {
    return function (a, b) {
      if (a[field].toLowerCase().includes("human")) {
        return -1;
      } else
        return 1;
    };
  }
  function sortBySearchTermIn(field) {
    return function (a, b) {
      if (a[field].toLowerCase().includes("human") && a[field].toLowerCase().includes(props.searchText.toLowerCase())) {
        return -1;
      } else if (a[field].toLowerCase().includes("human"))
        return 0;
      return 1;
    };
  }
  function sortResults(items) {

    let sorted = [...items]
    sorted.sort(sortByName('entity'));
    sorted.sort(sortByHuman('entity'));
    sorted.sort(sortBySearchTermIn('entity', props.searchText));

    return sorted;

  }
  useEffect(() => {
    const res = async () => {
      let search_query = buildSearchTerm(props.searchText);
      let url = `${ENTITY_ENDPOINT}?contains=${search_query}&pagesize=${pageSize}&pageoffset=${offset}${searchOptions}`;

      try {
        const result = await axios.get(url);
        const data = result.data;
        console.log("search results", data);
        setTotalHits(data.totalHits);
        setPageOffset(data.pageOffset);
        if (result.data && result.data.totalHits > 0) {
          const sortedResults = sortResults(result.data.hits)
          setResults(sortedResults);
        }
        else
          setResults(null);
      } catch (error) {
        setResults(null);
      }

      props.onFinishedSearch(true);
    };
    if (props.triggerSearch)
      res();
  }, [offset]);

  useEffect(() => {
    setOffset(0);
  }, [props.searchText]);

  const goToPage = (e) => {
    e.preventDefault();
    let val = offset + Number(e.target.name);
    // console.log(val);
    if (val < 0) val = 0;
    setOffset(val);
    props.onFinishedSearch(false);
    //props.onChange(Number(offset));
  };

  return (
    <div className="container position-relative" id="content">
      {!results ? "No Results" :
        <>
          <p>Showing <b>{totalHits > pageSize ? pageSize : totalHits}</b> of <b>{totalHits}</b> results.</p>
          {  Object.entries(results).map(([index, item]) => (

            <div key={"row-" + index} className="list-group-item clearfix">
              <div className="profile-teaser-left">
                <div className="profile-img">
                  {/* <img src="https://static.pexels.com/photos/21011/pexels-photo-large.jpg"/> */}
                </div>
              </div>
              <div className="search-results profile-teaser-main">
                <Link activeClassName="nav-link" key={index} to={`/browse/?c=${item.entityClass}&v=${item.entity}`}>
                  <div>{item.entity}</div>
                </Link>
                <div className="profile-info">
                  <div className="info"
                    dangerouslySetInnerHTML={{
                      __html: item.snippet
                    }}>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">

              <li className={`page-item${getStatusPreviousPage(pageOffset - 1)}`}>
                <a className="page-link" onClick={goToPage} name="-1" tabIndex="-1">Previous</a>
              </li>

              {/* <li className={`page-item${getStatus(pageOffset)}`}><a onClick={goToPage} name="0" className="page-link" >{pageOffset + 1}</a></li>
              <li className={`page-item${getStatus(pageOffset + 1)}`}><a onClick={goToPage} name="1" className="page-link" >{pageOffset + 2}</a></li>
              <li className={`page-item${getStatus(pageOffset + 2)}`}><a onClick={goToPage} name="2" className="page-link" >{pageOffset + 3}</a></li> */}

              <li className={`page-item${getStatusNextPage(pageOffset + 1)}`}>
                <a className="page-link" onClick={goToPage} name="1">Next</a>
              </li>
            </ul>
          </nav>
        </>
      }
    </div>)

}
