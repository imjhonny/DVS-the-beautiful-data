import { legendItem } from "../interfaces/types";
import { arc as d3Arc } from 'd3';
import { v4 as uuidv4 } from 'uuid';

const legendSize: number = 25;
const arc = d3Arc();
const arcInfo = arc({
    innerRadius: 0,
    outerRadius: legendSize / 2,
    startAngle: 0,
    endAngle: Math.PI / 2
});

export const legendList: legendItem[] = [
    {
        size: legendSize,
        tittle: "Team",
        figure: (<rect
            key={uuidv4()}
            transform={"translate(" + (0) + "," + (legendSize / 2) + ")"}
            className="stat stat-background"
            cx={0}
            cy={0}
            width={legendSize}
            height={4}
        />)
    },
    {
        size: legendSize,
        tittle: "Victories",
        figure: (<rect
            key={uuidv4()}
            transform={"translate(" + (0) + "," + (legendSize / 2) + ")"}
            className="stat stat-wins"
            cx={0}
            cy={0}
            width={legendSize}
            height={4}
        />)
    },
    {
        size: legendSize,
        tittle: "Draw",
        figure: (<rect
            key={uuidv4()}
            transform={"translate(" + (0) + "," + (legendSize / 2) + ")"}
            className="stat stat-draw"
            cx={0}
            cy={0}
            width={legendSize}
            height={4}
        />)
    },
    {
        size: legendSize,
        tittle: "Loss",
        figure: (<rect
            key={uuidv4()}
            transform={"translate(" + (0) + "," + (legendSize / 2) + ")"}
            className="stat stat-loss"
            cx={0}
            cy={0}
            width={legendSize}
            height={4}
        />)
    },
    {
        size: legendSize,
        tittle: "Golden medals",
        figure: (
            <rect transform={"translate(" + (0) + "," + (0) + ") rotate(" + (-45) + ")"}
                key={uuidv4()}
                className="medal medal-gold"
                cx={0}
                cy={0}
                rx={15}
                width={2}
                height={legendSize}></rect>
        )
    },
    {
        size: legendSize,
        tittle: "Big silver medals",
        figure: (
            <path
                key={uuidv4()}
                className="medal medal-big-silver"
                transform={"translate(" + (legendSize / 4) + "," + (legendSize / 2 + legendSize / 4) + ")"}
                d={arcInfo ? arcInfo : ""}
            />)
    },
    {
        size: legendSize,
        tittle: "Small silver medals",
        figure: (<circle
            className="medal medal-little-silver"
            cx={legendSize / 2}
            cy={legendSize / 2}
            r={legendSize / 4}
        />)
    },
    {
        size: legendSize,
        tittle: "Bronze medals",
        figure: (<rect transform={"translate(" + (legendSize / 2) + "," + (0) + ")"}
            key={uuidv4()}
            className="medal medal-bronze"
            cx={0}
            cy={0}
            rx={15}
            width={2}
            height={legendSize}></rect>)
    },
]