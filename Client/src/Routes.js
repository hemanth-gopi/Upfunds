// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Login from './presentation/LoginPage/login'
import RegisterSuccess from './presentation/LoginPage/RegisterSuccess'
import { ThemeProvider } from "@chakra-ui/core";
import Theme from './utils/theme';
// import "./App.css";
// import "./scss/common.scss";

const history = createBrowserHistory();

// eslint-disable-next-line react/prefer-stateless-function
class Routes extends Component {
  render() {
    console.log(this.props);

   
    return (
      <Router histor={history}>
        <ThemeProvider theme={Theme}>

          <div className="routes">
            <Route exact path="/login" component={Login} />

            <Route path="/register" component={Login} />

            {/* <Route exact path="/register/success" component={RegisterSuccess} /> */}

            <Route exact path="/" component={Login} />

          </div>

        </ThemeProvider>
      </Router>
    );
  }
}

export default connect(store => ({ store }))(Routes);
