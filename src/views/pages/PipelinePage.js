import React, { useEffect, useState } from "react";
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
    Table,
    CardHeader,
    Badge
  } from "reactstrap";
  import AOS from "aos";
  import "aos/dist/aos.css";
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
  import CustomConnectionTarget from "components/Modals/PipelineInputForms/Targets/CustomConnectionTarget";
  import FileTarget from "components/Modals/PipelineInputForms/Targets/FileTarget";



  const datasources = [{db:'Space and Time',img:sxt},{db:'PostgreSQL',img:postgresql},{db:'Mongo DB',img:mongodb}]
  const PipelinePage = () =>{
    const [taskDone, setTaskDone] = useState(false)
    const [sourceDone, setSourceDone] = useState(false)
    const [scriptDone, setScriptDone] = useState(false)
    const [targetDone, setTargetDone] = useState(false)
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);






      return (
        <>
        <Header/>
        
        <div className="pipelinepage bg-gradient-royal">
          <Form>
            <div className="step">
                <div data-aos="flip-up" data-aos-duration="1600">
                    <Card className="step-card glasscard mb-9">
                        <CardHeader className="steptitle space-between">
                            {/* <h5 className="etlLabel">Extract</h5> */}
                            <h1 className="text-muted font-weight-normal">Create a new task or select an existing one.</h1>

                            {taskDone && (
                                // <Badge color="" className="badge-dot mr-4">
                                <div data-aos="flip-up" data-aos-duration="1600">
                                <Button className="btn-sm bg-success text-white" onClick={() => setTaskDone(!taskDone)}><i className="ni ni-check-bold mr-2"/>TASK CREATED</Button>
                           
                            </div>

                            )}
                        </CardHeader>
                        {!taskDone && (
                        <CardBody className="glasscard glass-body">
                            <TaskForm taskDone={taskDone}  setTaskDone={setTaskDone}/>
                            <UncontrolledDropdown name="tasklist" id="tasklist" className="m-2" taskDone={taskDone}  setTaskDone={setTaskDone}>
                            
                                <DropdownToggle caret className="text-muted glasscard">
                                    Existing Task
                                </DropdownToggle>
                                
                                <DropdownMenu value="db1">
                                    <DropdownItem href="#pablo" value="teradata">
                                    Task 1
                                    </DropdownItem>
                                    <DropdownItem href="#pablo" value="teradata">
                                    Task 2
                                    </DropdownItem>
                                    <DropdownItem href="#pablo" value="teradata">
                                    Task 3
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </CardBody>
                        )}
                        {taskDone && (
                            <div>
                        <CardBody className="glasscard glass-body">
                           
                        </CardBody>
                        </div>)}
                    </Card>
                </div>
            </div>
                            
            <div className="step">
                <div data-aos="slide-up" data-aos-duration="2600">
                    <Card className="step-card glasscard ">
                        <CardHeader className="step-title">
                            <div className="space-between">
                            <span className="etlLabel">EXTRACT</span>
                            {sourceDone && (
                                // <Badge color="" className="badge-dot mr-4">
                                <div data-aos="flip-up" data-aos-duration="1600">
                                <Button className="btn-sm bg-success text-white" onClick={() => setSourceDone(!sourceDone)} ><i className="ni ni-check-bold mr-2"/>SOURCE EXTRACTED</Button></div>)
                            }

                            </div>
                            
                            <h1 className="text-muted font-weight-normal">Define a source to extract data from.</h1>
                            
                        </CardHeader>
                        {!sourceDone && (
                        <CardBody className="glasscard glass-body">
                            <CustomConnection sourceDone={sourceDone} setSourceDone={setSourceDone}/>
                            <FileSource sourceDone={sourceDone}  setSourceDone={setSourceDone}/>
                            <div className="db-row">
                                {datasources.map(s =>(
                                    <Col sm="8" lg="3" xl="3">
                                        <Card className="db-card2 mt-3 glasscard" data-aos="fade-right" data-aos-duration="1600" key={s.db}>
                                            <div className="img-container">
                                                <CardImg className="db-img"
                                                alt="..."
                                                src={s.img}
                                                top
                                                />
                                            </div>
                                            <CardFooter className="db-footer glasscard">
                                                <ConnectDB sourceDone={sourceDone} setSourceDone={setSourceDone}/>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                ))}
                                
                                    <Col sm="8" lg="3" xl="3">
                                        <Card className="db-card2 mt-3 glasscard" data-aos="fade-right" data-aos-duration="1600">
                                            <div className="img-container">
                                                <CardImg className="db-img"
                                                alt="..."
                                                src={azure}
                                                top
                                                />
                                            </div>
                                            <CardFooter className="db-footer glasscard">

                                                <UncontrolledDropdown name="azurelist" id="azurelist">
                                                    <DropdownToggle caret className="text-muted btn-sm">
                                                        Services 
                                                    </DropdownToggle> 
                                                    <DropdownMenu value="db1">
                                                        <div><AzureConnectDB sourceDone={sourceDone}  setSourceDone={setSourceDone}/> Blob Storage</div>
                                                        <div><AzureConnectDB sourceDone={sourceDone}  setSourceDone={setSourceDone}/> Event Hubs</div>
                                                        <div><AzureConnectDB sourceDone={sourceDone}  setSourceDone={setSourceDone}/> Cosmos DB</div>
                                                        <div><AzureConnectDB sourceDone={sourceDone}  setSourceDone={setSourceDone}/> Data Warehouse</div>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                            </div>
                        </CardBody>
                        )}
                        {sourceDone && (
                        <CardBody className="glasscard glass-body"></CardBody>
                        )}
                    </Card>
                 </div>
            </div>

            <div className="step">
                <div data-aos="slide-up"data-aos-duration="1600">
                    <Card className="step-card glasscard mt-7">
                        <CardHeader className="steptitle">
                        <div className="space-between">
                            <h5 className="etlLabel">TRANSFORM & COMPUTE</h5>
                            {scriptDone && (
                                // <Badge color="" className="badge-dot mr-4">
                                <div data-aos="flip-up" data-aos-duration="1600">
                                <Button className="btn-sm bg-success text-white" onClick={() => setScriptDone(!scriptDone)}><i className="ni ni-check-bold mr-2"/>SUCCESS</Button>
                           
                            </div>

                            )}
                            </div>
                            <h2 className="text-muted font-weight-normal">Upload scripts or select a template to perform data transformations, defined calculations, or any generic compute process against the input data or choose a template.</h2>
                        </CardHeader>
                        <CardBody className="glasscard glass-body">
                        {!scriptDone && (
                            <>
                            <ScriptForm scriptDone={scriptDone}  setScriptDone={setScriptDone}/>
                            <Button className="text-royal glasscard" onClick={() => setScriptDone(!scriptDone)}>Choose a template</Button>
                            </>
                        )}
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="step">
                <div data-aos="slide-up"data-aos-duration="1600">
                    <Card className="step-card glasscard mt-7">
                        <CardHeader className="steptitle">
                        <div className="space-between">
                            <h5 className="etlLabel">LOAD</h5>
                            {targetDone && (
                                // <Badge color="" className="badge-dot mr-4">
                                <div data-aos="flip-up" data-aos-duration="1600">
                                <Button className="btn-sm bg-success text-white" onClick={() => setTargetDone(!targetDone)}><i className="ni ni-check-bold mr-2"/>SUCCESS</Button>
                           
                            </div>

                            )}
                            </div>
                            <h2 className="text-muted font-weight-normal">Define your target(s) to send the output of consensus.</h2>
                        </CardHeader>
                        <CardBody className="glasscard glass-body">
                        {!targetDone && (
                            <>
                            <CustomConnectionTarget targetDone={targetDone}  setTargetDone={setTargetDone}/>
                            <FileTarget targetDone={targetDone}  setTargetDone={setTargetDone}/>
                            <UncontrolledDropdown name="targetlist" id="targetlist">
                                <DropdownToggle caret className="btn glasscard ml-2 mr-2 text-royal">
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
                            <SmartContractForm targetDone={targetDone} setTargetDone={setTargetDone}/>

                            </>
                        )}
                        </CardBody>
                    </Card>
                </div>
            </div>
            
            






      </Form>

      
      
      

      </div>
      <div className="flex-end mt-6">
        <Button className="bg-success">Save</Button>
        <Button className="bg-royal text-white" to="/admin/workbench" tag={Link}>Start Testing</Button>
      </div>
      
        </>
      );
    }
  
  
  export default PipelinePage;