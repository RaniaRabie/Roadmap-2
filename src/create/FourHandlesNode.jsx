import { Handle, Position } from '@xyflow/react';
import React from 'react';


const FourHandlesNode = ({ data }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid black', borderRadius: '5px', textAlign: 'center' }}>
      <div>Four Handles Node</div>
      {/* Top handle */}
      <Handle type="source" position={Position.Top} id="top-source" isConnectable/>
      <Handle type="target" position={Position.Top} id="top-target" isConnectable/>
      {/* Right handle */}
      <Handle type="source" position={Position.Right} id="right-source" isConnectable/>
      <Handle type="target" position={Position.Right} id="right-target" isConnectable/>
      {/* Bottom handle */}
      <Handle type="source" position={Position.Bottom} id="bottom-source" isConnectable/>
      <Handle type="target" position={Position.Bottom} id="bottom-target" isConnectable/>
      {/* Left handle */}
      <Handle type="source" position={Position.Left} id="left-source" isConnectable/>
      <Handle type="target" position={Position.Left} id="left-target" isConnectable/>
    </div>
  );
};

export default FourHandlesNode;
