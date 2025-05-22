import React from 'react';
import HabitCard from './HabitCard';

function HabitList({ habits, onComplete }) {
  return (
    <div className="row">
      {habits.map(habit => (
        <div className="col-md-6 col-lg-4 mb-4" key={habit.id}>
          <HabitCard habit={habit} onComplete={onComplete} />
        </div>
      ))}
    </div>
  );
}

export default HabitList;
