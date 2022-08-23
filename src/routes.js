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
import Index from "views/Index.js";
import Account from "views/examples/Account.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import TaskList from "views/examples/TaskList.js";
import FullTaskTable from "views/examples/FullTaskTable";
import PipelineForm from "views/examples/PipelineForm";
import Workbench from "views/examples/Workbench";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/newtask",
    name: "Create 3TL Pipeline",
    icon: "ni ni-sound-wave text-orange",
    component: PipelineForm,
    layout: "/admin",
  },
  {
    path: "/workbench",
    name: "Workbench",
    icon: "ni ni-atom text-teal",
    component: Workbench,
    layout: "/admin",
  },
  {
    path: "/user-account",
    name: "Account & Billing",
    icon: "ni ni-credit-card text-royal",
    component: Account,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-single-02 text-success",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-danger",
    component: Register,
    layout: "/auth",
  }
];
export default routes;
