import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Roadmap from './roadmap/Roadmap'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreateRoadmap from './create/CreateRoadmap'; 
import RoadmapDetails from './create/Roadmapdetails';
import RoadmapList from './roadmap/RoadmapList';
import AllRoadmaps from './create/AllRoadmaps';
import { RoadmapProvider } from "./create/RoadmapContext";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<RoadmapList />} /> {/* Default route */}
      <Route path="roadmap/:id" element={<Roadmap />} />
      <Route path="create" element={<CreateRoadmap />} />
      <Route path="details" element={<RoadmapDetails />} />
      <Route path="allroadmaps" element={<AllRoadmaps />} />
      <Route path="/create/:id" element={<CreateRoadmap />} />
      <Route path="details/:id" element={<RoadmapDetails />} />
      
      {/* ... etc. */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RoadmapProvider>
    <RouterProvider router={router} />
    </RoadmapProvider>
    
  </React.StrictMode>
);


