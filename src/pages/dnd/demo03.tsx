// 📄 App.tsx

import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  UniqueIdentifier // 引入 UniqueIdentifier 类型
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';
import { Row } from './components/Row';
import { Row as RowType, FieldId } from './types';


// 初始数据
const INITIAL_ROWS: RowType[] = [
    { id: 'Row-1', fields: ['F-1-A', 'F-1-B', 'F-1-C'] },
    { id: 'Row-2', fields: ['F-2-X', 'F-2-Y'] },
    { id: 'Row-3', fields: ['F-3-P', 'F-3-Q', 'F-3-R'] },
];
// ----------------------------------------------------

export default function Demo03NestedSortable() {
  const [rows, setRows] = useState<RowType[]>(INITIAL_ROWS);

  // 获取所有行ID的列表
  const rowIds = rows.map(row => row.id);

  /**
   * 查找某个 ID 属于哪一行的索引，如果找不到，返回 -1
   */
  const findRowIndex = (itemId: UniqueIdentifier): number => {
    return rows.findIndex(row => row.fields.includes(String(itemId)));
  };


  /**
   * @description 拖拽结束时的处理函数
   */
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) {
        return;
    }

    const activeId = String(active.id);
    const overId = String(over.id);

    // 获取拖动元素和目标元素的类型
    const activeType = (active.data.current as any)?.type;
    const overType = (over.data.current as any)?.type;

    // 1. 检查是否是【外层垂直拖动】（拖动的是 Row）
    // 防止当鼠标进入内层 Item 时，over 变为 Field，导致逻辑失效
    if (activeType === 'Row' && overType === 'Row') {
      const oldIndex = rows.findIndex(r => r.id === activeId);
      const newIndex = rows.findIndex(r => r.id === overId);

      const newRows = arrayMove(rows, oldIndex, newIndex);
      setRows(newRows);
      return;
    }

    // 2. 检查是否是【内层水平拖动】（拖动的是 Field）
    // 只有当 active 和 over 都是 Field 类型时才处理
    if (activeType === 'Field' && overType === 'Field') {
      const sourceRowIndex = findRowIndex(activeId);
      const targetRowIndex = findRowIndex(overId);

      // 拖动必须发生在同一行内 (不支持跨行拖动，如果需要跨行，逻辑会更复杂)
      if (sourceRowIndex !== -1 && sourceRowIndex === targetRowIndex) {
        const sourceRow = rows[sourceRowIndex];

        const oldIndex = sourceRow.fields.indexOf(activeId);
        const newIndex = sourceRow.fields.indexOf(overId);

        const newFields = arrayMove(sourceRow.fields, oldIndex, newIndex);

        // 保持数组不可变性地更新 state
        const newRows = [...rows];
        newRows[sourceRowIndex] = { ...sourceRow, fields: newFields };
        setRows(newRows);
        return;
      }
    }

    // 3. 跨列表拖动逻辑（本例中暂不支持，但需要预留）
    // 如果 sourceRowIndex !== targetRowIndex，则需要从 sourceRow 移除，并添加到 targetRow
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div style={{ width: '600px', margin: '50px auto' }}>
        <h3>🚀 垂直(行) + 水平(字段) 嵌套排序示例</h3>


        {/* 外层 SortableContext: 垂直排序 */}
        <SortableContext
          items={rowIds}
          strategy={verticalListSortingStrategy}
        >
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </SortableContext>

        <div style={{ marginTop: '30px', padding: '15px', borderTop: '2px solid #007bff' }}>
            **当前表单数据结构:**
            <pre>{JSON.stringify(rows, null, 2)}</pre>
        </div>
      </div>
    </DndContext>
  );
}
