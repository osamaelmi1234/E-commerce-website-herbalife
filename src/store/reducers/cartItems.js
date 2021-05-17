import * as actionTypes from '../actions/actionTypes';


const initialState = {
	products: [
     {
      id:'1',
      name:'Formula 1 Savoury Meal Replacement Mushroom and Herb 550g',
      price:34.16,
      image:"//assets.herbalifenutrition.com/content/dam/regional/emea/en_gb/herbalife-nutrition/product-images/092K-uk-f1-savoury-mushroom-550g.jpg",
      info: "Treat yourself to the rich, smooth and creamy taste of Mushroom & Herb flavour. It contains high-quality protein, key vitamins and minerals, fibre, the sumptuous taste of mushrooms, sweet onion, refreshing herb and garlic with no added sugar."
     },
     {
      id:'2',
      name:'Formula 1 Free-From Protein Shake Raspberry and White Chocolate 500g',
      price:30.86,
      image:"//assets.herbalifenutrition.com/content/dam/regional/emea/en_gb/herbalife-nutrition/product-images/4469-UK-F1-Raspberry-White-Choc-500g.jpg",
      info:"Our Formula 1 Free From shake comes in a delicious Raspberry & White Chocolate flavour and is made from vegan sourced ingredients and pea protein to help support the maintenance and growth of muscle mass. It is a shake made to complement your lifestyle and nutritional needs. Formula 1 Free From is easy to prepare and has a deliciously creamy taste. "
     },
     {
      id:'3',
      name:'Formula 1 Protein Shake Smooth Chocolate 550',
      price:30.86,
      image:"//assets.herbalifenutrition.com/content/dam/regional/emea/en_gb/herbalife-nutrition/product-images/4468_UK_Formula1_Smooth_Chocolate.jpg",
      info:"Want a healthy meal that tastes great, is nutritious and quick to make? Meet Formula 1 Smooth Chocolate: the pioneering Herbalife Nutrition product.It is made from vegan sourced ingredients and is rich in protein, which supports the maintenance and growth of muscle mass."
     },
     {
      id:'4',
      name:'Formula 1 Protein Shake Banana Cream 550g',
      price:30.86,
      image:"//assets.herbalifenutrition.com/content/dam/regional/emea/en_gb/herbalife-nutrition/product-images/4462_UK_F1-Banana-Cream.jpg",
      info:"Want a healthy meal that tastes great, is nutritious and quick to make? Meet Formula 1 Banana Cream: the pioneering Herbalife Nutrition product.It is made from vegan sourced ingredients and is rich in protein, which supports the maintenance and growth of muscle mass."
     },
     {
      id:'5',
      name:'Formula 1 Protein Shake Mint & Chocolate 550g',
      price:30.86,
      image:"//assets.herbalifenutrition.com/content/dam/regional/emea/en_gb/herbalife-nutrition/product-images/4471_UK_Formula1-Shake-Mint-Chocolate.jpg",
      info:"Want a healthy meal that tastes great, is nutritious and quick to make? Meet Formula 1 Mint & Chocolate: the pioneering Herbalife Nutrition product. It is made from vegan sourced ingredients and is rich in protein, which supports the maintenance and growth of muscle mass."
     }

  ],
  cart: [],
  totalPrice:null 
}


const reducer = (state = initialState , action) => {
	switch(action.type) {

		case actionTypes.ADD_ITEM :
    // get the items data fromthe products array
     const item = state.products.find(product => product.id === action.id)
    // check if item is already in the cart
    const inCart = state.cart.find((item) => 
      item.id === action.id ? true : false
    );
		return  {
      ...state,
      cart: inCart ? state.cart.map(item => item.id === action.id ? {...item, qty:item.qty + 1} : item) : [...state.cart , {...item, qty:1}]
    }
		

		case actionTypes.REMOVE_ITEM: 

		return  {
      ...state,
      cart: state.cart.filter(item => item.id !== action.id)
    }
		
    case actionTypes.ADJUST_QTY: 

    return {
      ...state,
       cart:state.cart.map(item => item.id === action.id ? {...item, qty:action.qty} :item)
    }

    case actionTypes.ADJUST_TOTALPRICE: 
          let prices = 0;
    state.cart.map((item) => { 
      
      prices += item.price * item.qty;
    
    });
    return  {
      ...state,
      totalPrice:prices
    }

    case actionTypes.INCREMENT:
  
    return {
      ...state,
      cart: state.cart.map(item => item.id === action.id ? {...item, qty: item.qty + 1 } : item)
    }

    case actionTypes.DECREMENT: 
    return {
      ...state,
      cart:state.cart.map(item => item.id === action.id ? {...item, qty:item.qty !== 1 ? item.qty - 1 : 1} : item)
    }

    case actionTypes.CLEAR_CART:
    return {
      ...state,
      cart:[]
    }

		
		default:  return state
	}
}

export default reducer