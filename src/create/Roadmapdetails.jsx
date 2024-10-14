// const handleCreate = () => {
//   // Save values to local storage
//   localStorage.setItem("roadmapName", roadmapName);
//   localStorage.setItem("roadmapDescription", roadmapDescription);
//   localStorage.setItem("roadmapImageUrl", imageUrl);

//   // Navigate to /create
//   navigate("/create");
// };

// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import { Box, Button, Stack } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function RoadmapDetails() {
//   const [roadmapName, setRoadmapName] = useState("");
//   const [roadmapDescription, setRoadmapDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const navigate = useNavigate();

//   const handleCreate = () => {

//     // Navigate to /create
//     navigate("/create");
//   };

//   return (
//     <Box sx={{ width: "80%", m: "auto", mt: 3 }}>
//       <Stack direction={"column"} alignItems={"center"} >

//         <Box>
//           <label className="roadmapTitle">Roadmap Title</label><br/>
//           <TextField
//             id="outlined-basic"
//             variant="outlined"
//             value={roadmapName}
//             onChange={(e) => setRoadmapName(e.target.value)}
//             sx={{mt:2}}
//           />
//         </Box>

//         <Box sx={{my:3}}>
//           <label className="roadmapDescription">Roadmap Description</label><br/>
//           <TextField
//             id="outlined-multiline-flexible"
//             multiline
//             value={roadmapDescription}
//             onChange={(e) => setRoadmapDescription(e.target.value)}
//             sx={{mt:2}}
//           />
//         </Box>

//         <Box sx={{ my: 3 }}>
//           <label className="roadmapImageUrl">Image URL</label><br/>
//           <TextField
//             id="outlined-image-url"
//             variant="outlined"
//             placeholder="Paste image URL here"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             sx={{ mt: 2, width: "100%" }}
//           />
//         </Box>

//         {imageUrl && (
//           <Box sx={{ mt: 2 }}>
//             <img
//               src={imageUrl}
//               alt="Preview"
//               width="200"
//               style={{ display: "block", margin: "auto" }}
//             />
//           </Box>
//         )}

//         <Button
//           variant="contained"
//           onClick={handleCreate}
//           sx={{ width: "200px" , display: "block", m:"auto"}}
//         >
//           Create
//         </Button>

//       </Stack>
//     </Box>
//   );
// }


























// الكود ده شغال بيعرضلي الاسم والصورة والتفاصيل بتاع الرود ماب اقدر اعدل عليها بس التعديل مش بيتحفظ
// شغالة وبتعرض النودز والايدج زي الفل continue

// import React, { useContext, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import { Box, Button, Stack } from "@mui/material";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { RoadmapContext } from "./RoadmapContext";
// import { useEdgesState, useNodesState } from "@xyflow/react";

// export default function RoadmapDetails() {
//   const {
//     roadmapName,
//     setRoadmapName,
//     roadmapDescription,
//     setRoadmapDescription,
//     imageUrl,
//     setImageUrl,
//   } = useContext(RoadmapContext);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { id } = useParams();

//   const [nodes, setNodes] = useNodesState([]);
//   const [edges, setEdges] = useEdgesState([]);

//   const handleCreate = () => {
//     // Navigate to /create
//     navigate("/create");
//   };

//   const handleContinueClick = (id) => {
//     console.log("Navigating to /create with ID:", id);
//     navigate(`/create/${id}`);
// };

//     useEffect(() => {
//     if (location.state) {
//       const { roadmapName, roadmapDescription, imageUrl, nodes, edges} = location.state;
//       setRoadmapName(roadmapName || "");
//       setRoadmapDescription(roadmapDescription || "");
//       setImageUrl(imageUrl || "");
//       setNodes(nodes || [])
//       setEdges(edges|| [])
//     }
//   }, [location.state, setRoadmapName, setRoadmapDescription, setImageUrl,setNodes, setEdges]);

//   const isCreatePath = location.pathname === "/details";
//   const isUpdatePath = location.pathname.startsWith("/details/");

//   return (
//     <Box sx={{ width: "80%", m: "auto", mt: 3 }}>
//       <Stack direction={"column"} alignItems={"center"}>
//         <Box>
//           <label className="roadmapTitle">Roadmap Title</label>
//           <br />
//           <TextField
//             id="outlined-basic"
//             variant="outlined"
//             value={roadmapName}
//             onChange={(e) => setRoadmapName(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//         </Box>

//         <Box sx={{ my: 3 }}>
//           <label className="roadmapDescription">Roadmap Description</label>
//           <br />
//           <TextField
//             id="outlined-multiline-flexible"
//             multiline
//             value={roadmapDescription}
//             onChange={(e) => setRoadmapDescription(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//         </Box>

