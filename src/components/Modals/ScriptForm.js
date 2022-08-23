import React,{useRef,useState} from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col, InputGroupText} from "reactstrap";

function ScriptForm(props) {
  const [modalOpen, setModalOpen] = React.useState(false);

  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
        className="bg-royal text-white pb-2 pt-2 pr-4 pl-4 mt-3"
      >
        Upload Script
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
           Upload Script
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
              {/* <label>Script Name</label> */}
              <Col md="6" className="center">
                <FormGroup>
                  <Input
                    id="exampleFormControlInput1"
                    placeholder="Script Name"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
          {/* <label>Task ID</label> */}
              <Col md="8" className="center">
                <FormGroup>
                  <InputGroup className=" mb-4">
                    <Input
                      placeholder="Task ID"
                      type="text"
                    ></Input>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
          {/* <label>Location (eg. :Repo URL, local path)</label> */}
            <Col md="8" className="center">
              <FormGroup>
                <InputGroup className=" mb-4">
                  <Input
                    placeholder="Location (eg. :Repo URL, local path)"
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
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
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ScriptForm;