import React, { useEffect, useState } from 'react';
import { csv } from 'd3';
import { map as Rmap } from 'ramda';
import { parseData, parseScoreData } from './utils/data';
import { score, team } from './interfaces/types'
import { GeneralViz } from './components/GeneralViz';
import { Legend } from './components/Legend';
import './App.css';



function App() {
  const [data, setData] = useState<team[]>()
  const [score, setScore] = useState<score[]>();

  //LOAD the data
  useEffect(() => {
    csv('./data/AllsvenskanAllStats.csv')
      .then(Rmap(parseData))
      .then(teamData => setData(teamData))
  }, [])

  useEffect(() => {
    csv('./data/AllsvenskanScore.csv')
      .then(Rmap(parseScoreData))
      .then(scoreData => setScore(scoreData))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          {data !== undefined && score !== undefined ? <GeneralViz data={data} scoreData={score} /> : <></>}
          <div className="spacer-h" />
          <Legend />
        </div>
        <p className="credits">2021 by Jonathan Ramirez for the <a target="_blank" rel="noreferrer" href="https://github.com/Dataviz-Stockholm/challenges">D.V.S Challenge N.2</a></p>
      </header>
    </div>
  );
}

export default App;
