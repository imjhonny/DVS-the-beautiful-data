import { v4 as uuidv4 } from 'uuid';
import { arc as d3Arc } from 'd3';

/**
 * 
 * @param slot the position in X
 * @param posY position in Y
 * @param height size of the rect
 * @returns JSX svg rect object with the properties given
 */
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

/**
 * 
 * @param slot position in X
 * @param posY position in Y
 * @param height size of the shape
 * @returns a SVG circle witht the given characteristics
 */
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

/**
 * 
 * @param slot position X
 * @param posY position Y
 * @returns returns a path with an ARC chape with the given characteristics
 */
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

/**
 * 
 * @param slot position X
 * @param posY position Y
 * @param height size of the shape
 * @returns  a svg rectangle with the given characteristics
 */
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