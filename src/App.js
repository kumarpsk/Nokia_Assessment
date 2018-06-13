import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Products from './Products';
import Order from './Order'
import productsData from  './data';

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact render={
                        () => {
                            return ( <Redirect to="/products"/>)
                        }
                    }/>
                    <Route path="/products" render={ (props) => <Products data={productsData} {...props} />}/>
                    <Route path="/Order/:productId/:orderId"
                           render={ (props) => <Order data={productsData} {...props} />}/>
                </Switch>

            </div>
        );
    }
}

export default App;
    