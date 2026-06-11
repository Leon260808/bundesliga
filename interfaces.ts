export interface FussballMannschaft{
    name: string;
}

export interface Match {
    team1: FusballManschaft;
    team2: FusballManschaft;
    scoreTeam1: number;
    scoreTeam2: number;
}

export interface Tournament {
    matches: Match[];
}