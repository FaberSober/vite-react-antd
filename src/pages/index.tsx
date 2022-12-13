import React from 'react';
import {Link} from 'react-router-dom';
import {Divider} from "antd";

export default function App() {

  return (
    <div>
      <div>
        <Link to="/fontawesome/simple">simple.tsx</Link>
        <Divider type="vertical" />
        <Link to="/fontawesome/all">all.tsx</Link>
      </div>
    </div>
  )
}
