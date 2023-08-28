// App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AttendanceForm from './components/AttendenceForm';

const students = [
  { id: 1, name: 'Student 1' },
  { id: 2, name: 'Student 2' },
  // Add more students
];

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <AttendanceForm students={students} />
      </div>
    </div>
  );
}

export default App;
