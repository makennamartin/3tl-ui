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
import Account from "views/pages/Account.js";
import Register from "views/pages/Register.js";
import Login from "views/pages/Login.js";
import Tables from "views/pages/Tables.js";
import Icons from "views/pages/Icons.js";
import PipelineForm from "views/pages/PipelineForm";
import Workbench from "views/pages/Workbench";
import ManageContainers from "views/pages/ManageContainers";
import PipelinePage from "views/pages/PipelinePage";
import PipelinePage2 from "views/pages/PipelinePage2";
import Gradients from "views/pages/Gradients";



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
    path: "/newpipeline",
    name: "Create 3TL Pipeline 2",
    icon: "ni ni-sound-wave text-orange",
    component: PipelinePage,
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
    name: "Account & Credits",
    icon: "ni ni-money-coins text-royal",
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
  },
  {
    path: "/gradients",
    name: "Gradients 4 Scott",
    icon: "ni ni-palette text-danger",
    component: Gradients,
    layout: "/admin",
  },
];
// ,
//   {
//     path: "/newpipeline",
//     name: "Pipeline2",
//     icon: "ni ni-circle-08 text-danger",
//     component: PipelinePage,
//     layout: "/admin",
//   }
// ,
//    {
//   path: "/managecontainers",
//   name: "Manage Containers",
//   icon: "ni ni-atom text-teal",
//   component: ManageContainers,
//   layout: "/admin",
// },
// {
//   path: "/icons",
//   name: "icons",
//   icon: "ni ni-circle-08 text-danger",
//   component: Icons,
//   layout: "/admin",
// },
export default routes;
