import React from 'react';
import { LegendItem } from './Legen.Item';
import { legendList } from './legend.data';
import { v4 as uuidv4 } from 'uuid';

export const Legend = () => {

    return (
        <div className="legend">
            <h1>Swedish soccer teams</h1>
            <ul>
                {legendList.map((e: any) => <LegendItem key={uuidv4()} size={e.size} figure={e.figure} tittle={e.tittle} />)}
            </ul>
        </div>
    )
}