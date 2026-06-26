export interface FussballTeam {
    name: string;
    strength: number;
}

export interface Match {
    homeTeam: FussballTeam;
    guestTeam: FussballTeam;
    scoreHomeTeam: number | null;
    scoreGuestTeam: number | null;
}

export interface Tournament {
    matches: Match[];
}

export interface TableEntrySorted {
    name: string;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    wins: number;
    draws: number;
    losses: number;
}

export interface Game {
    team1: string;
    team2: string;
    goals_team1: number;
    goals_team2: number;
}