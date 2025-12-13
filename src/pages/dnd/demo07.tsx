import React, { useState } from 'react';
import {DndContext, DragEndEvent} from '@dnd-kit/core';

import {Draggable} from './components/Draggable';
import {Droppable} from './components/Droppable';

/**
 * @author xu.pengfei
 * @date 2025-12-13 20:48:27
 */
export default function DndDemo07() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState<any>(null);

  function handleDragEnd(event: DragEndEvent) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  );
}
