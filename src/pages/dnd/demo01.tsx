import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  DragEndEvent // 引入拖拽事件类型
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';
import { SortableItem } from './components/SortableItem';

// 定义表单项的类型，这里简化为字符串数组
type FormItem = string;

export default function DndDemo01() {
  // 1. 初始化列表项数据，并明确 state 类型为 FormItem[] (即 string[])
  const [items, setItems] = useState<FormItem[]>(['组件 A', '组件 B', '组件 C', '组件 D']);

  /**
   * @description 拖拽结束时的处理函数
   * @param event DragEndEvent 类型，包含 active 和 over 属性
   */
  function handleDragEnd(event: DragEndEvent) {
    // over.id 可能是 null 或 undefined，需要做安全检查
    const { active, over } = event;

    if (!over || active.id === over.id) {
        return;
    }

    // active.id 和 over.id 默认是 DndContext 传入的 DndItem 的 id，其类型为 UniqueIdentifier (string | number)。
    // 因为我们的 items 是 string[]，所以这里可以安全地将其视为 string。
    const activeId = String(active.id);
    const overId = String(over.id);

    // 找到拖动元素的当前索引和目标索引
    const oldIndex = items.indexOf(activeId);
    const newIndex = items.indexOf(overId);

    // 3. 使用 arrayMove 来更新数组顺序
    const newItems = arrayMove(items, oldIndex, newIndex);
    setItems(newItems);
  }

  // 组件渲染部分
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div style={{ width: '300px', margin: '50px auto' }}>
        <h3>垂直排序列表示例 (TypeScript 版本)</h3>

        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </SortableContext>

        <div style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc' }}>
            **当前数据顺序: **
            <pre>{JSON.stringify(items, null, 2)}</pre>
        </div>
      </div>
    </DndContext>
  );
}
