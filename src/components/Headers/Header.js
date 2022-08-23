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
import { Card, CardBody, CardTitle, CardHeader, Container, Row, Col, Button } from "reactstrap";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar,Pie,Doughnut } from "react-chartjs-2";
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample1Data,
  chartExample2,
} from "variables/charts.js";
import { Link } from "react-router-dom";
import 'assets/css/nonargon.css'

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-royal pb-8 pt-5 pt-md-7">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row className="topcard">
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 topcard">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-4 text-center"
                        >
                          Avg CPU Load
                        </CardTitle>
                      </div>
                      <div className="col justify-content-center">
                        <Bar
                            data={chartExample2.data}
                            options={chartExample2.options}
                            />
                      </div>
                    </Row>
                    {/* <p className="mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 topcard">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-4 text-center"
                        >
                          Memory Utilization
                        </CardTitle>

                      </div>
                      <div className="col justify-content-center">
                            <Line
                            data={chartExample2.data}
                            options={chartExample2.options}
                          />
                        </div>
                    </Row>
                    {/* <p className=" mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                   
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 topcard">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-4 text-center"
                        >
                          Unique Executions
                        </CardTitle>
                        </div>  
                        {/* <div className="text-center align-items-center mt-5 mb-3">
                          <h3>Total: 30GB</h3>
                          <h3>Used: 6GB</h3>
                          <h3>Free: 24GB</h3> */}
                        {/* </div> */}
                        <div className="col justify-content-center">
                        <Bar
                            data={chartExample2.data}
                            options={chartExample2.options}
                            />
                        </div>
                      
                      </Row> 
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0 topcard">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-2 text-center"
                      >Available Credits
                    </CardTitle>    
                  </div>
                  <div className="col">
                    <Pie
                      data={chartExample1.data1}
                      options={chartExample1.options}
                      />
                  </div>
                </Row>
                <Row className="justify-content-between pl-2 pr-2">

                  <p className="text-sm text-muted">20 / 50 credits used</p>
                  <div>
                  <Button className="btn-outline-royal btn-sm mb-0" to="/admin/user-account" tag={Link}>Add More</Button>
                          </div>
 
                </Row>
                {/* <p className=" mb-0 text-muted text-sm justify-content-center">
                  <span className="text-nowrap">20 / 50 credits used <Button className="btn-sm bg-secondary ml-2" to="/admin/user-account" tag={Link}>Add More</Button></span>
                </p>      */}
              </CardBody>
            </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
