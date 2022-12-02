import React from 'react';
import Draggable from "@/components/dnd/Draggable";
import {Button} from "antd";
import {DndContext} from "@dnd-kit/core";


/**
 * @author xu.pengfei
 * @date 2022/12/2
 */
export default function index() {
  return (
    <DndContext>
      <Draggable handle>
        <Button>Drag me</Button>
      </Draggable>
    </DndContext>
  );
}
