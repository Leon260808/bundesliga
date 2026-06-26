import { Match, Tournament } from "./interfaces.ts";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simulateMatch(match: Match): void {
  const strengthDiff = match.homeTeam.strength - match.guestTeam.strength;
  const strengthBonus = strengthDiff * 0.1;

  let homeGoals = getRandomInt(0, 5);
  let guestGoals = getRandomInt(0, 5);

  homeGoals = Math.max(0, Math.min(5, homeGoals + Math.round(strengthBonus)));
  guestGoals = Math.max(0, Math.min(5, guestGoals - Math.round(strengthBonus)));

  match.scoreHomeTeam = homeGoals;
  match.scoreGuestTeam = guestGoals;
}

export function simulateTournament(tournament: Tournament): void {
  for (const match of tournament.matches) {
    simulateMatch(match);
  }
}
