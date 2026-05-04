import React, { useState } from 'react';
import './App.css';
import ExamTracker from './components/ExamTracker';
import StudySessions from './components/StudySessions';
import ClinicalRotations from './components/ClinicalRotations';

function App() {
  const [activeTab, setActiveTab] = useState('exams');

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Medical Schedule Planner</h1>
        <p>Manage your exams, study sessions, and clinical rotations</p>
      </header>

      <nav className="navigation">
        <button 
          className={activeTab === 'exams' ? 'active' : ''} 
          onClick={() => setActiveTab('exams')}
        >
          📝 Exam Tracking
        </button>
        <button 
          className={activeTab === 'study' ? 'active' : ''} 
          onClick={() => setActiveTab('study')}
        >
          📖 Study Sessions
        </button>
        <button 
          className={activeTab === 'rotations' ? 'active' : ''} 
          onClick={() => setActiveTab('rotations')}
        >
          🏥 Clinical Rotations
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'exams' && <ExamTracker />}
        {activeTab === 'study' && <StudySessions />}
        {activeTab === 'rotations' && <ClinicalRotations />}
      </main>
    </div>
  );
}

export default App;