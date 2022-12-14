import React, {useState} from 'react';
import {arrayMove, SortableContext, sortableKeyboardCoordinates} from "@dnd-kit/sortable";
import {GridContainer} from "@/components/dnd/GridContainer/GridContainer";
import {DndContext, KeyboardSensor, PointerSensor, UniqueIdentifier, useSensor, useSensors} from "@dnd-kit/core";
import SortableItem from "@/components/dnd/SortableItem";


/**
 * @author xu.pengfei
 * @date 2022/12/14 21:15
 */
export default function index() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event:any) {
    setActiveId(null);
    const {active, over} = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({active}) => {
        if (!active) return;
        setActiveId(active.id);
      }}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={items}>
        <GridContainer columns={5}>
          {items.map((value, index) => (
            <SortableItem key={value} id={value} dragging={activeId === value} style={{ border: '1px solid #eee', padding: 8, height: 153, backgroundColor: 'lightcyan' }} handle>
              <div>{value}</div>
            </SortableItem>
          ))}
        </GridContainer>
      </SortableContext>
    </DndContext>
  )
}

