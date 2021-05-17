import React , {Component} from 'react';
import Styles from './Auth.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux'; 
import Spinner from '../../components/Spinner/Spinner';
import {Redirect} from 'react-router-dom';


class Auth extends Component {

	state = {
		inputs : {
		email : {
			value: '',
			id:'email'
		} ,
		password : {
			value:'',
			id:'password'
		} 
		
	}, isSignUp:true
}

	inputChangedHandler = (event , id) => {
		const updatedInputs = {
			...this.state.inputs,
			[id] : {
				...this.state.inputs[id],
				value:event.target.value
			}
			
		};
		this.setState({inputs:updatedInputs})
	} 
	switchAuthModeHandler = () => {
   		this.setState(prevState => {
   			return {isSignUp: !prevState.isSignUp}
   		})
   	}

   	submitHandler = (event) => {
   		event.preventDefault();
   		this.props.onAuth(this.state.inputs.email.value, this.state.inputs.password.value , this.state.isSignUp)
   	}


   	

	render () {
		let spinner = null;

		if(this.props.loading) {
         spinner = (<Spinner/>)
		}
		let authRedirect = null;

		if(this.props.isAuthenticated) {
			authRedirect = <Redirect to="/" />
		}


		return (

           <div className={Styles.Auth}> 
            <form onSubmit={this.submitHandler}>
            {spinner}
            {authRedirect}
             
             <input type="email" placeHolder="Your Email"  onChange={(event) => this.inputChangedHandler(event , this.state.inputs.email.id)}/>
             <input type="password" placeHolder="Your Password" onChange={(event) => this.inputChangedHandler(event , this.state.inputs.password.id)}/> 
                   <br/><br/><br/>
              <button>Submit </button>
              <br/><br/>
               </form>
              <button onClick={this.switchAuthModeHandler} >Switch to {this.state.isSignUp ? 'SIGNIN' :'SINGUP'}</button> 

              </div>
			)
	}
}

const mapStateToProps = (state) => {
return {
	loading:state.auth.loading,
	isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email,password,isSignUp) => dispatch(actions.auth(email,password, isSignUp))
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Auth)