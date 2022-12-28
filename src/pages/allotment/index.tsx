import React from 'react';
import { Allotment } from "allotment";
import "allotment/dist/style.css";


/**
 * @author xu.pengfei
 * @date 2022/12/28 14:56
 */
export default function index() {
  return (
    <div style={{background: 'blue', height: 400}}>
      <Allotment defaultSizes={[100, 500]}>
        <Allotment.Pane>
          <div style={{background: 'lightblue', height: 400}} />
        </Allotment.Pane>
        <div style={{background: 'lightyellow', height: 400}} />
      </Allotment>
    </div>
  )
}
