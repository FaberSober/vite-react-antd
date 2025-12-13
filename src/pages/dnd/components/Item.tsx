import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FieldId } from '../types';

interface ItemProps {
  id: FieldId;
}

export function Item({ id }: ItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    // 适应水平布局
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '12px 16px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'grab',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    flexShrink: 0, // 防止在flex容器中被压缩
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      字段: {id}
    </div>
  );
}
