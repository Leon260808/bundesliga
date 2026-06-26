import { TableEntrySorted, Game } from "./interfaces.ts";

export function createTable(TableEntry: TableEntrySorted[]) {
    console.log("Leaderboard:\\n")
    console.log("-------------------------------------------------------------------------------------------------------")
    console.log("| Team                 | Points | Goals For | Goals Against | Goal Difference | Wins | Draws | Losses |")
    console.log("-------------------------------------------------------------------------------------------------------")
    for (const entry of TableEntry) {
        console.log(`| ${entry.name.padEnd(20)} | ${entry.points.toString().padStart(6)} | ${entry.goalsFor.toString().padStart(9)} | ${entry.goalsAgainst.toString().padStart(13)} | ${entry.goalDifference.toString().padStart(15)} | ${entry.wins.toString().padStart(4)} | ${entry.draws.toString().padStart(5)} | ${entry.losses.toString().padStart(6)} |`)
    }
    console.log("-------------------------------------------------------------------------------------------------------")
}


export function calculateStandings(games: Game[]): TableEntrySorted[] {
    const standings = new Map<string, TableEntrySorted>();

    for (const game of games) {
        const homeTeam = getOrCreateStanding(standings, game.team1);
        const guestTeam = getOrCreateStanding(standings, game.team2);

        homeTeam.goalsFor += game.goals_team1;
        homeTeam.goalsAgainst += game.goals_team2;
        guestTeam.goalsFor += game.goals_team2;
        guestTeam.goalsAgainst += game.goals_team1;

        if (game.goals_team1 > game.goals_team2) {
            homeTeam.wins += 1;
            homeTeam.points += 3;
            guestTeam.losses += 1;
        } else if (game.goals_team1 < game.goals_team2) {
            guestTeam.wins += 1;
            guestTeam.points += 3;
            homeTeam.losses += 1;
        } else {
            homeTeam.draws += 1;
            guestTeam.draws += 1;
            homeTeam.points += 1;
            guestTeam.points += 1;
        }
    }

    for (const team of standings.values()) {
        team.goalDifference = team.goalsFor - team.goalsAgainst;
    }

    return sortTableEntries(Array.from(standings.values()));
}

function createTableEntries(games: Game[]): void {
    createTable(calculateStandings(games));
}

function sortTableEntries(entries: TableEntrySorted[]): TableEntrySorted[] {
    return entries.sort((left, right) => {
        if (right.points !== left.points) {
            return right.points - left.points;
        }

        if (right.goalDifference !== left.goalDifference) {
            return right.goalDifference - left.goalDifference;
        }

        if (right.goalsFor !== left.goalsFor) {
            return right.goalsFor - left.goalsFor;
        }

        return left.name.localeCompare(right.name);
    });
}

function getOrCreateStanding(
    standings: Map<string, TableEntrySorted>,
    teamName: string,
): TableEntrySorted {
    const existingStanding = standings.get(teamName);

    if (existingStanding) {
        return existingStanding;
    }

    const newStanding: TableEntrySorted = {
        name: teamName,
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        wins: 0,
        draws: 0,
        losses: 0,
    };

    standings.set(teamName, newStanding);
    return newStanding;
}



    