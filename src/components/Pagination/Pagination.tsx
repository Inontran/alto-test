import React from 'react';
import ReactPaginate from 'react-paginate';

import PaginationProps from './PaginationProps';
import styles from './Pagination.module.scss';

class Pagination extends React.PureComponent<PaginationProps> {
  render() {
    const {
      pageCount = 0,
      currentPage = 1,
    } = this.props;

    if (pageCount > 0) {
      return (
        <div className = { styles.Pagination }>
          <ReactPaginate
            pageRangeDisplayed = {4}
            marginPagesDisplayed = {0}
            pageCount = {pageCount}
            initialPage = {currentPage - 1}
            forcePage = {currentPage - 1}
            pageClassName = { styles.BtnWrapper }
            pageLinkClassName = { styles.Number }
            previousLabel = {'Назад'}
            previousClassName = { styles.BtnWrapper }
            previousLinkClassName = { styles.BackBtn }
            nextLabel = {'Вперед'}
            nextClassName = { styles.BtnWrapper }
            nextLinkClassName = { styles.ForwardBtn }
            disabledClassName = { styles.BtnWrapper_disabled }
            breakLabel = '...'
            breakClassName = { styles.BtnWrapper }
            breakLinkClassName = { styles.Number }
            containerClassName = { styles.Wrapper }
            activeClassName = { styles.BtnWrapper_current }
            renderOnZeroPageCount = {() => { return null; }}
            // disableInitialCallback = {true}
            onPageChange = { this.handlerPaginationChange }
          />
        </div>
      );
    } else {
      return null;
    }
  }

  private handlerPaginationChange = (selectedItem: {selected: number}) => {
    if (this.props.onPageChange) {
      this.props.onPageChange(selectedItem.selected);
    }
  }
}

export default Pagination;
