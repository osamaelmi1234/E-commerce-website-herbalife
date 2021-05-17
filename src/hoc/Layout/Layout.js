import React, {Component} from 'react';
import Styles from './Layout.module.css';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';



class Layout extends Component  {

   render() {
	return (
           <div>
            <NavigationItems/>
            <main className={Styles.Content}>
             {this.props.children}
            </main>

            </div>


		)
}
}



export default Layout 