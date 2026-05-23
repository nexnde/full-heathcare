// INTEGRATION EXAMPLE
// This shows how to use AppNestly.js as your main app

import React from 'react';
import ReactDOM from 'react-dom/client';
import AppNestly from './AppNestly';
import './AppNestly.css';

// Option 1: Use AppNestly as the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppNestly />);

// Option 2: If you want to keep both MedTrace and Nestly
// You can use this in your main App.js:

/*
import React, { useState } from 'react';
import AppNestly from './AppNestly';
import AppMedtrace from './App'; // Your existing app

export default function MainApp() {
  const [appMode, setAppMode] = useState('nestly'); // or 'medtrace'

  return (
    <div>
      {appMode === 'nestly' && (
        <>
          <AppNestly />
          <button onClick={() => setAppMode('medtrace')} style={{ position: 'fixed', bottom: 20, right: 20 }}>
            Switch to MedTrace
          </button>
        </>
      )}
      {appMode === 'medtrace' && (
        <>
          <AppMedtrace />
          <button onClick={() => setAppMode('nestly')} style={{ position: 'fixed', bottom: 20, right: 20 }}>
            Switch to Nestly
          </button>
        </>
      )}
    </div>
  );
}
*/

// Option 3: Use React Router for clean multi-app setup
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNestly from './AppNestly';
import AppMedtrace from './App';

export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/nestly/*" element={<AppNestly />} />
        <Route path="/medtrace/*" element={<AppMedtrace />} />
        <Route path="/" element={<Navigate to="/nestly" />} />
      </Routes>
    </Router>
  );
}
*/
