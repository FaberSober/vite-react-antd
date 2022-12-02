import { Divider } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

export default function App() {

  return (
    <div>
      <div>
        <Link to="/demo01">demo01</Link>
        <Divider type='vertical' />
        <Link to="/sortable">sortable</Link>
      </div>
    </div>
  )
}
