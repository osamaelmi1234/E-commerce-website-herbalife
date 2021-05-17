import logo from './logo.svg';
import './App.css';
import Products from  '../src/components/Products/Products';
import Cart from '../src/components/Cart/Cart';
import Layout from './hoc/Layout/Layout';
import {Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

import {useState} from 'react';

function App() {


	

	
  return (
  	
    <div>
        <Layout>
       <Route exact path="/"  render={() => <Products></Products>} />
       <Route exact path="/auth" component={Auth}/>
       <Route exact path="/logout" component={Logout}/>
       <Route exact path="/cart" render={() =>  <Cart/> } />
       
         </Layout>
     
    </div>
    
  );
}

export default App;
