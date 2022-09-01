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
import { useEffect } from "react";
import * as _ from "lodash";
import { connect } from "react-redux";

const Header = ({Getmemoryusage,memoryUsage, memoryLoading}) => {
  useEffect(()=>{   
    Getmemoryusage()
  },[])

  return (
    <>
      <div className="header bg-gradient-royal pb-8 pt-5 pt-md-6">
        <Container fluid>
          <div className="header-body mt-3">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 glasscard-color">
                  <CardBody>
                    <Row className="row-sm">
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase almost-black mb-4 text-center"
                        >
                          CPU Load
                        </CardTitle>
                      </div>
                      <div className="col justify-content-center">
                        <Bar
                            data={chartExample2.data}
                            options={chartExample2.options}
                            />
                      </div>
                      <div className="text-right mr-2 ">
                  <Button className="btn-outline-royal btn-sm hide" to="/admin/user-account" tag={Link}>Add More</Button>
                  </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 glasscard-color">
                  <CardBody>
                    <Row className="row-sm">
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase almost-black mb-4 text-center"
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
                        <div className="text-right mr-2 hide">
                  <Button className="btn-outline-royal btn-sm" to="/admin/user-account" tag={Link}>Add More</Button>
                  </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 glasscard-color">
                  <CardBody>
                    <Row className="row-sm">
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase almost-black mb-4 text-center"
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
                        <div className="text-right mr-2 hide">
                  <Button className="btn-outline-royal btn-sm" to="/admin/user-account" tag={Link}>Add More</Button>
                  </div>
                      
                      </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0 glasscard-color">
              <CardBody>
                <Row className="row-sm">
                  <div className="col">
                    <CardTitle
                      tag="h4"
                      className="text-uppercase almost-black mb-2 text-center"
                      >Available Credits
                    </CardTitle>    
                  </div>
                  <div className="col justify-content-center">
                    <Pie
                      data={chartExample1.data1}
                      options={chartExample1.options}
                      />
                  </div>
                  <div className="text-right m-2">
                  <Button className="almost-black glasscard-color btn-sm" to="/admin/user-account" tag={Link}>Add More</Button>
                  </div>
                </Row>
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

const mapStateToProps = ({ Pipeline = {} ,user}) => {
  const memoryUsage = _.get(Pipeline, "memoryUsage", []);
  const memoryLoading = _.get(Pipeline, "memoryLoading", []);

  return { memoryUsage, memoryLoading };
};

const mapDispatchToProps = (dispatch) => ({
  Getmemoryusage: (data) => dispatch({ type: "GetmemoryusageCalled", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
