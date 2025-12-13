import { DndContext, DragEndEvent } from '@dnd-kit/core';
import React, { useState } from 'react';
import { Draggable } from './components/Draggable';
import { Droppable } from './components/Droppable';
import { DynItem } from './types';
import { generateId } from '@/utils';
import { FaSortList } from './base-drag';
import RowContainer from './components/RowContainer';


// 定义 Droppable 区域的 ID
const DROPPABLE_ID = 'form-canvas-area';

/**
 * @author xu.pengfei
 * @date 2025-12-13 21:05:21
 */
export default function DndDemo08() {
  const [array, setArray] = useState<DynItem[]>([]);

  function handleDragEnd(event: DragEndEvent) {
    console.log('拖拽结束', event);
    const { active, over } = event;

    if (!active || !over) {
      return;
    }
    if (over.id === DROPPABLE_ID) {
      if (active.id === 'input') {
        setArray((prev) => [...prev, { id: generateId(), type: 'input' }]);
      } else if (active.id === 'row') {
        setArray((prev) => [...prev, { id: generateId(), type: 'row' }]);
      }
      return;
    }

    // drop into RowContainer
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='fa-full fa-flex-row'>
        <div style={{ width: 300, borderRight: '1px solid #ccc'}} className='fa-flex-column'>
          <h1>表单组件</h1>

          <div>
            <Draggable id="input">
              <div>Input</div>
            </Draggable>
            <Draggable id="row">
              <div>Row</div>
            </Draggable>
          </div>
        </div>

        {/* right droppable  */}
        <div style={{ flex: 1, position: 'relative' }}>
          <Droppable className='fa-full-content' id={DROPPABLE_ID}>
            <div className='fa-full-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 500 }}>
                <FaSortList
                  list={array}
                  renderItem={(i) => {
                    if (i.type === 'input') {
                      return <div>这是一个输入框 - {i.id}</div>;
                    } else if (i.type === 'row') {
                      return <RowContainer row={i} />;
                    } else {
                      return <div>未知组件 - {i.id}</div>;
                    }
                  }}
                  onSortEnd={(l) => setArray(l)}
                  itemStyle={{
                    padding: 8,
                    borderBottom: '1px solid #ccc',
                    width: '100%',
                  }}
                  containerStyle={{}}
                  type='vertical'
                  vertical
                />
              </div>
            </div>
          </Droppable>
        </div>
      </div>
    </DndContext>
  );
}
