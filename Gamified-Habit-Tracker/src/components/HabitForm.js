import React, { useState } from 'react';

const ICONS = ['💪', '🔥', '📚', '🧘', '🎯', '💻', '🚰', '🛏️', '🧼', '🥗', '📖', '🏃'];

function HabitForm({ onAdd }) {
  const [habitName, setHabitName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(ICONS[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) return;
    onAdd(habitName, selectedIcon);
    setHabitName('');
    setSelectedIcon(ICONS[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <select
          className="form-select"
          value={selectedIcon}
          onChange={(e) => setSelectedIcon(e.target.value)}
          style={{ maxWidth: '80px' }}
        >
          {ICONS.map(icon => (
            <option key={icon} value={icon}>
              {icon}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Add a new habit..."
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </div>
    </form>
  );
}

export default HabitForm;
