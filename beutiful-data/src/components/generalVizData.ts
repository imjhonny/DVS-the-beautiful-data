import { score, team } from "../interfaces/types";
import { max, scaleLinear } from 'd3'

export const size = 375;
/** 
Returns an accessor for an specific field in team
@param field a string with the specific field name from team
*/
const accessTeamData = (field: "draw" | "goal_difference" | "goals_conceded" | "goals_scored" | "loss" | "played_games" | "points" | "rank" | "seassons_played" | "victories") => {
    return (t: team) => t[field];
}

/**
 * 
 * @param t : a type team 
 * @returns returns the name of the club of a team
 */
export const clubNameAccessor = (t: team) => t.club;

/**
 * 
 * @param data array of Teams
 * @returns returns a D3 scale linear with the domain of the highest games played and the size of the visualization
 */
export const getGraphInfo = (data: team[]) => {
    const max_gamesPlayed: number | undefined = max(data, accessTeamData("played_games"));
    return scaleLinear()
        .domain([0, max_gamesPlayed !== undefined ? max_gamesPlayed : 0])
        .range([0, size])
}

/**
 * 
 * @param club a string with the name of a club
 * @returns a filter function where the score's club should be equal to the parameters string
 */
export const filterByClub = (club: string) => {
    return (score: score) => score.club === club;
}

