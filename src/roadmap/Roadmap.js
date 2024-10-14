import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactFlow, { ReactFlowProvider, Controls } from "react-flow-renderer";
import Drawer from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Checkbox from "@mui/material/Checkbox";
import "react-flow-renderer/dist/style.css";
import { useParams } from "react-router-dom"; // Hook to get URL parameters
import "./Roadmap.css";
import { Divider } from "@mui/material";
const Roadmap = () => {
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State to handle drawer open/close
  const [selectedNodeData, setSelectedNodeData] = useState(null); // State to store selected node data
  const [completedNodes, setCompletedNodes] = useState([]); // State to track completed nodes (checkbox)

  // useEffect(() => {
  //   // Fetch the roadmap by ID
  //   axios
  //     .get(`http://localhost:3200/roadmaps/${id}`)
  //     .then((response) => {
  //       setRoadmaps(response.data); // Set the specific roadmap data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching roadmap:", error);
  //     });
  // }, [id]);


  useEffect(() => {
    // Fetch the roadmap by ID
    axios
      .get(`http://localhost:3200/roadmaps/${id}`)
      .then((response) => {
        const roadmap = response.data; // Single roadmap object
        
        // Parse StringDataToPuplish if it's a string
        if (typeof roadmap.roadmapData === 'string') {
          roadmap.roadmapData = JSON.parse(roadmap.roadmapData);
        }
        
        setRoadmap(roadmap); // Set the fetched and parsed roadmap
      })
      .catch((error) => {
        console.error("Error fetching roadmap:", error);
      });
  }, [id]);


  // Handle node click to open the drawer and display node data
  const handleNodeClick = (event, node) => {
    setSelectedNodeData(node.data); // Set the selected node data
    setDrawerOpen(true); // Open the drawer
  };

  // Handle drawer close
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Handle checkbox toggle
  const handleCheckboxChange = (event, nodeId) => {
    event.stopPropagation(); // Prevent the drawer from opening
    event.preventDefault();
    setCompletedNodes(
      (prevCompleted) =>
        prevCompleted.includes(nodeId)
          ? prevCompleted.filter((id) => id !== nodeId) // Remove node if unchecked
          : [...prevCompleted, nodeId] // Add node if checked
    );
  };

  // Calculate progress as percentage of completed nodes
  const progress = roadmap?.roadmapData?.nodes?.length
    ? (completedNodes.length / roadmap.roadmapData.nodes.length) * 100
    : 0;

  return roadmap ? (
    <div style={{ width: "100%", height: "95vh" }}>
      <h2 style={{ textAlign: "center", margin: "16px 0px" }}>
        {roadmap.roadmapData.roadmapName}
      </h2>
      <p style={{ textAlign: "center" }}>
        {roadmap.roadmapData.roadmapDescription}
      </p>
      <br />

      <ReactFlowProvider>
        <ReactFlow
          nodes={roadmap.roadmapData.nodes.map((node) => ({
            ...node,
            data: {
              ...node.data,
              label: (
                <div style={{ position: "relative" }}>
                  {/* Render the node label */}
                  {node.data.label}

                  {/* Add checkbox in the top right corner of each node */}
                  <Checkbox
                    style={{
                      position: "absolute",
                      top: "-30px",
                      right: "-27px",
                      // backgroundColor: "white", // Background for visibility
                      zIndex: 1000,
                    }}
                    checked={completedNodes.includes(node.id)} // Check if the node is completed
                    onClick={(event) => event.stopPropagation()} // Prevent the drawer from opening
                    onChange={(event) => {
                      event.stopPropagation(); // Prevent the drawer from opening
                      handleCheckboxChange(event, node.id);
                    }}
                  />
                </div>
              ),
            },
          }))}
          edges={roadmap.roadmapData.edges}
          fitView
          style={{ width: "100%", height: "80vh" }}
          onNodeClick={handleNodeClick} // Attach node click handler
        >
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>

      {/* Progress Bar */}
      <div style={{ marginLeft: "16px" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: "300px", height: "20px", borderRadius: 1 }}
        />
        <p>{Math.round(progress)}% Completed</p>
      </div>

      {/* Drawer to display node data */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <div style={{ width: "300px", padding: "16px" }}>
          {selectedNodeData ? (
            <div>
              <h3 style={{ textAlign: "center" }}>{selectedNodeData.title}</h3>
              <p style={{ margin: "16px 0px" }}>
                {selectedNodeData.description}
              </p>

              {/* Videos Section */}
              <Divider textAlign="left" sx={{ mb: 2 }}>
                Videos:
              </Divider>
              <ul>
                {selectedNodeData.links
                  .filter((link) => link.type === "Video")
                  .map((link, index) => (
                    <li key={index}>
                      <span
                        style={{
                          backgroundColor:
                            link.EnOrAr === "Ar" ? "red" : "green",
                          padding: "2px",
                          marginBottom: "25px",
                          borderRadius: "5px",
                          color: "white",
                        }}
                      >
                        {link.EnOrAr}
                      </span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
              </ul>

              {/* Articles Section */}
              <Divider textAlign="left" sx={{ mb: 2 }}>
                Articles:
              </Divider>
              <ul>
                {selectedNodeData.links
                  .filter((link) => link.type === "Article")
                  .map((link, index) => (
                    <li
                      key={index}
                      
                    >
                      <span
                        style={{
                          backgroundColor:
                            link.EnOrAr === "Ar" ? "red" : "green",
                          padding: "2px",
                          marginBottom: "25px",
                          borderRadius: "5px",
                          color: "white",
                        }}
                      >
                        {link.EnOrAr}
                      </span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>No node selected</p>
          )}
        </div>
      </Drawer>
    </div>
  ) : (
    <p>Loading roadmap details...</p>
  );
};

export default Roadmap;
