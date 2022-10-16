import { GET_LIST_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } from "../../actions/productActions."

const initialState = {
    getProductLoading: false,
    getProductData: false,
    getProductErrorMessage: false,

    deleteProductLoading: false,
    deleteProductData: false,
    deleteProductErrorMessage: false,

    addProductLoading: false,
    addProductData: false,
    addProductErrorMessage: false,

    updateProductLoading: false,
    updateProductData: false,
    updateProductErrorMessage: false,
}

const product = (state = initialState, action) => {

    switch (action.type) {

        case GET_LIST_PRODUCT:
            return {
                ...state,
                getProductLoading: action.payload.loading,
                getProductData: action.payload.data,
                getProductErrorMessage: action.payload.errorMessage
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProductLoading: action.payload.loading,
                deleteProductData: action.payload.data,
                deleteProductErrorMessage: action.payload.errorMessage
            }

        case ADD_PRODUCT:
            return {
                ...state,
                addProductLoading: action.payload.loading,
                addProductData: action.payload.data,
                addProductErrorMessage: action.payload.errorMessage
            }

        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProductLoading: action.payload.loading,
                updateProductData: action.payload.data,
                updateProductErrorMessage: action.payload.errorMessage
            }

        default:
            return state
    }
}

export default product