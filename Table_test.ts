import { assertEquals } from "@std/assert";
import { calculateStandings } from "./Table.ts";
import { Game, TableEntrySorted } from "./interfaces.ts";

Deno.test("Home win awards 3 points to winner and a loss to the guest", () => {
  // Arrange
  const games: Game[] = [
    { team1: "A", team2: "B", goals_team1: 2, goals_team2: 0 },
  ];

  // Act
  const standings = calculateStandings(games);

  // Assert
  assertEquals(standings, [
    { name: "A", points: 3, goalsFor: 2, goalsAgainst: 0, goalDifference: 2, wins: 1, draws: 0, losses: 0 },
    { name: "B", points: 0, goalsFor: 0, goalsAgainst: 2, goalDifference: -2, wins: 0, draws: 0, losses: 1 },
  ]);
});

Deno.test("Guest win awards 3 points to the guest and a loss to the home team", () => {
  // Arrange
  const games: Game[] = [
    { team1: "A", team2: "B", goals_team1: 0, goals_team2: 1 },
  ];

  // Act
  const standings = calculateStandings(games);

  // Assert
  assertEquals(standings, [
    { name: "B", points: 3, goalsFor: 1, goalsAgainst: 0, goalDifference: 1, wins: 1, draws: 0, losses: 0 },
    { name: "A", points: 0, goalsFor: 0, goalsAgainst: 1, goalDifference: -1, wins: 0, draws: 0, losses: 1 },
  ]);
});

Deno.test("Draw awards 1 point to both teams", () => {
  // Arrange
  const games: Game[] = [
    { team1: "A", team2: "B", goals_team1: 1, goals_team2: 1 },
  ];

  // Act
  const standings = calculateStandings(games);

  // Assert
  assertEquals(standings, [
    { name: "A", points: 1, goalsFor: 1, goalsAgainst: 1, goalDifference: 0, wins: 0, draws: 1, losses: 0 },
    { name: "B", points: 1, goalsFor: 1, goalsAgainst: 1, goalDifference: 0, wins: 0, draws: 1, losses: 0 },
  ]);
});

Deno.test("Stats are aggregated across multiple games", () => {
  // Arrange
  const games: Game[] = [
    { team1: "FC Bayern München", team2: "Borussia Dortmund", goals_team1: 4, goals_team2: 2 },
    { team1: "Borussia Dortmund", team2: "FC Bayern München", goals_team1: 1, goals_team2: 1 },
    { team1: "FC Bayern München", team2: "RB Leipzig", goals_team1: 3, goals_team2: 0 },
    { team1: "RB Leipzig", team2: "Borussia Dortmund", goals_team1: 2, goals_team2: 2 },
  ];

  // Act
  const standings = calculateStandings(games);

  // Assert
  const expected: TableEntrySorted[] = [
    { name: "FC Bayern München", points: 7, goalsFor: 8, goalsAgainst: 3, goalDifference: 5, wins: 2, draws: 1, losses: 0 },
    { name: "Borussia Dortmund", points: 2, goalsFor: 5, goalsAgainst: 7, goalDifference: -2, wins: 0, draws: 2, losses: 1 },
    { name: "RB Leipzig", points: 1, goalsFor: 2, goalsAgainst: 5, goalDifference: -3, wins: 0, draws: 1, losses: 1 },
  ];
  assertEquals(standings, expected);
});

Deno.test("Teams with equal points are ranked by goal difference", () => {
  // Arrange:
  const games: Game[] = [
    { team1: "A", team2: "C", goals_team1: 5, goals_team2: 0 },
    { team1: "B", team2: "D", goals_team1: 1, goals_team2: 0 },
  ];

  // Act
  const standings = calculateStandings(games);

  // Assert
  const order = standings.map((entry) => entry.name);
  assertEquals(order, ["A", "B", "D", "C"]);
});

