import {TableEntry} from "./interfaces.ts"

export function createTable(TableEntry: TableEntry[]): TableEntry[] {
    console.log("Leaderboard:\\n")
    console.log("-------------------------------------------------------------------------------------------------------")
    console.log("| Team                 | Points | Goals For | Goals Against | Goal Difference | Wins | Draws | Losses |")
    console.log("-------------------------------------------------------------------------------------------------------")
    for (const entry of TableEntry) {
        console.log(`| ${entry.name.padEnd(20)} | ${entry.points.toString().padStart(6)} | ${entry.goalsFor.toString().padStart(9)} | ${entry.goalsAgainst.toString().padStart(13)} | ${entry.goalDifference.toString().padStart(15)} | ${entry.wins.toString().padStart(4)} | ${entry.draws.toString().padStart(5)} | ${entry.losses.toString().padStart(6)} |`)
    }
    console.log("-------------------------------------------------------------------------------------------------------")
}


createTable([
    {
        name: "FC Bayern München",
        points: 78,
        goalsFor: 99,
        goalsAgainst: 25,
        goalDifference: 74,
        wins: 25,
        draws: 3,
        losses: 6
    },
    {
        name: "Borussia Dortmund",
        points: 69,
        goalsFor: 85,
        goalsAgainst: 30,
        goalDifference: 55,
        wins: 22,
        draws: 3,
        losses: 9
    },
])
    