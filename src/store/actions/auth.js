import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	}
}

export const authSuccess = (token, userID) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken : token,
		userID:userID
	};
}

export const authFail = (error) => {
	return {
		type:actionTypes.AUTH_FAIL,
		error:error
	}
}

export const checkAuthTimeout = expirationTime => {
    return  dispatch => {
    	setTimeout( () => {
           dispatch(logout())
    	}, expirationTime * 1000)
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userID');
    

	return {
		type: actionTypes.AUTH_LOGOUT
	}
}


export const auth = (email, password, isSignUp) => {
	return dispatch => {

	dispatch(authStart());
	
	const authData = {
		email:email,
		password:password,
		returnSecureToken : true
	}
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBO-f1lzpqgIuhSm3Ebsfoif8IFXakYP3Y";
    if (!isSignUp) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBO-f1lzpqgIuhSm3Ebsfoif8IFXakYP3Y";
    }

	axios.post(url, authData)
	.then( response => {
		console.log(response);
		dispatch(authSuccess(response.data.idToken,response.data.localId));
		 dispatch(checkAuthTimeout(response.data.expiresIn));
	})
	.catch(error => {
		console.log(error);
		dispatch(authFail(error))
	})
}
}