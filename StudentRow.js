// components/StudentRow.js
import React from 'react';

function StudentRow({ student, isChecked, onChange }) {
  return (
    <div className="student-row">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(student.id)}
      />
      <span>{student.name}</span>
    </div>
  );
}

export default StudentRow;
