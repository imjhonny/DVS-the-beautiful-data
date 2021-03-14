import React from 'react';


interface legendItemI {
    size: number,
    figure: JSX.Element,
    tittle: string

}

export const LegendItem = ({ size, figure, tittle }: React.PropsWithChildren<legendItemI>) => {

    return (
        <li >
            <div className="flex center" >
                <svg width={size} height={size}>
                    {figure}
                </svg>
                <div className="pacer-h-m" />
                <span> {tittle}</span>
            </div>
        </li>
    )
}