import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col, InputGroupText,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle} from "reactstrap";

function TaskForm(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const {taskDone, setTaskDone} = props
  async function toggle(){
    setModalOpen(!modalOpen)
    setTaskDone(!taskDone)
  }

  return (

    <>
      <Button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="text-royal glasscard"
      >
        New Task
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
           New Task
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
            <Form>
            <Row>
            <label>Task Name</label>
          <Col md="6" className="center">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="Task Name"
                type="text"
              ></Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
        <label>Description</label>
          <Col md="8" className="center">
            <FormGroup>
              <InputGroup className=" mb-4">
                
                <Input
                  placeholder="Description"
                  type="text"
                ></Input>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
        <label># Containers</label>
          <Col md="3" className="center">
            <FormGroup>
              <InputGroup className=" mb-4">
                
                <Input
                  type="number"
                ></Input>
              </InputGroup>
            </FormGroup>
          </Col>
          </Row>
          <Row>
          <UncontrolledDropdown name="type" id="type" className="m-2">
                <DropdownToggle caret className="text-muted">
                    Type
                </DropdownToggle>
                <DropdownMenu value="db1">
                  <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      Micro-Batch
                  </DropdownItem>
                  <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      Classic Batch
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      Streaming
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown name="numcontainers" id="numcontainers" className="m-2">
                <DropdownToggle caret className="text-muted">
                    # Containers
                </DropdownToggle>
                <DropdownMenu value="db1">
                  <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      3
                  </DropdownItem>
                  <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      4
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      5
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      6
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      7
                    </DropdownItem>
                    <DropdownItem href="#pablo" value="teradata" onClick={e => e.preventDefault()}>
                      8
                    </DropdownItem>
                    
                </DropdownMenu>
              </UncontrolledDropdown>
          </Row>
          <Row>
            <label>Schedule CRON</label>
              <Col md="3" className="center">
                <FormGroup>
                  <InputGroup className="mb-4">
                    <Input
                      placeholder="Schedule CRON (****)"
                      type="text"
                    ></Input>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button" onClick={toggle}>
            Create
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default TaskForm;