import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col, InputGroupText} from "reactstrap";

function ConnectDB(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const {sourceDone, setSourceDone} = props
  async function toggle(){
    setModalOpen(!modalOpen)
    setSourceDone(!sourceDone)
  }

  return (
    <>
      <Button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="bg-secondary btn-sm text-muted"
      >
        Connect
      </Button>
      <Modal className="connectmodal" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className="modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
           Connect to DB
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
                {/* <label>Host</label> */}
              <Col md="6" className="left">
                <FormGroup>
                  <Input
                    id="exampleFormControlInput1"
                    placeholder="Host"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
            {/* <label>Port</label> */}
              <Col md="8" className="left">
                <FormGroup>
                  <InputGroup className=" mb-4">
                    <Input
                      placeholder="Port"
                      type="text"
                    ></Input>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
            {/* <label>Username</label> */}
              <Col md="8" className="left">
                <FormGroup>
                  <InputGroup className=" mb-4">
                    <Input
                      placeholder="Username"
                      type="text"
                    ></Input>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
            {/* <label>Password</label> */}
              <Col md="8" className="left">
                <FormGroup>
                  <InputGroup className=" mb-4">
                    <Input
                      placeholder="Password"
                      type="text"
                    ></Input>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
            {/* <label>Port</label> */}
              <Col md="8" className="left">
                <FormGroup>
                  <InputGroup className=" mb-4">
                    <Input
                      placeholder="Source Name"
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
            className="text-muted"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button" onClick={toggle}>
            Connect and Extract
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ConnectDB;