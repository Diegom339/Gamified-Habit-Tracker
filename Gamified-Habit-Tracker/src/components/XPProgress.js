import React from 'react';

function XPProgress({ xp }) {
  const level = Math.floor(xp / 100);
  const progress = xp % 100;

  return (
    <div className="mb-2">
      <strong>Level {level}</strong>
      <div className="progress" style={{ height: '20px' }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress} XP
        </div>
      </div>
    </div>
  );
}

export default XPProgress;
