//pagination from https://github.com/gifthove/conference-registration/blob/master/conference-registration.ui.web/ClientApp/src/components/registration/RegistrationList.js
import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import TablePagination from '../TablePagination';
import {getSparqlQueryLabel} from '../StringHelper'


export default function QueryResultTable(props) {

  const [currentPage, setCurrentPage] = React.useState(0);
  const data = props.data;

  function renderTableHeaders(row) {
  
    return Object.keys(row).map((key, index) => {
      return <th scope="row" key={"header" + index}>{key.toUpperCase()}</th>
    })
  }
  
  function renderTable(filteredData,headers, pagesCount, handlePageClick, handlePreviousClick, handleNextClick) {

    if (filteredData.length > 0) {
      return (
        <>
          <Table striped id='sparql-result' style={{ tableLayout: 'fixed' }}>
            <tbody>
              {/* header */}
              <tr>
                {renderTableHeaders(headers)}
              </tr>
              {/* rows */}
              {filteredData.map((items, index) => (
                <tr key={"row" + index}>
                  {Object.keys(items).map((element, elindex) => (
                    <td key={"row" + index + "-col" + elindex}>{getSparqlQueryLabel(items[element]["value"].toString(),["http://prokino.uga.edu/prokino#","group"])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <TablePagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            handlePageClick={handlePageClick}
            handlePreviousClick={handlePreviousClick}
            handleNextClick={handleNextClick}
          />
        </>
      )
    }
    else
      return (<div class="alert alert-danger" style={{ width: '100%' }} role="alert">
        No data found!
      </div>)
  }

function handlePageClick(e)
{
  e.preventDefault();
  let selectedPageNumber = parseInt(e.target.innerText);
  setCurrentPage(selectedPageNumber-1);

}
function handlePreviousClick(e)
{
  e.preventDefault();
  setCurrentPage(currentPage-1);
}
  function handleNextClick(e) {
    e.preventDefault();
    setCurrentPage(currentPage+1);

  }
  const pageSize = 10;
  const pagesCount = Math.ceil(data.results.bindings.length / pageSize);
  const headers= data.results.bindings[0];
  const filteredData = data.results.bindings.slice(pageSize*currentPage,pageSize*currentPage+pageSize);
  return renderTable(filteredData, headers, pagesCount, handlePageClick, handlePreviousClick, handleNextClick);
}