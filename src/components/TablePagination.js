//source: https://github.com/gifthove/conference-registration/blob/master/conference-registration.ui.web/ClientApp/src/components/common/TablePagination.js
import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";
const MAX_PAGES = 20;
function updatePagesToShow(pagesCount,currentPage)
{

}
const TablePagination = ({
  pagesCount,
  currentPage,
  handlePageClick,
  handlePreviousClick,
  handleNextClick
}) => {
  const MAX_PAGES = 20;
  let pagesToShow = updatePagesToShow(pagesCount,currentPage)

  return (
  <Pagination>
    <PaginationItem disabled={currentPage <= 0}>
      <PaginationLink onClick={handlePreviousClick} previous href="#" />
    </PaginationItem>
  
    {[...Array( Math.min(pagesCount,MAX_PAGES))].map((page, i) => (
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