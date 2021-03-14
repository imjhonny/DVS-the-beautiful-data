import React from 'react';
import { score, team } from '../interfaces/types';
import { getGraphInfo, filterByClub } from './generalVizData';
import { TeamStat } from './teamStat';
import { v4 as uuidv4 } from 'uuid';


interface generalI {
    data: team[],
    scoreData: score[]
}

export const GeneralViz = ({ data, scoreData }: React.PropsWithChildren<generalI>) => {

    return (
        <div className="team-list" >
            {data.map((t: team) =>
                <TeamStat
                    key={uuidv4()}
                    gamesScale={getGraphInfo(data)}
                    team={t}
                    score={scoreData.find(filterByClub(t.club))}
                />
            )}
        </div>
    )
}