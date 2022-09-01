
import React,{ useState ,useEffect,useRef} from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Table,
  Container,
  DropdownToggle,
  Col
} from "reactstrap";
import Header from "components/Headers/PlainHeader.js";
// import Graph from 'react-graph-network';
import { GraphCanvas,circular2d, useSelection,darkTheme,simpleNodesColors } from 'reagraph';
import ForceGraph2D from 'react-force-graph-2d';


//page to show each tasks containers (and the containers stats such as what step it's on)
//through a node network graph on the left 
//and the outputs on the right
const ManageContainers = () => {
  const graphRef = useRef()
  const { selections, onNodeClick, onCanvasClick } = useSelection({
    ref: graphRef,
    nodes: nodes,
    edges: edges
  });

  const myTheme = {

  canvas: {
    background: '#fff',
    fog: '#fff'
  },
  node: {
    fill: '#7CA0AB',
    activeFill: '#1DE9AC',
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.2,
    label: {
      color: '#2A6475',
      stroke: '#fff',
      activeColor: '#1DE9AC'
    }
  }
  }
  

  // const data = {
    const nodes= [
      {id: "1"},
      {id: "2"},
      {id: "3"},
      {id: "4"},
      {id: "5"}
    ]
    const edges =[{source: "1", target: "5",id: '1-5', label: '1-5'},{source: "2", target: "4", id: '2-4', label: '2-4'}]
    const data = {
      nodes:[
        {id: "1",label:'1'},
        {id: "2",label:'2'},
        {id: "3",label:'3'},
        {id: "4",label:'4'},
        {id: "5",label:'5'}
      ],
      edges:[{source: "1", target: "5",id: '1-5', label: '1-5'},{source: "2", target: "4", id: '2-4', label: '2-4'}]
      
    }
    // {"source": "PXACjDxmR", "target": "HkqEDLvxE"},
    // {"source": "kuVISwh7w", "target": "PXACjDxmR"},
    // {"source": "UIEjvLJMd", "target": "PXACjDxmR"},
    // {"source": "UIEjvLJMd", "target": "011jVS4rb"}
    //]
  // };

//  const drawGraph = () => {
//  const cy = cytoscape({
//   container: graphRef.current,
//   elements: data
//   })
//  }

//  useEffect(() => {
//   drawGraph()
//  }, [])


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="bg-gradient-royal">
        <div className="flex-row vh-80">
          <div className="flex-col">
            <div className="center3">
            <Col lg="10" xl="10">
            <Card>
              <CardHeader id="g1">
              <div>
            <GraphCanvas ref={graphRef} disabled={true} labelType='nodes' layout={circular2d} selections={selections} nodes={nodes} defaultNodeSize="16" edges={[]} />
            </div>

              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
            </Col>
              {/* <h2>Manage Containers</h2> */}
              {/* <ForceGraph2D graphData={data} enableZoomInteraction={false} backgroundColor="green" width={400} height={500} nodeAutoColorBy="id" nodeRelSize="10" id="graph"/> */}
            </div>
          </div>
          <div className="bg-dark flex-col">
          {/* <div ref={graphRef} style={{width: '100%', height: '80vh'}}></div> */}
          {/* <ReactCytoscape containerID="cy" 
    elements={this.getElements()} 
    cyRef={(cy) => { this.cy = cy; console.log(this.cy) }} 
    cytoscapeOptions={{wheelSensitivity: 0.1}}
    layout={{name: 'dagre'}} /> */}
            {/* <ForceGraph2D graphData={{nodes,edges}}/> */}
            
            
            
          </div>

        </div>
        
      </Container>
    </>
  );
};

export default ManageContainers;
