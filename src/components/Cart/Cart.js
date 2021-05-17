import React , {Component} from 'react';
import {connect} from 'react-redux';
import Styles from './Cart.module.css';
import * as actions from '../../store/actions/index';
import PaypalButton from './PaypalButton/PaypalButton';


class Cart extends Component {
	
	render () {

		let items = <h1>Cart is empty</h1>;

		let carts = this.props.cartItems;
		
          if(!this.props.isAuthenticated) {
		carts = []; 
	     }
		
   
      return (
		<div>
        
        <div className={Styles.CartContainer}> 
          
        <div className={Styles.Cart}>
        {carts.map(item => {
        	return ( <div className={Styles.CartContentContainer}>
        		<img className={Styles.Image} src={item.image} />
        		<h5>{item.name}</h5>
        		<div className={Styles.BtnQty}>
        		<button onClick={() => this.props.increment(item.id)}><i class="fas fa-plus"></i></button>
        		<p>{item.qty}</p>
        		
        		
        		 <button onClick={() => this.props.decrement(item.id)}><i class="fas fa-minus"></i></button>
        		 </div>
        		 <button onClick={() => this.props.removeItem(item.id)} >Delete Item</button>

       
         </div>
        )
        })}
         
    </div>
     
          
        <div className={Styles.Checkout}><h1>Cart summary</h1>
        
        <p>Total =  ({this.props.totalQty} items) </p>
           <p>TotalPrice =  £{this.props.totalPrice}</p>
           <PaypalButton total={this.props.totalPrice} />
        </div>
        </div>
         
        
        
        
	
		</div>
		)

	}

	
}

const mapToStateProps = state => {
	     let prices = 0;
	     let carts = state.cart.cart;
	     if(state.auth.token === null) {
	     	carts = [];
	     }
    {carts.map((item) =>  prices += item.price * item.qty
    )};

       let totalQty = 0 ;
       {carts.map((item) => totalQty += item.qty)}
      

	return {
		cartItems : state.cart.cart,
		totalPrice: prices.toFixed(2),
		totalQty : totalQty,
		isAuthenticated: state.auth.token !== null
	}
}
const mapDispatchToProps = dispatch => {
	return {
		adjustTotal: (itemID) => dispatch(actions.adjustTotalPrice(itemID)),
		increment : (itemID) => dispatch(actions.increment(itemID)),
		decrement: (itemID) => dispatch(actions.decrement(itemID)),
		removeItem: (itemID) => dispatch(actions.removeItem(itemID)) 
	}
}

export default connect(mapToStateProps , mapDispatchToProps)(Cart);