import React from 'react';
import './styles/index.css';
import './styles/components/login_form.css';
import './styles/components/header.css';
import './styles/components/login_herobanner.css';
import './styles/components/examples.css';
import './styles/components/c__girl.css';
import './styles/components/footer.css';
import './styles/components/Cart.css';
import './styles/pages/register__section.css';
import './styles/pages/ProductsDetails.css';
import './styles/pages/SellerDetails.css';
import './styles/pages/Dashboard.css';
import './styles/pages/SellerProducts.css';
import './styles/pages/SellerSells.css';
import './styles/pages/FinishPayment.css';
import './styles/pages/ShopDetails.css';
import './styles/components/Product.css'
import './styles/sections/PromotionsSection.css'
import './styles/sections/Sellers.css'
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductRegistration from './pages/ProductRegistration';
import SellerSells from './pages/SellerSells';
import SellerDetails from './pages/SellerDetails';
import ShopDetails from './pages/ShopDetails';
import SellerProducts from './pages/SellerProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import UserShops from './pages/UserShops';
import FinishPayment from './pages/FinishPayment'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />}/>
          <Route exact path="/dashboard"render={(props) => <Dashboard {...props} />}/>
          <Route exact path="/new_product"render={(props) => <ProductRegistration {...props} />}/>
          <Route path="/register"render={(props) => <Register {...props} />}/>
          <Route path="/home" render={(props) => <Home {...props} />}/>
          <Route path="/finish"render={(props) => <FinishPayment {...props} />}/>
          <Route exact path="/my_sells" render={(props) => <SellerSells {...props} />}/>
          <Route exact path="/my_shopping" render={(props) => <UserShops {...props} />}/>
          <Route exact path="/my_products"render={(props) => <SellerProducts {...props} />}/>
          <Route exact path="/products/:id"render={(props) => <SellerDetails {...props} />}/>
          <Route path="/user_sells/:id"render={(props) => <ShopDetails {...props} />}/>
        </Switch>
      </Router>
  </React.StrictMode>
);
