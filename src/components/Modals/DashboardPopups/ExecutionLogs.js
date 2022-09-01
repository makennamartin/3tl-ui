import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter,Badge,Table, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col, InputGroupText} from "reactstrap";

function ExecutionLogs() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="bg-secondary text-muted"
      >
        Execution Logs
      </Button>
      <Modal className="connectmodal modal-lg" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} >
        <div className="modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
           Demo Task Execution Log
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
            <Col>
            <Table
                className="align-items-center table-light table-flush"
                responsive
              >
                <thead className="thead-light text-dark">
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Type</th>
                    <th scope="col">Containers</th>
                    <th scope="col">Last Status</th>
                    <th scope="col">Last Run</th>
                  </tr>
                </thead>
                <tbody className="text-muted bg-secondary">
                  <tr>
                    <th scope="row">Demo Task</th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                           Scheduled
                          </span>
                      </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                          3
                          </span>
                      </div>
                    </td>
                      <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        <Button className="btn-sm" color="success">RUNNING</Button>
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                          8 hours ago
                          </span>
                      </div>
                    </td>
                    
                </tr>
                </tbody>
            </Table>
            <Table
                className="align-items-center table-light table-flush"
                responsive
              >
                <thead className="thead-light text-dark">
                  <tr>
                    <th scope="col">Execution 1</th>
                    {/* <th scope="col"></th>
                    <th scope="col">s</th>
                    <th scope="col">Last Status</th> */}
                  </tr>
                </thead>
                <tbody className="text-muted bg-secondary">
                  <tr>
                    <th scope="row">EXEC 659028</th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        started 22-08-24 09:24:30 UTC
                        </span>
                        </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Still Running
                        </span>
                        </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Total CPU: 168.12
                        </span>
                        </div>
                    </td>
                    </tr>
                    </tbody>
                    </Table>
                    <Table
                className="align-items-center table-light table-flush pl-4 pr-4"
                responsive
              >
                <thead className="thead-light text-dark">
                  <tr>
                    <th scope="col">Container</th>
                    {/* <th scope="col"></th>
                    <th scope="col">s</th>
                    <th scope="col">Last Status</th> */}
                  </tr>
                </thead>
                <tbody className="text-muted bg-secondary">
                  <tr>
                    <th scope="row">CONT ahb354</th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Step: Completed
                        </span>
                        </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Leader: No
                        </span>
                        </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Step CPU: 0.00
                        </span>
                        </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Total CPU: 57.42
                        </span>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">CONT zj6942</th>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Step 3: Loading
                        </span>
                        </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Leader: Yes
                        </span>
                        </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Step CPU: 0.00
                        </span>
                        </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span className="mb-0 text-sm">
                        Total CPU: 57.42
                        </span>
                        </div>
                    </td>
                    </tr>
                    </tbody>
                    </Table>

            
            </Col>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            className="text-muted"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Download
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ExecutionLogs;