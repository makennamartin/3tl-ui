
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
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import React, {useState,useEffect} from 'react'

const CreditsHeader = (isConnected) => {
    const [getConnected, setGetConnected] = useState(false)
    console.log('proops connected',isConnected)
    useEffect(()=>{
        if(isConnected){
            console.log('getconnected')
            setGetConnected(true)
        }else{
            setGetConnected(false)
        }
    },[])
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-7">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          UNIQUE EXECUTIONS
                        </CardTitle>
                        {getConnected && (<span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>)}

                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    {getConnected && <p className="mt-3 mb-3 text-muted text-sm">
                      <span className="text-success mr-2" >
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>}
                    {!getConnected && ''}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Credits Used
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0" style={{ visibility:getConnected ? "visible" : "hidden" }} >2,356</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-3 text-muted text-sm">
                      <span className="text-danger mr-2" style={{ visibility: !getConnected ? "hidden" :"visible" }}>
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap" style={{ visibility:!getConnected ? "hidden" : "visible" }}>Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Credits Added
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-3 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
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

export default CreditsHeader;