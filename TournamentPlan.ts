import {FussballTeam, Match, Tournament} from "./interfaces.ts";

export function createTournamentPlan(teams: FussballTeam[]): Tournament {
    const matches: Match[] = [];

    for (const homeTeam of teams) {
        for (const guestTeam of teams) {
            if (guestTeam === homeTeam) {
                continue;
            }
            matches.push({
                homeTeam: homeTeam,
                guestTeam: guestTeam,
                scoreHomeTeam: null,
                scoreGuestTeam: null,
            });
        }
    }

    return { matches };
}
