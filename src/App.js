import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <div className="home-icon">🏠</div>
        </div>
        <div className="header-center">
          <h1 className="header-title">Search</h1>
          <div className="active-indicator"></div>
        </div>
        <div className="header-right">
          <span className="jump-back">Jump Back</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </header>

      <div className="search-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search subject, course, or instructor"
            className="search-input"
          />
        </div>
      </div>

      <div className="filters">
        <button className="filter-btn">Open Only</button>
        <button className="filter-btn">Morning</button>
        <button className="filter-btn">Instructor</button>
      </div>

      <div className="course-list">
        <div className="course-card">
          <div className="course-header">
            <h3 className="course-title">CIS 121 – Data Structures</h3>
            <span className="status-badge status-open">Open</span>
          </div>
          <p className="course-details">MWF 10–11 • Smith</p>
          <button className="view-sections-btn">View sections</button>
        </div>

        <div className="course-card">
          <div className="course-header">
            <h3 className="course-title">CIS 160 – Mathematical Foundations</h3>
            <span className="status-badge status-few">Few seats</span>
          </div>
          <p className="course-details">TR 2–3:30 • Johnson</p>
          <button className="view-sections-btn">View sections</button>
        </div>

        <div className="course-card">
          <div className="course-header">
            <h3 className="course-title">CIS 320 – Algorithms</h3>
            <span className="status-badge status-waitlist">Waitlist</span>
          </div>
          <p className="course-details">MWF 1–2 • Davis</p>
          <button className="view-sections-btn">View sections</button>
        </div>

        <div className="course-card">
          <div className="course-header">
            <h3 className="course-title">CIS 240 – Computer Architecture</h3>
            <span className="status-badge status-open">Open</span>
          </div>
          <p className="course-details">TR 10–11:30 • Wilson</p>
          <button className="view-sections-btn">View sections</button>
        </div>

        <div className="course-card">
          <div className="course-header">
            <h3 className="course-title">CIS 350 – Software Design</h3>
            <span className="status-badge status-few">Few seats</span>
          </div>
          <p className="course-details">MWF 3–4 • Brown</p>
          <button className="view-sections-btn">View sections</button>
        </div>
      </div>
    </div>
  );
}

export default App;
