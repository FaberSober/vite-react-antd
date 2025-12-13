import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/**
 * @description SortableItem 组件的 Props 接口
 */
interface SortableItemProps {
  id: string; // 列表项的唯一 ID
}

export function SortableItem({ id }: SortableItemProps) {
  // useSortable 钩子接收一个对象，包含 id
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  // 将 transform 和 transition 转换成 DOM 可用的 style
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '16px',
    margin: '8px 0',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'grab',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      **表单项 ID: {id}**
      <div style={{ fontSize: '12px', color: '#666' }}>
        拖动此区域可改变位置
      </div>
    </div>
  );
}
