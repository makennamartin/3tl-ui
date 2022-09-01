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
import { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import TaskForm from "components/Modals/PipelineInputForms/TaskForm";
import Header from "components/Headers/PlainHeader.js";
const Workbench = (props) => {

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="bg-white vh-100">
        <Row className="vh-80">
        <Col >
        <div className="text-center p-3 workbench">
            <h2>Testing Environment</h2>
            <UncontrolledDropdown name="tasklist" id="tasklist">

                <DropdownToggle caret className="btn-outline-royal mt-3">
                    Select Pipeline to Test
                </DropdownToggle>
                
                <DropdownMenu value="db1">
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                        Task 1
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                    Task 2
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                    Task 3
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

        </div>
        <div className="text-center mt-9">
            <Button className="bg-warning">Test Run</Button>
            <Button className="bg-success">Deploy</Button>
            <Button className="bg-danger">Abort</Button>

        </div>

        </Col>
        <Col className="bg-dark box">
           
        </Col>

          </Row>
         

      </Container>
    </>
  );
};

export default Workbench;
