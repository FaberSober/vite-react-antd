import { genList } from '@/utils';
import { Card } from 'antd';
import React, { useState } from 'react';
import { FaSortList } from './base-drag';


function NestedRowSortList() {
  const [array, setArray] = useState(genList(3));

  return (
    <FaSortList
      list={array}
      renderItem={(i) => <div>{i.name}</div>}
      onSortEnd={(l) => setArray(l)}
      itemStyle={{
        padding: 8,
        minWidth: 140,
        textAlign: 'center',
        border: '1px solid #ccc',
      }}
      containerStyle={{
        gap: 12,
      }}
      type='horizontal'
      horizontal
    />
  )
}

/**
 * @author xu.pengfei
 * @date 2025-12-13 18:05:14
 */
export default function DndDemo06() {
  const [array, setArray] = useState(genList(5));

  return (
    <div>
      <Card title="垂直内嵌水平拖动排序-整体拖动" style={{ marginBottom: 12 }}>
        <p>说明：1. 使用dnd-kit组件；2. 二次封装后使用更简单；</p>

        <div style={{ width: 500 }}>
          <FaSortList
            list={array}
            renderItem={(i) => (
              <div>
                <NestedRowSortList />
              </div>
            )}
            onSortEnd={(l) => setArray(l)}
            itemStyle={{
              padding: 8,
              borderBottom: '1px solid #ccc',
            }}
            containerStyle={{}}
            type='vertical'
            vertical
          />
        </div>

        <p>value: {JSON.stringify(array.map((i) => i.id))}</p>
      </Card>
    </div>
  );
}
