import React, { useState } from 'react';

const StudySessions = () => {
    const [sessions, setSessions] = useState([]);
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [notes, setNotes] = useState('');

    const handleAddSession = () => {
        const newSession = { subject, date, startTime, endTime, notes };
        setSessions([...sessions, newSession]);
        setSubject('');
        setDate('');
        setStartTime('');
        setEndTime('');
        setNotes('');
    };

    return (
        <div>
            <h1>Manage Study Sessions</h1>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes"></textarea>
            <button onClick={handleAddSession}>Add Session</button>
            <ul>
                {sessions.map((session, index) => (
                    <li key={index}>{session.subject} on {session.date} from {session.startTime} to {session.endTime}. Notes: {session.notes}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudySessions;