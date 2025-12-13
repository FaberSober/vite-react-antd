import React from 'react';
import { DndContext, DragEndEvent, useDroppable } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { DynItem } from '../types';
import { SortableItem } from './SortableItem';
import { Droppable } from './Droppable';

export interface RowContainerProps {
  row: DynItem;
}

/**
 * dynamic row container component
 * 1. can drop items into it
 * 2. can sort items inside it horizontally
 * @author xu.pengfei
 * @date 2025-12-13 21:33:37
 */
export default function RowContainer({ row }: RowContainerProps) {

  function handleDragEnd(event: DragEndEvent) {
    console.log('拖拽结束', event);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ width: '100%' }} >
        <div>这是一个Row - {row.id}</div>

        <Droppable id={`droppable-row-${row.id}`} style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>
          <div>目前将表单组件拖动到Row内部有问题，因为使用了多个DndContext，导致Row的Droppable无法接受到最外层的DndContext。</div>
        </Droppable>
      </div>
    </DndContext>
  );
}
