import { score, team } from '../interfaces/types'

/**
 * Take a DSVRowArray line and parse it into a team type
 * @param d DSVRowArray containing all the info of a team
 * @returns a team type
 */
export const parseData = (d: any): team => {
    return {
        rank: Number(d.Rank),
        seassons_played: Number(d["Seassons played"]),
        club: d.Club,
        played_games: Number(d["Played games"]),
        victories: Number(d.Victories),
        draw: Number(d.Draw),
        loss: Number(d.Loss),
        goals_scored: Number(d["Goals scored"]),
        goals_conceded: Number(d["Goals conceded"]),
        goal_difference: Number(d["Goal difference"]),
        points: Number(d.Points)
    }
}

/**
 * 
 * @param d node with data
 * @returns returnsa type score with all the correct data
 */
export const parseScoreData = (d: any): score => {
    return {
        rank: Number(d.Rank),
        club: d.Club,
        gold: Number(d.Gold),
        big_silver: Number(d["Big silver"]),
        small_silver: Number(d["Small silver"]),
        bronze: Number(d.Bronze),
        points: Number(d.Points),
    }

}



