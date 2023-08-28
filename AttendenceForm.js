// components/AttendanceForm.js
import React, { useState } from 'react';
import StudentRow from './StudentRow';

function AttendanceForm({ students }) {
  const [attendance, setAttendance] = useState({});

  const handleCheckboxChange = (studentId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: !prevAttendance[studentId]
    }));
  };

  const handleSubmit = () => {
    // Here you can handle the submission of attendance data
    console.log('Attendance:', attendance);
  };

  return (
    <div className="attendance-form">
      {students.map((student) => (
        <StudentRow
          key={student.id}
          student={student}
          isChecked={attendance[student.id] || false}
          onChange={handleCheckboxChange}
        />
      ))}
      <button onClick={handleSubmit}>Submit Attendance</button>
    </div>
  );
}

export default AttendanceForm;
