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
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/PlainHeader.js";
  import React, {useState,useEffect} from 'react'
  import AOS from "aos";
  import "aos/dist/aos.css";

  
  const Gradients = () => {
    let gradients = [
      "color bg-gradient-bg mb-2 p-4 space-evenly",
      "color bg-gradient-bg2 mb-2 p-4 space-evenly",
      "color bg-gradient-bgv mb-2 p-4 space-evenly",
      "color bg-gradient-royal mb-2 p-4 space-evenly",
      "color bg-gradient-info mb-2 p-4 space-evenly",
      "color bg-gradient-blue4 mb-2 p-4 space-evenly",
      "color bg-gradient-blue5 mb-2 p-4 space-evenly",
      "color bg-gradient-blue2 mb-2 p-4 space-evenly",
      "color bg-gradient-2 mb-2 p-4 space-evenly",
      "color bg-gradient-blue3 mb-2 p-4 space-evenly",
      "color bg-gradient-green1 mb-2 p-4 space-evenly",
      "color bg-gradient-green2 mb-2 p-4 space-evenly",
      "color bg-gradient-green4 mb-2 p-4 space-evenly",
      "color bg-gradient-green3 mb-2 p-4 space-evenly",
      "color bg-darkmode mb-2 p-4 space-evenly"
    ]
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    
    return (
      <>
        <Header/>
        <Container id="gradientpage" className="text-center" fluid>
          <h1>Gradients</h1>
          {/* <div> */}
          {gradients.map(gr =>(
            <Row className={gr}  data-aos="slide-up" data-aos-duration="1000">
              <Card className="card-stats mb-4 mb-xl-0 glasscard">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-dark mb-0"
                        >
                          Test Card
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="ni ni-bold-up" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              <Card className="card-stats mb-4 mb-xl-0 glasscard-color">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Test Card
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="ni ni-bold-up" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
                <Card className="card-stats mb-4 mb-xl-0 glasscard">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-white mb-0"
                        >
                          Test Card
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="ni ni-bold-up" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
            </Row>
          ))}
          {/* </div> */}
        </Container>
      </>
    );
  };
  
  export default Gradients;
  