import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { simulateTournament } from "./Simulation.ts";
import { createTournamentPlan } from "./TournamentPlan.ts";
import { FussballTeam } from "./interfaces.ts";

Deno.test("AK1: Stärkere Teams gewinnen im Schnitt mehr", () => {
  const teams: FussballTeam[] = [
    { name: "Strong Team", strength: 10 },
    { name: "Weak Team", strength: 1 },
  ];

  let strongWins = 0;
  const runs = 100;

  for (let i = 0; i < runs; i++) {
    const tournament = createTournamentPlan(teams);
    simulateTournament(tournament);

    const match = tournament.matches[0];
    if (match.scoreHomeTeam > match.scoreGuestTeam) {
      strongWins++;
    }
  }

  const winRate = strongWins / runs;
  console.log(`Strong team win rate: ${(winRate * 100).toFixed(1)}%`);
  assertEquals(winRate > 0.5, true);
});

Deno.test("AK2: Es gibt nie mehr als 5 Tore pro Team", () => {
  const teams: FussballTeam[] = [
    { name: "Team A", strength: 5 },
    { name: "Team B", strength: 5 },
  ];

  const tournament = createTournamentPlan(teams);
  simulateTournament(tournament);

  for (const match of tournament.matches) {
    assertEquals(match.scoreHomeTeam! <= 5, true);
    assertEquals(match.scoreGuestTeam! <= 5, true);
  }
});
