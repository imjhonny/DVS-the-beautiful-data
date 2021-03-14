

export interface team {
    rank: number,
    seassons_played: number,
    club: string,
    played_games: number,
    victories: number,
    draw: number,
    loss: number,
    goals_scored: number,
    goals_conceded: number,
    goal_difference: number,
    points: number
}


export interface score {
    rank: number,
    club: string,
    gold: number,
    big_silver: number,
    small_silver: number,
    bronze: number,
    points: number
}

export interface legendItem {
    size: number,
    tittle: string,
    figure: JSX.Element
}