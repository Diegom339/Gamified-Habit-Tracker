import React, { useState } from 'react';
import HabitForm from '../components/HabitForm';

function Home() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habitName) => {
    setHabits([...habits, {
      id: Date.now(),
      name: habitName,
      xp: 0,
      streak: 0,
      completedToday: false
    }]);
  };

  return (
    <div>
      <h2 className="mb-4">Your Habits</h2>
      <HabitForm onAdd={addHabit} />
      {/* Habit list will go here next */}
    </div>
  );
}

export default Home;
