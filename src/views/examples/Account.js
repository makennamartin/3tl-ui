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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import { Pie } from "react-chartjs-2";

const Account = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7 flex-center" fluid>
        <Row>
          <Col>
            <Card className="bg-secondary shadow mb-4 account-card">
              {/* <CardHeader className="bg-secondary border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0 text-white">Account & Billing</h3>
                  </Col>
                  
                </Row>
              </CardHeader> */}
              <CardBody>
                <Form>
                
          
          <h6 className="heading-small text-muted mb-4">
            Add Credits
          </h6>
          <Row className="justify-content-center">
                    <Card className="bg-secondary shadow mb-4">
              <CardHeader className="bg-white border-0">
              <Row className="align-items-center justify-content-center">
                    <Button className="bg-royal text-white" >Connect Wallet</Button>
                      <Button class="btn btn-success text-white" data-toggle="modal" data-target="#exampleModal" 
                      onClick={(e) => e.preventDefault()}
                      >
                      Add Funds
                      </Button>
                </Row>
              </CardHeader>
              <CardBody>
                    <Row>
                      <Pie
                        data={chartExample1.data1}
                        options={chartExample1.options}
                        /> 
                    </Row>
                    <p className=" mb-0 text-muted text-sm">
                      
                      <span className="text-nowrap">20 / 50 credits used</span>
                    </p>
                    
              </CardBody>
              
              </Card>
                    </Row>
                  
          
                  
                  
                  <div className="pl-lg-4">
                  <hr className="my-4" />
                    
                    
                      
                  </div>
                  
                </Form>
                {/* <Col className="text-right" xs="12">
                      <Button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" color="primary"
                      onClick={(e) => e.preventDefault()}
                      size="sm">
                      Save
                      </Button>
                  </Col> */}
              </CardBody>
            </Card>
            </Col>
          
          </Row>
      </Container>
    </>
  );
};

export default Account;
