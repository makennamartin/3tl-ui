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
  Badge,
  Button,
  Card,
  Col,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/PlainHeader.js";
import EditTask from "components/Modals/PipelineEditForms/EditTask";
import ExecutionLogs from "components/Modals/DashboardPopups/ExecutionLogs";
import { Link } from "react-router-dom";
import * as _ from "lodash";
import { connect } from "react-redux";
import { useEffect,useState } from "react";
import { getPipelines,allPipelines } from "store/Pipelinesaga";

const Tables = ({getPipelines,allPipelines}) => {
  const [limit,setlimit] = useState(8)
  useEffect(() => {
    getPipelines({ page: 0, size: limit });
  }, []);
  
  // useEffect(()=>{
  //   console.log('before get pipelines in useeffect')
  //   getPipelines()
  //   console.log('after get pipelines in useeffect, allpipelines:',allPipelines)
  // },[])
  console.log('allpipelines',allPipelines)
  console.log('getpipelines',getPipelines)
  return (
    <>
      {/* <Header /> */}
      {/* Page content */}
      <Container className="mt--8 bg-gradient-royal" fluid>
        <Row className="center3">
          <div className="mb-5 mb-xl-0 col-xl-10">
            <Card className="shadow glasscard mb-4 mt-2" id="ptable">
              <CardHeader className="border-0 flex-split glasscard-color">
                <h2 className="almost-black font-weight-bold thead-light mb-0"><i className="ni ni-sound-wave text-orange font-weight-bold mr-3"/>3TL Pipelines</h2>
                <Button
                  className="glasscard-color almost-black btn-lg"
                      size="sm"
                      to="/admin/newtask" tag={Link}
                    >
                     Start New Pipeline
                    </Button>
              </CardHeader>
              <div className="table-responsive">
              <Table
                className="align-items-center glasscard-color table-flush"
                responsive
              >
                <thead className="glasscard text-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    {/* <th scope="col">Desc</th> */}
                    {/* <th scope="col">Sources</th>
                    <th scope="col">Scripts</th> */}
                    <th scope="col">Target</th>
                    {/* <th scope="col">Containers</th> */}
                    <th scope="col">Last Status</th>
                    <th scope="col">Last Run</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-muted ">
                {allPipelines.map(( p, i ) => {
          return (
            <tr key={i} className="pipelines">
              <td className="almost-black">{p.name}</td>
              <td>task type</td>
              {/* <td># sources</td>
              <td>{p.scripts}</td> */}
              <td>{p.endPointsType}</td>
              {/* <td>{p.containers}</td> */}
              {p.statusLabel === "Running" && <td><Badge color="" className="badge-dot mr-4">
                        
                        <Button className="btn-sm ni ni-user-run" color="warning"></Button>
                      </Badge></td>}
                      {p.statusLabel === "Completed" && <td><Badge color="" className="badge-dot mr-4">
                        <Button className="btn-sm ni ni-check-bold" color="success"></Button>
                      </Badge></td>}
              <td>{p.statusTime}</td>
              <td>
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn-icon-only text-light"
                  href="#pablo"
                  role="button"
                  size="sm"
                  color="primary"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>  
                  <Col>
                    <EditTask/><br/>

                    <ExecutionLogs/>
                  </Col>
                </DropdownMenu>
              </UncontrolledDropdown>
              </td>
            </tr>
          );
        })}

        


                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </tbody>
              </Table>
              </div>
            </Card>
            {/* </div>
            <div className="mb-5 mb-xl-0 col-xl-10"> */}

            <Card className="shadow glasscard mb-4" id="mtable">
              <CardHeader className="border-0 flex-split glasscard-color">
                <h2 className="text-warning font-weight-bold thead-light mb-0"><i className="ni ni-sound-wave text-orange font-weight-bold mr-3"/>3TL Pipelines</h2>
                <Button
                  className="btn-outline-warning text-warning btn-lg"
                      size="sm"
                      to="/admin/newtask" tag={Link}
                    >
                     Start New Pipeline
                    </Button>
              </CardHeader>
              <div className="table-responsive">
              <Table
                className="align-items-center table-light table-flush"
                responsive
              >
                <thead className="thead-light text-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    {/* <th scope="col">Last Run</th> */}
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-muted bg-secondary">
                {allPipelines.map(( p, i ) => {
          return (
            <tr key={i} className="pipelines">
              <td>{p.name}</td>
              <td>task type</td>
              {p.statusLabel === "Running" && <td><Badge color="" className="badge-dot mr-4">
                        
                        <Button className="btn-sm ni ni-user-run" color="warning"></Button>
                      </Badge></td>}
                      {p.statusLabel === "Completed" && <td><Badge color="" className="badge-dot mr-4">
                        <Button className="btn-sm ni ni-check-bold" color="success"></Button>
                      </Badge></td>}
              {/* <td>{p.statusTime}</td> */}
              <td>
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn-icon-only text-light"
                  href="#pablo"
                  role="button"
                  size="sm"
                  color="primary"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>  
                  <Col>
                    <EditTask/><br/>

                    <ExecutionLogs/>
                  </Col>
                </DropdownMenu>
              </UncontrolledDropdown>
              </td>
            </tr>
          );
        })}
        </tbody>
        </Table>
        </div>
        </Card>
        </div>

{/* 
            <Card className="shadow" id="mtable">
              <CardHeader className="bg-transparent border-0 row flex-split">
                <h2 className="text-warning font-weight-bold thead-light mb-0"><i className="ni ni-sound-wave text-orange font-weight-bold mr-3"/>3TL Pipelines</h2>
                <Button
                  className="btn-outline-warning text-warning btn-lg"
                      size="sm"
                      to="/admin/newtask" tag={Link}
                    >
                     Start New Pipeline
                    </Button>
              </CardHeader>
              <Table
                className="align-items-center table-light table-flush"
                responsive
              >
                <thead className="thead-light text-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Last Status</th>
                    <th scope="col">Last Run</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-muted bg-secondary">
                {allPipelines.map(( p, i ) => {
          return (
            <tr key={i} className="pipelines">
              <td>{p.name}</td>
              <td>task type</td>
              {p.statusLabel === "Running" && <td><Badge color="" className="badge-dot mr-4">
                        
                        <Button className="btn-sm ni ni-user-run" color="warning"></Button>
                      </Badge></td>}
                      {p.statusLabel === "Completed" && <td><Badge color="" className="badge-dot mr-4">
                        <Button className="btn-sm ni ni-check-bold" color="success"></Button>
                      </Badge></td>}
              <td>{p.statusTime}</td>
              <td>
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn-icon-only text-light"
                  href="#pablo"
                  role="button"
                  size="sm"
                  color="primary"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>  
                  <Col>
                    <EditTask/><br/>

                    <ExecutionLogs/>
                  </Col>
                </DropdownMenu>
              </UncontrolledDropdown>
              </td>
            </tr>
            
          );
          
        })}
        </tbody>
        </Table>
        </Card>  */}
      
        </Row>
      </Container>
    </>
  );
};

// export default Tables;
const mapStateToProps = ({ Pipeline = {} ,user}) => {
  const allPipelines = _.get(Pipeline, "allPipelines", []);
  // const memoryLoading = _.get(Pipeline, "memoryLoading", []);

  return { allPipelines };
};

const mapDispatchToProps = (dispatch) => ({
  getPipelines: (data) => dispatch({ type: "getPipelinesCalled", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);


