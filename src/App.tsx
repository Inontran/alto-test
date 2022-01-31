import React from 'react';
import { connect } from 'react-redux';

import { updateProductsTC } from './redux/app-reducer';
import CardProduct from './components/CardProduct/CardProduct';
import Pagination from './components/Pagination/Pagination';
import Preloader from './components/Preloader/Preloader';

import styles from './App.module.scss';

interface AppProps {
  showAppPreloder: boolean,
  totalCountProducts: number,
  products: ProductData[],
  getProducts: (skipFirstProducts?: number) => void,
  countProductsOnPage: number,
}

class App extends React.PureComponent<AppProps> {
  constructor (props: AppProps) {
    super(props);
  }

  render () {
    const {
      showAppPreloder,
      totalCountProducts = 0,
      products = [],
      countProductsOnPage,
    } = this.props;

    return (
      <div className = { styles.App }>
        <div className = { styles.Container }>
          {
            // showAppPreloder && <Preloader />
          }
          <section className = { styles.CardList }>
            {
              products.map((product: ProductData) => {
                const {
                  availability,
                  color,
                  id,
                  image_url,
                  name,
                  price,
                  short_desc,
                } = product;

                return <div 
                  className = { styles.CardWrapper }
                  key = { id }
                >
                  <CardProduct
                    title = {name}
                    color = {color}
                    availability = {availability}
                    image = {image_url.replace('https://', 'http://')}
                    description = {short_desc}
                    price = {price}
                  />
                </div>
              })
            }
          </section>
  
          <div className = { styles.PaginationWrapper }>
            <Pagination
              pageCount = { totalCountProducts / countProductsOnPage }
              onPageChange = { this.handlerPaginationChange }
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getProducts();
  }

  private handlerPaginationChange = (selectedPage: number) => {
    this.props.getProducts(this.props.countProductsOnPage * selectedPage);
  }
}

const mapStateToProps = (state: any) => ({
  showAppPreloder: state.app.showAppPreloder as boolean,
  products: state.app.products as ProductData[],
  totalCountProducts: state.app.totalCountProducts as number,
  countProductsOnPage: 4,
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getProducts: (skipFirstProducts?: number) => {
      dispatch(updateProductsTC(skipFirstProducts));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
