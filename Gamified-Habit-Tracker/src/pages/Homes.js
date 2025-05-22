import React, { useState, useEffect } from 'react';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';

const STORAGE_KEY = 'habit-hero-data';
const DATE_KEY = 'habit-hero-date';

function Home() {
  const [habits, setHabits] = useState([]);

  // Load habits + reset completedToday if it's a new day
  useEffect(() => {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem(DATE_KEY);

    const stored = localStorage.getItem(STORAGE_KEY);
    let parsed = stored ? JSON.parse(stored) : [];

    if (lastDate !== today) {
      parsed = parsed.map(habit => ({
        ...habit,
        completedToday: false
      }));
      localStorage.setItem(DATE_KEY, today);
    }

    setHabits(parsed);
  }, []);

  // Save to localStorage on habit update
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habitName, icon) => {
    setHabits([
      ...habits,
      {
        id: Date.now(),
        name: habitName,
        icon: icon,
        xp: 0,
        streak: 0,
        completedToday: false,
        history: []
      }
    ]);
  };

  const completeHabit = (id) => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    setHabits(prev =>
      prev.map(habit =>
        habit.id === id
          ? {
              ...habit,
              xp: habit.xp + 10,
              streak: habit.streak + 1,
              completedToday: true,
              history: habit.history?.includes(today)
                ? habit.history
                : [...(habit.history || []), today]
            }
          : habit
      )
    );
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(habits, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'habit-hero-backup.json';
    a.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          setHabits(imported);
          alert('Habits imported successfully!');
        } else {
          alert('Invalid file format.');
        }
      } catch (err) {
        alert('Failed to import habits.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <div className="mb-3 d-flex gap-2 flex-wrap">
        <button className="btn btn-outline-success" onClick={handleExport}>
          📤 Export Habits
        </button>
        <label className="btn btn-outline-primary m-0">
          📥 Import Habits
          <input
            type="file"
            accept="application/json"
            hidden
            onChange={handleImport}
          />
        </label>
      </div>

      <h2 className="mb-4">Your Habits</h2>
      <HabitForm onAdd={addHabit} />
      <HabitList habits={habits} onComplete={completeHabit} />
    </div>
  );
}

export default Home;
