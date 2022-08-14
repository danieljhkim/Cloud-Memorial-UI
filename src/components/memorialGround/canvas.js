import React from 'react';

function Canvas(props) {
  return (
    <div className="canvas-outer-cont">
      <div className="canvas-inner-cont">
        <canvas id="canvas" width="500" height="500"></canvas>
      </div>
    </div>
  );
}

export default Canvas;