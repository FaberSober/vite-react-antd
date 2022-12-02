import React, {CSSProperties, ReactNode} from 'react';
import {useDraggable} from '@dnd-kit/core';
import {Button} from "antd";


export interface DraggableProps {
  handle?: boolean
  children?: ReactNode;
  style?: CSSProperties;
}

export default function Draggable(props:DraggableProps) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    display: 'inline-block',
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <div ref={setNodeRef} style={{  ...style, ...props.style }} {...(props.handle ? {} : listeners)} {...attributes}>
      {props.children}
      {props.handle && <Button {...listeners}>Handle</Button>}
    </div>
  );
}
