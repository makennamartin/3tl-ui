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
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import { Pie } from "react-chartjs-2";
// import { ethers } from "ethers";
import ConnectWallet from "components/ConnectWallet";
import Web3 from 'web3'
import eth from '../images/eth2.svg'


const Account = () => {
  const [amount, setAmount] = useState("")
  // const [connected, setisconnected] = useState(false)
  const [address, setAddress] = useState(null)
  const [isConnected, setIsConnected] = useState(false);
  //use state hooks to store current account, default is null
  const [currentAccount, setCurrentAccount] = useState(null);


  const walletLogin = async (provider) => {
    const web3 = new Web3(provider);
    //fetching accounts w help from web3 library helper methods
    const accounts = await web3.eth.getAccounts();

    //if zero accounts found
    if (accounts.length === 0) {
        console.log("Please connect to MetaMask!");
    //if connected and have the account,
    //set to current by using state hooks
    } else if (accounts[0] !== currentAccount) {
        //setting the account fetched to current
        setCurrentAccount(accounts[0]);
        setAddress(accounts[0])
        //setting state to true
        setIsConnected(true);
    }
  };

  return (
    <>
      <Header/>
      {/* Page content */}
      <Container className="bg-gradient-royal flex-center" fluid>
      <Col>
      {/* <p>Recent Activity</p> */}
        <Row>
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 glasscard-color">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase almost-black mb-0"
                    >
                      UNIQUE EXECUTIONS
                    </CardTitle>
                    {/* {isConnected && (<span className="h2 font-weight-bold mb-0">
                      350,897
                    </span>)} */}
                    <span className="h2 font-weight-bold mb-0" style={{ visibility:isConnected ? "visible" : "hidden" }} >22</span>

                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i className="fas fa-chart-bar" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm text-center">
                  <span className="text-success mr-2"  style={{ visibility: !isConnected ? "hidden" :"visible" }}>
                    <i className="fas fa-arrow-up" /> 3.48%
                  </span>{" "}
                  <span className="text-nowrap" style={{ visibility: !isConnected ? "hidden" :"visible" }}>Since last month</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 glasscard-color">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase almost-black mb-0"
                    >
                      Credits Used
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0" style={{ visibility:isConnected ? "visible" : "hidden" }} >34</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                      <i className="ni ni-bold-down" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm text-center">
                  <span className="text-danger mr-2" style={{ visibility: !isConnected ? "hidden" :"visible" }}>
                    <i className="fas fa-arrow-down" /> 3.48%
                  </span>{" "}
                  <span className="text-nowrap" style={{ visibility:!isConnected ? "hidden" : "visible" }}>Since last month</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 glasscard-color">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase almost-black mb-0"
                    >
                      Credits Added
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0" style={{ visibility: !isConnected ? "hidden" :"visible" }}>55</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                      <i className="ni ni-bold-up" />
                    </div>
                  </Col>
                </Row>
                  <p className="mt-3 mb-0 text-muted text-sm text-center">
                    <span className="text-warning mr-2"  style={{ visibility: !isConnected ? "hidden" :"visible" }}>
                      <i className="fas fa-arrow-down" /> 1.10%
                    </span>{" "}
                    <span className="text-nowrap" style={{ visibility: !isConnected ? "hidden" :"visible" }}>Since last month</span>
                  </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="center3">
          <Col lg="8" xl="8">
            <Card className="shadow mb-6 mt-5 account-card glasscard">
              <CardBody>
                <Form>
                
                  <CardHeader className="glasscard-color">
                    <Row className="space-between">
                      <h4 className="almost-black mb-3">
                      Account & Credits
                      </h4>
                      {!isConnected && <ConnectWallet walletLogin={walletLogin} />}
                      {isConnected && (<Button
                        className="btn-neutral btn-icon mb-2"
                        color="default" type="submit"
                      >
                            <span className="ni ni-check-bold">
                              {/* <img
                                alt="..."
                                src={eth}/> */}
                            </span>
                            <span className="btn-inner--text address">{currentAccount}</span>
                            </Button>)}
                    </Row>
      
                    <Row className="mt-5 center3">
                      
                      {/* {!isConnected && (<h4>Connect your wallet to see your credits.</h4>)} */}
                      
                      {isConnected && 
                      <Col lg="12" xl="12">
                        
                        <Card className="p-1 bg-secondary">
                          <Row className="mt-4 space-evenly">
                            <div className="mb-0">
                              <Button className="btn3 bg-dark text-white">
                                <span className="btn-inner--text credits">
                                  <img src={eth} className="eth mr-3 text-white"/>223</span></Button>
                            </div>
                            <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Add Credits"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                              />
                              <Button>Add</Button>
                            </InputGroup>
                          </FormGroup>
                          </Row>
                          
                        </Card>
                        <hr className="my-4" />
                      </Col>
                      }
                    </Row>
                  </CardHeader>
                  
                </Form>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </Col>
      </Container>
    </>
  );
};

export default Account;
