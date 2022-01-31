import { productsAPI } from '../api/api';

const TOGGLE_APP_PRELOADER = 'TOGGLE_APP_PRELOADER';
const UPDATE_PRODUCTS_DATA = 'UPDATE_PRODUCTS_DATA';

const initialState = {
  showAppPreloder: false,
  products: [],
  totalCountProducts: 0,
} as AppGlobalState;

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_APP_PRELOADER:
      return {
        ...state,
        showAppPreloder: action.showAppPreloder as boolean,
      }
      break;

    case UPDATE_PRODUCTS_DATA:
      return {
        ...state,
        totalCountProducts: action.totalCountProducts as number,
        products: action.products as ProductData[],
      }
  
    default:
      break;
  }

  return state;
}

const toggleAppPreloderAC = (showAppPreloder: boolean) => {
  return {
    type: TOGGLE_APP_PRELOADER,
    showAppPreloder: showAppPreloder,
  }
};

const updateProductsDataAC = (serverData: any) => {
  return {
    type: UPDATE_PRODUCTS_DATA,
    totalCountProducts: serverData.totalCount,
    products: serverData.products as ProductData[],
  }
}

const updateProductsTC = (skipFirstProducts?: number) => async (dispatch: Function) => {
  dispatch(toggleAppPreloderAC(true));

  const response = await productsAPI.getProducts(skipFirstProducts);
  if (response.statusText === 'OK') {
    dispatch(updateProductsDataAC(response.data));
  }

  dispatch(toggleAppPreloderAC(false));
}

export {
  toggleAppPreloderAC,
  updateProductsTC,
}

export default appReducer;
