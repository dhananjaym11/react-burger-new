import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <Layout>
      <Switch >
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Layout>
  );
}

export default App;