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
import Header from "components/Headers/Header2.js";
import EditTask from "components/Modals/EditTask";
import { Link } from "react-router-dom";

const Tables = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Page content */}
      <Container className="mt--8">
        <Row className="mt-9">
          <div className="col">
            <Card className="shadow">
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
                    <th scope="col">Schedule CRON</th>
                    {/* <th scope="col">Desc</th> */}
                    <th scope="col">Sources</th>
                    <th scope="col">Scripts</th>
                    <th scope="col">Target</th>
                    <th scope="col">Containers</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-muted bg-secondary">
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Demo Task 1
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                           ****
                          </span>
                       
                      </div>
                    </td>
                    {/* <td>67412</td>
                    <td>
                      <span className="mb-0 text-xs">
                            Snowflake to SC
                          </span>
                    </td> */}
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                           2
                          </span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">4</span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">Smart Contract</span>
                      </div>
                    </td>
                    <td>
                    <span className="mr-2">2</span>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        <Button className="btn-sm" color="warning">PAUSED</Button>
                      </Badge>
                    </td>
                    <td className="text-right">
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
                      
                            <EditTask/>
                        
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            See Details
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            className="text-danger"
                          >
                            Abort
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Demo Task 2
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                           ****
                          </span>
                      </div>
                    </td>
                    <td>59</td>
                    <td>
                      6
                    </td>
                    <td>
                      Space and Time
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">1</span>
                        
                      </div>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        <Button className="btn-sm" color="success">ACTIVE</Button>
                      </Badge>
                    </td>
                    <td className="text-right">
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
                        <EditTask/>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            See Details
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            className="text-danger"
                          >
                            Abort
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Demo Task 3</span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                           ****
                          </span>
                      </div>
                    </td>
                    <td>7</td>
                    <td>
                      8
                    </td>
                    <td>
                      MySQL
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">8</span>
                      </div>
                    </td>
                    <td>
                    <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        <Button className="btn-sm" color="danger">ABORTED</Button>
                      </Badge>
                    </td>
                    <td className="text-right">
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
                        <EditTask/>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            See Details
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Abort
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Demo Task 4
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                           ****
                          </span>
                      </div>
                    </td>
                    <td>21</td>
                    <td>
                      5
                    </td>
                    <td>
                      Snowflake
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">2</span>
                      </div>
                    </td>
                    <td>
                    <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        <Button className="btn-sm" color="success">ACTIVE</Button>
                      </Badge>
                    </td>
                    <td className="text-right">
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
                        <EditTask/>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            See Details
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            className="text-danger"
                          >
                            Abort
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Demo Task 5
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                           ****
                          </span>
                      </div>
                    </td>
                    <td>6</td>
                    <td>
                      7
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">Smart Contract</span> 
                      </div>
                    </td>
                    <td>
                      1
                    </td>
                    <td>
                    <Badge color="success" className="badge-dot mr-4">
                        <i className="bg-success" />
                        <Button className="btn-sm" color="success">ACTIVE</Button>
                      </Badge>
                    </td>
                    <td className="text-right">
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
                        <EditTask/>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            See Details
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Abort
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>

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
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;