//         <Box sx={{ my: 3 }}>
//           <label className="roadmapImageUrl">Image URL</label>
//           <br />
//           <TextField
//             id="outlined-image-url"
//             variant="outlined"
//             placeholder="Paste image URL here"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             sx={{ mt: 2, width: "100%" }}
//           />
//         </Box>

//         {imageUrl && (
//           <Box sx={{ mt: 2 }}>
//             <img
//               src={imageUrl}
//               alt="Preview"
//               width="200"
//               style={{ display: "block", margin: "auto" }}
//             />
//           </Box>
//         )}
//         {isCreatePath && (
//           <Button
//             variant="contained"
//             onClick={handleCreate}
//             sx={{ width: "200px", display: "block", m: "auto" }}
//           >
//             Create
//           </Button>
//         )}

//         {isUpdatePath && (
//           <Button
//             onClick={() => handleContinueClick(id)}
//             variant="contained"
//             sx={{ my: 2, cursor: "pointer" }}
//           >
//             Continue
//           </Button>
//         )}

//       </Stack>
//     </Box>
//   );
// }




















//  update ده جميل وبيعمل
// import React, { useContext, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import { Box, Button, Stack } from "@mui/material";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { RoadmapContext } from "./RoadmapContext";
// import axios from "axios"; // Import axios or fetch as preferred
// import { useEdgesState, useNodesState } from "@xyflow/react";

// export default function RoadmapDetails() {
//   const {
//     roadmapName,
//     setRoadmapName,
//     roadmapDescription,
//     setRoadmapDescription,
//     imageUrl,
//     setImageUrl,
//   } = useContext(RoadmapContext);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { id } = useParams();
//   const [nodes, setNodes] = useNodesState([]);
//   const [edges, setEdges] = useEdgesState([]);

//   // const updateRoadmap = async () => {
//   //   try {
//   //     // Update the roadmap data on the JSON server
//   //     await axios.put(`http://localhost:3200/roadmaps/${id}`, {
//   //       dataToPublish: {
//   //         roadmapName,
//   //         roadmapDescription,
//   //         imageUrl,
//   //         nodes: nodes, // Include the nodes
//   //         edges: edges, // Include the edges
//   //       },
//   //     });
//   //     console.log("Roadmap updated successfully.");
//   //   } catch (error) {
//   //     console.error("Error updating roadmap:", error);
//   //   }
//   // };



//   const updateRoadmap = async () => {
//     try {
//       // Convert dataToPublish to a JSON string
//       const parsedRoadmap = JSON.stringify({
//         roadmapName,
//         roadmapDescription,
//         imageUrl,
//         nodes: nodes, // Include the nodes
//         edges: edges, // Include the edges
//       });
  
//       // Update the roadmap data on the JSON server with stringified data
//       await axios.put(`http://localhost:3200/roadmaps/${id}`, {
//         roadmapData: parsedRoadmap,
//       });
      
//       console.log("Roadmap updated successfully.");
//     } catch (error) {
//       console.error("Error updating roadmap:", error);
//     }
//   };

//   const handleContinueClick = async () => {
//     // First, save the updated data to the server
//     await updateRoadmap();
//     // Then, navigate to /create
//     navigate(`/create/${id}`);
//   };

//   useEffect(() => {
//     if (location.state) {
//       const { roadmapName, roadmapDescription, imageUrl, nodes, edges } =
//         location.state;
//       setRoadmapName(roadmapName || "");
//       setRoadmapDescription(roadmapDescription || "");
//       setImageUrl(imageUrl || "");
//       setNodes(nodes || []);
//       setEdges(edges || []);
//     }
//   }, [
//     location.state,
//     setRoadmapName,
//     setRoadmapDescription,
//     setImageUrl,
//     setNodes,
//     setEdges,
//   ]);

//   const isCreatePath = location.pathname === "/details";
//   const isUpdatePath = location.pathname.startsWith("/details/");

//   return (
//     <Box sx={{ width: "80%", m: "auto", mt: 3 }}>
//       <Stack direction={"column"} alignItems={"center"}>


//         <Box>
//           <label className="roadmapTitle">Roadmap Title</label>
//           <br />
//           <TextField
//             id="outlined-basic"
//             variant="outlined"
//             value={roadmapName}
//             onChange={(e) => setRoadmapName(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//         </Box>

//         <Box sx={{ my: 3 }}>
//           <label className="roadmapDescription">Roadmap Description</label>
//           <br />
//           <TextField
//             id="outlined-multiline-flexible"
//             multiline
//             value={roadmapDescription}
//             onChange={(e) => setRoadmapDescription(e.target.value)}
//             sx={{ mt: 2 }}
//           />
//         </Box>

//         <Box sx={{ my: 3 }}>
//           <label className="roadmapImageUrl">Image URL</label>
//           <br />
//           <TextField
//             id="outlined-image-url"
//             variant="outlined"
//             placeholder="Paste image URL here"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             sx={{ mt: 2, width: "100%" }}
//           />
//         </Box>

