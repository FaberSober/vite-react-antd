import { genList } from '@/utils';
import { Card } from 'antd';
import React, { useState } from 'react';
import { FaSortList } from './base-drag';

/**
 * @author xu.pengfei
 * @date 2025-12-13 18:05:14
 */
export default function DndDemo05() {
  const [array, setArray] = useState(genList(5));

  return (
    <div>
      <Card title="水平拖动排序-整体拖动" style={{ marginBottom: 12 }}>
        <p>说明：1. 使用dnd-kit组件；2. 二次封装后使用更简单；</p>

        <div style={{ width: 500 }}>
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
        </div>

        <p>value: {JSON.stringify(array.map((i) => i.id))}</p>
      </Card>
    </div>
  );
}
