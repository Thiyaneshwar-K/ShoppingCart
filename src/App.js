import React from 'react'
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Cart from './Cart';
import Products from './Products';

export default function App(props) {
    

    return (
        <>
        
            <Router>
            
                <Switch>
                    <Route path="/" exact component={Products}></Route>
                    <Route path="/Cart" exact component={Cart}></Route>
                </Switch>
            </Router>
               
        </>
    )
}

