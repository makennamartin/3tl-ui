import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col, InputGroupText} from "reactstrap";

function CustomConnection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="bg-secondary ml-2 mr-2 text-royal"
      >
        Connect to an API
      </Button>
      <Modal className="connectmodal" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className="modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
           Custom Connection
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
                placeholder="API Endpoint"
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
                  placeholder="API Key"
                  type="text"
                ></Input>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
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
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Connect and Extract
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default CustomConnection;