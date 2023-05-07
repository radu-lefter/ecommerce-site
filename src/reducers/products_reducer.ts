// import {
//   GET_PRODUCTS_BEGIN,
//   GET_PRODUCTS_SUCCESS,
//   GET_PRODUCTS_ERROR,
//   GET_SINGLE_PRODUCT_BEGIN,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_ERROR,
// } from '../actions';

enum ActionKind {
  GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
  GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN',
  GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS',
  GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
}

interface Action {
    type: ActionKind;
    payload: Product[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  featured: boolean;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
}

interface State {
  products_loading: boolean;
  products_error: boolean;
  products: Product[];
  featured_product: Product[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: Product;
}

const products_reducer = (state: State, action: Action) => {
  if (action.type === ActionKind.GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === ActionKind.GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === ActionKind.GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === ActionKind.GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === ActionKind.GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === ActionKind.GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
