import React from 'react';

function HabitHistory({ history }) {
  const today = new Date().toISOString().split('T')[0];

  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split('T')[0];
  });

  return (
    <div className="d-flex justify-content-start gap-1 mt-2">
      {last7Days.map((date) => (
        <div
          key={date}
          title={date}
          className="rounded-circle"
          style={{
            width: 20,
            height: 20,
            backgroundColor: history.includes(date) ? '#198754' : '#dee2e6',
            border: date === today ? '2px solid #000' : '1px solid #ccc'
          }}
        />
      ))}
    </div>
  );
}

export default HabitHistory;
