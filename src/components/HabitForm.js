import React, { useState } from 'react';

function HabitForm({ onAdd }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) return;
    onAdd(habitName);
    setHabitName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new habit..."
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add Habit
        </button>
      </div>
    </form>
  );
}

export default HabitForm;
