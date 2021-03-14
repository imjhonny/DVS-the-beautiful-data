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
      .then(
        teamData => {
          setData(teamData)
        }
      )
  }, [])

  useEffect(() => {
    csv('./data/AllsvenskanScore.csv')
      .then(Rmap(parseScoreData))
      .then(
        scoreData => {
          setScore(scoreData)
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <div className="dataViz">
            {data !== undefined && score !== undefined ? <GeneralViz data={data} scoreData={score} /> : <></>}
          </div>
          <div className="spacer-h" />
          <Legend />
        </div>
      </header>
    </div>
  );
}

export default App;
