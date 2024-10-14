import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const AllRoadmaps = () => {
  // const [nodes, setNodes] = useState([]);
  const navigate = useNavigate();
  const [roadmaps, setRoadmaps] = useState([]);


  // useEffect(() => {
  //   axios.get("http://localhost:3200/roadmaps")
  //     .then((response) => {
  //       setNodes(response.data); // Adjusted to fit the JSON structure
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching Roadmaps:", error);
  //     });
  // }, []);

  useEffect(() => {
    // Fetch all roadmaps from the JSON server
    axios
      .get("http://localhost:3200/roadmaps")
      .then((response) => {
        // Assuming response.data is an array of roadmaps
        const parsedRoadmaps = response.data.map((roadmap) => {
          // Parse StringDataToPublish from JSON string
          if (typeof roadmap.roadmapData === 'string') {
            roadmap.roadmapData = JSON.parse(roadmap.roadmapData);
          }
          return roadmap;
        });
        
        setRoadmaps(parsedRoadmaps); // Set the fetched and parsed roadmaps
        console.log(parsedRoadmaps)

      })
      .catch((error) => {
        console.error("Error fetching roadmaps:", error);
      });
  }, []);

  const handleNodeClick = (id, roadmapData) => {
    navigate(`/details/${id}`, { state: roadmapData });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3200/roadmaps/${id}`)
      .then(() => {
        console.log("Roadmap deleted successfully.");
        
        // Update local state to remove the deleted node
        setRoadmaps((prevNodes) => prevNodes.filter((node) => node.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting roadmap:", error);
      });
  };

  return (
    <div>
      <h1>All Roadmaps</h1>
      <ul>
        {roadmaps.map((roadmap) => (
          <li key={roadmap.id}>
            <button onClick={() => handleNodeClick(roadmap.id,roadmap.roadmapData)}>
              {roadmap.roadmapData.roadmapName}
            </button>
            <IconButton aria-label="delete" onClick={() => handleDelete(roadmap.id)}>
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllRoadmaps;
