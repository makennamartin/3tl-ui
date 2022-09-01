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
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/PlainHeader.js";
import { useHistory } from "react-router-dom";
import * as _ from "lodash";
import { connect } from "react-redux";
import { useEffect, useState } from 'react'

const TaskList = ({ tasks, getTask,tasksLoading }) => {
  const [limit,setlimit] = useState(8)
  useEffect(() => {
    getTask({ page: 0, size: limit });
  }, []);
  return (
    <>
        <Row className="mt-9">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent border-0 row flex-split">
                <h3 className="text-dark thead-light mb-0">Tasks</h3>
                <Button
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Create Task
                    </Button>
              </CardHeader>
              <Table
                className="align-items-center table-light table-flush"
                responsive
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Task Name</th>
                    <th scope="col">Task ID</th>
                    <th scope="col">Identifier</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Description</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className=" text-dark">
                {tasks?.content?.map((it) => (
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
                    <td>67</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                            Sample Purpose
                          </span>
                       
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-warning"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>))}
                  
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      {/* </Container> */}
    </>
  );
};


export default TaskList;
