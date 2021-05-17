import React , {Component} from 'react';
import Styles from './NavigationItems.module.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 

class NavigationItems extends Component {


   render() {
   let authenticate= (<li> <Link to="/logout"> Logout </Link> </li>);



	if(this.props.token === null && this.props.userID === null) {
		authenticate = (<li> <Link to="/auth"> Sign in </Link> </li>);
	}


   

  return ( 

        <div className={Styles.NavigationItems}>
        <li><Link to='/'><p className={Styles.White}>Home</p></Link></li>
        <li><Link to ='/cart'><p>My Cart</p></Link></li>
          {authenticate}

        </div>

		)
}
}


const mapStateToProps = (state) => {
return {
	token:state.auth.token,
	userID:state.auth.userID
	
  }
}



export default connect(mapStateToProps , null)(NavigationItems)