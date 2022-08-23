import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col, InputGroupText} from "reactstrap";

function TaskForm() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="bg-royal text-white"
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
          <Button color="primary" type="button">
            Create
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default TaskForm;