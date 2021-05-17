import * as actionTypes from './actionTypes';
import axios from 'axios';



export const addItem = (itemID) => {
	return {
		type: actionTypes.ADD_ITEM , 
		id : itemID
	}
}

export const removeItem = (itemID) => {
	return {
		type: actionTypes.REMOVE_ITEM , 
		id : itemID
	}
}


export const adjustQty = (itemID, value) => {
	return {
		type: actionTypes.ADJUST_QTY , 
		id : itemID,
		qty:value
	}
}

export const adjustTotalPrice = (itemID) => {
	return {
		type: actionTypes.ADJUST_TOTALPRICE , 
		id : itemID
		
	}
}

export const increment = (itemID) => {
	return {
		type: actionTypes.INCREMENT,
		id:itemID
	}
}

export const decrement = (itemID) => {
	return {
		type: actionTypes.DECREMENT,
		id : itemID
	}
}
	export const clearCart = () => {
		return {
			type : actionTypes.CLEAR_CART
		}
	}
