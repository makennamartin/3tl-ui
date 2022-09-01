import React from "react";
// reactstrap components
import {
    FormGroup,
    Form,
    Row,
    Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    Button,
    CardFooter,
    Collapse,
    Table
  } from "reactstrap";
  import { Link } from "react-router-dom";
  import Header from "components/Headers/PlainHeader.js";
  import snowflake from '../images/snowflake.png'
  import sxt from '../images/blacksxt.png'
  import mongodb from '../images/mongodb.png'
  import mysql from '../images/mysql.png'
  import azure from '../images/azure.png'
  import postgresql from '../images/postgresql.png'
  import 'assets/css/nonargon.css'
  import TaskForm from "components/Modals/PipelineInputForms/TaskForm";
  import ConnectDB from "components/Modals/PipelineInputForms/Sources/ConnectDB";
  import CustomConnection from "components/Modals/PipelineInputForms/Sources/CustomConnection";
  import ScriptForm from "components/Modals/PipelineInputForms/Scripts/ScriptForm";
  import SmartContractForm from "components/Modals/PipelineInputForms/Targets/SmartContractForm";
  import EditScript from "components/Modals/PipelineEditForms/EditScript";
  import EditSource from "components/Modals/PipelineEditForms/EditSource";
  import AzureConnectDB from "components/Modals/PipelineInputForms/Sources/AzureConnectDB";
  import FileSource from "components/Modals/PipelineInputForms/Sources/FileSource";

  const datasources = [{db:'Space and Time',img:sxt},{db:'PostgreSQL',img:postgresql},{db:'Mongo DB',img:mongodb}]
  const PipelineForm = (props) =>{

      return (
        <>
        <Header/>
          <Form>
            <Row>
                {/* <div className="center3 mt-4">
                  <Col>
                  <TaskForm/>
                  <UncontrolledDropdown name="tasklist" id="tasklist">
                
                    <DropdownToggle caret>
                        Existing Task
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
                  </Col>

                </div> */}
            </Row>
            <Row className="section mt-3">
            <div className="center3">
              <Col>
                <Row className="space-between">
                <h2 className="etlLabel2">Step 1: Extract</h2>
                <Row>
                  <div className="m-2">
                    <TaskForm/>
                  </div>
                  <UncontrolledDropdown name="tasklist" id="tasklist" className="m-2">
                
                    <DropdownToggle caret className="text-muted">
                        Existing Task
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
                  </Row>
                </Row>
                <h3 className="text-muted">Define a source to extract data from.</h3>
              </Col>
            </div>
              <div className="center3">
                <CustomConnection/>
                <FileSource/>
                </div>
              <Col>
              
                <div className="center3 mt-4 mb-2">
                  <h3 className="font-weight-bold text-muted">Or connect to a database:</h3>
                </div>
  
                <FormGroup>  
                  <Row>
                    {datasources.map(s =>(
                    <Col lg="6" xl="3">
                      <Card className="db-card m-3" key={s.db}>
                          <div className="img-container">
                            <CardImg className="db-img"
                              alt="..."
                              src={s.img}
                              top
                            />
                            </div>
                        <CardFooter className="db-footer">
                          {/* form pop up to connect to selected db */}
                          <ConnectDB/>
                        </CardFooter>
                      </Card>
                    </Col>
                    ))}
                    <Col lg="6" xl="3">
                      <Card className="db-card m-3">
                          <div className="img-container">
                            <CardImg className="db-img"
                              alt="..."
                              src={azure}
                              top
                            />
                            </div>
                        <CardFooter>
                          {/* dropdown for azure services */}
                            <UncontrolledDropdown name="azurelist" id="azurelist">
                              <DropdownToggle caret className="text-muted">
                                  Services 
                              </DropdownToggle> 
                              <DropdownMenu value="db1">
                                   <div><AzureConnectDB/> Blob Storage</div>
                                   <div><AzureConnectDB/> Event Hubs</div>
                                   <div><AzureConnectDB/> Cosmos DB</div>
                                   <div><AzureConnectDB/> Data Warehouse</div>
                              </DropdownMenu>
                          </UncontrolledDropdown>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              {/* display errors if unable to connect */}
            </Row>
          
          {/* list all sources for the selected/created task */}
          <Table
                className="align-items-center table-light table-flush"
                responsive
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Source Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Task ID</th>
                    <th scope="col">Description</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className=" text-dark">
                  <tr>
                    <th scope="row">
                      <span className="mb-0 text-sm text-muted">
                        applestockdata
                      </span>
                    </th>
                    <th scope="row">
                      <span className="mb-0 text-sm text-muted">
                        JSON
                      </span>
                    </th>
                    <th scope="row">
                      <span className="mb-0 text-sm text-muted">
                        5568
                      </span>
                    </th>
                    <th scope="row">
                      <span className="mb-0 text-sm text-muted">
                        Apple Stock Data
                      </span>
                    </th>
                    <th scope="row">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light bg-royal"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                              <EditSource/>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="mb-0 text-sm text-muted">
                        whalecommunities
                      </span>
                    </th>
                    <th scope="row">
                      <span className="mb-0 text-sm text-muted">
                        CSV
                      </span>
                    </th>
                    <th scope="row">
                      <span className="mb-0 text-sm text-muted">
                        5568
                      </span>
                    </th>
                    <th scope="row">
                      <span className="mb-0 text-sm text-muted">
                        Whale Community Data
                      </span>
                    </th>
                    <th scope="row">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light bg-royal"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <EditSource/>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </th>
                  </tr>
              </tbody>
          </Table>
          <Row className="section mt-3">
            <div className=" center3">
              <Col>
                <Row className="space-between">
                  <h2 className="etlLabel">Step 2: Transform & Compute</h2>
                  <div>
                    <ScriptForm/>
                  </div>
                </Row>
                <h3 className="text-muted">Upload scripts to perform data transformations, defined calculations, or any generic compute process against the input data.</h3>
              </Col>
            </div>
            {/* list all scripts for the selected/created task */}
            <Table
                className="align-items-center table-light table-flush"
                responsive
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Script Name</th>
                    <th scope="col">Task ID</th>
                    <th scope="col">Location (eg. :Repo URL, local path)</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <th scope="row">
                          <span className="mb-0 text-sm">
                            Pyscript1
                          </span>
                    </th>
                    <th scope="row">
                          <span className="mb-0 text-sm">
                           2642
                          </span>
                    </th>
                    <th scope="row">
                          <span className="mb-0 text-sm">
                           'scripts/script1.py'
                          </span>
                    </th>
                    <th scope="row">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light bg-royal"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color="bg-royal"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
          
                              <EditScript/>
                 
                          </DropdownMenu>
                        </UncontrolledDropdown>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                          <span className="mb-0 text-sm">
                            Pyscript2
                          </span>
                    </th>
                    <th scope="row">
                          <span className="mb-0 text-sm">
                           2699
                          </span>
                    </th>
                    <th scope="row">
                          <span className="mb-0 text-sm">
                           'scripts/script2.py'
                          </span>
                    </th>
                    <th scope="row">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light bg-royal"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color="bg-royal"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                              <EditScript/>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                    </th>
                  </tr>
                </tbody>
              </Table>
            </Row>
           <Row>
            <div className="center3">
              <Col>
                <h2 className="etlLabel">Step 3: Load</h2>
                <h3 className="text-muted">Define your target(s) to send the output of consensus.</h3>
              </Col>
            </div>
            <div className=" center3">
              <div>
                <CustomConnection/>
              </div>
              <div>
                <FileSource/>
              </div>
              <UncontrolledDropdown name="targetlist" id="targetlist">
                <DropdownToggle caret className="btn btn-secondary ml-2 mr-2 text-royal">
                    Database
                </DropdownToggle>
                
                <DropdownMenu value="db1">
                    <DropdownItem href="#pablo" value="sxt" onClick={e => e.preventDefault()}>
                    Space and Time
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="mongodb" onClick={e => e.preventDefault()}>
                    Mongo DB
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="sql" onClick={e => e.preventDefault()}>
                    MySQL
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="snowflake" onClick={e => e.preventDefault()}>
                    PostgreSQL
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                    Teradata
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="snowflake" onClick={e => e.preventDefault()}>
                    Snowflake
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="snowflake" onClick={e => e.preventDefault()}>
                    Google BigQuery
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="snowflake" onClick={e => e.preventDefault()}>
                    Amazon Redshift
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="snowflake" onClick={e => e.preventDefault()}>
                    Oracle
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <div>
              <SmartContractForm/>
            </div>
          </div>
        </Row>
      </Form>
      <div className="flex-end">
        <Button className="bg-success">Save</Button>
        <Button className="bg-royal text-white" to="/admin/workbench" tag={Link}>Start Testing</Button>
      </div>
        </>
      );
    }
  
  
  export default PipelineForm;