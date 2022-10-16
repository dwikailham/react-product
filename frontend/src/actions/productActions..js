import axios from "axios";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"

const baseUrl = "http://localhost:5000/products/"

export const getListProduct = () => {
    return (dispatch) => {

        dispatch({
            type: GET_LIST_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios.get(baseUrl)
            .then((res) => {
                console.log("BERHASIL", res.data);
                dispatch({
                    type: GET_LIST_PRODUCT,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })

            }).catch((err) => {
                console.log("ERROR", err);
                dispatch({
                    type: GET_LIST_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err
                    }
                })
            })

    }
}

export const deleteProduct = (id) => {
    return (dispatch) => {

        dispatch({
            type: DELETE_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios.delete(`${baseUrl}${id}`)
            .then((res) => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: {
                        loading: false,
                        data: res?.data,
                        errorMessage: false
                    }
                })

            }).catch((err) => {
                console.log("ERROR", err);
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })

    }
}

export const addProduct = (data) => {
    return (dispatch) => {

        dispatch({
            type: ADD_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios.post(`${baseUrl}`, data)
            .then((res) => {
                dispatch({
                    type: ADD_PRODUCT,
                    payload: {
                        loading: false,
                        data: res?.data,
                        errorMessage: false
                    }
                })

            }).catch((err) => {
                console.log("ERROR", err);
                dispatch({
                    type: ADD_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err
                    }
                })
            })

    }
}

export const updateProduct = (data, id) => {
    return (dispatch) => {

        dispatch({
            type: UPDATE_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios.patch(`${baseUrl}${id}`, data)
            .then((res) => {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: {
                        loading: false,
                        data: res?.data,
                        errorMessage: false
                    }
                })

            }).catch((err) => {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err
                    }
                })
            })

    }
}