import React from 'react';
import { getBigSilver, getBronze, getGolden, getLittleSilver } from './medal.data';


interface medalI {
    numberMedals: number,
    type: "gold" | "big_silver" | "small_silver" | "bronze",
    width: number,
    posX: number,
    posY: number
}

const medalHeight: number = 10;

export const Medal = ({ numberMedals, type, width, posX, posY }: React.PropsWithChildren<medalI>) => {
    //create an arc generator with the data
    //return paths for each medal along the width
    const slot: number = width / numberMedals;
    const medals = [...Array(numberMedals)];

    return (
        <g transform={"translate(" + (posX) + "," + 0 + ")"}>
            {type === "gold" ?
                medals.map(getGolden(slot, posY, medalHeight)) :
                type === "big_silver" ? medals.map(getBigSilver(slot, posY)) :
                    type === "small_silver" ? medals.map(getLittleSilver(slot, posY, medalHeight)) :
                        type === "bronze" ? medals.map(getBronze(slot, posY, medalHeight)) : <></>}
        </g>
    )
}

