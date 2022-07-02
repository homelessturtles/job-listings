import data from './data.json'
import { useEffect, useState } from 'react';
import Jobs from './components/Jobs.jsx'

function App() {
  const jobsData = data;

  return (
    <div>
      <Jobs data={jobsData}/>
    </div>
  );
}

export default App;
