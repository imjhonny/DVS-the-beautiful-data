import React, { useCallback, useState } from 'react';
import { score, team } from '../interfaces/types';
import { getGraphInfo, filterByClub, size } from './generalVizData';
import { TeamStat } from './teamStat';
import { v4 as uuidv4 } from 'uuid';
import { statSize } from './teamStatData';
import { Tooltip } from './Tooltip';


interface generalI {
    data: team[],
    scoreData: score[]
}

export const GeneralViz = ({ data, scoreData }: React.PropsWithChildren<generalI>) => {
    const [position, setPosition] = useState({ x: 100, y: 200 });
    const [opacity, setOpacity] = useState(1);
    const [info, setInfo] = useState(<p>Hola hola</p>)

    const mouseEnter = useCallback(
        (d: any) => {

            setInfo(<div>
                <div className="toolTip-tittle">{d.team.club}</div>
                <div className="toolTip-sub margin-s">Games played: {d.team.played_games}</div>
                <div className="toolTip-sub">Victories: {d.team.victories}</div>
                <div className="toolTip-sub">Draw: {d.team.draw}</div>
                <div className="toolTip-sub margin-s">Loss: {d.team.loss}</div>
                <div className="toolTip-sub">Gold: {d.score ? d.score.gold : 0}</div>
                <div className="toolTip-sub">Big silver: {d.score ? d.score.big_silver : 0}</div>
                <div className="toolTip-sub">Small silver: {d.score ? d.score.small_silver : 0}</div>
                <div className="toolTip-sub">Bronze: {d.score ? d.score.bronze : 0}</div>
            </div>)
            setPosition({ x: (d.position.x), y: d.position.y })
            setOpacity(1);

        },
        []
    )
    //hide the tooltip on mouse leave
    const mouseLeave = useCallback(
        (d: any) => { setOpacity(0); }, []
    );

    return (
        <div className="dataViz">
            <Tooltip value={info} position={position} opacity={opacity} display={"BOTTOM"} />
            <svg width={size} height={data.length * statSize.height}>
                {data.map((t: team, i: number) =>
                    <TeamStat
                        key={uuidv4()}
                        gamesScale={getGraphInfo(data)}
                        team={t}
                        score={scoreData.find(filterByClub(t.club))}
                        position={i}
                        mouseEnter={mouseEnter}
                        mouseLeave={mouseLeave}
                    />
                )}
            </svg>
        </div>
    )
}