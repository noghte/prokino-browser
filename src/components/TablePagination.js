//source: https://github.com/gifthove/conference-registration/blob/master/conference-registration.ui.web/ClientApp/src/components/common/TablePagination.js
import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";
const MAX_PAGES = 20;

const TablePagination = ({
  pagesCount,
  currentPage,
  handlePageClick,
  handlePreviousClick,
  handleNextClick
}) => {
  // const noOfPages = Math.min(pagesCount,MAX_PAGES);
  const range = (start, stop, step) => 
    Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

  function getDisplayPages(currentPage)
  {
    //const pages =  Array.from({length:noOfPages},(v,k)=>k+1)
    if (pagesCount<=MAX_PAGES){
      return [...Array(pagesCount).keys()];
    }
    let start = 0;
    if (currentPage>5)
      start = currentPage - 3;
    const stop = Math.min((pagesCount-currentPage-2)+MAX_PAGES,MAX_PAGES);
    return range(start,stop,1);

  }
  return (
  <Pagination>
    <PaginationItem disabled={currentPage <= 0}>
      <PaginationLink onClick={handlePreviousClick} previous href="#" />
    </PaginationItem>
  
    {getDisplayPages(currentPage).map(i => (
      <PaginationItem active={i === currentPage} key={`page-${i}`}>
        <PaginationLink onClick={e => handlePageClick(e, i)} href="#">
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    ))}

    <PaginationItem disabled={currentPage >= pagesCount - 1}>
      <PaginationLink onClick={handleNextClick} next href="#" />
    </PaginationItem>
  </Pagination>
);}
TablePagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  handlePreviousClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired
};
export default TablePagination;