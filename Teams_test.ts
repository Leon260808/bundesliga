import {assertEquals, assertRejects} from "@std/assert";
import {fetchTeams} from "./Teams.ts"
import {FussballTeam} from "./interfaces.ts";

Deno.test("Fetch even_teams.txt", async () => {
  // Arrange
  const txtPath = "./testfiles/even_teams.txt"
  const expectedTeams: FussballTeam[] = [
    { name: "FC Bayern München", strength: 10 },
    { name: "Borussia Dortmund", strength: 9 },
    { name: "RB Leipzig", strength: 8 },
    { name: "Bayer 04 Leverkusen", strength: 7 },
    { name: "Eintracht Frankfurt", strength: 6 },
    { name: "VfB Stuttgart", strength: 5 },
    { name: "Hamburger SV", strength: 4 },
    { name: "FC Schalke 04", strength: 3 },
    { name: "Werder Bremen", strength: 2 },
    { name: "1. FC Köln", strength: 1 }
  ]

  // Act
  const teams: FussballTeam[] = await fetchTeams(txtPath);

  // Assert
  assertEquals(teams, expectedTeams)
})

Deno.test("Fetch odd_teams.txt throws error", () => {
  // Arrange
  const txtPath = "./testfiles/odd_teams.txt"

  // Act/Assert
  assertRejects(
    async () => { await fetchTeams(txtPath) },
    Error,
    "Odd number of teams."
  )
})