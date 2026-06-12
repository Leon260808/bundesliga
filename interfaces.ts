export interface FussballTeam {
    name: string;
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