//         {imageUrl && (
//           <Box sx={{ mt: 2 }}>
//             <img
//               src={imageUrl}
//               alt="Preview"
//               width="200"
//               style={{ display: "block", margin: "auto" }}
//             />
//           </Box>
//         )}

//         {isCreatePath && (
//           <Button
//             variant="contained"
//             onClick={() => navigate("/create")}
//             sx={{ width: "200px", display: "block", m: "auto" }}
//           >
//             Create
//           </Button>
//         )}

//         {isUpdatePath && (
//           <Button
//             onClick={handleContinueClick}
//             variant="contained"
//             sx={{ my: 2, cursor: "pointer" }}
//           >
//             Continue
//           </Button>
//         )}
//       </Stack>
//     </Box>
//   );
// }


















import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RoadmapContext } from "./RoadmapContext";
import axios from "axios";
import { useEdgesState, useNodesState } from "@xyflow/react";

export default function RoadmapDetails() {
  const {
    roadmapCategory, // Access the category from context
    setRoadmapCategory, // Access the category setter from context
    roadmapName,
    setRoadmapName,
    roadmapDescription,
    setRoadmapDescription,
    imageUrl,
    setImageUrl,
  } = useContext(RoadmapContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  const updateRoadmap = async () => {
    try {
      const parsedRoadmap = JSON.stringify({
        roadmapCategory, // Include the category in the update
        roadmapName,
        roadmapDescription,
        imageUrl,
        nodes,
        edges,
      });

      await axios.put(`http://localhost:3200/roadmaps/${id}`, {
        roadmapData: parsedRoadmap,
      });

      console.log("Roadmap updated successfully.");
    } catch (error) {
      console.error("Error updating roadmap:", error);
    }
  };

  const handleContinueClick = async () => {
    await updateRoadmap();
    navigate(`/create/${id}`);
  };

  useEffect(() => {
    if (location.state) {
      const {roadmapCategory, roadmapName, roadmapDescription, imageUrl, nodes, edges } =
        location.state;
      setRoadmapCategory(roadmapCategory || ""); // Default category
      setRoadmapName(roadmapName || "");
      setRoadmapDescription(roadmapDescription || "");
      setImageUrl(imageUrl || "");
      setNodes(nodes || []);
      setEdges(edges || []);
    }
  }, [
    location.state,
    setRoadmapCategory,
    setRoadmapName,
    setRoadmapDescription,
    setImageUrl,
    setNodes,
    setEdges,
  ]);

  const isCreatePath = location.pathname === "/details";
  const isUpdatePath = location.pathname.startsWith("/details/");

  return (
    <Box sx={{ width: "80%", m: "auto", mt: 3 }}>
      <Stack direction={"column"} alignItems={"center"}>
        {/* Category Select */}
        <FormControl sx={{ width: "100%", mt: 2 }}>
          <InputLabel id="roadmap-category-label">Roadmap Category</InputLabel>
          <Select
            labelId="roadmap-category-label"
            value={roadmapCategory}
            label="Roadmap Category"
            onChange={(e) => setRoadmapCategory(e.target.value)}
          >
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Network">Network</MenuItem>
          </Select>
        </FormControl>

        {/* Roadmap Title */}
        <Box>
          <label className="roadmapTitle">Roadmap Title</label>
          <br />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={roadmapName}
            onChange={(e) => setRoadmapName(e.target.value)}
            sx={{ mt: 2 }}
          />
        </Box>

        {/* Roadmap Description */}
        <Box sx={{ my: 3 }}>
          <label className="roadmapDescription">Roadmap Description</label>
          <br />
          <TextField
            id="outlined-multiline-flexible"
            multiline
            value={roadmapDescription}
            onChange={(e) => setRoadmapDescription(e.target.value)}
            sx={{ mt: 2 }}
          />
        </Box>

        {/* Image URL */}
        <Box sx={{ my: 3 }}>
          <label className="roadmapImageUrl">Image URL</label>
          <br />
          <TextField
            id="outlined-image-url"
            variant="outlined"
            placeholder="Paste image URL here"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            sx={{ mt: 2, width: "100%" }}
          />
        </Box>

        {/* Image Preview */}
        {imageUrl && (
          <Box sx={{ mt: 2 }}>
            <img
              src={imageUrl}
              alt="Preview"
              width="200"
              style={{ display: "block", margin: "auto" }}
            />
          </Box>
        )}

        {/* Buttons */}
        {isCreatePath && (
          <Button
            variant="contained"
            onClick={() => navigate("/create")}
            sx={{ width: "200px", display: "block", m: "auto" }}
          >
            Create
          </Button>
        )}
        {isUpdatePath && (
          <Button
            onClick={handleContinueClick}
            variant="contained"
            sx={{ my: 2, cursor: "pointer" }}
          >
            Continue
          </Button>
        )}
      </Stack>
    </Box>
  );
}
