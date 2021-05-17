import React , {Component} from 'react';
import Styles from './Product.module.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../../store/actions/index';
class Product extends Component {

	render() {

	 let button = <button><Link to="/auth">SignUp/LogIn to purchase</Link></button>;

      if(this.props.isAuthenticated ) {
          button = <button disabled={this.props.itemInCart.find(item => item.id === this.props.productData.id ? true : false)} onClick={() => this.props.addToCart(this.props.productData.id) }>Add to Cart</button> 
      }
     

	return (
          
      <div className={Styles.Product}>
            
      <img className={Styles.Image} src={this.props.productData.image} />
        <div>
        <h2>{this.props.productData.name}</h2>
        <p> {this.props.productData.info}</p>
        <p> Recommended Retail Price £{this.props.productData.price}</p>

         {button}
      </div>
      </div>
      
   
		)
}
}

const mapStateToProps = state => {

  return {
    isAuthenticated: state.auth.token !== null,
    itemInCart: state.cart.cart
}
}

const mapDispatchToProps = dispatch => {
	return {
		addToCart: (itemID) => dispatch(actions.addItem(itemID))
	}
}

export default  connect(mapStateToProps, mapDispatchToProps)(Product)