import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function App() {
  return (
    <div className="app">
      {/* header */}
        <Header />
      {/* App body */}
      <div className="app_body">
        {/* sidebar */}
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
