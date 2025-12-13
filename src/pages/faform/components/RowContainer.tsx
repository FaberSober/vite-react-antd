import { DragEndEvent } from '@dnd-kit/core';
import { DynItem } from '../types';
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
    <div style={{ width: '100%' }} >
      <div>这是一个Row - {row.id}</div>

      <Droppable id={`droppable-row-${row.id}`} style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>
        <div>

        </div>
      </Droppable>
    </div>
  );
}
