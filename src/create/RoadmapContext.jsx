// import React, { createContext, useState, } from "react";

// export const RoadmapContext = createContext();

// export const RoadmapProvider = ({ children }) => {
//   const [roadmapName, setRoadmapName] = useState("");
//   const [roadmapDescription, setRoadmapDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   return (
//     <RoadmapContext.Provider
//       value={{
//         roadmapName,
//         setRoadmapName,
//         roadmapDescription,
//         setRoadmapDescription,
//         imageUrl,
//         setImageUrl,
//       }}
//     >
//       {children}
//     </RoadmapContext.Provider>
//   );
// };



import React, { createContext, useState } from "react";

export const RoadmapContext = createContext();

export const RoadmapProvider = ({ children }) => {
  const [roadmapCategory, setRoadmapCategory] = useState(""); // New state for category
  const [roadmapName, setRoadmapName] = useState("");
  const [roadmapDescription, setRoadmapDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <RoadmapContext.Provider
      value={{
        roadmapCategory, // Added category to context
        setRoadmapCategory, // Added category setter to context
        roadmapName,
        setRoadmapName,
        roadmapDescription,
        setRoadmapDescription,
        imageUrl,
        setImageUrl,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
};
