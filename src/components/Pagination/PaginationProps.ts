interface PaginationProps {
  /**
   * Количество страниц.
   * @default 0
   */
  pageCount?: number,

  /**
   * Текущая выбранная страница.
   * @default 1
   */
  currentPage?: number,

  onPageChange?: (selectedPage: number) => void,
}

export default PaginationProps;
