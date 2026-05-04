import React, { useState } from 'react';

const ExamTracker = () => {
  const [exams, setExams] = useState([]);
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');

  const addExam = () => {
    const newExam = { subject, date, time, duration };
    setExams([...exams, newExam]);
    setSubject('');
    setDate('');
    setTime('');
    setDuration('');
  };

  const deleteExam = (index) => {
    const updatedExams = exams.filter((_, i) => i !== index);
    setExams(updatedExams);
  };

  return (
    <div>
      <h1>Exam Tracker</h1>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration (mins)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={addExam}>Add Exam</button>

      <ul>
        {exams.map((exam, index) => (
          <li key={index}>
            {`${exam.subject} - ${exam.date} ${exam.time} (${exam.duration} mins)`}
            <button onClick={() => deleteExam(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamTracker;