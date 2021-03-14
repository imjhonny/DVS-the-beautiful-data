import { v4 as uuidv4 } from 'uuid';
import { arc as d3Arc } from 'd3';

export const getBronze = (slot: number, posY: number, height: number) => {
    return (m: any, i: number) => (
        <rect transform={"translate(" + (i * slot) + "," + (height / 2) + ")"}
            key={uuidv4()}
            className="medal medal-bronze"
            cx={0}
            cy={0}
            rx={15}
            width={2}
            height={height}></rect>
    )
}

export const getLittleSilver = (slot: number, posY: number, height: number) => {
    const circY: number = height / 5;
    return (m: any, i: number) => (
        <circle
            key={uuidv4()}
            className="medal medal-little-silver"
            cx={(i * slot)}
            cy={(posY + (i % 2 === 0 ? circY * 2 - height : height - circY * 2))}
            r={circY}
        />
    )
}

export const getBigSilver = (slot: number, posY: number) => {
    const arc = d3Arc();
    const arcInfo = arc({
        innerRadius: 0,
        outerRadius: slot > posY ? posY : slot,
        startAngle: 0,
        endAngle: Math.PI / 2
    });
    return (m: any, i: number) => (
        <path
            key={uuidv4()}
            className="medal medal-big-silver"
            transform={"translate(" + (i * slot) + "," + (posY) + ") rotate(" + (i % 2 === 0 ? 0 : 90) + ")"}
            d={arcInfo ? arcInfo : ""}
        />
    )
}

export const getGolden = (slot: number, posY: number, height: number) => {
    return (m: any, i: number) => (
        <rect transform={"translate(" + (i * slot) + "," + (posY + (i % 2 === 0 ? 0 : 2 - height)) + ") rotate(" + (i % 2 === 0 ? -45 : 45) + ")"}
            key={uuidv4()}
            className="medal medal-gold"
            cx={0}
            cy={0}
            rx={15}
            width={2}
            height={height}></rect>
    )
}