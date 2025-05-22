import React from 'react';
import confetti from 'canvas-confetti';
import XPProgress from './XPProgress';
import HabitHistory from './HabitHistory';

function HabitCard({ habit, onComplete }) {
  const { name, icon, xp, streak, completedToday, history = [] } = habit;

  const handleClick = () => {
    onComplete(habit.id);

    // 🎉 Trigger confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {icon} {name}
        </h5>
        <p className="mb-1">🔥 Streak: {streak} days</p>
        <XPProgress xp={xp} />
        <HabitHistory history={history} />
        <button
          className={`btn mt-3 ${completedToday ? 'btn-secondary' : 'btn-primary'}`}
          disabled={completedToday}
          onClick={handleClick}
        >
          {completedToday ? 'Completed' : 'Mark as Done'}
        </button>
      </div>
    </div>
  );
}

export default HabitCard;
