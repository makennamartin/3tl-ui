/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import Login from "views/pages/Login.js";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/login" exact component={Login} />
//           <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//           <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
//           <Redirect from="/" to="/admin/index" />
//         </Switch>
//       </BrowserRouter>
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
