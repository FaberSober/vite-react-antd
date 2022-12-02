import React from 'react';
import {Link} from 'react-router-dom';

export default function App() {
  return (
    <div className="storyDiv">
      <Link to="/demo01">demo01: drag and drop</Link>
      <Link to="/sortable">sortable</Link>
    </div>
  )
}
