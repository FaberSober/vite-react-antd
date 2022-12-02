import React, {useState} from 'react';
import {Button} from "antd";
import {DndContext} from '@dnd-kit/core';
import Draggable from "@/components/dnd/Draggable";
import Droppable from "@/components/dnd/Droppable";


export default function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>
      <Button>Drag me</Button>
    </Draggable>
  );

  function handleDragEnd(event:any) {
    console.log('handleDragEnd', event)
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable style={{ width: 400, height: 200, border: '1px solid #F00', borderRadius: 4 }}>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
    </DndContext>
  );
}
