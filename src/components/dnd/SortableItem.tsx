import React, {CSSProperties, ReactNode} from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Button} from "antd";


export interface SortableItemProps {
  id: any,
  handle?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
  vertical?: boolean;
}

export default function SortableItem(props:SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});

  const style: CSSProperties = {
    // transform: CSS.Transform.toString(transform),
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : '',
    transition,
    cursor: 'grab',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };
  if (props.vertical) {
    style.transform = transform ? `translate3d(${props.vertical ? 0 : transform.x}px, ${props.vertical ? transform.y : 0}px, 0)` : '';
  }

  return (
    <div ref={setNodeRef} style={{ ...style, ...props.style }} {...(props.handle ? {} : listeners)} {...attributes}>
      {props.children}
      {props.handle && <Button {...listeners}>Handle</Button>}
    </div>
  );
}
