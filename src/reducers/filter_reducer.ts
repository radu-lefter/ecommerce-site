// import { LOAD_PRODUCTS } from '../actions'

enum ActionKind {
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

const filter_reducer = (state: State, action: Action) => {
  if (action.type === ActionKind.LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer