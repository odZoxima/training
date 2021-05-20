import {ActionTypes} from "../constants/action-types"

export const setProduct = (product) => {
    return{
        type: ActionTypes.SET_PRODUCT,
        payload: product
    }
}

export const selectedProduct = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (product) => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}