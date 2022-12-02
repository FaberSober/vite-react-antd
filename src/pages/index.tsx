import React from 'react';
import {Link} from 'react-router-dom';

export default function App() {
  return (
    <div className="storyDiv">
      <Link to="/drag">drag</Link>
      <Link to="/dragAndHoldPosition">drag and hold the position</Link>
      <Link to="/dragWithHandle">drag with handle</Link>
      <Link to="/dragAndDrop">drag and drop</Link>
      <Link to="/sortable">sortable</Link>
      <Link to="/sortable">sort with handle</Link>
    </div>
  )
}
