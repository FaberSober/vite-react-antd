import React, {CSSProperties, ReactNode} from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


export interface SortableItemProps {
  id: any,
  style?: CSSProperties;
  children?: ReactNode;
}

export default function SortableItem(props:SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...props.style }} {...attributes} {...listeners}>
      {props.children}
    </div>
  );
}
