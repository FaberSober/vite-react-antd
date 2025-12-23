import React, { useState } from 'react';
import ReactGridLayout, { useContainerWidth } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";


/**
 * @author xu.pengfei
 * @date 2025-12-23 20:26:30
 */
export default function ReactGridLayoutDemo01() {
  const { width, containerRef, mounted } = useContainerWidth();

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];

  return (
    <div ref={containerRef}>
      {mounted && (
        <ReactGridLayout
          layout={layout}
          width={width}
          gridConfig={{ cols: 24, rowHeight: 30 }}
        >
          <div key="a" className='fa-border'>a</div>
          <div key="b" className='fa-border'>b</div>
          <div key="c" className='fa-border'>c</div>
        </ReactGridLayout>
      )}
    </div>
  );
}
