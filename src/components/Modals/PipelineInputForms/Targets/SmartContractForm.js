import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col, InputGroupText} from "reactstrap";

function SmartContractForm(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const {targetDone, setTargetDone} = props
  async function toggle(){
    setModalOpen(!modalOpen)
    setTargetDone(!targetDone)
  }
  return (
    <>
      <Button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="glasscard ml-2 mr-2 text-royal"
      >
        Smart Contract <span className="font-italic">via Chainlink</span>
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
           Load to a Smart Contract
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
            <label>Contract Address</label>
              <Col md="6" className="center">
                <FormGroup>
                  <Input
                    id="exampleFormControlInput1"
                    placeholder="address"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <label>ABI</label>
              <Col md="8" className="center">
                <FormGroup>
                  <InputGroup className=" mb-4">
                    
                    <Input
                      placeholder="ABI"
                      type="text"
                    ></Input>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <label>Function</label>
              <Col md="8" className="center">
                <FormGroup>
                  <InputGroup className=" mb-4">
                    <Input
                      placeholder="Function"
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
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default SmartContractForm;