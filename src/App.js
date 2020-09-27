import React  from 'react';
import './App.css';
import {ContextProvider} from './context'
import Form from './views/form.js'
import Submits from './views/submits'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
     
  return (
    <ContextProvider>
        <BrowserRouter>
        <Switch>
						<Route exact path="/">
             <Form/>
						</Route>
						<Route exact path="/submits">
							<Submits/>
						</Route>
        </Switch>
        </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
