import { fetchTeams } from "./Teams.ts";
import { createTournamentPlan } from "./TournamentPlan.ts";
import { simulateTournament } from "./Simulation.ts";
import { calculateStandings, createTable } from "./Table.ts";
import { Game, Tournament } from "./interfaces.ts";

function tournamentToGames(tournament: Tournament): Game[] {
  return tournament.matches.map((match) => ({
    team1: match.homeTeam.name,
    team2: match.guestTeam.name,
    goals_team1: match.scoreHomeTeam ?? 0,
    goals_team2: match.scoreGuestTeam ?? 0,
  }));
}

export async function runSeason(teamsPath: string): Promise<void> {
  const teams = await fetchTeams(teamsPath);
  const tournament = createTournamentPlan(teams);
  simulateTournament(tournament);

  const games = tournamentToGames(tournament);
  const standings = calculateStandings(games);
  createTable(standings);
}

if (import.meta.main) {
  await runSeason("./testfiles/even_teams.txt");
}
