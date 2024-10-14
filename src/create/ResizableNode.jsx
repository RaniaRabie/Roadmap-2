// import { memo } from "react";
// import { Handle, Position, NodeResizer } from "@xyflow/react";

// const ResizableNode = ({ data }) => {
//   return (
//     <>
//       <NodeResizer minWidth={100} minHeight={30} />
//       <Handle type="target" position={Position.Left} />
//       <div style={{ padding: 10 }}>{data.label}</div>
//       <Handle type="source" position={Position.Right} />
//     </>
//   );
// };

// export default memo(ResizableNode);



















import { useState } from "react";
import { memo } from "react";
// @ts-ignore
import { Handle, Position, NodeResizeControl } from "@xyflow/react";
const controlStyle = {
  background: "transparent",
  border: "none",
};

const ResizableNode = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }} // Make sure the node has relative positioning to place the resize icon properly
    >
      <NodeResizeControl style={controlStyle} minWidth={100} minHeight={50}>
        {hovered && <ResizeIcon />}{" "}
        {/* Conditionally render the resize icon on hover */}
      </NodeResizeControl>

      <Handle type="target" position={Position.Left} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

function ResizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#ff0071"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: "absolute", right: 0, bottom: 0 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" y1="14" x2="20" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  );
}

export default memo(ResizableNode);
