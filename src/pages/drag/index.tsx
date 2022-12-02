import React, {useState} from 'react';
import Draggable from "@/components/dnd/Draggable";
import {Button} from "antd";
import {DndContext} from "@dnd-kit/core";
import {Coordinates} from "@dnd-kit/utilities";


/**
 * @author xu.pengfei
 * @date 2022/12/2
 */
export default function index() {
  const [{x, y}, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  return (
    <DndContext
      onDragEnd={({delta}) => {
        setCoordinates(({x, y}) => {
          return {
            x: x + delta.x,
            y: y + delta.y,
          };
        });
      }}
    >
      <Draggable
        style={{
          width: 100,
          position: 'absolute',
          top: y,
          left: x,
        }}
      >
        <Button>Drag me</Button>
      </Draggable>
    </DndContext>
  );
}
