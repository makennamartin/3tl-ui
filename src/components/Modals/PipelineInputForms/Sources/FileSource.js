import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input, InputGroup, InputGroupAddon, Row, Col, InputGroupText} from "reactstrap";

function FileSource(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const {sourceDone, setSourceDone} = props
  async function toggle(){
    setModalOpen(!modalOpen)
    setSourceDone(!sourceDone)
  }

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
        className="ml-2 mr-2 text-royal glasscard"
      >
        <i className="ni ni-cloud-upload-96 mr-2"/>
        Upload a File
      </Button>
      <Modal className="connectmodal" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className="modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
           Data Source File
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
          <Button color="primary" type="button" onClick={toggle}>
            Connect and Extract
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default FileSource;