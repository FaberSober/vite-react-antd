import React from 'react';
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useFaFormStore } from './stores/useFaFormStore';
import { Draggable } from './components/Draggable';
import { Droppable } from './components/Droppable';
import { FaSortList } from './base-drag';
import RowContainer from './components/RowContainer';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
import { findIndex } from 'lodash';

const DROPPABLE_ID = 'form-canvas-area';

/**
 * @author xu.pengfei
 * @date 2025-12-07 16:37:50
 */
export default function FaFormDemo01() {
  const formItems = useFaFormStore((state) => state.formItems);
  const reorderFormItems = useFaFormStore((state) => state.reorderFormItems);
  const reorderRowChildren = useFaFormStore((state) => state.reorderRowChildren);
  const addFormItem = useFaFormStore((state) => state.addFormItem);
  const addChildToRow = useFaFormStore((state) => state.addChildToRow);

  function handleDragEnd(event: DragEndEvent) {
    console.log('拖拽结束', event);
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    // 拖动到画布上
    if (over.id === DROPPABLE_ID) {
      if (active.id === 'input') {
        addFormItem('input');
      } else if (active.id === 'row') {
        addFormItem('row');
      }
      return;
    }

    // 拖动到行容器中
    const rowContainerId = String(over.id);
    if (rowContainerId.startsWith('droppable-row-')) {
      const rowId = rowContainerId.replace('droppable-row-', '');
      if (active.id === 'input') {
        addChildToRow(rowId, 'input');
      } else if (active.id === 'row') {
        addChildToRow(rowId, 'row');
      }
      return;
    }

    // 重新排序顶级表单项
    if (active.id !== over.id) {
      const activeId = String(active.id);
      const overId = String(over.id);
      const activeIndex = findIndex(formItems, { id: activeId });
      const overIndex = findIndex(formItems, { id: overId });

      if (activeIndex !== -1 && overIndex !== -1) {
        // 顶级项排序
        const newItems = arrayMove(formItems, activeIndex, overIndex);
        reorderFormItems(newItems);
      }
    }
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
                  list={formItems}
                  renderItem={(i) => {
                    if (i.type === 'input') {
                      return <div>这是一个输入框 - {i.id}</div>;
                    } else if (i.type === 'row') {
                      return <RowContainer row={i} />;
                    } else {
                      return <div>未知组件 - {i.id}</div>;
                    }
                  }}
                  // onSortEnd={(l) => reorderFormItems(l)}
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
