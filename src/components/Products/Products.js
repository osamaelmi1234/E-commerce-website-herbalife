import React , {Component} from 'react';
import Styles from './Products.module.css';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import Product from './Product/Product'; 



class Products extends Component {
 redirectAuth = () => {
  
    }

    
  
  render() {

    return (
          
          <div className={Styles.Container}>
           <h1>OUR PRODUCTS</h1>
         {this.props.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
        </div>
         
          
      
         
        

    )
  }

} 

const mapStateToProps = state => {

  return {
    isAuthenticated: state.auth.token !== null,
    products : state.cart.products
  }
}

export default connect(mapStateToProps, null)(Products);