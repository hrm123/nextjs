// @ts-nocheck
import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import { EdgeText, getBezierPath } from 'reactflow';
import { useRouter } from 'next/router'; 

const  CustomEdge : FunctionComponent<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}) => {
  const router = useRouter();
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const linkRef = `/year/${data.year}`
  // console.log(linkRef)
  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        onClick={() => {debugger; router.push(`/year/${data.year}`)}}
        pointerEvents='auto'
      />
       <EdgeText
        label={data.year}
        x={0}
        y={0}
        onClick={() => {debugger; router.push(`/year/${data.year}`)}}
        pointerEvents='auto'
        />
        {/*
      <text onClick={() => {debugger; router.push(`/year/${data.year}`)}}>
        <textPath href={`#${id}`} style={{ fontSize: 12 }} startOffset="50%" textAnchor="middle">
          {data.text}
        </textPath>
      </text>
  */}
    </>
  );
}


export default React.memo(CustomEdge)