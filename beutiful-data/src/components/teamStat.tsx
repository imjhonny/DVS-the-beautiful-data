import React from 'react';
import { ScaleLinear } from 'd3';
import { score, team } from '../interfaces/types';
import { statSize, lineHeight } from './teamStatData';
import { v4 as uuidv4 } from 'uuid';
import { Medal } from './Medal';

interface teamStatI {
    gamesScale: ScaleLinear<number, number, never>,
    team: team,
    score: score | undefined,
    position: number,
    mouseEnter: any,
    mouseLeave: any
}

export const TeamStat = ({ gamesScale, team, score, position, mouseEnter, mouseLeave }: React.PropsWithChildren<teamStatI>) => {

    const victoriesWidth: number = gamesScale(team.victories);
    const drawWidth: number = gamesScale(team.draw);
    const lossWidth: number = gamesScale(team.loss);

    return (
        <g className="teamStat"
            key={uuidv4()}
            transform={"translate(" + (0) + "," + (position * statSize.height) + ")"}
        >

            <svg width={statSize.width} height={statSize.height}>
                <g transform={"translate(" + (statSize.width / 2) + "," + 0 + ")"}>
                    <rect
                        transform={"translate(" + (- statSize.width / 2) + "," + (statSize.height / 2 - lineHeight / 2) + ")"}
                        key={uuidv4()}
                        className="stat stat-background"
                        cx={0}
                        cy={0}
                        width={statSize.width}
                        height={lineHeight}
                    />
                    <rect
                        transform={"translate(" + (- victoriesWidth) + "," + (statSize.height / 2 - lineHeight / 2) + ")"}
                        key={uuidv4()}
                        className="stat stat-wins"
                        cx={0}
                        cy={0}
                        rx={1}
                        width={victoriesWidth}
                        height={lineHeight}
                    />
                    <rect
                        key={uuidv4()}
                        transform={"translate(" + (drawWidth) + "," + (statSize.height / 2 - lineHeight / 2) + ")"}
                        className="stat stat-loss"
                        cx={0}
                        cy={0}
                        rx={1}
                        width={lossWidth}
                        height={lineHeight}
                    />
                    <rect
                        key={uuidv4()}
                        transform={"translate(" + 0 + "," + (statSize.height / 2 - lineHeight / 2) + ")"}
                        className="stat stat-draw"
                        cx={0}
                        cy={0}
                        rx={1}
                        width={drawWidth}
                        height={lineHeight}
                    />
                    {score ? <Medal numberMedals={score.gold} type={"gold"} width={victoriesWidth} posX={-victoriesWidth} posY={statSize.height / 2} /> : <></>}
                    {score ? <Medal numberMedals={score.big_silver} type={"big_silver"} width={drawWidth} posX={0} posY={statSize.height / 2} /> : <></>}
                    {score ? <Medal numberMedals={score.small_silver} type={"small_silver"} width={drawWidth} posX={0} posY={statSize.height / 2} /> : <></>}
                    {score ? <Medal numberMedals={score.bronze} type={"bronze"} width={lossWidth} posX={drawWidth} posY={statSize.height / 2} /> : <></>}
                    <rect
                        key={uuidv4()}
                        transform={"translate(" + (-statSize.width / 2) + "," + (0) + ")"}
                        className="stat eventBackground"
                        width={statSize.width}
                        height={statSize.height}
                        onMouseEnter={() => mouseEnter({
                            team: team,
                            position: { x: statSize.width / 2, y: (position * statSize.height + statSize.height * 2) },
                            score: score
                        })}
                        onMouseLeave={() => mouseLeave({})}
                    />
                </g>
            </svg>
        </g>
    )

}