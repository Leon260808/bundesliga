import { Match, Tournament } from "./interfaces.ts";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simulateMatch(match: Match): void {
  const strengthDiff = match.homeTeam.strength - match.guestTeam.strength;
  const strengthBonus = Math.floor(strengthDiff * 0.3);

  let homeGoals = getRandomInt(0, 5);
  let guestGoals = getRandomInt(0, 5);

  homeGoals = Math.max(0, Math.min(5, homeGoals + strengthBonus));
  guestGoals = Math.max(0, Math.min(5, guestGoals - strengthBonus));

  match.scoreHomeTeam = homeGoals;
  match.scoreGuestTeam = guestGoals;
}

export function simulateTournament(tournament: Tournament): Tournament {
  for (const match of tournament.matches) {
    simulateMatch(match);
  }
  return tournament;
}
