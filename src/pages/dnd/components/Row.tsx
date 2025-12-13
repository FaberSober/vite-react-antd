import React from 'react';
import { useSortable, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Item } from './Item';
import { Row as RowType, FieldId } from '../types';

interface RowProps {
  row: RowType;
}

export function Row({ row }: RowProps) {
  // 1. 外层：作为垂直列表的可拖动项
  const {
    attributes: rowAttributes,
    listeners: rowListeners,
    setNodeRef: setRowNodeRef,
    transform: rowTransform,
    transition: rowTransition,
  } = useSortable({ id: row.id, data: { type: 'Row' } });

  const rowStyle: React.CSSProperties = {
    transform: CSS.Transform.toString(rowTransform),
    transition: rowTransition,
    padding: '16px',
    margin: '10px 0',
    backgroundColor: '#f0f0f0',
    border: '2px dashed #007bff',
    borderRadius: '8px',
    // 确保整个行都可以被垂直拖动
    cursor: 'grab',
  };

  // 2. 内层：作为水平排序的上下文
  return (
    <div ref={setRowNodeRef} style={rowStyle} {...rowAttributes} {...rowListeners}>
      <h4 style={{ margin: '0 0 10px 0' }}>行 ID: {row.id} (垂直可拖动)</h4>

      {/* 2.1. 内嵌 SortableContext，用于水平排序 */}
      <SortableContext
        items={row.fields} // 传入行内字段的 ID 列表
        strategy={horizontalListSortingStrategy} // **水平排序策略**
      >
        {/* 2.2. Flex 容器：让内部字段水平排列 */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px', border: '1px solid #ccc' }}>
          {row.fields.map((fieldId) => (
            <Item key={fieldId} id={fieldId} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
